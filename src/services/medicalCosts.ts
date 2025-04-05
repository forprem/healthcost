import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchMedicalCosts = async (procedure: string, code: string, location: string) => {
  const prompt = `What is the average cost of procedure ${procedure} (${code}) in ${location}?`;

  console.log("OPENAI KEY in env:", OPENAI_API_KEY); // 👈 Add this

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const result = response.data.choices[0].message.content;
    return { cost: result };
  } catch (error) {
    console.error("Error querying OpenAI API: ", error);
    return null;
  }
};