import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Brain, LayoutDashboard, BarChart3, Megaphone, CheckSquare, Menu, X, Zap, Users, TrendingUp, Clock, Shield, Star, ChevronRight, Play, Award, Globe, Cpu, Database } from 'lucide-react'
import { useState } from 'react'

const AMBER = '#f59e0b'
const AMBER_DIM = 'rgba(245,158,11,0.12)'
const AMBER_BORDER = 'rgba(245,158,11,0.3)'
const CARD = 'rgba(255,255,255,0.04)'
const BORDER = 'rgba(255,255,255,0.08)'

// ── NAVBAR ───────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Überblick' },
    { to: '/features', label: 'Features' },
    { to: '/team', label: 'Team' },
    { to: '/operationen', label: 'Operationen' },
    { to: '/marketing-vertrieb', label: 'Preise' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
            <Brain size={18} className="text-black" />
          </div>
          <span className="font-bold text-white text-lg">TaskMate<span className="gradient-text">AI</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive}) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'text-amber-400 bg-amber-400/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`
            }>{l.label}</NavLink>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Anmelden</a>
          <a href="#" className="px-4 py-2 rounded-xl text-black text-sm font-bold transition-opacity hover:opacity-90" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>Kostenlos starten</a>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && (
        <div className="md:hidden mt-2 glass rounded-2xl px-4 py-4 max-w-6xl mx-auto space-y-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to==='/'} onClick={() => setOpen(false)}
              className={({isActive}) => `block px-4 py-2 rounded-lg text-sm font-medium ${isActive ? 'text-amber-400 bg-amber-400/10' : 'text-white/60'}`}
            >{l.label}</NavLink>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <a href="#" className="flex-1 text-center py-2 text-sm text-white/60">Anmelden</a>
            <a href="#" className="flex-1 text-center py-2 rounded-xl text-black text-sm font-bold" style={{background:AMBER}}>Starten</a>
          </div>
        </div>
      )}
    </nav>
  )
}

// ── FOOTER ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="mt-20 border-t py-10 text-center text-sm" style={{borderColor:BORDER,color:'rgba(255,255,255,0.3)'}}>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <Link to="/datenschutz" className="hover:text-amber-400 transition-colors">Datenschutz</Link>
        <Link to="/impressum" className="hover:text-amber-400 transition-colors">Impressum</Link>
        <span>TaskMateAI &copy; 2025</span>
      </div>
    </footer>
  )
}

