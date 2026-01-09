// Supabase disabled for now

export const supabase = null;

// Keep types so the app does not break
export interface HeroImage {
  id: string;
  filename: string;
  storage_path: string;
  public_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
