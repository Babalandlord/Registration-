# Admin Dashboard Guide

## Accessing the Admin Dashboard

The admin dashboard allows you to view all registrations, manage attendees, and export data.

### How to Login

1. Navigate to `/admin/login` (e.g., `https://yoursite.com/admin/login`)
2. Enter your admin credentials:
   - **Email**: Set in `ADMIN_EMAIL` environment variable
   - **Password**: Set in `ADMIN_PASSWORD` environment variable
3. Click "Login" to access the dashboard

### Dashboard Features

Once logged in, you can:

#### 1. **View Registration Count**
   - See the total number of registrations in the hero section
   - The count updates in real-time as new people register

#### 2. **View All Registrations**
   - See a table of all registered attendees with:
     - Full Name
     - Email Address
     - Phone Number
     - Sex
     - Corper Status (Yes/No)
     - State of Residence
     - Registration Date

#### 3. **Search Registrations**
   - Use the search box to find specific attendees by:
     - Name
     - Email
     - Phone number
   - Search results update instantly as you type

#### 4. **Export to CSV**
   - Click the "Export to CSV" button to download all registrations
   - Useful for creating mailing lists or data analysis

#### 5. **Sort & Filter**
   - Click column headers to sort by different fields
   - Filter by state of residence using the state dropdown (if implemented)

## Setting Up Admin Credentials

### In Your Local Environment

Set environment variables in your `.env.local`:

```
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=your-secure-password
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyxxxxxxxxxxxxx
```

### In Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following:
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Email Confirmations

When someone registers, they automatically receive a confirmation email containing:
- Confirmation of registration
- Their submitted information
- A link to the event website
- Information about upcoming event details

**Note**: Emails are sent using the free tier of Resend. For production use, you may want to:
- Verify your domain with Resend for branded email addresses
- Upgrade your Resend account for higher sending limits

## Troubleshooting

### Admin Login Not Working
- Double-check that `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables are set correctly
- Make sure there are no extra spaces in the credentials

### Registrations Not Showing
- Verify Supabase is connected and database tables are created
- Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Run the database setup SQL from `SETUP_DATABASE.md`

### Confirmation Emails Not Sending
- Ensure `RESEND_API_KEY` is set correctly in environment variables
- Check that the email address is valid
- Verify your Resend API key has the correct permissions
- Check the server logs for error messages starting with `[v0]`

## Database Structure

Registrations are stored in the `registrations` table with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Unique registration ID |
| full_name | Text | Attendee's full name |
| email | Text | Attendee's email address (unique) |
| phone_no | Text | Attendee's phone number |
| sex | Text | Attendee's gender (Male/Female/Other) |
| corper_status | Text | NYSC corper status (Yes/No) |
| state_of_residence | Text | State of residence |
| created_at | Timestamp | Registration date and time |
| updated_at | Timestamp | Last update timestamp |

