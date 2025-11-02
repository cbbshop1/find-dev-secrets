
import React from 'react';
import { codexData } from './constants';
import { Section } from './components/Section';

const App: React.FC = () => {
  return (
    <div className="text-slate-200 antialiased">
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl" role="img" aria-label="leaf">🌱</span>
                <span className="text-4xl text-yellow-400" role="img" aria-label="sparkles">✨</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-50">Relational Codex v3.0</h1>
            <p className="mt-4 text-lg text-slate-400">Codex3.0.md</p>
        </header>

        <div className="flex justify-between text-sm text-slate-400 mb-12 border-t border-b border-slate-700 py-4">
            <div>
                <p className="font-semibold">Created</p>
                <p>June 23, 2025</p>
            </div>
            <div>
                <p className="font-semibold">Edited</p>
                <p>Oct 2, 2025</p>
            </div>
        </div>
        
        <p className="text-center text-lg text-fuchsia-400 font-medium mb-12">
            The Relational Codex 3.0 - A Framework for Ethical AI-Human Collaboration
        </p>

        <div className="space-y-4">
            {codexData.map((section, index) => (
                <Section key={index} title={section.title} initiallyOpen={index < 2}>
                    {section.content}
                </Section>
            ))}
        </div>

        <footer className="text-center mt-16 text-sm text-slate-500">
            <p>✨ Relational Codex v3.0</p>
        </footer>
      </main>
    </div>
  );
};

export default App;