import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !audienceId || !serverPrefix) {
        return res.status(500).json({ error: 'Missing Mailchimp environment variables' });
    }

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;
    const data = { email_address: email, status: 'subscribed' };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `apikey ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const err = await response.json();
            console.error('Mailchimp error:', err);
            return res.status(400).json({ error: err.detail || 'Subscription failed' });
        }

        console.log('✅ Subscribed:', email);
        return res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
