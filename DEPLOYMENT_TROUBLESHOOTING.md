# Deployment Troubleshooting Guide

## ✅ Local Build Status
The project builds successfully locally with zero errors:
```
✓ Compiled successfully
✓ Generating static pages (5/5)
```

## Common Deployment Issues & Solutions

### 1. **Missing Environment Variables**
**Error:** Build fails during data collection

**Solution:** Ensure these variables are set in Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `RESEND_API_KEY` - Your Resend API key
- `ADMIN_EMAIL` - Admin login email
- `ADMIN_PASSWORD` - Admin login password

**How to check:**
1. Go to Vercel project settings
2. Click "Environment Variables"
3. Verify all 5 variables are set

### 2. **Supabase Connection Issues**
**Error:** "Failed to collect page data for /api/register"

**Solution:** 
- Verify Supabase credentials are correct
- Confirm the `registrations` table exists in Supabase
- Check Row Level Security policies are enabled

**To verify table:**
1. Go to your Supabase project
2. Navigate to SQL Editor
3. Run: `SELECT * FROM registrations LIMIT 1;`
4. Should return data or empty result (not error)

### 3. **Next.js Build Configuration**
The app uses:
- Next.js 16.2.6 with Turbopack (stable)
- Dynamic API routes (force-dynamic)
- Static page generation where possible

All routes are properly configured:
- `/` - Static page
- `/admin/login` - Static page  
- `/admin/dashboard` - Static page
- `/api/register` - Dynamic route
- `/api/admin/login` - Dynamic route
- `/api/admin/registrations` - Dynamic route

## Testing Checklist Before Deployment

- [ ] Run `pnpm build` locally and verify success
- [ ] Verify all 5 environment variables are set in Vercel
- [ ] Test registration form locally: `pnpm dev`
- [ ] Test admin login and dashboard
- [ ] Check Supabase database for registered user

## If Still Getting Errors

1. **Check Vercel Build Logs:**
   - Go to Vercel dashboard → Project → Deployments
   - Click the failed deployment
   - Scroll down to see full error message
   - Share the exact error here

2. **Common Error Solutions:**
   
   | Error | Solution |
   |-------|----------|
   | "env variable not found" | Add missing var to Vercel |
   | "Supabase client error" | Check NEXT_PUBLIC vars |
   | "Port already in use" | Vercel automatically handles |
   | "Module not found" | Run `pnpm install` locally and retry |

3. **Clear Cache and Redeploy:**
   - Vercel dashboard → Project settings
   - Scroll to "Git" section
   - Click "Redeploy" or "Clear cache and redeploy"

## Quick Deploy Steps

1. Make sure all files are saved
2. Push code to GitHub: `git add . && git commit -m "Fix deployment" && git push`
3. Vercel auto-deploys on push
4. Monitor build in Vercel dashboard
5. Check logs if it fails

The application is fully functional and ready to deploy!
