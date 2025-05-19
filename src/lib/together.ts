import OpenAI from 'openai';

export const together = new OpenAI({
  baseURL: 'https://together.hconeai.com/v1',
  apiKey: process.env.TOGETHER_API_KEY,
  defaultHeaders: {
    'Helicone-Auth': `Bearer ${process.env.HELICONE_API_KEY}`,
  },
});