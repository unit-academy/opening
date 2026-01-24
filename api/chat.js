// api/chat.js
export default async function handler(req, res) {
    // 1. Verificamos se é um POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // 2. Pegamos a chave das variáveis de ambiente da Vercel (SEGURO!)
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Chave de API não configurada no servidor' });
    }

    // 3. Pegamos a mensagem que o usuário enviou
    const { message } = req.body;

    try {
        // 4. Chamamos a Groq direto do servidor da Vercel
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        // O Prompt do sistema fica aqui, protegido
                        role: "system",
                        content: "Você é um tutor educacional. Responda em português do Brasil, seja didático, encorajador e claro. Use formatação simples."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        const data = await response.json();
        
        // 5. Devolvemos a resposta da IA para o seu site
        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
}