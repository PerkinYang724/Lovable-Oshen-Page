# Mailchimp Integration Setup Guide

This guide will help you ensure your Mailchimp integration is working correctly.

## Current Integration Setup

Your project has two Mailchimp integration methods:

1. **Embedded Form Script** (in `index.html` line 17)
   - Loads Mailchimp's JavaScript for embedded forms and popups
   - Automatically works when the page loads

2. **API Endpoint** (at `api/subscribe.ts`)
   - Programmatically subscribes users via the Mailchimp API
   - Used by `FreeGuidePopup.tsx` and `Community.tsx` components

## Step 1: Verify Mailchimp Script

The Mailchimp embedded script is already in your `index.html`:
```html
<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3a4331f9d60f2a86901c4ac18/ec9c15c0532df9c408d5ca70c.js");</script>
```

✅ **This script is correctly placed in the `<head>` section.**

### To verify it's working:
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Look for any errors related to Mailchimp
4. Check the Network tab - you should see a request to `chimpstatic.com`

## Step 2: Set Up Environment Variables for API Endpoint

Your API endpoint (`/api/subscribe`) requires three environment variables:

### Required Variables:
- `MAILCHIMP_API_KEY` - Your Mailchimp API key
- `MAILCHIMP_AUDIENCE_ID` - Your Mailchimp audience/list ID
- `MAILCHIMP_SERVER_PREFIX` - The server prefix from your API key (e.g., "us1", "us2", "us21")

### How to Get These Values:

1. **Get Your API Key:**
   - Log in to [Mailchimp](https://mailchimp.com/)
   - Go to Account & Billing → Extras → API keys
   - Create a new API key or copy an existing one
   - Format: `your-api-key-us21` (the part after the dash is your server prefix)

2. **Get Your Audience ID:**
   - In Mailchimp, go to Audience → All contacts
   - Click Settings → Audience name and defaults
   - Look for "Audience ID" (format: `abc123def4`)

3. **Get Your Server Prefix:**
   - Extract it from your API key (e.g., if your key is `abc123-us21`, the prefix is `us21`)
   - Or check the URL when logged into Mailchimp (e.g., `https://us21.admin.mailchimp.com`)

### Setting Environment Variables:

#### For Local Development:

Create a `.env.local` file in your project root:
```env
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_AUDIENCE_ID=your-audience-id-here
MAILCHIMP_SERVER_PREFIX=us21
```

**Important:** Add `.env.local` to your `.gitignore` to keep your keys secure!

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable:
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_AUDIENCE_ID`
   - `MAILCHIMP_SERVER_PREFIX`
4. Make sure to set them for all environments (Production, Preview, Development)
5. Redeploy your application

## Step 3: Test the Integration

### Test the Embedded Form Script:
1. Visit your website
2. Open browser DevTools → Console
3. Type: `window.mc` or check if Mailchimp functions are available
4. If you have Mailchimp popups/forms configured, they should appear

### Test the API Endpoint:

#### Method 1: Using Browser DevTools
1. Open your website
2. Go to DevTools → Console
3. Run:
```javascript
fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'test@example.com' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

#### Method 2: Using curl (Terminal)
```bash
curl -X POST http://localhost:8080/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

#### Method 3: Test via Your Forms
1. Use the `FreeGuidePopup` component
2. Use the `Community` component (on the Oshen page)
3. Fill out the email and submit
4. Check if the subscription succeeds

## Step 4: Troubleshooting

### Common Issues:

1. **"Missing Mailchimp environment variables"**
   - ✅ Check that all three environment variables are set
   - ✅ Restart your dev server after adding `.env.local`
   - ✅ For Vercel, make sure variables are added in the dashboard and app is redeployed

2. **"Subscription failed" or 400 errors**
   - ✅ Verify your API key is correct and active
   - ✅ Check that the audience ID exists and is accessible
   - ✅ Ensure the email format is valid
   - ✅ Check if the email is already subscribed (Mailchimp may reject duplicates)

3. **CORS errors**
   - ✅ Your API endpoint should handle this, but if issues persist, check Vercel configuration

4. **Script not loading**
   - ✅ Check browser console for errors
   - ✅ Verify the Mailchimp script URL is accessible
   - ✅ Check if ad blockers are blocking the script

### Verify API Key Works:

Test your API key directly:
```bash
curl -X GET "https://{SERVER_PREFIX}.api.mailchimp.com/3.0/lists/{AUDIENCE_ID}" \
  -H "Authorization: apikey {API_KEY}"
```

Replace:
- `{SERVER_PREFIX}` with your server prefix (e.g., `us21`)
- `{AUDIENCE_ID}` with your audience ID
- `{API_KEY}` with your full API key

If successful, you should see your audience details in JSON format.

## Components Using Mailchimp

- ✅ `FreeGuidePopup.tsx` - Submits to `/api/subscribe`
- ✅ `Community.tsx` - Submits to `/api/subscribe` (updated)
- ✅ Embedded Mailchimp forms/popups - Uses the script in `index.html`

## Security Notes

- ⚠️ Never commit `.env.local` or environment variables to git
- ⚠️ Use environment variables for all sensitive data
- ⚠️ Regenerate API keys if they're ever exposed
- ⚠️ Use Mailchimp's API key permissions to limit access if possible

## Next Steps

1. Set up your environment variables
2. Test the subscription endpoints
3. Verify emails are being added to your Mailchimp audience
4. Configure Mailchimp automation/workflows as needed
5. Test the embedded forms/popups in Mailchimp dashboard

## Need Help?

- [Mailchimp API Documentation](https://mailchimp.com/developer/marketing/api/lists/)
- [Mailchimp Embedded Forms Guide](https://mailchimp.com/help/add-a-signup-form-to-your-website/)
- Check your Mailchimp dashboard for subscription logs and errors

