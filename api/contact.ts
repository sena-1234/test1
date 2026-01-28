import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN || '7652291214:AAEA5aKuUe2bXWJPvaXjs_CRrgCqj40ronY';
    const chatId = '7652291214';

    const text = `
🚀 *New Inquiry from Terara Website*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🛠 *Service:* ${service}

📝 *Message:*
${message}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            return res.status(500).json({ error: 'Failed to send message to Telegram' });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Serverless function error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
