import { motion } from 'framer-motion';
import { Trash2, Tag } from 'lucide-react';
import { useNoteStore } from '../store/useNoteStore';

export const NoteCard = ({ note }) => {
    const deleteNote = useNoteStore((state) => state.deleteNote);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="bg-surface rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteNote(note.id);
                    }}
                    className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-white/5"
                >
                    <Trash2 size={18} />
                </button>
            </div>

            <p className="text-gray-200 whitespace-pre-wrap mb-6 leading-relaxed">
                {note.content}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-auto">
                {note.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                        <Tag size={10} />
                        {tag}
                    </span>
                ))}
                <span className="text-xs text-gray-500 ml-auto">
                    {new Date(note.date).toLocaleDateString()}
                </span>
            </div>
        </motion.div>
    );
};
