import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase as getSupabase } from '@/lib/supabase'

// Mark this route as dynamic to prevent static optimization
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, sex, corperStatus, stateOfResidence } = body
    const supabase = getSupabase()

    // Check if email already exists
    const { data: existingRegistration } = await supabase
      .from('registrations')
      .select('id')
      .eq('email', email)
      .single()

    if (existingRegistration) {
      return NextResponse.json(
        { message: 'This email is already registered' },
        { status: 409 }
      )
    }

    // Insert registration into database
    const { data: registration, error: dbError } = await supabase
      .from('registrations')
      .insert([
        {
          full_name: fullName,
          email,
          phone_no: phone,
          sex,
          corper_status: corperStatus,
          state_of_residence: stateOfResidence,
        },
      ])
      .select()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { message: 'Failed to register. Please try again.' },
        { status: 500 }
      )
    }

    // Send confirmation email
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      console.log('[v0] Sending confirmation email to:', email)
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Registration Confirmed - Ritarock Educonsult Hangout',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; background: #0a0a1a; }
                .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                .header { text-align: center; color: #8b5cf6; margin-bottom: 30px; }
                .content { background: #1a1a3a; border: 1px solid #8b5cf6; border-radius: 12px; padding: 30px; }
                .content h2 { color: #8b5cf6; }
                .details { margin: 20px 0; }
                .detail-item { margin: 10px 0; color: #f5f1ff; }
                .button { 
                  display: inline-block;
                  margin-top: 20px;
                  padding: 12px 24px;
                  background: linear-gradient(to right, #8b5cf6, #a78bfa);
                  color: white;
                  text-decoration: none;
                  border-radius: 8px;
                }
                .footer { text-align: center; margin-top: 30px; color: #b8b8d8; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Welcome to Ritarock Educonsult Hangout!</h1>
                </div>
                <div class="content">
                  <h2>Registration Confirmed</h2>
                  <p>Hi ${fullName},</p>
                  <p>Thank you for registering for the Ritarock Educonsult Hangout event! We are excited to have you join us.</p>
                  <div class="details">
                    <h3 style="color: #fbbf24;">Your Registration Details:</h3>
                    <div class="detail-item"><strong>Name:</strong> ${fullName}</div>
                    <div class="detail-item"><strong>Email:</strong> ${email}</div>
                    <div class="detail-item"><strong>Phone:</strong> ${phone}</div>
                    <div class="detail-item"><strong>State:</strong> ${stateOfResidence}</div>
                  </div>
                  <p>We will send you more details about the event soon. Stay tuned!</p>
                  <a href="https://ritarockhanghout.com" class="button">View Event Details</a>
                </div>
                <div class="footer">
                  <p>&copy; 2024 Ritarock Educonsult. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      })
      console.log('[v0] Email sent successfully to:', email)
    } catch (emailError) {
      console.error('[v0] Email sending error:', emailError)
      // Don't fail the registration if email fails
    }

    return NextResponse.json(
      { message: 'Registration successful', registration },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Unexpected error in registration:', error)
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
    return NextResponse.json(
      { message: errorMessage, error: String(error) },
      { status: 500 }
    )
  }
}

    return NextResponse.json(
      { 
        message: 'Registration successful',
        registration: registration?.[0]
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
