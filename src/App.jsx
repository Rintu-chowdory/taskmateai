import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Brain, LayoutDashboard, BarChart3, Megaphone, CheckSquare, Menu, X, Zap, Users, TrendingUp, Clock, Shield, Star, ChevronRight, Play, Award, Globe, Cpu, Database, Check, Rss, BookOpen, ArrowRight } from 'lucide-react'
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
    { to: '/preise', label: 'Preise' },
    { to: '/team', label: 'Team' },
    { to: '/blog', label: 'Blog' },
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
              `px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive ? 'text-amber-400 bg-amber-400/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`
            }>{l.label}</NavLink>
          ))}
        </div>
        <Link to="/preise" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-black transition-all hover:opacity-90" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
          Kostenlos starten <ChevronRight size={16} />
        </Link>
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 mx-4 glass rounded-2xl p-4 flex flex-col gap-2">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to==='/'} onClick={() => setOpen(false)}
              className={({isActive}) => `px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive ? 'text-amber-400 bg-amber-400/10' : 'text-white/70 hover:text-white'}`}
            >{l.label}</NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t mt-32 py-12 px-4 text-center text-white/40 text-sm" style={{borderColor:BORDER}}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
          <Brain size={14} className="text-black" />
        </div>
        <span className="font-bold text-white/60">TaskMateAI</span>
      </div>
      <p>© 2025 TaskMateAI GmbH · <Link to="/datenschutz" className="hover:text-amber-400 transition-colors">Datenschutz</Link> · <Link to="/impressum" className="hover:text-amber-400 transition-colors">Impressum</Link></p>
    </footer>
  )
}

// ── HOME ──────────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Zap size={12}/> KI-gestützte Arbeitsautomatisierung
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Intelligenter arbeiten<br/>mit <span className="gradient-text">TaskMate AI</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Automatisieren Sie repetitive Aufgaben, optimieren Sie Workflows und steigern Sie die Produktivität Ihres Teams mit modernster KI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/preise" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-black transition-all hover:opacity-90 hover:scale-105" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
              Jetzt kostenlos starten <ChevronRight size={18}/>
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white/80 border transition-all hover:bg-white/5" style={{border:`1px solid ${BORDER}`}}>
              <Play size={16}/> Features ansehen
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-3xl overflow-hidden mb-24 relative" style={{border:`1px solid ${BORDER}`}}>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Analytics Dashboard" className="w-full h-80 object-cover opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-2xl px-8 py-4 text-center">
              <p className="text-white font-bold text-xl">Live Dashboard</p>
              <p className="text-white/60 text-sm">Echtzeit-Einblicke in alle Prozesse</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            {n:'98%',l:'Kundenzufriedenheit'},{n:'10x',l:'Schnellere Workflows'},
            {n:'5.000+',l:'Aktive Teams'},{n:'24/7',l:'KI-Support'}
          ].map(s => (
            <div key={s.l} className="text-center p-6 rounded-2xl" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="text-3xl font-black mb-1" style={{color:AMBER}}>{s.n}</div>
              <div className="text-white/60 text-sm">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Features preview */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Alles was Ihr Team braucht</h2>
          <p className="text-white/60 max-w-xl mx-auto">Von der Aufgabenverwaltung bis zur Analyse — TaskMateAI deckt jeden Aspekt Ihres Workflows ab.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon:<LayoutDashboard size={24}/>,t:'Intelligente Dashboards',d:'Behalten Sie alle Projekte und KPIs in Echtzeit im Blick.'},
            {icon:<Brain size={24}/>,t:'KI-Automatisierung',d:'Lassen Sie wiederkehrende Aufgaben vollautomatisch erledigen.'},
            {icon:<BarChart3 size={24}/>,t:'Tiefgehende Analysen',d:'Erkennen Sie Muster und optimieren Sie Ihre Prozesse datenbasiert.'},
          ].map(f => (
            <div key={f.t} className="p-6 rounded-2xl transition-all hover:scale-105" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:AMBER_DIM,color:AMBER}}>{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.t}</h3>
              <p className="text-white/60 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── FEATURES ──────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      badge:'Aufgabenmanagement', icon:<CheckSquare size={20}/>,
      title:'Smarte Aufgabenverwaltung', img:'photo-1484480974693-96ea453cf040',
      desc:'Erstellen, priorisieren und delegieren Sie Aufgaben mit KI-Unterstützung. Automatische Fälligkeitserinnerungen und intelligente Zuweisungen sorgen dafür, dass nichts vergessen wird.'
    },
    {
      badge:'Kanban & Projekte', icon:<LayoutDashboard size={20}/>,
      title:'Visuelle Projektplanung', img:'photo-1611532736597-de2d4265fba3',
      desc:'Drag-and-drop Kanban-Boards mit Echtzeit-Synchronisation. Verfolgen Sie den Fortschritt aller Projekte auf einen Blick und erkennen Sie Engpässe sofort.'
    },
    {
      badge:'Team & Kollaboration', icon:<Users size={20}/>,
      title:'Nahtlose Zusammenarbeit', img:'photo-1522071820081-009f0129c71c',
      desc:'Kommentare, Mentions und Echtzeit-Updates halten alle Teammitglieder auf dem neuesten Stand. Integriert mit Slack, Teams und weiteren Tools.'
    },
    {
      badge:'Analysen & Reports', icon:<BarChart3 size={20}/>,
      title:'Datengetriebene Entscheidungen', img:'photo-1460925895917-afdab827c52f',
      desc:'Detaillierte Produktivitätsreports, Zeiterfassung und Leistungsanalysen. Exportieren Sie Daten in Excel oder PDF mit einem Klick.'
    },
    {
      badge:'Automatisierung', icon:<Cpu size={20}/>,
      title:'KI-gestützte Workflows', img:'photo-1518770660439-4636190af475',
      desc:'Definieren Sie Regeln und lassen Sie TaskMateAI repetitive Aufgaben automatisch ausführen. Sparen Sie bis zu 40% Ihrer täglichen Arbeitszeit.'
    },
    {
      badge:'Zeitmanagement', icon:<Clock size={20}/>,
      title:'Intelligente Zeitplanung', img:'photo-1508780709619-2b655c4a9987',
      desc:'KI analysiert Ihre Arbeitsgewohnheiten und schlägt optimale Zeitblöcke vor. Fokus-Modus, Deep Work Sessions und automatische Pausen inklusive.'
    },
  ]
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Zap size={12}/> Alle Features
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Was TaskMateAI kann</h1>
          <p className="text-white/60 max-w-xl mx-auto">Jedes Feature wurde entwickelt, um Ihnen echte Zeitersparnis zu bringen — nicht nur bunte Dashboards.</p>
        </div>
        <div className="flex flex-col gap-24">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i%2===0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,color:AMBER}}>
                  {f.icon} {f.badge}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-white/60 leading-relaxed">{f.desc}</p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden" style={{border:`1px solid ${BORDER}`}}>
                <img src={`https://images.unsplash.com/${f.img}?w=700&q=80`} alt={f.title} className="w-full h-64 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── TEAM ─────────────────────────────────────────────────────────────────
