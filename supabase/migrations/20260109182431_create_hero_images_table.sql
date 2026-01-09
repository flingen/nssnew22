/*
  # Create Hero Images Table

  1. New Tables
    - `hero_images`
      - `id` (uuid, primary key) - Unique identifier for each image
      - `filename` (text) - Original filename of the uploaded image
      - `storage_path` (text) - Path to the image in Supabase Storage
      - `public_url` (text) - Public URL for accessing the image
      - `display_order` (integer) - Order in which images should appear in slider
      - `is_active` (boolean) - Whether the image is currently active in rotation
      - `created_at` (timestamptz) - Timestamp when image was uploaded
      - `updated_at` (timestamptz) - Timestamp when record was last updated

  2. Security
    - Enable RLS on `hero_images` table
    - Add policy for public read access to active images
    - Add policy for authenticated admin users to manage images
    
  3. Notes
    - Images will be stored in Supabase Storage bucket "hero-backgrounds"
    - Public can view active images only
    - Only authenticated users can insert, update, or delete images
*/

-- Create hero_images table
CREATE TABLE IF NOT EXISTS hero_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  storage_path text NOT NULL,
  public_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE hero_images ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view active hero images
CREATE POLICY "Public can view active hero images"
  ON hero_images
  FOR SELECT
  USING (is_active = true);

-- Policy: Authenticated users can view all hero images
CREATE POLICY "Authenticated users can view all hero images"
  ON hero_images
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert hero images
CREATE POLICY "Authenticated users can insert hero images"
  ON hero_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update hero images
CREATE POLICY "Authenticated users can update hero images"
  ON hero_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete hero images
CREATE POLICY "Authenticated users can delete hero images"
  ON hero_images
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on display_order for efficient sorting
CREATE INDEX IF NOT EXISTS idx_hero_images_display_order 
  ON hero_images(display_order);

-- Create index on is_active for filtering
CREATE INDEX IF NOT EXISTS idx_hero_images_is_active 
  ON hero_images(is_active);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_hero_images_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_hero_images_updated_at_trigger
  BEFORE UPDATE ON hero_images
  FOR EACH ROW
  EXECUTE FUNCTION update_hero_images_updated_at();