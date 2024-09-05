// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://viozqxotijyratrpawwm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpb3pxeG90aWp5cmF0cnBhd3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTc0MjMsImV4cCI6MjAzODY5MzQyM30.Wld6MCvvbsBy99zzeE9l8KV8DgJqSRoPDry_md1gu8E';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});