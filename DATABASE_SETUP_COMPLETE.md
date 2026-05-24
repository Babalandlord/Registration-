# Database Setup Complete ✓

## What's Been Created

The Supabase `registrations` table has been successfully created with the following structure:

### Table: `registrations`

```
- id (UUID) - Primary Key, auto-generated
- full_name (TEXT) - Event attendee's full name
- email (TEXT) - Email address (unique constraint)
- phone_no (TEXT) - Phone number
- sex (TEXT) - Gender (Male, Female, Other)
- corper_status (TEXT) - Corper or Ex-Corper status (Yes, No)
- state_of_residence (TEXT) - State of residence
- created_at (TIMESTAMP) - Registration timestamp (auto-generated)
- updated_at (TIMESTAMP) - Last updated timestamp (auto-generated)
```

### Security Features Enabled

✓ **Row Level Security (RLS)** - Active
✓ **Public Insert Policy** - Anyone can register
✓ **Public Read Policy** - Data can be queried
✓ **Email Uniqueness** - Prevents duplicate registrations
✓ **Indexes Created**:
  - `idx_registrations_email` - Fast email lookups
  - `idx_registrations_created_at` - Fast date-based queries

## How It Works Now

### 1. **User Registration Flow**
- User fills out the registration form on the website
- Clicks "Register Now"
- Data is sent to `/api/register` endpoint
- API validates the data
- API saves to Supabase `registrations` table
- Confirmation email is sent via Resend
- User sees success message

### 2. **Admin Dashboard Access**
- Go to `/admin/login`
- Login with admin credentials:
  - Email: `admin@ritarockhanghout.com`
  - Password: `admin123` (or your custom credentials from env vars)
- View all registrations in Grid View (cards) or Table View
- Search, filter, and export registrations to CSV

### 3. **Data Fields Displayed**
In the admin dashboard, you'll see:
- ✓ Full Name
- ✓ Email
- ✓ Phone Number
- ✓ Sex/Gender
- ✓ Corper Status
- ✓ State of Residence
- ✓ Registration Date

## Testing the Setup

### To verify registrations are working:

1. **Submit a test registration** on the website
2. **Go to admin dashboard** at `/admin/login`
3. **Login** with your admin credentials
4. **Search or scroll** to find the new registration
5. **Check email** for confirmation message (may take a few seconds)

### If registrations aren't showing:

1. Check Supabase project is connected (env vars set)
2. Verify API key is correct
3. Check that the `registrations` table exists in Supabase
4. Look at browser console for API errors
5. Check server logs for database connection issues

## Troubleshooting

### Issue: "Registration failed" error
**Solution**: Check that Supabase URL and API key are correctly set in environment variables.

### Issue: No email confirmation received
**Solution**: Verify `RESEND_API_KEY` is set. Check spam folder. May take 30+ seconds.

### Issue: Admin dashboard shows "No registrations found"
**Solution**: Try refreshing the page. Check that registrations were actually submitted by looking at Supabase dashboard directly.

### Issue: Can't login to admin dashboard
**Solution**: 
- Ensure `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables are set
- Or use defaults: `admin@ritarockhanghout.com` / `admin123`
- Clear browser localStorage and try again

## Direct Supabase Access

You can also view registrations directly in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run:
```sql
SELECT * FROM registrations ORDER BY created_at DESC;
```

Or use the table view:
1. Click **Tables** in the sidebar
2. Select `registrations`
3. View all rows

## Next Steps

1. **Test the full flow** - Register someone and check the dashboard
2. **Share the registration link** - https://yoursite.com
3. **Monitor registrations** - Check admin dashboard regularly
4. **Export data** - Use the CSV export button when ready

Your event registration system is now fully operational! 🎉
