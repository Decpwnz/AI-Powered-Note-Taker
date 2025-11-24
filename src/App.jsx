import { Layout } from './components/Layout';
import { NoteInput } from './components/NoteInput';
import { MasonryGrid } from './components/MasonryGrid';

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Capture Your Thoughts
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            AI-powered note taking that organizes itself. Just start typing.
          </p>
        </div>

        <NoteInput />
        <MasonryGrid />
      </div>
    </Layout>
  );
}

export default App;
