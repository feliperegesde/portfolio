import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('PT');

  const t = {
    PT: {
      nav: { about: "Sobre", projects: "Projetos", experience: "Experiência", contact: "Contato" },
      badge: "DISPONÍVEL PARA OPORTUNIDADES",
      subtitle: "ENGENHARIA DE SOFTWARE · DADOS · INTELIGÊNCIA ARTIFICIAL",
      heroTitleLine1: "Olá, eu sou",
      heroTitleName: "Felipe",
      heroTitleRest: "Albuquerque.",
      heroDesc: "Graduando em Ciência da Computação na UFC, construindo produtos inteligentes na interseção entre dados, IA e software.",
      btnProjects: "Ver projetos",
      btnContact: "Entrar em contato",
      lab: "LABORATÓRIO DE SOFTWARE",
      loc1: "FORTALEZA, CEARÁ",
      loc2: "BRASIL",
      sec1Title: "Tecnologia com rigor técnico e impacto real.",
      sec1Desc: "Minha atuação combina engenharia de dados, aprendizado de máquina e desenvolvimento full-stack. Gosto de transformar problemas complexos em sistemas confiáveis, mensuráveis e preparados para escala.",
      techTitle: "TECNOLOGIAS & FERRAMENTAS",
      sec2Tag: "02 / TRABALHO SELECIONADO",
      sec2Title: "Projetos em destaque",
      sec2Desc: "Uma seleção de soluções aplicadas a dados, automação, IA e arquitetura distribuída.",
      projects: [
        {
          id: "01",
          title: "Job Market Scraping Pipeline",
          subtitle: "Automação e Dados",
          description: "Pipeline automatizado de multi-fontes para raspagem de dados de emprego em Python com Playwright, processamento em Pandas e interface interativa em Streamlit.",
          tags: ["Python", "Playwright", "Pandas", "Streamlit"],
          bg: "bg-blue-50/60 border-blue-100",
          badgeBg: "bg-blue-600 text-white",
          link: "https://github.com/feliperegesde/job-market-pipeline"
        },
        {
          id: "02",
          title: "MedQ Platform (IoHT)",
          subtitle: "Inteligência Artificial & Saúde",
          description: "Plataforma distribuída para saúde conectada, integrando autenticação biométrica, mensageria assíncrona via RabbitMQ e modelos preditivos em XGBoost.",
          tags: ["Python", "XGBoost", "RabbitMQ", "FastAPI"],
          bg: "bg-emerald-50/60 border-emerald-100",
          badgeBg: "bg-emerald-700 text-white",
          link: "https://github.com/felipe-albuquerque"
        },
        {
          id: "03",
          title: "AWS Cloud Data Pipeline",
          subtitle: "Arquitetura de Dados & Cloud",
          description: "Arquitetura desacoplada na AWS utilizando mensageria SQS/SNS, workers em EC2, armazenamento em S3 e auditoria CRUD em DynamoDB para datasets analíticos.",
          tags: ["AWS", "SQS/SNS", "DynamoDB", "Python", "S3"],
          bg: "bg-amber-50/60 border-amber-100",
          badgeBg: "bg-amber-700 text-white",
          link: "https://github.com/feliperegesde/multi-agent-rag-eval"
        },
        {
          id: "04",
          title: "Social Radar AI (Sentiment Bot)",
          subtitle: "APIs & NLP",
          description: "API backend de escuta social e análise de sentimento em redes sociais desenvolvida em FastAPI, Uvicorn e Python para processamento de streaming de texto.",
          tags: ["FastAPI", "Python", "NLP", "Uvicorn"],
          bg: "bg-rose-50/60 border-rose-100",
          badgeBg: "bg-rose-800 text-white",
          link: "https://github.com/feliperegesde/Social-Radar-AI-ou-Social-Listening-ML-Bot-"
        }
      ],
      sec3Tag: "03 / EXPERIÊNCIA",
      sec3Title: "Pesquisa e experiência profissional",
      experiences: [
        {
          id: "01",
          role: "Estagiário Summer Job (Automation, Data & AI)",
          company: "BTG Pactual",
          period: "2026",
          description: "Desenvolvimento de soluções orientadas a dados e automações, conectando necessidades de negócio a entregas técnicas eficientes."
        },
        {
          id: "02",
          role: "Pesquisador Bolsista (Projeto IoLife / MedQ)",
          company: "GREat / Universidade Federal do Ceará",
          period: "2025 – 2026",
          description: "Pesquisa aplicada em Internet of Health Things, biometria e modelos de aprendizado de máquina para sistemas de saúde conectada."
        },
        {
          id: "03",
          role: "Estagiário de Desenvolvimento Full-Stack (Projeto LTAD)",
          company: "LSBD / Lenovo",
          period: "2025",
          description: "Manutenção e engenharia de software para dispositivos inteligentes utilizando C++, TypeScript e CSS."
        }
      ],
      sec4Tag: "04 / CONTATO",
      sec4Title: "Vamos construir algo relevante juntos?",
      sec4Desc: "Estou aberto a oportunidades em Engenharia de Software, Dados e Machine Learning. Se meu perfil fizer sentido para o seu time, vamos conversar.",
      btnEmail: "Enviar um e-mail",
      footerText: "PROJETADO E DESENVOLVIDO COM ATENÇÃO AOS DETALHES.",
      scrollTop: "VOLTAR AO TOPO ↑",
      knowProject: "Conhecer projeto ↗"
    },
    EN: {
      nav: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
      badge: "AVAILABLE FOR OPPORTUNITIES",
      subtitle: "SOFTWARE ENGINEERING · DATA · ARTIFICIAL INTELLIGENCE",
      heroTitleLine1: "Hello, I am",
      heroTitleName: "Felipe",
      heroTitleRest: "Albuquerque.",
      heroDesc: "Computer Science undergraduate at UFC, building intelligent products at the intersection of data, AI, and software.",
      btnProjects: "View projects",
      btnContact: "Get in touch",
      lab: "SOFTWARE LAB",
      loc1: "FORTALEZA, CEARÁ",
      loc2: "BRAZIL",
      sec1Title: "Technology with technical rigor and real impact.",
      sec1Desc: "My work combines data engineering, machine learning, and full-stack development. I enjoy transforming complex problems into reliable, measurable, and scalable systems.",
      techTitle: "TECHNOLOGIES & TOOLS",
      sec2Tag: "02 / FEATURED WORK",
      sec2Title: "Featured projects",
      sec2Desc: "A selection of solutions applied to data, automation, AI, and distributed architecture.",
      projects: [
        {
          id: "01",
          title: "Job Market Scraping Pipeline",
          subtitle: "Automation & Data",
          description: "Automated multi-source pipeline for scraping job postings in Python with Playwright, Pandas processing, and an interactive Streamlit interface.",
          tags: ["Python", "Playwright", "Pandas", "Streamlit"],
          bg: "bg-blue-50/60 border-blue-100",
          badgeBg: "bg-blue-600 text-white",
          link: "https://github.com/feliperegesde/job-market-pipeline"
        },
        {
          id: "02",
          title: "MedQ Platform (IoHT)",
          subtitle: "Artificial Intelligence & Health",
          description: "Distributed platform for connected health, integrating biometric authentication, asynchronous messaging via RabbitMQ, and XGBoost predictive models.",
          tags: ["Python", "XGBoost", "RabbitMQ", "FastAPI"],
          bg: "bg-emerald-50/60 border-emerald-100",
          badgeBg: "bg-emerald-700 text-white",
          link: "https://github.com/felipe-albuquerque"
        },
        {
          id: "03",
          title: "AWS Cloud Data Pipeline",
          subtitle: "Data Architecture & Cloud",
          description: "Decoupled AWS architecture using SQS/SNS messaging, EC2 workers, S3 storage, and DynamoDB CRUD auditing for analytical datasets.",
          tags: ["AWS", "SQS/SNS", "DynamoDB", "Python", "S3"],
          bg: "bg-amber-50/60 border-amber-100",
          badgeBg: "bg-amber-700 text-white",
          link: "https://github.com/feliperegesde/multi-agent-rag-eval"
        },
        {
          id: "04",
          title: "Social Radar AI (Sentiment Bot)",
          subtitle: "APIs & NLP",
          description: "Social listening and sentiment analysis backend API developed with FastAPI, Uvicorn, and Python for text streaming processing.",
          tags: ["FastAPI", "Python", "NLP", "Uvicorn"],
          bg: "bg-rose-50/60 border-rose-100",
          badgeBg: "bg-rose-800 text-white",
          link: "https://github.com/feliperegesde/Social-Radar-AI-ou-Social-Listening-ML-Bot-"
        }
      ],
      sec3Tag: "03 / EXPERIENCE",
      sec3Title: "Research and professional experience",
      experiences: [
        {
          id: "01",
          role: "Summer Job Intern (Automation, Data & AI)",
          company: "BTG Pactual",
          period: "2026",
          description: "Development of data-driven solutions and automations, connecting business needs to efficient technical deliveries."
        },
        {
          id: "02",
          role: "Research Scholar (IoLife / MedQ Project)",
          company: "GREat / Federal University of Ceará",
          period: "2025 – 2026",
          description: "Applied research in Internet of Health Things, biometrics, and machine learning models for connected healthcare systems."
        },
        {
          id: "03",
          role: "Full-Stack Development Intern (LTAD Project)",
          company: "LSBD / Lenovo",
          period: "2025",
          description: "Software maintenance and engineering for smart devices using C++, TypeScript, and CSS."
        }
      ],
      sec4Tag: "04 / CONTACT",
      sec4Title: "Let's build something relevant together?",
      sec4Desc: "I am open to opportunities in Software Engineering, Data, and Machine Learning. If my profile fits your team, let's talk.",
      btnEmail: "Send an email",
      footerText: "DESIGNED AND DEVELOPED WITH ATTENTION TO DETAIL.",
      scrollTop: "BACK TO TOP ↑",
      knowProject: "View project ↗"
    }
  };

  const current = t[lang];

  const skills = [
    "Python", "PyTorch", "FastAPI", "React", "TypeScript", 
    "AWS", "Docker", "PostgreSQL", "RabbitMQ", "Git"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#0F172A] font-sans selection:bg-blue-600 selection:text-white">
      {/* Header / Navbar */}
      <header className="fixed top-0 w-full bg-[#FBFBFA]/90 backdrop-blur-md border-b border-slate-200/60 z-50">
        <div className="w-full px-8 md:px-16 h-20 flex justify-between items-center max-w-[1600px] mx-auto">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0F172A] text-white font-serif font-bold flex items-center justify-center rounded tracking-wider text-sm shadow-sm">
              FA
            </div>
            <span className="font-serif font-semibold tracking-tight text-lg text-slate-900">
              Felipe Albuquerque
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#sobre" className="hover:text-slate-950 transition-colors">{current.nav.about}</a>
            <a href="#projetos" className="hover:text-slate-950 transition-colors">{current.nav.projects}</a>
            <a href="#experiencia" className="hover:text-slate-950 transition-colors">{current.nav.experience}</a>
            <a href="#contato" className="hover:text-slate-950 transition-colors">{current.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-5 text-slate-700">
            <a href="https://github.com/feliperegesde" target="_blank" rel="noreferrer" className="p-2 hover:text-blue-600 transition-colors" title="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/felipe-albuquerque-66334b280" target="_blank" rel="noreferrer" className="p-2 hover:text-blue-600 transition-colors" title="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <button 
              onClick={() => setLang(lang === 'PT' ? 'EN' : 'PT')} 
              className="px-3 py-1 bg-slate-200/70 hover:bg-slate-300 text-xs font-mono font-semibold rounded transition-colors"
            >
              {lang === 'PT' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full px-8 md:px-16 pt-44 pb-28 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {current.badge}
          </div>
          
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-blue-700 uppercase">
              {current.subtitle}
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif font-normal tracking-tight text-slate-900 leading-[1.08]">
              {current.heroTitleLine1} <br />
              <span className="italic font-light">{current.heroTitleName}</span> {current.heroTitleRest}
            </h1>
          </div>

          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-light">
            {current.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projetos" className="px-6 py-3.5 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-sm">
              {current.btnProjects}
            </a>
            <a href="#contato" className="px-6 py-3.5 bg-white border border-slate-300 text-slate-800 rounded-lg font-medium hover:bg-slate-50 transition-all">
              {current.btnContact}
            </a>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-lg aspect-square bg-[#0B132B] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-slate-700/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-500/30 rounded-full"></div>
            
            <div className="flex justify-between items-start z-10">
              <span className="text-xs font-mono text-slate-400">{current.lab}</span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </div>

            <div className="text-center z-10 my-auto">
              <h2 className="text-7xl font-serif text-white tracking-widest">FA</h2>
            </div>

            <div className="flex justify-between items-end z-10 text-xs font-mono text-slate-400">
              <span>{current.loc1}</span>
              <span>{current.loc2}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-8 md:px-16 max-w-[1600px] mx-auto"><hr className="border-slate-200" /></div>

      {/* Sobre Mim */}
      <section id="sobre" className="w-full px-8 md:px-16 py-32 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono tracking-widest text-blue-700">01 / SOBRE</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            {current.sec1Title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            {current.sec1Desc}
          </p>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">{current.techTitle}</span>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {skills.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border border-slate-200/80 rounded-md text-sm font-mono text-slate-700 shadow-2xs hover:border-blue-400 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full px-8 md:px-16 max-w-[1600px] mx-auto"><hr className="border-slate-200" /></div>

      {/* Projetos em Destaque */}
      <section id="projetos" className="w-full px-8 md:px-16 py-32 max-w-[1600px] mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-widest text-blue-700">{current.sec2Tag}</span>
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight">
              {current.sec2Title}
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm text-sm font-light">
            {current.sec2Desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {current.projects.map((project, idx) => (
            <div key={idx} className={`p-10 rounded-2xl border ${project.bg} flex flex-col justify-between space-y-8 transition-all hover:shadow-md`}>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-500">{project.id}</span>
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full ${project.badgeBg}`}>
                    {project.subtitle}
                  </span>
                </div>

                <div className="py-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/80 border border-slate-200 shadow-inner flex items-center justify-center relative">
                    <div className="absolute inset-2 border border-slate-200/60 rounded-full"></div>
                    <span className="font-serif font-bold text-xl text-slate-800 tracking-wider">
                      {project.title.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-normal text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{project.description}</p>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-200/60">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-3 py-1 bg-white/80 border border-slate-200/60 rounded text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
                  {current.knowProject}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full px-8 md:px-16 max-w-[1600px] mx-auto"><hr className="border-slate-200" /></div>

      {/* Experiência & Pesquisa */}
      <section id="experiencia" className="w-full px-8 md:px-16 py-32 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-700">{current.sec3Tag}</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            {current.sec3Title}
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {current.experiences.map((exp, idx) => (
            <div key={idx} className="p-8 bg-white border border-slate-200/80 rounded-xl space-y-3 shadow-2xs">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-600">{exp.id}</span>
                  <h3 className="font-serif text-lg text-slate-900">{exp.company}</h3>
                </div>
                <span className="text-xs font-mono text-slate-500">{exp.period}</span>
              </div>
              <div className="text-xs font-mono text-blue-700 font-medium">{exp.role}</div>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer Banner */}
      <section id="contato" className="w-full px-8 md:px-16 pb-20 max-w-[1600px] mx-auto">
        <div className="bg-[#0B132B] text-white rounded-2xl p-12 sm:p-20 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 shadow-2xl border border-slate-800">
          <div className="space-y-6 max-w-2xl z-10">
            <span className="text-xs font-mono tracking-widest text-blue-400">{current.sec4Tag}</span>
            <h2 className="text-4xl sm:text-6xl font-serif tracking-tight leading-tight">
              {current.sec4Title}
            </h2>
            <p className="text-slate-300 font-light text-base leading-relaxed">
              {current.sec4Desc}
            </p>
            <div className="pt-4 flex flex-wrap gap-6 text-xs font-mono text-slate-400">
              <a href="https://github.com/feliperegesde" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GITHUB ↗</a>
              <a href="https://www.linkedin.com/in/felipe-albuquerque-66334b280" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN ↗</a>
              <a href="mailto:felipe08ra@gmail.com" className="hover:text-white transition-colors">felipe08ra@gmail.com ↗</a>
            </div>
          </div>

          <div className="z-10">
            <a href="mailto:felipe08ra@gmail.com" className="w-40 h-40 rounded-full bg-blue-600 hover:bg-blue-500 transition-all flex flex-col items-center justify-center text-white text-center p-4 shadow-xl group">
              <span className="text-xs font-mono font-medium">{current.btnEmail}</span>
            </a>
          </div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="max-w-[1600px] mx-auto pt-10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 gap-4 px-2">
          <p>© {new Date().getFullYear()} FELIPE ALBUQUERQUE. {current.footerText}</p>
          <button onClick={scrollToTop} className="hover:text-slate-900 transition-colors flex items-center gap-1">
            {current.scrollTop}
          </button>
        </div>
      </section>
    </div>
  );
}