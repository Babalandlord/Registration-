import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Simple admin credentials - in production, use proper authentication
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@ritarockhanghout.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return NextResponse.json(
        { token: 'admin_token_' + Date.now() },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'An error occurred' },
      { status: 500 }
    )
  }
}
