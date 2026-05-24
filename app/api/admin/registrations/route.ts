import { NextRequest, NextResponse } from 'next/server'
import { supabase as getSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Simple token check - in production, use proper JWT verification
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.split(' ')[1] || localStorage?.getItem?.('adminToken')

    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const supabase = getSupabase()

    // Fetch registrations from Supabase
    const { data, error, count } = await supabase
      .from('registrations')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })

    console.log('[v0] Registrations API - Data:', data, 'Error:', error, 'Count:', count)

    if (error) {
      console.error('[v0] Database error:', error)
      return NextResponse.json(
        { message: 'Failed to fetch registrations', error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      registrations: data || [],
      count: count || 0,
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { message: 'An error occurred' },
      { status: 500 }
    )
  }
}
