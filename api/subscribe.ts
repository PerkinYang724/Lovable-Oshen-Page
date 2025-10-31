
import { createClient } from '@supabase/supabase-js';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('🔵 API route hit: /api/subscribe');

  if (req.method !== 'POST') {
    console.log('❌ Invalid method:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('📩 Request body:', req.body);
    const { email } = req.body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.log('⚠️ Invalid email:', email);
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Environment variables check
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log('🧩 ENV CHECK:', {
      supabaseUrl: !!supabaseUrl,
      supabaseKey: !!supabaseKey,
    });

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Missing Supabase env vars');
      return res.status(500).json({ error: 'Server not configured properly' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('🚀 Attempting insert to newsletter_subscribers...');

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email: email.toLowerCase().trim(),
          source: 'flow-community-debug',
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('❌ Supabase insert error:', error);
      return res.status(500).json({ error: error.message, details: error });
    }

    console.log('✅ Insert success:', data);
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('💥 Unexpected error:', err);
    return res.status(500).json({ error: err.message });
  }
}
