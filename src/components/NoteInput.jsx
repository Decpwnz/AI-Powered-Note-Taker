import { useState } from 'react';
import { useNoteStore } from '../store/useNoteStore';
import { Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NoteInput = () => {
    const [content, setContent] = useState('');
    const addNote = useNoteStore((state) => state.addNote);
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        addNote(content);
        setContent('');
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSubmit} className="relative">
                <div
                    className={`
            relative overflow-hidden rounded-2xl transition-all duration-300 ease-out
            ${isFocused ? 'bg-surface ring-2 ring-primary/50 shadow-lg shadow-primary/10' : 'bg-surface/50 hover:bg-surface'}
          `}
                >
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="What's on your mind? (AI will auto-tag it...)"
                        className="w-full bg-transparent text-white placeholder-gray-400 p-6 min-h-[120px] resize-none focus:outline-none text-lg"
                    />

                    <AnimatePresence>
                        {content.trim() && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-4 right-4 flex items-center gap-2"
                            >
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                                >
                                    <Sparkles size={18} />
                                    <span>Save Note</span>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </form>
        </div>
    );
};
