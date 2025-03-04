// src/utils/api.js
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function getEnglishSentence() {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "system", content: "Generate a simple English sentence for a beginner learning Japanese." }],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function evaluateTranslation(englishSentence, userTranslation) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a Japanese teacher. Score the user's Japanese translation from 1 to 10 and give feedback." },
        { role: "user", content: `English: ${englishSentence}\nUser's Japanese Translation: ${userTranslation}\nProvide a score and improvement suggestions.` }
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
