import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Features from './pages/Features';
import TaskFlowLanding from './pages/TaskFlowLanding';
import IndustryLanding from './pages/IndustryLanding';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Elvatix</Link>
                <div className="flex gap-6 text-sm">
                    <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link>
                    <Link to="/taskflow" className="hover:text-blue-400 transition-colors">TaskFlow</Link>
                    <Link to="/industry" className="hover:text-blue-400 transition-colors">Industry</Link>
                </div>
            </div>
        </nav>
        
        <main className="pt-20">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/features" element={<Features />} />
                <Route path="/taskflow" element={<TaskFlowLanding />} />
                <Route path="/industry" element={<IndustryLanding />} />
            </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
