import { Search, BrainCircuit } from 'lucide-react';
import { useNoteStore } from '../store/useNoteStore';

export const Layout = ({ children }) => {
    const searchQuery = useNoteStore((state) => state.searchQuery);
    const setSearchQuery = useNoteStore((state) => state.setSearchQuery);

    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30">
            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
                        <BrainCircuit className="w-8 h-8" />
                        <span>Synapse</span>
                    </div>

                    <div className="flex-1 max-w-md relative group">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search notes or tags..."
                            className="w-full bg-surface/50 hover:bg-surface focus:bg-surface border border-transparent focus:border-primary/50 rounded-xl py-2 pl-10 pr-4 text-sm transition-all outline-none placeholder:text-gray-500"
                        />
                    </div>

                    <div className="w-8" /> {/* Spacer for balance */}
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
};
