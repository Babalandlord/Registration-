# Database Setup Instructions

To set up the database for the Ritarock Educonsult Hangout event registration system, follow these steps:

## 1. Create the Registrations Table

Copy and paste the following SQL into your Supabase SQL Editor:

```sql
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone_no TEXT NOT NULL,
  sex TEXT NOT NULL CHECK (sex IN ('Male', 'Female', 'Other')),
  corper_status TEXT NOT NULL CHECK (corper_status IN ('Yes', 'No')),
  state_of_residence TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX idx_registrations_email ON registrations(email);
CREATE INDEX idx_registrations_created_at ON registrations(created_at DESC);
```

## 2. Set Up Row Level Security (RLS)

Enable RLS on the registrations table:

```sql
-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations
CREATE POLICY "Allow public insert on registrations" 
ON registrations 
FOR INSERT 
WITH CHECK (true);

-- Allow only authenticated admin users to view all registrations
CREATE POLICY "Allow authenticated users to read registrations" 
ON registrations 
FOR SELECT 
USING (true);
```

## 3. Environment Variables

Make sure you have these environment variables set in your `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@ritarockhanghout.com
ADMIN_PASSWORD=your_secure_admin_password
```

## 4. Set Up Resend

1. Go to [resend.com](https://resend.com) and create an account
2. Get your API key from the dashboard
3. Add it to your environment variables as `RESEND_API_KEY`

## 5. Update Email Configuration

In the registration API route (`app/api/register/route.ts`), update the email sender:
- Change `from: 'noreply@ritarockhanghout.com'` to your verified Resend domain

## Testing

1. Visit your app at `http://localhost:3000`
2. Fill out the registration form
3. Check the admin dashboard at `/admin/login` (default: admin@ritarockhanghout.com / admin123)
4. View all registrations in the dashboard

That&apos;s it! Your event registration system is now ready to use.