function Team() {
  const members = [
    {name:'Sarah Müller',role:'CEO & Co-Founderin',img:'photo-1494790108377-be9c29b29330',bio:'10 Jahre Erfahrung in SaaS & KI-Produkten.'},
    {name:'Jonas Weber',role:'CTO',img:'photo-1507003211169-0a1dd7228f2d',bio:'Ex-Google Engineer, spezialisiert auf ML-Systeme.'},
    {name:'Priya Sharma',role:'Head of Product',img:'photo-1573497019940-1c28c88b4f3e',bio:'Produktstrategie für Teams von 10 bis 10.000.'},
    {name:'Max Schneider',role:'Lead Engineer',img:'photo-1560250097-0b93528c311a',bio:'Full-Stack mit Fokus auf Performance & Scale.'},
    {name:'Lena Fischer',role:'Head of Design',img:'photo-1580489944761-15a19d654956',bio:'UX-Designerin mit Leidenschaft für klare Interfaces.'},
    {name:'Tom Becker',role:'Head of Sales',img:'photo-1472099645785-5658abf4ff4e',bio:'Hilft Teams, das Beste aus TaskMateAI herauszuholen.'},
  ]
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Users size={12}/> Unser Team
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Menschen hinter TaskMateAI</h1>
          <p className="text-white/60 max-w-xl mx-auto">Wir sind ein Team aus Ingenieuren, Designerinnen und Produktmenschen mit einer Mission: Arbeit smarter machen.</p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-16" style={{border:`1px solid ${BORDER}`}}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Unser Büro" className="w-full h-72 object-cover opacity-70" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {members.map(m => (
            <div key={m.name} className="p-6 rounded-2xl transition-all hover:scale-105" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <img src={`https://images.unsplash.com/${m.img}?w=300&h=300&fit=crop&q=80`} alt={m.name} className="w-20 h-20 rounded-2xl object-cover mb-4" />
              <h3 className="text-white font-bold text-lg">{m.name}</h3>
              <p className="text-xs font-semibold mb-2" style={{color:AMBER}}>{m.role}</p>
              <p className="text-white/60 text-sm">{m.bio}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[{n:'2021',l:'Gegründet'},{n:'5.000+',l:'Kunden weltweit'},{n:'18',l:'Teammitglieder'},{n:'4',l:'Länder'}].map(s => (
            <div key={s.l} className="text-center p-6 rounded-2xl" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="text-3xl font-black mb-1" style={{color:AMBER}}>{s.n}</div>
              <div className="text-white/60 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="text-center rounded-3xl p-12" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`}}>
          <h2 className="text-3xl font-bold text-white mb-4">Werde Teil des Teams</h2>
          <p className="text-white/60 mb-6">Wir suchen talentierte Menschen, die die Zukunft der Arbeit mitgestalten wollen.</p>
          <a href="mailto:jobs@taskmateai.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
            Jobs ansehen <ChevronRight size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

// ── PREISE ────────────────────────────────────────────────────────────────
function Preise() {
  const plans = [
    {
      name: 'Starter',
      price: 'Kostenlos',
      sub: 'Für immer',
      color: BORDER,
      features: ['Bis zu 3 Nutzer','10 aktive Projekte','Basis-Kanban','1 GB Speicher','E-Mail Support'],
      cta: 'Kostenlos starten',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '29 €',
      sub: 'pro Nutzer / Monat',
      color: AMBER_BORDER,
      features: ['Unbegrenzte Nutzer','Unbegrenzte Projekte','KI-Automatisierung','Erweiterte Analysen','Prioritäts-Support','Slack & Teams Integration','API-Zugang'],
      cta: '14 Tage kostenlos testen',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Individuell',
      sub: 'Auf Anfrage',
      color: BORDER,
      features: ['Alles aus Pro','SSO & SAML','On-Premise Option','Dedizierter Account Manager','SLA-Garantie','Custom Integrations','Compliance & Audit Logs'],
      cta: 'Kontakt aufnehmen',
      highlight: false,
    },
  ]
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Star size={12}/> Transparente Preise
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Faire Preise für jedes Team</h1>
          <p className="text-white/60 max-w-xl mx-auto">Keine versteckten Kosten. Kein Lock-in. Kündigen Sie jederzeit — wir sind uns sicher, dass Sie das nicht wollen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map(p => (
            <div key={p.name} className={`p-8 rounded-3xl flex flex-col ${p.highlight ? 'scale-105' : ''}`} style={{background: p.highlight ? AMBER_DIM : CARD, border:`2px solid ${p.color}`}}>
              {p.highlight && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start" style={{background:AMBER,color:'#000'}}>
                  <Star size={10}/> Beliebtester Plan
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{p.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-black" style={{color: p.highlight ? AMBER : 'white'}}>{p.price}</span>
              </div>
              <p className="text-white/40 text-sm mb-6">{p.sub}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <Check size={14} style={{color:AMBER}} className="shrink-0"/> {f}
                  </li>
                ))}
              </ul>
              <Link to="/" className={`text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 ${p.highlight ? 'text-black' : 'text-white border'}`}
                style={p.highlight ? {background:`linear-gradient(135deg,${AMBER},#d97706)`} : {border:`1px solid ${BORDER}`}}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Häufige Fragen</h2>
          {[
            {q:'Gibt es eine kostenlose Testphase?', a:'Ja! Der Pro-Plan kann 14 Tage kostenlos und ohne Kreditkarte getestet werden.'},
            {q:'Kann ich jederzeit kündigen?', a:'Selbstverständlich. Keine Mindestlaufzeit, keine versteckten Gebühren.'},
            {q:'Was passiert nach der Testphase?', a:'Sie können zum Starter-Plan wechseln oder auf Pro upgraden. Wir erinnern Sie 3 Tage vorher.'},
            {q:'Gibt es Rabatte für Startups?', a:'Ja — schreiben Sie uns an hello@taskmateai.com für unser Startup-Programm.'},
          ].map(f => (
            <div key={f.q} className="p-6 rounded-2xl mb-4" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <h4 className="text-white font-semibold mb-2">{f.q}</h4>
              <p className="text-white/60 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── BLOG ─────────────────────────────────────────────────────────────────
function Blog() {
  const posts = [
    {
      tag: 'Produktivität',
      title: '10 Wege, wie KI Ihre Teamproduktivität verdoppeln kann',
      excerpt: 'Moderne Teams verlieren täglich Stunden durch manuelle Prozesse. Wir zeigen, wie KI-gestützte Automatisierung das ändert — mit echten Beispielen aus der Praxis.',
      author: 'Sarah Müller',
      date: '18. Juni 2025',
      readTime: '6 Min.',
      img: 'photo-1499750310107-5fef28a66643',
      featured: true,
    },
    {
      tag: 'Workflow',
      title: 'Kanban vs. Scrum: Was passt zu Ihrem Team?',
      excerpt: 'Beide Methoden haben ihre Berechtigung. Wir erklären die Unterschiede und helfen Ihnen, die richtige Wahl zu treffen.',
      author: 'Jonas Weber',
      date: '12. Juni 2025',
      readTime: '4 Min.',
      img: 'photo-1454165804606-c3d57bc86b40',
    },
    {
      tag: 'Remote Work',
      title: 'Verteilte Teams erfolgreich führen: 7 bewährte Strategien',
      excerpt: 'Remote-Arbeit ist die neue Normalität. Diese Strategien helfen Ihnen, Zusammenhalt und Produktivität im verteilten Team zu stärken.',
      author: 'Lena Fischer',
      date: '5. Juni 2025',
      readTime: '5 Min.',
      img: 'photo-1593642632559-0c6d3fc62b89',
    },
    {
      tag: 'KI & Zukunft',
      title: 'Die Zukunft der Arbeit: Was uns KI bis 2030 abnimmt',
      excerpt: 'Welche Aufgaben werden Maschinen übernehmen — und was bleibt dem Menschen? Eine nüchterne Analyse ohne Hysterie.',
      author: 'Max Schneider',
      date: '29. Mai 2025',
      readTime: '7 Min.',
      img: 'photo-1485827404703-89b55fcc595e',
    },
    {
      tag: 'Tipps',
      title: 'Inbox Zero: So befreien Sie sich dauerhaft von E-Mail-Stress',
      excerpt: 'Mit dem richtigen System und TaskMateAI-Integrationen schaffen Sie echte Ordnung in Ihrer Kommunikation.',
      author: 'Priya Sharma',
      date: '20. Mai 2025',
      readTime: '3 Min.',
      img: 'photo-1484807352052-23338990c6c6',
    },
    {
      tag: 'Erfolgsgeschichten',
      title: 'Wie DesignStudio Berlin 30% Zeit spart — mit TaskMateAI',
      excerpt: 'Ein Berliner Designstudio mit 25 Mitarbeitern hat seine Projekt-Workflows komplett neu aufgestellt. Hier ist ihr Bericht.',
      author: 'Tom Becker',
      date: '14. Mai 2025',
      readTime: '5 Min.',
      img: 'photo-1542744173-8e7e53415bb0',
    },
  ]

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Rss size={12}/> Blog & News
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Insights & Tipps</h1>
          <p className="text-white/60 max-w-xl mx-auto">Strategien, Erfahrungsberichte und Produktnews rund um moderne Teamarbeit und KI-Automatisierung.</p>
        </div>

        {/* Featured post */}
        <div className="rounded-3xl overflow-hidden mb-12 group cursor-pointer" style={{border:`1px solid ${BORDER}`}}>
          <div className="relative">
            <img src={`https://images.unsplash.com/${featured.img}?w=1200&q=80`} alt={featured.title} className="w-full h-80 object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{background:'linear-gradient(to top, rgba(17,16,16,0.95) 0%, transparent 60%)'}}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start" style={{background:AMBER,color:'#000'}}>
                <BookOpen size={10}/> {featured.tag}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{featured.title}</h2>
              <p className="text-white/70 mb-4 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} Lesezeit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(p => (
            <div key={p.title} className="rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-105" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <img src={`https://images.unsplash.com/${p.img}?w=600&q=80`} alt={p.title} className="w-full h-44 object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="p-6">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mb-3" style={{background:AMBER_DIM,color:AMBER}}>
                  {p.tag}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center justify-between text-white/40 text-xs">
                  <span>{p.author}</span>
                  <span>{p.readTime} Lesezeit</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 text-center rounded-3xl p-12" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`}}>
          <Rss size={32} className="mx-auto mb-4" style={{color:AMBER}} />
          <h2 className="text-3xl font-bold text-white mb-3">Bleiben Sie auf dem Laufenden</h2>
          <p className="text-white/60 mb-6">Neue Artikel, Tipps und Produktnews — direkt in Ihren Posteingang. Kein Spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="ihre@email.de" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm outline-none focus:border-amber-400" style={{borderColor:BORDER}} />
            <button className="px-6 py-3 rounded-xl font-semibold text-sm text-black flex items-center gap-2 justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
              Anmelden <ArrowRight size={14}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── OPERATIONEN ───────────────────────────────────────────────────────────
function Operationen() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <LayoutDashboard size={12}/> Operationen
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Operative Exzellenz</h1>
          <p className="text-white/60 max-w-xl mx-auto">Optimieren Sie jeden Aspekt Ihrer Betriebsabläufe mit KI-gestützten Werkzeugen.</p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-12" style={{border:`1px solid ${BORDER}`}}>
          <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80" alt="Operations" className="w-full h-64 object-cover opacity-70" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {icon:<CheckSquare size={24}/>,t:'Aufgabenverwaltung',d:'Priorisieren und delegieren Sie Tasks mit einem Klick. Vollautomatische Erinnerungen und Eskalationen inklusive.'},
            {icon:<TrendingUp size={24}/>,t:'Prozessoptimierung',d:'Identifizieren Sie Engpässe in Ihren Workflows und lassen Sie KI Verbesserungsvorschläge machen.'},
            {icon:<Shield size={24}/>,t:'Compliance & Qualität',d:'Automatische Checklisten und Freigabeprozesse stellen sicher, dass alle Standards eingehalten werden.'},
            {icon:<Database size={24}/>,t:'Ressourcenplanung',d:'Behalten Sie Kapazitäten und Auslastungen aller Teammitglieder im Blick — ohne Excel.'},
          ].map(f => (
            <div key={f.t} className="p-6 rounded-2xl" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:AMBER_DIM,color:AMBER}}>{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.t}</h3>
              <p className="text-white/60 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── DATENSCHUTZ ───────────────────────────────────────────────────────────
function Datenschutz() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-white/40 text-sm mb-8">Stand: Januar 2025</p>
        {[
          {h:'1. Verantwortlicher',t:'TaskMateAI GmbH, Musterstraße 1, 10115 Berlin. E-Mail: datenschutz@taskmateai.com'},
          {h:'2. Erhobene Daten',t:'Wir erheben Daten, die Sie uns direkt mitteilen (z.B. bei der Registrierung), sowie technische Daten (IP-Adresse, Browser-Typ, Zugriffszeiten).'},
          {h:'3. Zweck der Verarbeitung',t:'Bereitstellung unserer Dienste, Verbesserung der Plattform, Kommunikation mit Nutzern und Erfüllung rechtlicher Verpflichtungen.'},
          {h:'4. Weitergabe an Dritte',t:'Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Vertragserfüllung erforderlich oder Sie haben ausdrücklich eingewilligt.'},
          {h:'5. Datensicherheit',t:'Alle Daten werden SSL-verschlüsselt übertragen und auf zertifizierten Servern in Deutschland gespeichert.'},
          {h:'6. Ihre Rechte',t:'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Kontakt: datenschutz@taskmateai.com'},
          {h:'7. Cookies',t:'Wir verwenden technisch notwendige Cookies sowie optionale Analyse-Cookies (nur mit Ihrer Einwilligung). Sie können Cookies in Ihrem Browser jederzeit deaktivieren.'},
        ].map(s => (
          <div key={s.h} className="mb-8">
            <h2 className="text-xl font-bold text-white mb-2">{s.h}</h2>
            <p className="text-white/60">{s.t}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── IMPRESSUM ─────────────────────────────────────────────────────────────
function Impressum() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Impressum</h1>
        <p className="text-white/40 text-sm mb-8">Angaben gemäß § 5 TMG</p>
        <div className="space-y-8 text-white/70">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Unternehmen</h2>
            <p>TaskMateAI GmbH<br/>Musterstraße 1<br/>10115 Berlin<br/>Deutschland</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Kontakt</h2>
            <p>E-Mail: hello@taskmateai.com<br/>Tel: +49 30 12345678</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Registereintrag</h2>
            <p>Handelsregister: Amtsgericht Berlin-Charlottenburg<br/>HRB 123456 B</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Umsatzsteuer-ID</h2>
            <p>DE123456789 (gemäß § 27a Umsatzsteuergesetz)</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Geschäftsführung</h2>
            <p>Sarah Müller</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── APP ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen" style={{background:'#111010'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/features" element={<><Features /><Footer /></>} />
        <Route path="/preise" element={<><Preise /><Footer /></>} />
        <Route path="/team" element={<><Team /><Footer /></>} />
        <Route path="/blog" element={<><Blog /><Footer /></>} />
        <Route path="/operationen" element={<><Operationen /><Footer /></>} />
        <Route path="/datenschutz" element={<><Datenschutz /><Footer /></>} />
        <Route path="/impressum" element={<><Impressum /><Footer /></>} />
      </Routes>
    </div>
  )
}
