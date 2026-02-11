import React from 'react';
import { ArrowRight, Layout, Users, Zap, CheckCircle2 } from 'lucide-react';

const TaskFlowLanding: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero */}
      <section className="pt-32 pb-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
          Streamline Your Team’s <br/>
          <span className="text-blue-600">Workflow</span> in One Hub
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          TaskFlow empowers remote teams to collaborate, track progress, and ship projects faster without the chaos.
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Book Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto max-w-6xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden bg-slate-50 aspect-video">
           <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl">
              TaskFlow Dashboard UI Placeholder
           </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Core Capabilities</h2>
                <h3 className="text-3xl font-bold">Everything you need to ship faster</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: Users,
                        title: "Real-time Collaboration",
                        desc: "Edit tasks and comment together in real-time. No more version conflicts."
                    },
                    {
                        icon: Layout,
                        title: "Visual Timelines",
                        desc: "Switch between Kanban, Gantt charts, and List views instantly."
                    },
                    {
                        icon: Zap,
                        title: "Deep Integrations",
                        desc: "Native sync with Slack, Github, and Google Drive fitting into your stack."
                    }
                ].map((feature, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
            <p className="text-slate-500 font-medium mb-8">Trusted by 2,000+ fast-growing companies</p>
            <div className="flex justify-center gap-12 grayscale opacity-50">
                {/* Placeholders for logos */}
                <div className="h-8 w-32 bg-slate-200 rounded" />
                <div className="h-8 w-32 bg-slate-200 rounded" />
                <div className="h-8 w-32 bg-slate-200 rounded" />
                <div className="h-8 w-32 bg-slate-200 rounded" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default TaskFlowLanding;
