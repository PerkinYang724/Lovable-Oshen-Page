import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }

    const apiKey = process.env.EMAILOCTOPUS_API_KEY;
    const listId = process.env.EMAILOCTOPUS_LIST_ID;

    if (!apiKey || !listId) {
        return res.status(500).json({ error: 'Missing EmailOctopus environment variables' });
    }

    const url = `https://emailoctopus.com/api/1.6/lists/${listId}/contacts?api_key=${apiKey}`;
    const data = { email_address: email };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const err = await response.json();
            console.error('EmailOctopus error:', err);
            return res.status(400).json({ error: err.error?.message || 'Subscription failed' });
        }

        console.log('✅ Subscribed:', email);
        return res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
