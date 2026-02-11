import React from 'react';
import { Settings, MessageSquare, Clock, BarChart2 } from 'lucide-react';

const Features: React.FC = () => {
    return (
        <div className="bg-slate-900 min-h-screen text-white pt-24">
             <header className="py-20 text-center container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    Persoonlijke benadering op schaal <br/>
                    met de <span className="text-blue-500">AI InMail Copilot</span>.
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
                     Bespaar 4-6 uur per week op sourcing en outreach. Verstuur hyper-gepersonaliseerde berichten die kandidaten daadwerkelijk beantwoorden.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { label: "Tijdswinst", val: "4-6 uur p/w" },
                        { label: "Respons Rate", val: "+45% stijging" },
                        { label: "Setup Tijd", val: "< 2 minuten" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
             </header>

             <section className="py-24 bg-slate-950">
                 <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-16 text-center">Intelligente Modules voor Top-tier Recruiters</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Settings,
                                title: "Custom GPT Instructions",
                                desc: "Train Elvatix op jouw specifieke tone-of-voice en recruitment stijl."
                            },
                            {
                                icon: MessageSquare,
                                title: "Smart Follow-ups",
                                desc: "Automatische herinneringen en opvolgberichten wanneer kandidaten niet reageren."
                            },
                            {
                                icon: BarChart2,
                                title: "Analytics Dashboard",
                                desc: "Inzicht in welke berichten het beste presteren en waar je kunt optimaliseren."
                            },
                            {
                                icon: Clock,
                                title: "CRM/ATS Sync",
                                desc: "Synchroniseer automatisch alle activiteiten met systemen zoals Bullhorn of Salesforce."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                 </div>
             </section>
        </div>
    );
};

export default Features;
