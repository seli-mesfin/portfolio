import React from 'react';
/* 
  Ensure your images are in the src/assets folder.
  Double-check that the file is spelled 'certeficate.jpg' in your folder.
*/
import profileImg from './assets/profile.jpg'; 
import certImg from './assets/certeficate.jpg'; 

const Portfolio = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-200 font-sans selection:bg-cyan-400/30">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-[#22d3ee]">S. MESFIN</div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-[#22d3ee] transition">About</a>
          <a href="#projects" className="hover:text-[#22d3ee] transition">Projects</a>
          <a href="#achievements" className="hover:text-[#22d3ee] transition">Achievements</a>
          <a href="#contact" className="hover:text-[#22d3ee] transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 pt-12 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#22d3ee] font-mono mb-4 block tracking-widest uppercase">Selamawit Mesfin</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Junior Web Developer & <span className="text-[#10b981]">IS Student.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
            3rd Year Information Systems student at Bahir Dar University with a 3.32 CGPA. 
            I build impactful web applications and management systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-[#22d3ee] text-[#0a192f] px-8 py-4 rounded-full font-bold shadow-[0_0_45px_rgba(34,211,238,0.18)] hover:scale-105 transition-transform">
              View Work
            </a>
            {/* Added Resume Download Button */}
            <a 
              href="/Selamawit_Mesfin_CV.pdf" 
              download 
              className="border-2 border-[#22d3ee] text-[#22d3ee] px-8 py-4 rounded-full font-bold hover:bg-[#22d3ee]/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="relative group flex justify-center">
          <div className="absolute inset-0 bg-[#22d3ee]/20 rounded-full blur-3xl group-hover:bg-[#22d3ee]/30 transition"></div>
          <div className="w-80 h-80 rounded-full border-2 border-[#22d3ee]/50 overflow-hidden relative z-10 bg-slate-800 shadow-[0_0_45px_rgba(34,211,238,0.15)]">
              <img 
                src={profileImg} 
                alt="Selamawit Mesfin" 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-500"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=Profile+Photo"; }}
              />
          </div>
        </div>
      </header>

      {/* Technical Mission */}
      <section id="about" className="py-24 px-8 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-slate-900/50 p-12 rounded-3xl border border-slate-800 shadow-[0_0_45px_rgba(34,211,238,0.05)]">
            <h2 className="text-2xl font-bold mb-6 text-[#22d3ee]">Technical Mission</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              I specialize in developing management systems for the hospitality and 
              agricultural sectors using C#, SQL, and .NET 10. My current focus is 
              improving sesame and soya bean export tracking through digital tools.
            </p>
          </div>

          {/* New Extracurricular Section */}
          <div className="bg-slate-900/50 p-12 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-[#10b981]">Beyond Code</h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-[#10b981]">◈</span>
                <span><strong>Class Representative:</strong> Leading communication between IS students and faculty at BDU.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981]">◈</span>
                <span><strong>Anti-Drug Club:</strong> Active member at BDU Poly Campus advocating for student wellness.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981]">◈</span>
                <span><strong>Poly Art Club:</strong> Passionate about realistic pen and pencil sketching.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-white">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard 
            title="ምርት Tech" 
            tech="Next.js + Supabase" 
            desc="Agricultural marketplace connecting Ethiopian farmers and buyers." 
            link="https://mirt-tech-2fop.vercel.app/"
          />
          <ProjectCard 
            title="ምርጥ ጣዕም" 
            tech="React + Tailwind" 
            desc="Traditional catering marketplace for fresh Ethiopian dishes." 
            link="https://mirt-taem-frontend.vercel.app"
          />
          <ProjectCard 
            title="Inventory Pro" 
            tech="C# + .NET 10" 
            desc="Desktop management system with dashboard and full CRUD functionality." 
            link="#" 
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-white">Achievements</h2>
          <div className="max-w-4xl">
            <div className="bg-[#0a192f] p-8 rounded-3xl border border-[#22d3ee]/30 hover:border-[#22d3ee] transition flex flex-col md:flex-row gap-8 items-center shadow-xl">
              
              <div className="w-full md:w-64 h-48 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
                <img 
                  src={certImg} 
                  alt="Wise Women Coders Certificate" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=Certificate"; }}
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">Hackathon Finalist</h3>
                <p className="text-[#22d3ee] font-medium mb-2">Wise Women Coders 2026</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Secured 2nd place for excellence in web development. 
                  Developed a functional prototype connecting rural producers to urban markets.
                </p>
                <div className="mt-4 inline-block bg-[#22d3ee]/10 text-[#22d3ee] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  🥈 2nd Place
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Let’s connect</h2>
        <a href="mailto:selishama23@gmail.com" className="text-2xl font-bold text-[#22d3ee] hover:underline block mb-8">
          selishama23@gmail.com
        </a>
        <div className="flex justify-center gap-8">
           <a href="https://github.com/seli-mesfin" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition font-medium">GitHub</a>
           <a href="https://linkedin.com/in/selamawit-mesfin-08574935b" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition font-medium">LinkedIn</a>
        </div>
        <p className="mt-20 text-xs text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Selamawit Mesfin • Bahir Dar, Ethiopia
        </p>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, tech, desc, link }) => (
  <a 
    href={link} 
    target={link !== "#" ? "_blank" : "_self"} 
    rel="noreferrer"
    className="group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-[#22d3ee] transition-all flex flex-col justify-between hover:-translate-y-2 shadow-lg"
  >
    <div>
      <span className="text-xs font-mono text-[#22d3ee] mb-4 block uppercase tracking-widest">{tech}</span>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-400 mb-8 leading-relaxed">{desc}</p>
    </div>
    <div className="text-sm font-bold group-hover:text-[#22d3ee] transition text-slate-500 uppercase">
      {link !== "#" ? "Explore Demo →" : "Coming Soon"}
    </div>
  </a>
);

export default Portfolio;