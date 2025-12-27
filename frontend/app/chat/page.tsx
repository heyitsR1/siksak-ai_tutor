'use client'
import { useState } from "react";

const url = "http://localhost:8000/query"

export default function ChatPage() { 
    const [res, setRes] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    async function submitHandler() { 
        if (!query.trim()) return;
        
        setIsLoading(true);
        
        try {
            const response = await fetch(url, { 
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({query})
            });
            const data = await response.json();
            setRes(data.answer || data);
            setQuery("");
        } catch (error) {
            setRes("Error: Could not connect to server");
        } finally {
            setIsLoading(false);
        }
    }
    
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitHandler();
        }
    };
    
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4"> 
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                    Chat Interface
                </h1>
                
                <div className="mb-6">
                    <div className="flex gap-3"> 
                        <input 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message here..." 
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                            disabled={isLoading}
                        />
                        <button 
                            onClick={submitHandler}
                            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                            disabled={isLoading || !query.trim()}
                        >
                            {isLoading ? "..." : "Ask"}
                        </button>
                    </div>
                </div>
                
                {res && (
                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h2 className="text-sm font-semibold text-gray-700 mb-2">Response:</h2>
                        <div className="text-gray-900 whitespace-pre-wrap">
                            {res}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}