import { supabase, HeroImage } from './supabase';

export const STORAGE_BUCKET = 'hero-backgrounds';

export async function getActiveHeroImages(): Promise<HeroImage[]> {
  const { data, error } = await supabase
    .from('hero_images')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching active hero images:', error);
    return [];
  }

  return data || [];
}

export async function getAllHeroImages(): Promise<HeroImage[]> {
  const { data, error } = await supabase
    .from('hero_images')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching all hero images:', error);
    return [];
  }

  return data || [];
}

export async function uploadHeroImage(
  file: File,
  displayOrder: number
): Promise<{ success: boolean; error?: string; data?: HeroImage }> {
  try {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(7);
    const fileExt = file.name.split('.').pop();
    const fileName = `hero-${timestamp}-${randomString}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      return { success: false, error: uploadError.message };
    }

    const { data: urlData } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(filePath);

    const { data, error: dbError } = await supabase
      .from('hero_images')
      .insert({
        filename: file.name,
        storage_path: filePath,
        public_url: urlData.publicUrl,
        display_order: displayOrder,
        is_active: true
      })
      .select()
      .single();

    if (dbError) {
      await supabase.storage.from(STORAGE_BUCKET).remove([filePath]);
      return { success: false, error: dbError.message };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export async function deleteHeroImage(id: string, storagePath: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error: dbError } = await supabase
      .from('hero_images')
      .delete()
      .eq('id', id);

    if (dbError) {
      return { success: false, error: dbError.message };
    }

    const { error: storageError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .remove([storagePath]);

    if (storageError) {
      console.error('Error deleting from storage:', storageError);
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export async function updateHeroImage(
  id: string,
  updates: Partial<Pick<HeroImage, 'display_order' | 'is_active'>>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('hero_images')
      .update(updates)
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

export async function ensureStorageBucketExists(): Promise<void> {
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketExists = buckets?.some(bucket => bucket.name === STORAGE_BUCKET);

  if (!bucketExists) {
    await supabase.storage.createBucket(STORAGE_BUCKET, {
      public: true,
      fileSizeLimit: 5242880
    });
  }
}
