import React from 'react';
import { ArrowRight, BarChart, Users, CheckCircle, Search } from 'lucide-react';

const IndustryLanding: React.FC = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-white">
             {/* Hero */}
            <section className="relative pt-32 pb-24 px-6 container mx-auto text-center">
                 <div className="inline-block px-4 py-2 bg-blue-900/40 rounded-full border border-blue-500/30 text-blue-400 font-semibold mb-6">
                    Voor Detacheringsbureaus
                 </div>
                 
                 <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                    Verdubbel je <span className="text-blue-500">respons</span>.
                 </h1>
                 
                 <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                    De AI-Recruitment Copilot die sourcing en outreach automatiseert. Vind de beste kandidaten in seconden, niet uren.
                 </p>
                 
                 <div className="flex justify-center gap-4">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20">
                        Bereken je ROI
                    </button>
                 </div>
                 
                 <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                    <div className="text-center font-bold text-xl">Randstad</div>
                    <div className="text-center font-bold text-xl">Yacht</div>
                    <div className="text-center font-bold text-xl">Adecco</div>
                    <div className="text-center font-bold text-xl">Manpower</div>
                 </div>
            </section>
            
            {/* Problem/Solution */}
            <section className="py-24 bg-slate-800/50">
                 <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Waarom traditionele sourcing niet meer werkt</h2>
                        <p className="text-slate-400 mb-8">
                            Detacheringsbureaus verliezen dagelijks uren aan handmatige taken terwijl de talentpool steeds minder reageert op generieke berichten.
                        </p>
                        
                        <div className="space-y-6">
                             {[
                                "Te veel handmatig werk met kopiëren/plakken",
                                "Lage respons rates (gemiddeld <15%)",
                                "Slechte kandidaatervaring door onpersoonlijke berichten"
                             ].map((issue, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border border-red-500/10">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mt-1">✕</div>
                                    <span className="text-slate-300 font-medium">{issue}</span>
                                </div>
                             ))}
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-400">De Elvatix Oplossing</h2>
                         <div className="space-y-6">
                             {[
                                { title: "Hyper-gepersonaliseerde AI Outreach", icon: Search },
                                { title: "Naadloze ATS Integratie", icon: Users },
                                { title: "Geautomatiseerde Follow-ups", icon: BarChart }
                             ].map((sol, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 bg-blue-900/10 rounded-lg border border-blue-500/20">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 mb-4">
                                        <sol.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                                        <p className="text-slate-400">Elvatix analyseert profielen en schrijft unieke berichten die converteren.</p>
                                    </div>
                                </div>
                             ))}
                        </div>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default IndustryLanding;
