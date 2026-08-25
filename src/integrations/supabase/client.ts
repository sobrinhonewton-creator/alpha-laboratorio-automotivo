import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

// The public site must still render if the catalog integration has not yet been
// configured in a new deployment. The fallback client never receives real data.
const safeUrl = SUPABASE_URL || "https://not-configured.supabase.co";
const safeKey = SUPABASE_PUBLISHABLE_KEY || "publishable-key-not-configured";

export const supabase = createClient<Database>(safeUrl, safeKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
