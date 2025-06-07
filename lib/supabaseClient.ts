import { createClient } from "@supabase/supabase-js"

// Check if environment variables are defined
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Log environment variables for debugging (remove in production)
console.log("Supabase URL:", supabaseUrl ? "Defined" : "Undefined")
console.log("Supabase Anon Key:", supabaseAnonKey ? "Defined" : "Undefined")

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl || "https://example.supabase.co", supabaseAnonKey || "your-anon-key", {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

// Test the Supabase connection
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("Supabase connection error:", error)
  } else {
    console.log("Supabase connection successful")
  }
})
