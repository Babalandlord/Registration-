# Event Attendees Dashboard Guide

## Overview
The Event Attendees Dashboard is a beautiful, easy-to-use admin interface for viewing and managing all event registrations. It displays all registered participant information in two intuitive layouts.

## Accessing the Dashboard

### Login
1. Go to `/admin/login` on your website
2. Enter your admin credentials:
   - **Email**: `admin@ritarockhanghout.com` (or your custom ADMIN_EMAIL)
   - **Password**: `admin123` (or your custom ADMIN_PASSWORD)
3. Click **Login**

### Alternative: Direct Access with Token
If you're a developer, you can set the admin token in localStorage:
```javascript
localStorage.setItem('adminToken', 'your_token_here')
```

## Dashboard Features

### 1. **Header Section**
- **Title**: "Event Attendees" 
- **Subtitle**: "View and manage all registered participants"
- **View Toggle**: Switch between Grid View and Table View
- **Export CSV**: Download all registrations as a CSV file
- **Logout**: Sign out of the dashboard

### 2. **Registration Counter**
- Displays the **total number** of registrations
- Updates automatically as new registrations come in
- Large, easy-to-read format with gold highlighting

### 3. **Search Bar**
- Search by:
  - Full name
  - Email address
  - Phone number
- Results filter in real-time as you type

### 4. **Grid View** (Default)
Beautiful card-based layout showing each attendee in an organized grid:

Each card displays:
- **Full Name** (large, prominent)
- **Email** (secondary text)
- **Phone Number**
- **Gender** (Sex)
- **State of Residence**
- **Status** (Corper / Ex-Corper) - color-coded:
  - Green: Corper (National Service Member)
  - Orange: Ex-Corper (Completed Service)
- **Registration Date** (small text at bottom)

**Responsive Design:**
- 1 column on mobile
- 2 columns on tablets (md: breakpoint)
- 3 columns on desktop (lg: breakpoint)

### 5. **Table View**
Traditional spreadsheet-style layout with columns for:
- Full Name
- Email
- Phone Number
- Gender
- State of Residence
- Status (Corper / Ex-Corper)
- Registration Date

**Features:**
- Hover over rows for highlighting
- Horizontal scrolling on mobile
- All information visible at a glance

### 6. **Export Functionality**
Click **📥 Export CSV** to download all registrations:
- File name: `registrations.csv`
- Includes: Name, Email, Phone, Gender, Corper Status, State, Registration Date
- Can be opened in Excel, Google Sheets, or any spreadsheet application
- Exports filtered results (if you've searched for something)

## Data Fields Explained

| Field | Description | Values |
|-------|-------------|--------|
| **Full Name** | Participant's complete name | Text |
| **Email** | Email address for confirmation | email@example.com |
| **Phone No** | Contact phone number | 10-digit number |
| **Gender** (Sex) | Biological sex | Male / Female / Other |
| **Corper Status** | National Service participation | Yes (Corper) / No (Ex-Corper) |
| **State** (Residence) | State where person resides | Any Nigerian state |
| **Registration Date** | When they registered | Date format: MM/DD/YYYY |

## Common Tasks

### View All Registrations
1. Login to the dashboard
2. You'll see all registrations automatically
3. Toggle between Grid View and Table View as preferred

### Find a Specific Person
1. Use the search bar at the top
2. Type their name, email, or phone number
3. Results filter instantly
4. All view types (grid/table) respect the search

### Export Data for Analysis
1. Click **📥 Export CSV**
2. Choose location to save the file
3. Open in Excel or Google Sheets for further analysis
4. Create reports, charts, or statistics

### View a Person's Complete Profile
In **Grid View**:
- Click any attendee card to see their full details
- All information is displayed on the card

In **Table View**:
- Hover over a row to highlight it
- All columns show the person's complete information

### Track Registration Growth
1. Check the "Total Registrations" counter
2. It updates automatically as new people register
3. Use timestamps in the data to track registration timing

## Troubleshooting

### Can't Login
- **Issue**: Invalid credentials
- **Solution**: 
  - Verify you're using the correct email and password
  - Default: `admin@ritarockhanghout.com` / `admin123`
  - Check if custom credentials were set in environment variables

### No Registrations Showing
- **Issue**: Dashboard shows "0 Total Registrations"
- **Solution**:
  - Check if Supabase is properly configured
  - Ensure the `registrations` table exists in your database
  - Verify registrations are being submitted from the main form

### Search Not Working
- **Issue**: Search returns no results
- **Solution**:
  - Clear the search bar and try again
  - Search is case-insensitive but requires exact text
  - Try searching for part of a name or email

### Export CSV is Empty
- **Issue**: Downloaded CSV has no data
- **Solution**:
  - Ensure there are registrations in the system
  - If you've searched for something, only those results will export
  - Try exporting without any search filter

## Security Notes

- Keep your admin credentials safe
- Change the default password immediately after first login
- Only share login access with trusted team members
- The dashboard uses secure session tokens stored in browser localStorage
- Tokens expire and require re-login for security

## Customization

To customize admin credentials, set these environment variables:
```
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=your-secure-password
```

To change the dashboard styling, modify:
- Color scheme in `/app/globals.css`
- Layout in `/app/admin/dashboard/page.tsx`
- Card styling in the component file

## Support

For issues or feature requests, contact:
- RitaRock Educonsult: ritarockeduconsult.com
- Email: contact@ritarockeduconsult.com
