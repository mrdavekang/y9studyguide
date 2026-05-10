import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Presentation, Terminal, Sparkles, ShieldCheck, Binary } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#FBBF24] selection:text-black">
      {/* Navbar */}
      <nav className="border-b-4 border-black bg-white px-6 py-4 flex justify-between items-center shadow-[0_4px_0px_0px_rgba(0,0,0,1)] relative z-50">
        <div className="flex items-center gap-3">
          <div className="bg-[#3B82F6] p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Terminal className="text-white" size={24} />
          </div>
          <span className="font-serif font-black italic text-xl tracking-tighter">CS_Revision</span>
        </div>
        <div className="hidden sm:flex gap-4">
          <Link href="/presentation" className="font-bold border-2 border-transparent hover:border-black hover:bg-[#FBBF24] px-4 py-2 transition-all">
            Modules
          </Link>
          <a href="#" className="font-bold border-2 border-transparent hover:border-black hover:bg-[#FBBF24] px-4 py-2 transition-all">
            About
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center relative">
        <div className="absolute top-10 right-10 hidden lg:block opacity-40">
          <Binary size={120} />
        </div>
        <div className="absolute bottom-20 left-10 hidden lg:block opacity-40">
          <Sparkles size={80} className="text-[#3B82F6]" />
        </div>

        <div className="space-y-4 max-w-4xl relative z-10">
          <div className="inline-block bg-[#FBBF24] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-1 mb-6 transform -rotate-2">
            <span className="font-bold uppercase tracking-wider text-sm">Year 9 Computer Science</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight italic tracking-tighter text-[#1A1A1A]">
            Ace Your KS3 <br />
            <span className="text-white styling-text-outline drop-shadow-[4px_4px_0px_#3B82F6]">Exams.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mt-6 mb-10 max-w-2xl mx-auto border-l-4 border-[#3B82F6] pl-6 text-left">
            An interactive, brutalist study guide covering Cybersecurity, Logic Gates, Python Basics, Selection, Arrays, and HTML & CSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link 
              href="/presentation" 
              className="group flex items-center gap-3 px-8 py-4 font-bold text-xl text-black border-4 border-black bg-[#FBBF24] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-[0_0] active:translate-x-[8px] active:translate-y-[8px]"
            >
              Start Revision <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Bento Grid */}
      <section className="bg-white border-y-4 border-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-12 flex items-center gap-4">
            <BookOpen className="text-[#3B82F6]" size={40} /> Modules Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-[#FAF9F6] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2">
              <div className="bg-black text-[#FBBF24] font-mono text-xs font-bold inline-block px-3 py-1 mb-4 shadow-[2px_2px_0px_0px_#3B82F6]">MODULE 01</div>
              <h3 className="text-2xl font-black italic mb-3">Cybersecurity</h3>
              <p className="font-medium text-gray-700">Learn to spot and defend against Phishing, Blagging, Pharming, and Shoulder Surfing.</p>
            </div>
            
            {/* Module 2 */}
            <div className="bg-[#3B82F6] text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2">
              <div className="bg-white text-black font-mono text-xs font-bold inline-block px-3 py-1 mb-4 shadow-[2px_2px_0px_0px_#FBBF24]">MODULE 02</div>
              <h3 className="text-2xl font-black italic mb-3">Logic Gates</h3>
              <p className="font-medium">Master AND, OR, and NOT gates along with their corresponding truth tables.</p>
            </div>

            {/* Module 3 */}
            <div className="bg-[#FBBF24] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 lg:col-span-2 xl:col-span-1">
              <div className="bg-black text-white font-mono text-xs font-bold inline-block px-3 py-1 mb-4 shadow-[2px_2px_0px_0px_#3B82F6]">MODULE 03 & 04</div>
              <h3 className="text-2xl font-black italic mb-3">Python Programming</h3>
              <p className="font-medium text-black/80 flex flex-col gap-2">
                <span>• Variables & I/O</span>
                <span>• Data Types</span>
                <span>• Selection (If/Else)</span>
                <span>• Lists/Arrays</span>
              </p>
            </div>
            
             {/* Module 4 */}
             <div className="bg-[#FAF9F6] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 lg:col-span-2">
              <div className="bg-[#3B82F6] text-white font-mono text-xs font-bold inline-block px-3 py-1 mb-4 shadow-[2px_2px_0px_0px_#000]">MODULE 05</div>
              <h3 className="text-2xl font-black italic mb-3">Web Development</h3>
              <p className="font-medium text-gray-700">Understand the foundational structure of the web using HTML elements and styling them beautifully with CSS rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#FBBF24] p-2 border-2 border-white shadow-[2px_2px_0px_0px_#FFF]">
              <Presentation className="text-black" size={24} />
            </div>
            <span className="font-serif font-black italic tracking-tighter text-xl">CS_Revision</span>
          </div>
          <p className="font-mono text-sm opacity-60">Created for Year 9 Computer Science.</p>
        </div>
      </footer>
    </main>
  );
}
