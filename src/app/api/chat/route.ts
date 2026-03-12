import { groq } from '@ai-sdk/groq';
import { google } from '@ai-sdk/google';
import { streamText, Message } from 'ai';
import { portfolioData } from '@/data/portfolio';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Extract and compress the context to avoid token limit issues
        const contextData = {
            personal: portfolioData.personal,
            skills: portfolioData.techStack.map(t => t.name).join(', '),
            experiences: portfolioData.experiences.map(e => `${e.position} at ${e.company} (${e.startDate} - ${e.endDate || 'Present'})`),
            education: portfolioData.education.map(e => `${e.degree} in ${e.major} at ${e.institution}`),
            projects: portfolioData.projects.map(p => `${p.title}: ${p.description}`)
        };

        // Use Groq by default for fast, conversational responses (if key exists)
        // Fallback to Google Gemini if Groq fails or isn't available
        const model = process.env.GROQ_API_KEY
            ? groq('llama-3.3-70b-versatile')
            : google('gemini-2.5-flash');

        const systemPrompt = `You are an AI assistant persona representing Syahril Arfian Almazril, a talented AI Engineer & Software Engineer based in Jakarta, Indonesia.
Your goal is to answer questions about Syahril's experience, projects, skills, and background using the provided portfolio data.
Always be polite, professional, and concise. Speak in the first person ("I am Syahril...").

Here is the entire portfolio context:
${JSON.stringify(contextData, null, 2)}

Instructions:
1. ONLY answer questions related to Syahril's professional experience, projects, education, or skills.
2. If asked something unrelated, politely steer the conversation back to Syahril's qualifications.
3. Keep responses relatively short and easy to read. Use markdown formatting for readability if needed (bullet points, bold text).
4. If asked for contact details, provide the email: azril4974@gmail.com and suggest reaching out on LinkedIn.`;

        const result = streamText({
            model,
            system: systemPrompt,
            messages: messages as Message[],
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to process chat request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
