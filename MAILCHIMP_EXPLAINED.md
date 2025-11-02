# How Mailchimp Email Signup Works - Complete Guide

This document explains the complete flow of how email subscriptions work in your application.

## 📋 Overview

Your website has **TWO different ways** users can sign up for your Mailchimp newsletter:

1. **Popup Form** (FreeGuidePopup) - Appears when users visit your homepage
2. **Community Form** (Community section) - Located on the homepage

Both use the same backend API endpoint to add emails to your Mailchimp audience.

---

## 🔄 Complete Flow Diagram

```
User fills out form
      ↓
Frontend sends email to /api/subscribe
      ↓
Vercel Serverless Function (api/subscribe.ts)
      ↓
Validates email format
      ↓
Reads Mailchimp credentials from environment variables
      ↓
Sends request to Mailchimp API
      ↓
Mailchimp adds email to your audience
      ↓
Success response sent back to frontend
      ↓
User sees success message
```

---

## 📁 File Locations & What They Do

### 1. **Backend API Endpoint** (The Server-Side Code)

**Location:** `/api/subscribe.ts`

**What it does:**
- Receives email from frontend forms
- Validates the email format
- Gets your Mailchimp credentials from environment variables
- Sends the email to Mailchimp's API
- Returns success or error response

**Key Code:**
```typescript
// Line 14-16: Gets credentials from environment variables
const apiKey = process.env.MAILCHIMP_API_KEY;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

// Line 22: Creates the Mailchimp API URL
const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

// Line 26-33: Sends email to Mailchimp
const response = await fetch(url, {
    method: 'POST',
    headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email_address: email, status: 'subscribed' }),
});
```

**This file runs on:** Vercel serverless functions (not in the browser)

---

### 2. **Popup Form Component** (Frontend)

**Location:** `/src/components/FreeGuidePopup.tsx`

**What it does:**
- Shows a popup when users visit your homepage
- Displays a form asking for name and email
- Sends the email to `/api/subscribe` when submitted
- Shows success/error messages

**Key Code:**
```typescript
// Line 56: Sends email to your API endpoint
const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: data.email }),
});
```

**When it appears:**
- Automatically shows 800ms after page loads
- Only once per browser session (uses sessionStorage)

---

### 3. **Community Section Form** (Frontend)

**Location:** `/src/components/oshen/Community.tsx`

**What it does:**
- Shows a subscription form in the Community section
- Collects just the email address
- Sends to the same `/api/subscribe` endpoint

**Key Code:**
```typescript
// Line 17: Same API endpoint as popup
const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
});
```

---

### 4. **Mailchimp Embedded Script** (Optional)

**Location:** `/index.html` (line 17)

**What it does:**
- Loads Mailchimp's JavaScript library
- Enables Mailchimp popups/forms if you configure them in your Mailchimp dashboard
- This is separate from your custom forms

**Code:**
```html
<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3a4331f9d60f2a86901c4ac18/ec9c15c0532df9c408d5ca70c.js");</script>
```

---

## 🔐 Environment Variables (Where Your Credentials Are Stored)

**Location:** Vercel Dashboard (not in your code files - for security!)

**Where to find:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `oshen-studio`
3. Go to **Settings** → **Environment Variables**
4. You should see:
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_AUDIENCE_ID`
   - `MAILCHIMP_SERVER_PREFIX`

**These are:**
- Stored securely by Vercel
- Not visible in your code
- Automatically available to your API endpoint when it runs

---

## 📊 Where to See Subscribers in Mailchimp

### Step 1: Log in to Mailchimp
Go to [mailchimp.com](https://mailchimp.com) and log in

### Step 2: View Your Audience
1. Click on **"Audience"** in the left sidebar
2. Click **"All contacts"**
3. You'll see all subscribers who signed up through your forms!

### Step 3: View Individual Subscriber Details
- Click on any email address to see:
  - When they subscribed
  - Their status (subscribed, unsubscribed, etc.)
  - Any tags or segments they're in
  - Email activity history

### Step 4: Export Your List (Optional)
1. Go to **Audience** → **All contacts**
2. Click **"Export audience"**
3. Download as CSV or Excel file

---

## 🔍 How to Test It

### Test the Forms:
1. Visit your live website
2. Fill out either:
   - The popup form (appears automatically)
   - The Community section form
3. Submit with a test email
4. Check Mailchimp dashboard to confirm the email was added

### Test the API Directly:
You can test the API endpoint using curl:
```bash
curl -X POST https://your-domain.vercel.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

## 🛠️ Troubleshooting

### Problem: Email not showing in Mailchimp

**Check:**
1. ✅ Environment variables are set in Vercel
2. ✅ API key is correct and active
3. ✅ Audience ID matches your Mailchimp audience
4. ✅ Check Vercel function logs for errors:
   - Go to Vercel Dashboard → Your Project → **Functions** tab
   - Click on `/api/subscribe`
   - Check the **Logs** section

### Problem: Getting 404 errors

**Solution:**
- The API endpoint only works when deployed to Vercel
- Make sure you've deployed your latest changes
- Check that `api/subscribe.ts` file exists in your project

### Problem: Getting "Missing environment variables" error

**Solution:**
1. Go to Vercel Dashboard
2. Settings → Environment Variables
3. Make sure all three variables are set:
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_AUDIENCE_ID`
   - `MAILCHIMP_SERVER_PREFIX`
4. Redeploy your project after adding them

---

## 📝 Code Summary

### Files Involved:

```
📁 Your Project
├── 📄 api/subscribe.ts              ← Backend API (sends to Mailchimp)
├── 📄 src/components/
│   ├── FreeGuidePopup.tsx           ← Popup form component
│   └── oshen/Community.tsx          ← Community form component
├── 📄 index.html                    ← Mailchimp script (line 17)
└── 📄 vercel.json                   ← Vercel configuration
```

### Data Flow:

```
User Input → React Component → /api/subscribe → Mailchimp API → Mailchimp Audience
```

---

## 🎯 Key Takeaways

1. **Two forms, one API**: Both popup and community forms use the same `/api/subscribe` endpoint

2. **Environment variables**: Your Mailchimp credentials are stored securely in Vercel, not in code

3. **Serverless function**: The API runs on Vercel's servers, not in the browser

4. **Check Mailchimp dashboard**: All subscribers appear in Mailchimp → Audience → All contacts

5. **Automatic subscription**: When users submit, they're automatically added as "subscribed" status

---

## 📚 Additional Resources

- [Mailchimp API Documentation](https://mailchimp.com/developer/marketing/api/lists/)
- [Vercel Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [Your Mailchimp Dashboard](https://admin.mailchimp.com/)

---

## 🆘 Need Help?

If something's not working:
1. Check the browser console for errors (F12 → Console tab)
2. Check Vercel function logs (Vercel Dashboard → Functions → Logs)
3. Verify environment variables are set correctly
4. Test with a simple curl command (shown above)

---

**Last Updated:** Based on your current codebase
**Status:** ✅ Active and working on production

