export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  max_tokens?: number;
  temperature?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Client-seitige API-Funktion
export async function createChatCompletion(messages: ChatMessage[]): Promise<string> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;
    
    if (!apiKey) {
      console.error('DeepSeek API-Schlüssel nicht gefunden');
      return 'API-Schlüssel fehlt. Bitte überprüfe deine Konfiguration.';
    }

    // Füge eine System-Message hinzu, um den Kontext zu erklären
    const messagesWithSystem = [
      {
        role: 'system' as const,
        content: 'Du bist ein hilfreicher Assistent für die Uni-Projekte Showcase Website. Du hilfst Studenten mit Informationen zu Universitätsprojekten, Fristen, Anforderungen und anderen projektverwandten Fragen. Halte deine Antworten präzise, freundlich und hilfreich. Die Antworten sollten auf Deutsch sein.'
      },
      ...messages
    ];

    console.log('Sende Anfrage an DeepSeek API mit Nachrichten:', messagesWithSystem);
    
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messagesWithSystem,
        max_tokens: 1000,
        temperature: 0.7,
      } as ChatCompletionRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('DeepSeek API Error:', response.status, errorData);
      throw new Error(`DeepSeek API-Fehler ${response.status}: ${errorData.error?.message || response.statusText}`);
    }

    const data: ChatCompletionResponse = await response.json();
    console.log('DeepSeek API Antwort:', data);
    
    return data.choices[0]?.message?.content || 'Keine Antwort erhalten';
  } catch (error) {
    console.error('DeepSeek API-Fehler:', error);
    return 'Entschuldigung, es gab ein Problem bei der Verarbeitung deiner Anfrage. Bitte versuche es später noch einmal.';
  }
}
