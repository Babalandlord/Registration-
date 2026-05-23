# Registration Data Display Guide

## Quick Start: View All Registered Attendees

### Step 1: Access the Admin Dashboard
```
https://yoursite.com/admin/login
```

### Step 2: Login with Admin Credentials
- **Email**: `admin@ritarockhanghout.com`
- **Password**: `admin123`

### Step 3: View Attendees
You'll see all registered attendees with:
- Full Name
- Sex/Gender
- Phone Number
- Corper Status (Yes/No)
- State of Residence
- Registration Date

---

## The Two Dashboard Views

### Grid View (Card Layout) - Default
```
┌─────────────────────────────────────┐
│ John Doe                            │
│ john@example.com                    │
├─────────────────────────────────────┤
│ Phone: 08012345678                  │
│ Gender: Male                         │
│ State: Lagos                         │
│ Status: Corper ✓                    │
│ Registered: 08/08/2026              │
└─────────────────────────────────────┘
```

**Best for:**
- Quick overview
- Mobile viewing
- Visual scanning
- Spotting patterns

### Table View (Spreadsheet Layout)
```
┌──────────┬──────────┬─────────┬────────┬───────┬────────┬──────────┐
│ Name     │ Email    │ Phone   │ Gender │ State │ Status │ Date     │
├──────────┼──────────┼─────────┼────────┼───────┼────────┼──────────┤
│ John Doe │ john@... │ 080123  │ Male   │ Lagos │ Corper │ 08/08/26 │
└──────────┴──────────┴─────────┴────────┴───────┴────────┴──────────┘
```

**Best for:**
- Desktop viewing
- Detailed comparison
- Data analysis
- Printing/exporting

---

## What Information is Displayed

### Full Name
- Exactly as registered
- Shown prominently in both views

### Sex/Gender
- Male
- Female
- Other
- Displayed with consistent styling

### Phone Number
- Contact number provided during registration
- Format: Nigerian 11-digit number (e.g., 08012345678)
- Searchable

### Corper Status
- **Yes** = Currently serving National Service
- **No** = Completed National Service
- Color-coded (Green for Corper, Orange for Ex-Corper)

### State of Residence
- Any Nigerian state
- Examples: Lagos, Abuja, Abia, Anambra, etc.
- Searchable

### Registration Date
- Timestamp of when they submitted the form
- Format: MM/DD/YYYY (e.g., 08/08/2026)

---

## How to Find Specific People

### Search by Name
Type in the search box:
```
"John" → Shows all people named John
"Doe" → Shows all people with last name Doe
```

### Search by Email
```
"john@example.com" → Shows exact match
"gmail" → Shows all Gmail registrations
```

### Search by Phone Number
```
"08012345678" → Shows exact match
"0801" → Shows all numbers starting with 0801
```

---

## How to Count Registrations

The dashboard displays:
```
┌──────────────────────────────────────┐
│ 145                                  │
│ Total Registrations                  │
└──────────────────────────────────────┘
```

This number updates automatically as new registrations come in.

---

## How to Export Data

### Click "Export CSV" Button
1. A file called `registrations.csv` downloads
2. Open it in Excel, Google Sheets, or any spreadsheet app
3. Contains all visible registrations (respects search filter)

### CSV Columns:
1. Full Name
2. Email
3. Phone
4. Sex
5. Corper Status
6. State of Residence
7. Registration Date

### Use Cases:
- Email confirmations
- Attendance tracking
- Statistical analysis
- Generating reports
- Creating name badges

---

## Key Features

### Real-time Search
- Type and see results instantly
- Works across all fields
- Case-insensitive

### Responsive Design
- **Mobile**: 1 card per row in Grid View
- **Tablet**: 2 cards per row
- **Desktop**: 3 cards per row

### Color Coding
- **Green badge**: Corper (Active National Service)
- **Orange badge**: Ex-Corper (Completed Service)
- **Purple theme**: Overall aesthetic consistency

### Session Management
- Auto-logout for security
- Token-based authentication
- Per-user access control

---

## Admin Credentials

**Default Login:**
```
Email: admin@ritarockhanghout.com
Password: admin123
```

**To Change Credentials:**
Set environment variables:
```
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-new-password
```

---

## Common Questions

**Q: How many people have registered?**
A: Check the "Total Registrations" counter at the top of the dashboard.

**Q: How do I find someone who registered?**
A: Use the search box - search by name, email, or phone number.

**Q: How do I get the data into Excel?**
A: Click "Export CSV" and open the downloaded file in Excel.

**Q: Why don't I see anyone as a "Corper"?**
A: They selected "Yes" for corper status during registration. Orange badges mean they selected "No" (Ex-Corper).

**Q: Can I see when someone registered?**
A: Yes, the registration date is shown on each card and in the table.

**Q: What states are included?**
A: All Nigerian states that were selected during registration. Most common: Lagos, Abuja, Abia, Anambra, etc.

**Q: Can I delete or edit registrations?**
A: Currently, the dashboard is view-only. Contact support for data modification requests.

---

## Helpful Tips

1. **Bulk Operations**: Export to CSV and use Excel for bulk analysis
2. **Filtering**: Use the search to see only specific groups (e.g., all Lagos residents)
3. **Daily Tracking**: Check the total count daily to see growth
4. **Backup**: Export regularly to maintain backups of registration data
5. **Mobile Friendly**: Use Grid View on mobile for best experience

---

## Support

For help, contact:
- **Website**: ritarockeduconsult.com
- **Email**: RitaRock @ ritarockeduconsult.com
