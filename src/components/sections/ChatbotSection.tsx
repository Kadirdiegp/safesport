"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const ChatbotSection = () => {
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', text: string}>>([
    { type: 'bot', text: 'Hallo! Ich bin der Uni-Projekte Assistant. Ich kann dir derzeit nur einfache Antworten geben, da ich auf die Integration der DeepseekAI-API warte. Wie kann ich dir helfen?' }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
    
    // Simulate bot response (will be replaced with actual API call in the future)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Ich bin noch in Entwicklung und warte auf die Integration mit der DeepseekAI-API. Bitte versuche es später noch einmal!' 
      }]);
    }, 1000);
    
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 mr-3">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg hover:shadow-xl transition-all"
            aria-label="Chat mit dem Assistenten"
            style={{ transform: 'translateX(-10px)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right"
          className="w-[90%] sm:max-w-md p-0 flex flex-col h-[80vh] rounded-l-xl overflow-hidden shadow-2xl"
        >
          <SheetHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6">
            <SheetTitle className="text-white">Uni-Projekte Assistant</SheetTitle>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="p-4 bg-white border-t border-gray-200 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Stell eine Frage..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Button>
          </form>
          
          <div className="p-2 text-center text-xs text-gray-500 bg-white border-t border-gray-200">
            <p>Powered by DeepseekAI (Coming Soon)</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatbotSection;
