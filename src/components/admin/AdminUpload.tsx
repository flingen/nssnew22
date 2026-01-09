import { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import {
  Upload,
  Trash2,
  LogOut,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Loader2
} from 'lucide-react';
import {
  getAllHeroImages,
  uploadHeroImage,
  deleteHeroImage,
  updateHeroImage,
  ensureStorageBucketExists
} from '../../lib/heroImages';
import { compressImage, validateImageFile } from '../../lib/imageCompression';
import { HeroImage } from '../../lib/supabase';

export function AdminUpload() {
  const { signOut } = useAdmin();
  const [images, setImages] = useState<HeroImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadImages();
    ensureStorageBucketExists();
  }, []);

  const loadImages = async () => {
    setLoading(true);
    const data = await getAllHeroImages();
    setImages(data);
    setLoading(false);
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await handleFiles(files);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      await handleFiles(files);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFiles = async (files: File[]) => {
    for (const file of files) {
      const validation = validateImageFile(file);
      if (!validation.valid) {
        showMessage('error', validation.error || 'Invalid file');
        continue;
      }

      setUploading(true);
      try {
        const compressedFile = await compressImage(file);
        const maxOrder = Math.max(...images.map(img => img.display_order), -1);
        const result = await uploadHeroImage(compressedFile, maxOrder + 1);

        if (result.success && result.data) {
          setImages(prev => [...prev, result.data!]);
          showMessage('success', 'Image uploaded successfully');
        } else {
          showMessage('error', result.error || 'Upload failed');
        }
      } catch (error) {
        showMessage('error', 'Failed to compress or upload image');
      } finally {
        setUploading(false);
      }
    }
  };

  const handleDelete = async (id: string, storagePath: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    const result = await deleteHeroImage(id, storagePath);
    if (result.success) {
      setImages(prev => prev.filter(img => img.id !== id));
      showMessage('success', 'Image deleted successfully');
    } else {
      showMessage('error', result.error || 'Delete failed');
    }
  };

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    const result = await updateHeroImage(id, { is_active: !currentActive });
    if (result.success) {
      setImages(prev =>
        prev.map(img => (img.id === id ? { ...img, is_active: !currentActive } : img))
      );
      showMessage('success', `Image ${!currentActive ? 'activated' : 'deactivated'}`);
    } else {
      showMessage('error', result.error || 'Update failed');
    }
  };

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;

    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[index - 1];
    newImages[index - 1] = temp;

    await updateHeroImage(newImages[index].id, { display_order: index });
    await updateHeroImage(newImages[index - 1].id, { display_order: index - 1 });

    setImages(newImages);
    showMessage('success', 'Order updated');
  };

  const handleMoveDown = async (index: number) => {
    if (index === images.length - 1) return;

    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[index + 1];
    newImages[index + 1] = temp;

    await updateHeroImage(newImages[index].id, { display_order: index });
    await updateHeroImage(newImages[index + 1].id, { display_order: index + 1 });

    setImages(newImages);
    showMessage('success', 'Order updated');
  };

  return (
    <div className="min-h-screen bg-deep-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Hero Image Manager</h1>
            <p className="text-white/60">Upload and manage homepage background images</p>
          </div>
          <button onClick={signOut} className="btn-secondary flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-500/20 border border-green-500/50 text-green-200'
                : 'bg-red-500/20 border border-red-500/50 text-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <div
          className={`glass-card p-8 rounded-2xl mb-8 border-2 border-dashed transition-colors ${
            dragActive ? 'border-nigeria-green bg-nigeria-green/10' : 'border-white/20'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <Upload className="w-12 h-12 text-nigeria-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Drop images here or click to upload
            </h3>
            <p className="text-white/60 mb-4">
              Maximum file size: 5MB. Supported formats: JPEG, PNG, WebP
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              multiple
              onChange={handleFileInput}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="btn-primary px-6 py-3 inline-flex items-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Select Images
                </>
              )}
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 text-nigeria-green animate-spin mx-auto mb-4" />
            <p className="text-white/60">Loading images...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12 glass-card rounded-2xl">
            <p className="text-white/60">No images uploaded yet</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {images.map((image, index) => (
              <div key={image.id} className="glass-card p-4 rounded-xl flex items-center gap-4">
                <img
                  src={image.public_url}
                  alt={image.filename}
                  className="w-32 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium">{image.filename}</h4>
                  <p className="text-white/60 text-sm">Order: {image.display_order}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    className="p-2 hover:bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move up"
                  >
                    <ArrowUp className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => handleMoveDown(index)}
                    disabled={index === images.length - 1}
                    className="p-2 hover:bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move down"
                  >
                    <ArrowDown className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => handleToggleActive(image.id, image.is_active)}
                    className={`p-2 hover:bg-white/10 rounded-lg ${
                      image.is_active ? 'text-nigeria-green' : 'text-white/40'
                    }`}
                    title={image.is_active ? 'Deactivate' : 'Activate'}
                  >
                    {image.is_active ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <EyeOff className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(image.id, image.storage_path)}
                    className="p-2 hover:bg-red-500/20 rounded-lg text-red-400"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
