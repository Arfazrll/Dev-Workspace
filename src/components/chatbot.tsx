"use client";

import { useChat, Message } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, X, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";

export function ChatbotTrigger() {
    const [open, setOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
        useChat({
            api: "/api/chat",
            initialMessages: [
                {
                    id: "1",
                    role: "assistant",
                    content: "Hi there! I'm Syahril's AI assistant. Ask me anything about his projects, skills, or experience!",
                },
            ],
        });

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    className="size-full flex items-center justify-center bg-transparent border-none p-0 outline-none group text-muted-foreground hover:text-foreground"
                    aria-label="Open AI Chatbot"
                >
                    {/* Subtle gradient glow effect on absolute background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Match SVG scaling from DockIcon */}
                    <Bot className="size-[80%] transition-transform duration-300 group-hover:scale-110 z-10" />

                    {/* Notification dot to draw attention subtly */}
                    {!open && (
                        <span className="absolute top-0 right-0 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                    )}
                </button>
            </PopoverTrigger>
            <PopoverContent
                side="top"
                align="center"
                sideOffset={20}
                collisionPadding={16}
                className="w-[calc(100vw-2rem)] max-w-[380px] h-[500px] max-h-[80vh] p-0 flex flex-col shadow-2xl rounded-2xl border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden z-[100]"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-primary/10 rounded-full">
                            <Sparkles className="size-4 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Ask AI Assistant</h3>
                            <p className="text-xs text-muted-foreground">Powered by Groq & Gemini</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-full"
                        onClick={() => setOpen(false)}
                    >
                        <X className="size-4" />
                    </Button>
                </div>

                {/* Chat Area */}
                <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                    <div className="flex flex-col gap-4 pb-4">
                        {messages.map((m: Message) => (
                            <div
                                key={m.id}
                                className={`w-fit flex max-w-[85%] flex-col gap-2 rounded-2xl px-4 py-2.5 text-sm ${m.role === "user"
                                    ? "ml-auto bg-primary text-primary-foreground rounded-br-sm"
                                    : "bg-muted text-foreground rounded-bl-sm"
                                    }`}
                            >
                                <div className={`break-words leading-relaxed max-w-full ${m.role === "assistant" ? "prose prose-sm dark:prose-invert" : ""}`}>
                                    <Markdown>
                                        {m.content}
                                    </Markdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="w-fit flex max-w-[85%] flex-col gap-2 rounded-2xl px-4 py-3 text-sm bg-muted text-foreground rounded-bl-sm items-center justify-center">
                                <Loader2 className="size-4 animate-spin text-muted-foreground" />
                            </div>
                        )}
                        {error && (
                            <div className="text-destructive text-xs flex justify-center w-full px-2">
                                <div className="text-center p-2 bg-destructive/10 rounded-lg max-w-full break-words">
                                    An error occurred. Check browser console.
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-3 bg-background border-t border-border/50">
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full items-center space-x-2 bg-muted/50 rounded-full border border-border/50 pr-1 pl-4 py-1 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all duration-300 shadow-inner"
                    >
                        <input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ask about my projects..."
                            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none h-9"
                            disabled={isLoading}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            disabled={isLoading || !input.trim()}
                            className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 shadow-md transition-transform active:scale-95 disabled:opacity-50"
                        >
                            <Send className="size-3.5" />
                        </Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    );
}
