import { createClient } from '@supabase/supabase-js'

let supabase: ReturnType<typeof createClient> | null = null
let supabaseAdmin: ReturnType<typeof createClient> | null = null

function getSupabase() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
    }

    supabase = createClient(supabaseUrl, supabaseKey)
  }
  return supabase
}

function getSupabaseAdmin() {
  if (!supabaseAdmin && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (supabaseUrl) {
      supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY)
    }
  }
  return supabaseAdmin
}

export { getSupabase as supabase, getSupabaseAdmin as supabaseAdmin }
