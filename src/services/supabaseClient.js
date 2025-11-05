import { createClient } from '@supabase/supabase-js';

// Variables de entorno (se configuran en Vercel y localmente en .env)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crear conexión
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("✅ Supabase conectado correctamente");

// Helper functions for news management
export const getNews = async () => {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error.message);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error in getNews:', error);
    return [];
  }
};

export const addNews = async (title, content, image_url = null) => {
  try {
    const { data, error } = await supabase
      .from('news')
      .insert([{ title, content, image_url }])
      .select();

    if (error) {
      console.error('Error adding news:', error.message);
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Error in addNews:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting news:', error.message);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteNews:', error);
    throw error;
  }
};
