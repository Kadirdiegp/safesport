"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { createChatCompletion, type ChatMessage } from '@/lib/deepseek-api';
import { findAnswer } from '@/lib/chatbot-knowledge';
import { FaPaperPlane, FaGraduationCap, FaRocket, FaCalendarAlt, FaCode, FaUsers } from 'react-icons/fa';
import { IoMdInformation } from 'react-icons/io';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

// Komponente für Typewriter-Effekt
const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 15); // Geschwindigkeit des Typewriter-Effekts
      
      return () => clearTimeout(timer);
    } else {
      setIsDone(true);
    }
  }, [currentIndex, text]);
  
  return (
    <div className="whitespace-pre-wrap">
      {isDone ? text : displayedText}
      {!isDone && <span className="inline-block w-2 h-4 bg-red-500 ml-1 animate-pulse"></span>}
    </div>
  );
};

const ChatbotSection = () => {
  // Benutzerstatus
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', text: string, animate?: boolean}>>([
    { type: 'bot', text: 'Hallo! Ich bin der Uni-Projekte Assistant.\n\n### **Wobei kann ich dir helfen?**\n- **Projektideen** oder Themenfindung\n- **Anforderungen** oder Abgabefristen\n- **Tipps** zur Umsetzung (Präsentation, Dokumentation, Coding etc.)\n- **Organisation** (Zeitmanagement, Teamarbeit)\n\nFrag einfach konkret nach – ich helfe gern! 😊\n\nWas beschäftigt dich gerade? 🚀', animate: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Automatisches Scrollen und Fokussieren
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  // Vorgeschlagene Fragen mit Icons
  const suggestedQuestions = [
    { icon: <FaRocket />, text: "Welche Projektideen sind aktuell gefragt?" },
    { icon: <FaCalendarAlt />, text: "Gibt es wichtige Abgabefristen?" },
    { icon: <FaCode />, text: "Tipps für die technische Umsetzung?" },
    { icon: <FaUsers />, text: "Wie organisiere ich mein Projektteam?" }
  ];

  // Automatisches Scrollen, wenn neue Nachrichten hinzugefügt werden oder während des Typewriter-Effekts
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    scrollToBottom();
    
    // Weitere periodische Scrolls für die Typewriter-Animation
    const animatingMessages = messages.some(msg => msg.type === 'bot' && msg.animate);
    if (animatingMessages) {
      const intervalId = setInterval(scrollToBottom, 500);
      return () => clearInterval(intervalId);
    }
  }, [messages, isLoading]);

  // Automatisches Fokussieren der Eingabe, wenn der Chat geöffnet wird
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Nachricht senden
  const handleSubmit = async (e: React.FormEvent | null, customMessage?: string) => {
    if (e) e.preventDefault();
    
    const messageToSend = customMessage || inputValue;
    if ((messageToSend.trim() === '') || isLoading) return;
    
    setError(null);
    
    // Benutzer-Nachricht hinzufügen
    const userMessage = { type: 'user' as const, text: messageToSend, animate: false };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    if (!customMessage) setInputValue('');
    
    try {
      // Zuerst in der lokalen Wissensdatenbank nach einer Antwort suchen
      const localAnswer = findAnswer(messageToSend);
      
      if (localAnswer) {
        // Lokale Antwort gefunden - API-Call überspringen
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: localAnswer,
          animate: true
        }]);
      } else {
        // Keine lokale Antwort - API aufrufen
        // Nachrichten für die API formatieren - nur die letzten 10 Nachrichten senden,
        // um das Kontextfenster nicht zu überschreiten
        const recentMessages = messages.slice(-10).concat(userMessage);
        const apiMessages: ChatMessage[] = recentMessages.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.text
        }));
        
        // DeepSeek API aufrufen
        const response = await createChatCompletion(apiMessages);
        
        // Bot-Antwort mit Typewriter-Animation hinzufügen
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: response,
          animate: true
        }]);
      }
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      
      if (error instanceof Error) {
        setError(error.message);
      }
      
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Entschuldigung, es gab ein Problem bei der Verarbeitung deiner Anfrage. Bitte versuche es später noch einmal.',
        animate: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Vorgeschlagene Frage auswählen
  const handleSuggestedQuestion = (question: string) => {
    handleSubmit(null, question);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="h-14 w-14 rounded-full bg-gradient-to-r from-red-700 to-red-900 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
            aria-label="Chat mit dem Assistenten"
          >
            <HiChatBubbleLeftRight className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>

        <SheetContent 
          side="right"
          className="w-[95%] sm:max-w-md p-0 flex flex-col h-[85vh] rounded-xl overflow-hidden shadow-2xl border-0 mx-2 bg-black bg-opacity-80 backdrop-blur-lg backdrop-filter"
        >
          {/* Header mit nur einem Schließen-Button */}
          <SheetHeader className="bg-gradient-to-r from-red-700 to-red-900 py-4 px-6 flex-shrink-0">
            <div className="flex justify-between items-center">
              <SheetTitle className="text-white flex items-center">
                <FaGraduationCap className="mr-2 h-5 w-5" />
                Uni-Projekte Assistant
              </SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-red-800 rounded-full h-8 w-8 p-0"
                onClick={() => setIsOpen(false)}
              >
                <IoClose className="h-4 w-4" />
              </Button>
            </div>
          </SheetHeader>
          
          {/* Nachrichtenbereich */}
          <div 
            className="flex-1 overflow-y-auto p-4 bg-black bg-opacity-70 text-white"
            ref={messageContainerRef}
          >
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.type === 'user' 
                          ? 'bg-red-600 text-white shadow-md backdrop-blur-sm bg-opacity-90' 
                          : 'bg-zinc-800 text-white shadow-sm border border-zinc-700 backdrop-blur-sm bg-opacity-70'
                      }`}
                    >
                      {message.type === 'bot' && message.animate 
                        ? <TypewriterText text={message.text} /> 
                        : <div className="whitespace-pre-wrap">{message.text}</div>
                      }
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-zinc-800 text-white shadow-sm max-w-[85%] rounded-2xl px-4 py-3 flex items-center border border-zinc-700 backdrop-blur-sm bg-opacity-70">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center my-2"
                  >
                    <div className="bg-red-900 text-white shadow-sm rounded-lg px-4 py-2 text-xs border border-red-700 flex items-center backdrop-blur-sm">
                      <IoMdInformation className="mr-1 h-4 w-4 text-red-300" />
                      {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Vorgeschlagene Fragen */}
            {messages.length < 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6"
              >
                <p className="text-sm text-gray-300 mb-2 font-medium">Häufige Fragen:</p>
                <div className="grid grid-cols-1 gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                      onClick={() => handleSuggestedQuestion(question.text)}
                      className="text-sm bg-zinc-800 border border-zinc-700 hover:bg-red-900 hover:border-red-700 text-white rounded-xl px-3 py-2.5 transition-colors duration-200 flex items-center shadow-sm hover:shadow backdrop-blur-sm bg-opacity-50"
                      disabled={isLoading}
                    >
                      <span className="mr-2 text-red-500">{question.icon}</span>
                      {question.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Invisible element for scrolling */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Eingabebereich */}
          <div className="bg-zinc-900 border-t border-zinc-800 p-4">
            <form 
              onSubmit={handleSubmit}
              className="flex gap-2 items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Stell eine Frage..."
                className="flex-1 px-4 py-3 border border-zinc-700 bg-zinc-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-shadow shadow-sm placeholder-gray-400"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-red-700 to-red-900 hover:opacity-90 rounded-full p-3 h-12 w-12 flex items-center justify-center shadow-md"
                disabled={isLoading || inputValue.trim() === ''}
                aria-label="Nachricht senden"
              >
                <FaPaperPlane className="h-4 w-4" />
              </Button>
            </form>
            
            {/* Footer text */}
            <div className="mt-2 text-center text-xs text-gray-400">
              <p>Powered by DeepseekAI • Uni-Projekte Showcase</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatbotSection;
