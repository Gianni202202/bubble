import React from 'react';
import { ArrowRight, Sparkles, Zap, MessageSquare, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
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

      {/* Feature Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold mb-6">Stop met handmatig kopiëren en plakken.</h2>
                <p className="text-slate-400 text-lg mb-8">
                  Elvatix integreert naadloos in je huidige workflow. Geen tabbladen meer wisselen, geen generieke templates meer sturen.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "1-Click InMail Generatie",
                    "Deep Personalization Engine",
                    "Naadloze ATS Integratie"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/features" className="inline-flex items-center gap-2 text-blue-400 font-semibold mt-8 hover:text-blue-300 group">
                  Ontdek alle features
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 translate-y-8">
                   <Linkedin className="w-8 h-8 text-blue-400 mb-4" />
                   <h3 className="font-semibold mb-2">LinkedIn Integratie</h3>
                   <p className="text-sm text-slate-400">Werkt direct in je browser via onze Chrome extensie.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50">
                   <MessageSquare className="w-8 h-8 text-green-400 mb-4" />
                   <h3 className="font-semibold mb-2">Slimme Templates</h3>
                   <p className="text-sm text-slate-400">Sla je beste pitches op en laat AI ze personaliseren.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
