import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = "https://pjafayeqllrdutaebqva.supabase.co";
const VITE_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYWZheWVxbGxyZHV0YWVicXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzODE2ODUsImV4cCI6MjAxNTk1NzY4NX0.DYV-kuEbrip5uL7Q5NGrLQsdUjeo_IG_ob3IF9TDGM4";

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);