// ── HOME ─────────────────────────────────────────────────────────────────
function Home() {
  const stats = [
    { value: '50K+', label: 'Aktive Teams' },
    { value: '2M+', label: 'Erledigte Aufgaben' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9★', label: 'Ø Bewertung' },
  ]
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8" style={{color:'rgba(255,255,255,0.5)'}}>
          <Zap size={14} style={{color:AMBER}} />
          KI-gestütztes Projektmanagement der nächsten Generation
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
          Projekte smarter<br/><span className="gradient-text">managen mit KI</span>
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{color:'rgba(255,255,255,0.5)'}}>
          TaskMateAI automatisiert Workflows, priorisiert Aufgaben intelligent und gibt Ihrem Team die Werkzeuge, die wirklich zählen.
        </p>

        {/* Hero Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden mx-auto max-w-4xl" style={{border:`1px solid ${AMBER_BORDER}`}}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Analytics Dashboard"
            className="w-full object-cover"
            style={{height:'360px'}}
          />
          <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(17,16,16,0.8) 0%, transparent 60%)'}}>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
                <Play size={18} className="text-black" fill="black"/>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Demo ansehen</div>
                <div className="text-xs" style={{color:'rgba(255,255,255,0.5)'}}>2 Minuten</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Widget */}
        <div className="glass rounded-2xl p-6 max-w-2xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
              <Brain size={16} className="text-black"/>
            </div>
            <span className="text-sm font-semibold text-white">TaskMate KI-Assistent</span>
            <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
          </div>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl rounded-tl-sm px-4 py-3 max-w-xs" style={{background:'rgba(255,255,255,0.06)',color:'rgba(255,255,255,0.7)'}}>
              Guten Morgen! Du hast 5 überfällige Aufgaben. Soll ich priorisieren?
            </div>
            <div className="rounded-xl rounded-tr-sm px-4 py-3 max-w-xs ml-auto text-right" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:'rgba(255,255,255,0.9)'}}>
              Ja, bitte priorisiere und erstelle eine Zusammenfassung.
            </div>
            <div className="rounded-xl rounded-tl-sm px-4 py-3 max-w-sm" style={{background:'rgba(255,255,255,0.06)',color:'rgba(255,255,255,0.7)'}}>
              ✅ Erledigt! Die 3 kritischen Aufgaben sind oben.
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <input className="flex-1 rounded-xl px-4 py-2 text-sm outline-none" style={{background:'rgba(255,255,255,0.06)',border:`1px solid ${BORDER}`,color:'rgba(255,255,255,0.7)'}} placeholder="Frage den KI-Assistenten…"/>
            <button className="px-4 py-2 rounded-xl text-black text-sm font-bold" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>→</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/features" className="px-8 py-4 rounded-2xl text-black font-bold text-lg hover:opacity-90 transition-opacity" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>Features entdecken</Link>
          <a href="#" className="px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-colors">Demo ansehen</a>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
            <div className="text-sm" style={{color:'rgba(255,255,255,0.4)'}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Social proof strip */}
      <div className="max-w-4xl mx-auto mt-16">
        <p className="text-center text-sm mb-6" style={{color:'rgba(255,255,255,0.3)'}}>Vertraut von Teams bei</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {['Google', 'Shopify', 'Notion', 'Figma', 'Stripe'].map(b => (
            <span key={b} className="text-lg font-bold" style={{color:'rgba(255,255,255,0.2)'}}>{b}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-24">
        <div className="glass rounded-3xl p-12 text-center" style={{background:`linear-gradient(135deg,${AMBER_DIM},rgba(217,119,6,0.08))`}}>
          <h2 className="text-4xl font-black mb-4 text-white">Bereit für smarteres Arbeiten?</h2>
          <p className="mb-8" style={{color:'rgba(255,255,255,0.5)'}}>Starten Sie kostenlos – keine Kreditkarte erforderlich.</p>
          <a href="#" className="inline-block px-10 py-4 rounded-2xl text-black font-bold text-lg hover:opacity-90 transition-opacity" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>Jetzt kostenlos starten</a>
        </div>
      </div>
    </div>
  )
}

// ── FEATURES PAGE ─────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      title: 'KI-Aufgabenpriorisierung',
      desc: 'Unsere KI analysiert Fristen, Abhängigkeiten und Teamkapazitäten — und schlägt immer die richtige Reihenfolge vor. Nie wieder raten, was als nächstes dran ist.',
      img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      badge: 'KI-Powered',
      icon: <Brain size={20}/>,
    },
    {
      title: 'Intuitive Kanban-Boards',
      desc: 'Drag & Drop, anpassbare Spalten und automatische WIP-Limits. Vom Backlog bis zum Deployment — alles auf einem Board sichtbar.',
      img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
      badge: 'Produktivität',
      icon: <LayoutDashboard size={20}/>,
    },
    {
      title: 'Echtzeit-Kollaboration',
      desc: 'Kommentare, @Mentions, geteilte Dokumente und Live-Cursor. Ihr Team arbeitet synchron — egal ob im Büro oder remote.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      badge: 'Team',
      icon: <Users size={20}/>,
    },
    {
      title: 'Analytics & Reports',
      desc: 'Burndown Charts, Velocity Tracking, Zeitauswertungen — alle Daten die Sie brauchen um Entscheidungen zu treffen, nicht nur Meetings zu füllen.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      badge: 'Insights',
      icon: <BarChart3 size={20}/>,
    },
    {
      title: 'Workflow-Automatisierung',
      desc: 'Erstellen Sie Regeln: "Wenn Aufgabe abgeschlossen → Team benachrichtigen → nächste Phase starten". Wiederholt sich täglich ohne Ihr Zutun.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      badge: 'Automation',
      icon: <Zap size={20}/>,
    },
    {
      title: 'Zeiterfassung',
      desc: 'Ein-Klick-Timer direkt an der Aufgabe. Automatische Berichte, Projektbudgets und Integration mit Ihrem Abrechnungssystem.',
      img: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&q=80',
      badge: 'Tracking',
      icon: <Clock size={20}/>,
    },
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Alles was Ihr Team<br/><span className="gradient-text">wirklich braucht</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.5)'}}>
            Keine Feature-Überladung. Nur die Werkzeuge, die nachweislich funktionieren — powered by KI.
          </p>
        </div>

        {/* Feature list with images */}
        <div className="space-y-24">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i%2===0?'md:flex-row':'md:flex-row-reverse'} gap-12 items-center`}>
              {/* Image */}
              <div className="flex-1 relative rounded-2xl overflow-hidden" style={{border:`1px solid ${BORDER}`}}>
                <img src={f.img} alt={f.title} className="w-full object-cover" style={{height:'280px'}}/>
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(17,16,16,0.5) 0%, transparent 50%)'}}/>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-black" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
                  {f.badge}
                </div>
              </div>
              {/* Text */}
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:AMBER_DIM,color:AMBER}}>
                  {f.icon}
                </div>
                <h2 className="text-3xl font-black text-white mb-4">{f.title}</h2>
                <p className="text-lg leading-relaxed mb-6" style={{color:'rgba(255,255,255,0.5)'}}>
                  {f.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold" style={{color:AMBER}}>
                  Mehr erfahren <ChevronRight size={16}/>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div className="mt-24 glass rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-black text-white mb-2">Verbindet sich mit Ihrem Stack</h3>
          <p className="mb-8" style={{color:'rgba(255,255,255,0.5)'}}>100+ Integrationen: Slack, GitHub, Jira, Google Drive, Figma und viele mehr.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'Slack', icon: <Globe size={24}/> },
              { name: 'GitHub', icon: <Cpu size={24}/> },
              { name: 'Jira', icon: <Database size={24}/> },
              { name: 'Figma', icon: <Award size={24}/> },
              { name: 'Drive', icon: <BarChart3 size={24}/> },
              { name: 'Zoom', icon: <Users size={24}/> },
            ].map(int => (
              <div key={int.name} className="glass rounded-xl p-4 flex flex-col items-center gap-2" style={{color:'rgba(255,255,255,0.5)'}}>
                {int.icon}
                <span className="text-xs font-medium text-white">{int.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── TEAM PAGE ─────────────────────────────────────────────────────────────
function Team() {
  const team = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Co-Gründerin',
      bio: 'Ehemalige Google PM. 15 Jahre Erfahrung in der Produktentwicklung. Bekannt dafür, komplexe Probleme in einfache Lösungen zu verwandeln.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      location: 'San Francisco',
    },
    {
      name: 'Marcus Williams',
      role: 'CTO & Co-Gründer',
      bio: 'Ex-Stripe Engineer. Spezialist für skalierbare Systeme und KI/ML. Hat bereits zwei Startups bis zur Akquisition geführt.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      location: 'New York',
    },
    {
      name: 'Sarah Martinez',
      role: 'VP of Product',
      bio: 'Zuvor bei Asana und Monday.com. Leidenschaftlich für UX und nutzerorientiertes Design. Mutter von 2 Kindern, Hobby-Pianistin.',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
      location: 'Berlin',
    },
    {
      name: 'David Park',
      role: 'VP of Engineering',
      bio: 'Aufgebaut skalierbare Systeme bei Meta und Netflix. Experte für verteilte Architekturen und KI-Infrastruktur.',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      location: 'Seoul',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Design',
      bio: 'Design Lead bei Figma. Ihr Mantra: Schönheit und Funktion schließen sich nicht aus — sie bedingen einander.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      location: 'London',
    },
    {
      name: 'Tom Fischer',
      role: 'Head of Sales',
      bio: 'Aufgebaut Enterprise-Sales-Teams bei Salesforce und HubSpot. Versteht wie Menschen wirklich Entscheidungen treffen.',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      location: 'München',
    },
  ]

  const values = [
    { icon: <Zap size={22}/>, title: 'Schnell handeln', desc: 'Wir glauben an schnelles Lernen durch Handeln. Perfektion kommt mit der Zeit.' },
    { icon: <Users size={22}/>, title: 'Team first', desc: 'Die besten Ideen entstehen in der Gruppe. Wir feiern gemeinsame Erfolge.' },
    { icon: <Brain size={22}/>, title: 'Neugier als Wert', desc: 'Wir hinterfragen den Status quo — jeden Tag, in jedem Bereich.' },
    { icon: <Globe size={22}/>, title: 'Global denken', desc: 'Unser Team arbeitet aus 15 Ländern. Diversität ist unser Wettbewerbsvorteil.' },
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16 fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Das Team hinter<br/><span className="gradient-text">TaskMateAI</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.5)'}}>
            Wir sind 120+ Menschen aus 15 Ländern — vereint durch die Mission, Projektmanagement endlich intelligent zu machen.
          </p>
        </div>

        {/* Office photo */}
        <div className="rounded-3xl overflow-hidden mb-20" style={{border:`1px solid ${BORDER}`}}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="TaskMateAI Office"
            className="w-full object-cover"
            style={{height:'400px'}}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            {v:'2019', l:'Gegründet'},
            {v:'120+', l:'Mitarbeiter'},
            {v:'15', l:'Länder'},
            {v:'50K+', l:'Teams weltweit'},
          ].map(s => (
            <div key={s.l} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-black gradient-text mb-1">{s.v}</div>
              <div className="text-sm" style={{color:'rgba(255,255,255,0.4)'}}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Team grid */}
        <h2 className="text-3xl font-black text-white mb-10">Führungsteam</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {team.map(m => (
            <div key={m.name} className="glass rounded-2xl overflow-hidden hover:bg-white/8 transition-colors">
              <img src={m.img} alt={m.name} className="w-full object-cover object-top" style={{height:'220px'}}/>
              <div className="p-5">
                <div className="text-xs font-bold mb-1" style={{color:AMBER}}>{m.role}</div>
                <h3 className="font-bold text-white text-lg mb-2">{m.name}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{color:'rgba(255,255,255,0.5)'}}>{m.bio}</p>
                <div className="flex items-center gap-1 text-xs" style={{color:'rgba(255,255,255,0.3)'}}>
                  <Globe size={12}/> {m.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <h2 className="text-3xl font-black text-white mb-10 text-center">Unsere Werte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {values.map(v => (
            <div key={v.title} className="glass rounded-2xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:AMBER_DIM,color:AMBER}}>{v.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{v.title}</h3>
                <p className="text-sm" style={{color:'rgba(255,255,255,0.5)'}}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="glass rounded-3xl p-12 text-center" style={{background:`linear-gradient(135deg,${AMBER_DIM},rgba(217,119,6,0.08))`}}>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
            alt="Join our team"
            className="w-full rounded-2xl object-cover mb-8"
            style={{height:'240px'}}
          />
          <h2 className="text-3xl font-black text-white mb-3">Werden Sie Teil des Teams</h2>
          <p className="mb-6" style={{color:'rgba(255,255,255,0.5)'}}>Wir suchen talentierte Menschen, die mit uns die Zukunft der Arbeit gestalten wollen.</p>
          <a href="#" className="inline-block px-8 py-3 rounded-xl text-black font-bold hover:opacity-90 transition-opacity" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>Offene Stellen ansehen</a>
        </div>
      </div>
    </div>
  )
}

// ── OPERATIONEN ──────────────────────────────────────────────────────────
function Operationen() {
  const tools = [
    { icon: <CheckSquare size={20}/>, title: 'Aufgabenverwaltung', desc: 'Erstellen, zuweisen und verfolgen Sie Aufgaben mit Prioritäten, Fristen und Abhängigkeiten.' },
    { icon: <LayoutDashboard size={20}/>, title: 'Kanban-Boards', desc: 'Visualisieren Sie Workflows mit anpassbaren Kanban-Boards für jedes Team.' },
    { icon: <Clock size={20}/>, title: 'Sprint-Planung', desc: 'Agile Sprints planen und mit KI-Unterstützung optimal staffeln.' },
    { icon: <Users size={20}/>, title: 'Ressourcenplanung', desc: 'Team-Auslastung im Blick behalten und Ressourcen effizient zuteilen.' },
    { icon: <Zap size={20}/>, title: 'Automatisierungen', desc: 'Wiederkehrende Aufgaben automatisch erstellen, zuweisen und abschließen.' },
    { icon: <Brain size={20}/>, title: 'KI-Vorschläge', desc: 'Der Assistent schlägt die nächsten Schritte proaktiv vor, bevor Sie fragen.' },
  ]
  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 fade-up">
        <h1 className="text-5xl font-black mb-4 text-white">Operationen & <span className="gradient-text">Workflows</span></h1>
        <p className="text-xl max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.5)'}}>Alle Werkzeuge für reibungslose Abläufe — von der Aufgabe bis zum abgeschlossenen Projekt.</p>
      </div>
      <div className="mb-16 rounded-2xl overflow-hidden" style={{border:`1px solid ${BORDER}`}}>
        <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80" alt="Kanban Board" className="w-full object-cover" style={{height:'320px'}}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(t => (
          <div key={t.title} className="glass rounded-2xl p-6 hover:bg-white/8 transition-colors">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:AMBER_DIM,color:AMBER}}>{t.icon}</div>
            <h3 className="font-bold text-white mb-2">{t.title}</h3>
            <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.5)'}}>{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── MARKETING & VERTRIEB ─────────────────────────────────────────────────
function MarketingVertrieb() {
  const plans = [
    { name: 'Starter', price: '0€', period: '/Monat', features: ['5 Projekte', '10 Teammitglieder', 'Basis-KI-Vorschläge', 'Kanban-Boards'], highlight: false },
    { name: 'Pro', price: '19€', period: '/Nutzer/Monat', features: ['Unbegrenzte Projekte', 'Unbegrenzte Mitglieder', 'Vollständige KI-Integration', 'Erweiterte Analytics', 'Priority Support'], highlight: true },
    { name: 'Enterprise', price: 'Individuell', period: '', features: ['Alles aus Pro', 'SSO & SAML', 'Dedizierter Account Manager', 'SLA-Garantie', 'On-Premise Option'], highlight: false },
  ]
  const testimonials = [
    { name: 'Julia K.', role: 'Product Manager bei Zalando', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', text: 'TaskMateAI hat unsere Sprint-Planung um 60% beschleunigt. Die KI-Priorisierung ist einfach genial.' },
    { name: 'Markus T.', role: 'CTO bei N26', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', text: 'Endlich ein Tool, das sich dem Team anpasst — nicht umgekehrt. Genau das haben wir gesucht.' },
    { name: 'Anika S.', role: 'Freelance Designer', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', text: 'Als Solo-Freelancerin spare ich 2 Stunden täglich. Der KI-Assistent kennt meine Arbeitsweise.' },
  ]
  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 fade-up">
        <h1 className="text-5xl font-black mb-4 text-white">Einfache, faire <span className="gradient-text">Preise</span></h1>
        <p className="text-xl max-w-2xl mx-auto" style={{color:'rgba(255,255,255,0.5)'}}>Kein verstecktes Kleingedrucktes. Kein Vendor Lock-in. Kündigung jederzeit möglich.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {plans.map(p => (
          <div key={p.name} className={`rounded-2xl p-8 ${p.highlight ? '' : 'glass'}`}
            style={p.highlight ? {background:`linear-gradient(135deg,${AMBER_DIM},rgba(217,119,6,0.1))`,border:`1px solid ${AMBER_BORDER}`} : {}}>
            {p.highlight && <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{color:AMBER}}>Empfohlen</div>}
            <h3 className="text-xl font-black text-white mb-1">{p.name}</h3>
            <div className="text-4xl font-black gradient-text mb-1">{p.price}</div>
            <div className="text-sm mb-6" style={{color:'rgba(255,255,255,0.4)'}}>{p.period}</div>
            <ul className="space-y-2 mb-8">
              {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm" style={{color:'rgba(255,255,255,0.7)'}}>
                <Star size={12} style={{color:AMBER}}/> {f}
              </li>)}
            </ul>
            <a href="#" className="block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
              style={p.highlight ? {background:`linear-gradient(135deg,${AMBER},#d97706)`,color:'#000'} : {background:'rgba(255,255,255,0.07)',color:'#fff',border:`1px solid ${BORDER}`}}>
              {p.highlight ? 'Jetzt starten' : 'Auswählen'}
            </a>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <h2 className="text-3xl font-black text-white mb-10 text-center">Was unsere Nutzer sagen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.name} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover"/>
              <div>
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs" style={{color:AMBER}}>{t.role}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.6)'}}>"{t.text}"</p>
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_,i) => <Star key={i} size={12} fill={AMBER} style={{color:AMBER}}/>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── DATENSCHUTZ ──────────────────────────────────────────────────────────
function Datenschutz() {
  const sections = [
    { n:'1', t:'Verantwortlicher', c:'TaskMateAI, Musterstraße 1, 12345 Berlin, Deutschland. E-Mail: datenschutz@taskmateai.de' },
    { n:'2', t:'Erhobene Daten', c:'Wir verarbeiten Daten, die Sie bei der Registrierung angeben sowie Nutzungsdaten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.' },
    { n:'3', t:'Google OAuth', c:'Zur Authentifizierung nutzen wir Google OAuth 2.0. Datenschutzerklärung: https://policies.google.com/privacy' },
    { n:'4', t:'KI-Verarbeitung', c:'Unsere KI-Funktionen analysieren Ihre Projektdaten zur Priorisierung. Diese Daten werden nicht für externes Modelltraining genutzt.' },
    { n:'5', t:'Datensicherheit', c:'Alle Daten werden verschlüsselt übertragen (TLS 1.3) und gespeichert (AES-256). Server: EU (Frankfurt).' },
    { n:'6', t:'Ihre Rechte', c:'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit. Kontakt: datenschutz@taskmateai.de' },
    { n:'7', t:'Kontakt', c:'Bei Datenschutzfragen: datenschutz@taskmateai.de' },
  ]
  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background:AMBER_DIM}}>
          <Shield size={28} style={{color:AMBER}}/>
        </div>
        <h1 className="text-4xl font-black mb-3 text-white">Datenschutzerklärung</h1>
        <p style={{color:'rgba(255,255,255,0.4)'}}>Gemäß DSGVO | Stand: Januar 2025</p>
      </div>
      <div className="space-y-4">
        {sections.map(s => (
          <div key={s.n} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-black text-xs font-bold flex-shrink-0" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>{s.n}</div>
              <h2 className="font-bold text-white">{s.t}</h2>
            </div>
            <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.6)'}}>{s.c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── IMPRESSUM ────────────────────────────────────────────────────────────
function Impressum() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-3 text-white">Impressum</h1>
        <p style={{color:'rgba(255,255,255,0.4)'}}>Angaben gemäß § 5 TMG</p>
      </div>
      <div className="space-y-4">
        {[
          { n:'1', t:'Anbieter', c:'TaskMateAI\nMusterstraße 1\n12345 Berlin\nDeutschland' },
          { n:'2', t:'Kontakt', c:'E-Mail: kontakt@taskmateai.de\nTelefon: auf Anfrage' },
          { n:'3', t:'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV', c:'TaskMateAI, Musterstraße 1, 12345 Berlin' },
          { n:'4', t:'Haftungsausschluss', c:'Die Inhalte wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann keine Gewähr übernommen werden.' },
          { n:'5', t:'Haftung für Links', c:'Für Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.' },
          { n:'6', t:'Urheberrecht', c:'Die durch den Betreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht.' },
          { n:'7', t:'KI-Hinweis', c:'TaskMateAI verwendet KI-gestützte Funktionen zur Aufgabenpriorisierung und Workflow-Automatisierung.' },
        ].map(s => (
          <div key={s.n} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-black text-xs font-bold flex-shrink-0" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>{s.n}</div>
              <h2 className="font-bold text-white">{s.t}</h2>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-line" style={{color:'rgba(255,255,255,0.6)'}}>{s.c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── APP ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/features" element={<><Features /><Footer /></>} />
        <Route path="/team" element={<><Team /><Footer /></>} />
        <Route path="/operationen" element={<><Operationen /><Footer /></>} />
        <Route path="/marketing-vertrieb" element={<><MarketingVertrieb /><Footer /></>} />
        <Route path="/datenschutz" element={<><Datenschutz /><Footer /></>} />
        <Route path="/impressum" element={<><Impressum /><Footer /></>} />
      </Routes>
    </>
  )
}
