// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lyrmkxdcbrlhltujrmnw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5cm1reGRjYnJsaGx0dWpybW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMjYzNDEsImV4cCI6MjA1NTgwMjM0MX0.aN0ULym7NNR7tBOrcH9j9ddOIox71xUrPcajSEiqY60";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);