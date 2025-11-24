import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Mock AI function to generate tags based on content
const generateTags = (content) => {
    const tags = [];
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes('meeting') || lowerContent.includes('call') || lowerContent.includes('sync')) {
        tags.push('work');
    }
    if (lowerContent.includes('idea') || lowerContent.includes('think')) {
        tags.push('inspiration');
    }
    if (lowerContent.includes('todo') || lowerContent.includes('buy') || lowerContent.includes('get')) {
        tags.push('personal');
    }
    if (lowerContent.includes('code') || lowerContent.includes('bug') || lowerContent.includes('feature')) {
        tags.push('dev');
    }

    // Add a random "AI" tag if no obvious ones found, just for fun/demo
    if (tags.length === 0 && content.length > 10) {
        tags.push('general');
    }

    return tags;
};

export const useNoteStore = create(
    persist(
        (set) => ({
            notes: [],
            addNote: (content) => set((state) => {
                const newNote = {
                    id: crypto.randomUUID(),
                    content,
                    date: new Date().toISOString(),
                    tags: generateTags(content),
                };
                return { notes: [newNote, ...state.notes] };
            }),
            deleteNote: (id) => set((state) => ({
                notes: state.notes.filter((n) => n.id !== id),
            })),
            // Simple search implementation
            searchQuery: '',
            setSearchQuery: (query) => set({ searchQuery: query }),
        }),
        {
            name: 'ai-notes-storage',
        }
    )
);
