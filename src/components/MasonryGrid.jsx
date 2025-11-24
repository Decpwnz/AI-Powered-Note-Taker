import Masonry from 'react-masonry-css';
import { useNoteStore } from '../store/useNoteStore';
import { NoteCard } from './NoteCard';
import { motion, AnimatePresence } from 'framer-motion';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

export const MasonryGrid = () => {
    const notes = useNoteStore((state) => state.notes);
    const searchQuery = useNoteStore((state) => state.searchQuery);

    const filteredNotes = notes.filter(note =>
        note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="w-full">
            <AnimatePresence>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-4"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {filteredNotes.map((note) => (
                        <div key={note.id} className="mb-4">
                            <NoteCard note={note} />
                        </div>
                    ))}
                </Masonry>
            </AnimatePresence>

            {filteredNotes.length === 0 && (
                <div className="text-center text-gray-500 mt-20">
                    <p>No notes found. Start typing to create one!</p>
                </div>
            )}
        </div>
    );
};
