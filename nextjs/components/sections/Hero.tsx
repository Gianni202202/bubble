import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 container mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Nieuw: GPT-4o Integratie</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Schrijf persoonlijke <span className="text-blue-500">InMails</span> in seconden
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          De AI-recruitment copilot die uren handmatig werk bespaart. Personaliseer je outreach direct in LinkedIn met één klik.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group">
            Start Gratis Trial
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            Bekijk Demo
          </button>
        </div>
      </div>

      {/* Mock Interface Preview */}
      <div className="mt-20 relative max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-2 shadow-2xl">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
             <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-slate-800 rounded w-1/4" />
                  <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 text-slate-300 font-mono text-sm leading-relaxed">
                    "Hoi Mark, ik zag je recente post over AI-implementaties bij Vibe Group. Gezien je achtergrond in Software Engineering en je ervaring bij TechCorp, denk ik dat onze Senior AI rol perfect bij je past..."
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
