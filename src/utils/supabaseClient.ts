import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://guvncaiupfzhsnewuwmh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dm5jYWl1cGZ6aHNuZXd1d21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODgzODcsImV4cCI6MTk2OTA2NDM4N30.tWOiZPOiI4GnaLWt19t7lZdWPgFquE6LNsMtzu9b4t8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
