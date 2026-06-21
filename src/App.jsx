import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { Brain, LayoutDashboard, BarChart3, Megaphone, CheckSquare, Menu, X, Zap, Users, TrendingUp, Clock, Shield, Star, ChevronRight, Play, Award, Globe, Cpu, Database, Check, Rss, BookOpen, ArrowRight, Bot, GitBranch, PieChart, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const AMBER = '#f59e0b'
const AMBER_DIM = 'rgba(245,158,11,0.12)'
const AMBER_BORDER = 'rgba(245,158,11,0.3)'
const CARD = 'rgba(255,255,255,0.04)'
const BORDER = 'rgba(255,255,255,0.08)'

// ── PRODUCT DROPDOWN ──────────────────────────────────────────────────────
function ProductDropdown({ mobile, onClose }) {
  const items = [
    { to: '/produkt/ai-assistent', icon: <Bot size={16}/>, label: 'AI Assistent', desc: 'KI-gestützte Aufgabenhilfe' },
    { to: '/produkt/workflows',    icon: <GitBranch size={16}/>, label: 'Workflows', desc: 'Automatisierte Prozesse' },
    { to: '/produkt/dashboard',    icon: <LayoutDashboard size={16}/>, label: 'Dashboard', desc: 'Echtzeit-Übersichten' },
    { to: '/produkt/analytics',    icon: <PieChart size={16}/>, label: 'Analytics', desc: 'Daten & Auswertungen' },
  ]
  if (mobile) {
    return (
      <div className="ml-3 flex flex-col gap-1 mt-1">
        {items.map(i => (
          <NavLink key={i.to} to={i.to} onClick={onClose}
            className={({isActive}) => `flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${isActive ? 'text-amber-400' : 'text-white/60 hover:text-white'}`}>
            <span style={{color:AMBER}}>{i.icon}</span>{i.label}
          </NavLink>
        ))}
      </div>
    )
  }
  return (
    <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl p-2 z-50" style={{background:'rgba(20,19,19,0.98)',border:`1px solid ${BORDER}`,backdropFilter:'blur(20px)'}}>
      {items.map(i => (
        <NavLink key={i.to} to={i.to}
          className={({isActive}) => `flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isActive ? 'bg-amber-400/10' : 'hover:bg-white/5'}`}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background:AMBER_DIM,color:AMBER}}>{i.icon}</div>
          <div>
            <div className={`text-sm font-medium ${true ? 'text-white' : ''}`}>{i.label}</div>
            <div className="text-xs text-white/40">{i.desc}</div>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

// ── NAVBAR ───────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)
  const dropRef = useRef(null)
  const location = useLocation()

  // close dropdown on outside click
  useEffect(() => {
    function handler(e) { if (dropRef.current && !dropRef.current.contains(e.target)) setProductOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // close dropdown on route change
  useEffect(() => { setProductOpen(false); setOpen(false) }, [location])

  const isProductActive = location.pathname.startsWith('/produkt')

  const links = [
    { to: '/features', label: 'Features' },
    { to: '/preise',   label: 'Preise' },
    { to: '/team',     label: 'Team' },
    { to: '/blog',     label: 'Blog' },
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
          {/* Product dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setProductOpen(p => !p)}
              className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isProductActive ? 'text-amber-400 bg-amber-400/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
              Produkt <ChevronDown size={14} className={`transition-transform ${productOpen ? 'rotate-180' : ''}`}/>
            </button>
            {productOpen && <ProductDropdown />}
          </div>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({isActive}) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive ? 'text-amber-400 bg-amber-400/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`
            }>{l.label}</NavLink>
          ))}
        </div>

        <Link to="/preise" className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-black transition-all hover:opacity-90" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
          Kostenlos starten <ChevronRight size={16}/>
        </Link>

        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-4 glass rounded-2xl p-4 flex flex-col gap-1">
          {/* Mobile product section */}
          <button onClick={() => setMobileProductOpen(p => !p)}
            className={`flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all ${isProductActive ? 'text-amber-400' : 'text-white/70'}`}>
            Produkt <ChevronDown size={14} className={`transition-transform ${mobileProductOpen ? 'rotate-180' : ''}`}/>
          </button>
          {mobileProductOpen && <ProductDropdown mobile onClose={() => setOpen(false)} />}
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
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
    <footer className="border-t mt-32 py-12 px-4" style={{borderColor:BORDER}}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
              <Brain size={14} className="text-black"/>
            </div>
            <span className="font-bold text-white/80 text-sm">TaskMateAI</span>
          </div>
          <p className="text-white/40 text-xs">KI-gestütztes Projektmanagement für moderne Teams.</p>
        </div>
        <div>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Produkt</p>
          {[['AI Assistent','/produkt/ai-assistent'],['Workflows','/produkt/workflows'],['Dashboard','/produkt/dashboard'],['Analytics','/produkt/analytics']].map(([l,t]) => (
            <Link key={t} to={t} className="block text-white/40 hover:text-amber-400 text-sm mb-2 transition-colors">{l}</Link>
          ))}
        </div>
        <div>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Unternehmen</p>
          {[['Features','/features'],['Preise','/preise'],['Team','/team'],['Blog','/blog']].map(([l,t]) => (
            <Link key={t} to={t} className="block text-white/40 hover:text-amber-400 text-sm mb-2 transition-colors">{l}</Link>
          ))}
        </div>
        <div>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Rechtliches</p>
          {[['Datenschutz','/datenschutz'],['Impressum','/impressum']].map(([l,t]) => (
            <Link key={t} to={t} className="block text-white/40 hover:text-amber-400 text-sm mb-2 transition-colors">{l}</Link>
          ))}
        </div>
      </div>
      <div className="border-t pt-6 text-center text-white/30 text-xs" style={{borderColor:BORDER}}>
        © 2025 TaskMateAI GmbH · Alle Rechte vorbehalten
      </div>
    </footer>
  )
}

// ── HOME ──────────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            <Link to="/produkt/ai-assistent" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white/80 border transition-all hover:bg-white/5" style={{border:`1px solid ${BORDER}`}}>
              <Play size={16}/> Produkt entdecken
            </Link>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden mb-24 relative" style={{border:`1px solid ${BORDER}`}}>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" alt="Analytics Dashboard" className="w-full h-80 object-cover opacity-70"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-2xl px-8 py-4 text-center">
              <p className="text-white font-bold text-xl">Live Dashboard</p>
              <p className="text-white/60 text-sm">Echtzeit-Einblicke in alle Prozesse</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[{n:'98%',l:'Kundenzufriedenheit'},{n:'10x',l:'Schnellere Workflows'},{n:'5.000+',l:'Aktive Teams'},{n:'24/7',l:'KI-Support'}].map(s => (
            <div key={s.l} className="text-center p-6 rounded-2xl" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="text-3xl font-black mb-1" style={{color:AMBER}}>{s.n}</div>
              <div className="text-white/60 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
        {/* Product mini-grid */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Vier Kernprodukte. Eine Plattform.</h2>
          <p className="text-white/60 max-w-xl mx-auto">Alles was Ihr Team braucht, nahtlos integriert.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mb-24">
          {[
            {icon:<Bot size={28}/>,t:'AI Assistent',d:'Schreibt, priorisiert und erledigt Aufgaben für Sie.',to:'/produkt/ai-assistent'},
            {icon:<GitBranch size={28}/>,t:'Workflows',d:'Prozesse die sich selbst steuern — ohne Aufwand.',to:'/produkt/workflows'},
            {icon:<LayoutDashboard size={28}/>,t:'Dashboard',d:'Alle KPIs, Projekte und Updates auf einen Blick.',to:'/produkt/dashboard'},
            {icon:<PieChart size={28}/>,t:'Analytics',d:'Entscheidungen aus echten Daten, nicht aus Bauchgefühl.',to:'/produkt/analytics'},
          ].map(f => (
            <Link key={f.t} to={f.to} className="p-6 rounded-2xl transition-all hover:scale-105 group" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{background:AMBER_DIM,color:AMBER}}>{f.icon}</div>
              <h3 className="text-white font-bold mb-1 group-hover:text-amber-400 transition-colors">{f.t}</h3>
              <p className="text-white/50 text-sm">{f.d}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── PRODUCT SUB-PAGES ─────────────────────────────────────────────────────
function ProduktPage({ title, subtitle, icon, badge, heroImg, sections }) {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            {icon} {badge}
          </div>
          <h1 className="text-5xl font-black text-white mb-4">{title}</h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">{subtitle}</p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-16" style={{border:`1px solid ${BORDER}`}}>
          <img src={heroImg} alt={title} className="w-full h-72 object-cover opacity-70"/>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map(s => (
            <div key={s.title} className="p-8 rounded-2xl" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{background:AMBER_DIM,color:AMBER}}>{s.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-white/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center rounded-3xl p-12" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`}}>
          <h2 className="text-3xl font-bold text-white mb-4">Bereit loszulegen?</h2>
          <p className="text-white/60 mb-6">14 Tage kostenlos testen — keine Kreditkarte nötig.</p>
          <Link to="/preise" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-black" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
            Kostenlos starten <ChevronRight size={16}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

function AiAssistent() {
  return <ProduktPage
    title="AI Assistent"
    subtitle="Ihr persönlicher KI-Kollege der nie schläft. Aufgaben erstellen, priorisieren, delegieren — auf Knopfdruck."
    icon={<Bot size={12}/>}
    badge="AI Assistent"
    heroImg="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
    sections={[
      {icon:<Bot size={24}/>,title:'Natürliche Spracheingabe',body:'Beschreiben Sie eine Aufgabe einfach auf Deutsch — der Assistent erstellt, kategorisiert und priorisiert sie automatisch. Keine Formular, kein Klicken.'},
      {icon:<Zap size={24}/>,title:'Intelligente Vorschläge',body:'Basierend auf Ihren bisherigen Workflows macht die KI proaktive Vorschläge: Was als Nächstes ansteht, wer die beste Person dafür ist, wann der richtige Zeitpunkt ist.'},
      {icon:<Clock size={24}/>,title:'Zeiterfassung automatisch',body:'Der Assistent erkennt woran Sie arbeiten und trackt die Zeit im Hintergrund — ohne dass Sie etwas tun müssen.'},
      {icon:<Shield size={24}/>,title:'Datenschutz by Design',body:'Alle KI-Berechnungen laufen auf deutschen Servern. Ihre Daten werden nie für das Training externer Modelle verwendet.'},
    ]}
  />
}

function Workflows() {
  return <ProduktPage
    title="Workflows"
    subtitle="Definieren Sie Prozesse einmalig — TaskMateAI führt sie immer wieder fehlerfrei aus."
    icon={<GitBranch size={12}/>}
    badge="Workflows"
    heroImg="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80"
    sections={[
      {icon:<GitBranch size={24}/>,title:'Visuelle Workflow-Builder',body:'Drag-and-drop Interface zum Erstellen komplexer Automatisierungen. Bedingungen, Verzweigungen, Schleifen — alles ohne Code.'},
      {icon:<Zap size={24}/>,title:'Trigger & Aktionen',body:'Workflows starten automatisch: wenn ein Ticket eingeht, ein Termin näher rückt, ein Status sich ändert oder ein Teammitglied etwas markiert.'},
      {icon:<Users size={24}/>,title:'Team-Freigaben',body:'Workflows können Aufgaben automatisch an die richtige Person weiterleiten, abhängig von Verfügbarkeit, Expertise und Auslastung.'},
      {icon:<TrendingUp size={24}/>,title:'Workflow Analytics',body:'Sehen Sie wo Prozesse stocken, wie lange jeder Schritt dauert und was optimiert werden kann — mit konkreten Empfehlungen.'},
    ]}
  />
}

function DashboardPage() {
  return <ProduktPage
    title="Dashboard"
    subtitle="Alles auf einen Blick. Keine Meetings nötig um zu wissen wie das Team steht."
    icon={<LayoutDashboard size={12}/>}
    badge="Dashboard"
    heroImg="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
    sections={[
      {icon:<LayoutDashboard size={24}/>,title:'Anpassbare Widgets',body:'Jedes Teammitglied konfiguriert sein Dashboard selbst: Aufgaben, Projekte, KPIs, Kalender — nur was relevant ist.'},
      {icon:<TrendingUp size={24}/>,title:'Echtzeit-Updates',body:'Alle Änderungen erscheinen sofort — ohne Refresh, ohne Verzögerung. Ideal für verteilte Teams in verschiedenen Zeitzonen.'},
      {icon:<BarChart3 size={24}/>,title:'Projekt-Übersichten',body:'Gantt-Ansicht, Kanban, Timeline oder Listenansicht — wechseln Sie je nach Kontext zwischen Darstellungen.'},
      {icon:<Globe size={24}/>,title:'Mobile-optimiert',body:'Das Dashboard funktioniert auf jedem Gerät — nativer Look auf iOS und Android, keine separate App nötig.'},
    ]}
  />
}

function AnalyticsPage() {
  return <ProduktPage
    title="Analytics"
    subtitle="Zahlen die eine Geschichte erzählen — nicht nur Tabellen die niemand liest."
    icon={<PieChart size={12}/>}
    badge="Analytics"
    heroImg="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
    sections={[
      {icon:<PieChart size={24}/>,title:'Produktivitäts-Reports',body:'Wöchentliche und monatliche Reports über erledigte Aufgaben, Durchlaufzeiten und Team-Auslastung — automatisch generiert.'},
      {icon:<TrendingUp size={24}/>,title:'Trend-Erkennung',body:'Die KI erkennt Muster bevor sie zu Problemen werden: sinkende Velocity, wachsende Rückstände, Burnout-Risiken.'},
      {icon:<Database size={24}/>,title:'Custom Metriken',body:'Definieren Sie eigene KPIs, die für Ihr Business relevant sind. Verknüpfen Sie Daten aus verschiedenen Projekten und Teams.'},
      {icon:<Award size={24}/>,title:'Export & Reporting',body:'Exportieren Sie beliebige Reports als PDF, Excel oder via API. Perfekt für Stakeholder-Updates und Investor-Decks.'},
    ]}
  />
}

// ── FEATURES ──────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {badge:'Aufgabenmanagement',icon:<CheckSquare size={20}/>,title:'Smarte Aufgabenverwaltung',img:'photo-1484480974693-96ea453cf040',desc:'Erstellen, priorisieren und delegieren Sie Aufgaben mit KI-Unterstützung. Automatische Fälligkeitserinnerungen und intelligente Zuweisungen sorgen dafür, dass nichts vergessen wird.'},
    {badge:'Kanban & Projekte',icon:<LayoutDashboard size={20}/>,title:'Visuelle Projektplanung',img:'photo-1611532736597-de2d4265fba3',desc:'Drag-and-drop Kanban-Boards mit Echtzeit-Synchronisation. Verfolgen Sie den Fortschritt aller Projekte auf einen Blick und erkennen Sie Engpässe sofort.'},
    {badge:'Team & Kollaboration',icon:<Users size={20}/>,title:'Nahtlose Zusammenarbeit',img:'photo-1522071820081-009f0129c71c',desc:'Kommentare, Mentions und Echtzeit-Updates halten alle Teammitglieder auf dem neuesten Stand. Integriert mit Slack, Teams und weiteren Tools.'},
    {badge:'Analysen & Reports',icon:<BarChart3 size={20}/>,title:'Datengetriebene Entscheidungen',img:'photo-1460925895917-afdab827c52f',desc:'Detaillierte Produktivitätsreports, Zeiterfassung und Leistungsanalysen. Exportieren Sie Daten in Excel oder PDF mit einem Klick.'},
    {badge:'Automatisierung',icon:<Cpu size={20}/>,title:'KI-gestützte Workflows',img:'photo-1518770660439-4636190af475',desc:'Definieren Sie Regeln und lassen Sie TaskMateAI repetitive Aufgaben automatisch ausführen. Sparen Sie bis zu 40% Ihrer täglichen Arbeitszeit.'},
    {badge:'Zeitmanagement',icon:<Clock size={20}/>,title:'Intelligente Zeitplanung',img:'photo-1508780709619-2b655c4a9987',desc:'KI analysiert Ihre Arbeitsgewohnheiten und schlägt optimale Zeitblöcke vor. Fokus-Modus, Deep Work Sessions und automatische Pausen inklusive.'},
  ]
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Zap size={12}/> Alle Features
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Was TaskMateAI kann</h1>
          <p className="text-white/60 max-w-xl mx-auto">Jedes Feature wurde entwickelt, um echte Zeitersparnis zu bringen.</p>
        </div>
        <div className="flex flex-col gap-24">
          {features.map((f,i) => (
            <div key={f.title} className={`flex flex-col ${i%2===0?'md:flex-row':'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,color:AMBER}}>{f.icon} {f.badge}</div>
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-white/60 leading-relaxed">{f.desc}</p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden" style={{border:`1px solid ${BORDER}`}}>
                <img src={`https://images.unsplash.com/${f.img}?w=700&q=80`} alt={f.title} className="w-full h-64 object-cover"/>
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
          <p className="text-white/60 max-w-xl mx-auto">Ein Team aus Ingenieuren, Designerinnen und Produktmenschen.</p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-16" style={{border:`1px solid ${BORDER}`}}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Büro" className="w-full h-72 object-cover opacity-70"/>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {members.map(m => (
            <div key={m.name} className="p-6 rounded-2xl transition-all hover:scale-105" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <img src={`https://images.unsplash.com/${m.img}?w=300&h=300&fit=crop&q=80`} alt={m.name} className="w-20 h-20 rounded-2xl object-cover mb-4"/>
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
    {name:'Starter',price:'Kostenlos',sub:'Für immer',color:BORDER,features:['Bis zu 3 Nutzer','10 aktive Projekte','Basis-Kanban','1 GB Speicher','E-Mail Support'],cta:'Kostenlos starten',highlight:false},
    {name:'Pro',price:'29 €',sub:'pro Nutzer / Monat',color:AMBER_BORDER,features:['Unbegrenzte Nutzer','Unbegrenzte Projekte','KI-Automatisierung','Erweiterte Analysen','Prioritäts-Support','Slack & Teams Integration','API-Zugang'],cta:'14 Tage kostenlos testen',highlight:true},
    {name:'Enterprise',price:'Individuell',sub:'Auf Anfrage',color:BORDER,features:['Alles aus Pro','SSO & SAML','On-Premise Option','Dedizierter Account Manager','SLA-Garantie','Custom Integrations','Compliance & Audit Logs'],cta:'Kontakt aufnehmen',highlight:false},
  ]
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`,color:AMBER}}>
            <Star size={12}/> Transparente Preise
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Faire Preise für jedes Team</h1>
          <p className="text-white/60 max-w-xl mx-auto">Keine versteckten Kosten. Kein Lock-in. Kündigen Sie jederzeit.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map(p => (
            <div key={p.name} className={`p-8 rounded-3xl flex flex-col ${p.highlight?'scale-105':''}`} style={{background:p.highlight?AMBER_DIM:CARD,border:`2px solid ${p.color}`}}>
              {p.highlight && <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start" style={{background:AMBER,color:'#000'}}><Star size={10}/> Beliebtester Plan</div>}
              <h3 className="text-white font-bold text-xl mb-1">{p.name}</h3>
              <div className="mb-1"><span className="text-4xl font-black" style={{color:p.highlight?AMBER:'white'}}>{p.price}</span></div>
              <p className="text-white/40 text-sm mb-6">{p.sub}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80"><Check size={14} style={{color:AMBER}} className="shrink-0"/> {f}</li>
                ))}
              </ul>
              <Link to="/" className={`text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 ${p.highlight?'text-black':'text-white border'}`}
                style={p.highlight?{background:`linear-gradient(135deg,${AMBER},#d97706)`}:{border:`1px solid ${BORDER}`}}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Häufige Fragen</h2>
          {[
            {q:'Gibt es eine kostenlose Testphase?',a:'Ja! Der Pro-Plan kann 14 Tage kostenlos und ohne Kreditkarte getestet werden.'},
            {q:'Kann ich jederzeit kündigen?',a:'Selbstverständlich. Keine Mindestlaufzeit, keine versteckten Gebühren.'},
            {q:'Was passiert nach der Testphase?',a:'Sie können zum Starter-Plan wechseln oder auf Pro upgraden. Wir erinnern Sie 3 Tage vorher.'},
            {q:'Gibt es Rabatte für Startups?',a:'Ja — schreiben Sie uns an hello@taskmateai.com für unser Startup-Programm.'},
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
    {tag:'Produktivität',title:'10 Wege, wie KI Ihre Teamproduktivität verdoppeln kann',excerpt:'Moderne Teams verlieren täglich Stunden durch manuelle Prozesse. Wir zeigen, wie KI-gestützte Automatisierung das ändert.',author:'Sarah Müller',date:'18. Juni 2025',readTime:'6 Min.',img:'photo-1499750310107-5fef28a66643',featured:true},
    {tag:'Workflow',title:'Kanban vs. Scrum: Was passt zu Ihrem Team?',excerpt:'Beide Methoden haben ihre Berechtigung. Wir erklären die Unterschiede.',author:'Jonas Weber',date:'12. Juni 2025',readTime:'4 Min.',img:'photo-1454165804606-c3d57bc86b40'},
    {tag:'Remote Work',title:'Verteilte Teams erfolgreich führen: 7 bewährte Strategien',excerpt:'Remote-Arbeit ist die neue Normalität. Diese Strategien helfen Ihnen.',author:'Lena Fischer',date:'5. Juni 2025',readTime:'5 Min.',img:'photo-1593642632559-0c6d3fc62b89'},
    {tag:'KI & Zukunft',title:'Die Zukunft der Arbeit: Was uns KI bis 2030 abnimmt',excerpt:'Welche Aufgaben werden Maschinen übernehmen — eine nüchterne Analyse.',author:'Max Schneider',date:'29. Mai 2025',readTime:'7 Min.',img:'photo-1485827404703-89b55fcc595e'},
    {tag:'Tipps',title:'Inbox Zero: So befreien Sie sich dauerhaft von E-Mail-Stress',excerpt:'Mit dem richtigen System schaffen Sie echte Ordnung in Ihrer Kommunikation.',author:'Priya Sharma',date:'20. Mai 2025',readTime:'3 Min.',img:'photo-1484807352052-23338990c6c6'},
    {tag:'Erfolgsgeschichten',title:'Wie DesignStudio Berlin 30% Zeit spart — mit TaskMateAI',excerpt:'Ein Berliner Designstudio mit 25 Mitarbeitern hat seine Workflows neu aufgestellt.',author:'Tom Becker',date:'14. Mai 2025',readTime:'5 Min.',img:'photo-1542444173-8e7e53415bb0'},
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
          <p className="text-white/60 max-w-xl mx-auto">Strategien, Erfahrungsberichte und Produktnews.</p>
        </div>
        <div className="rounded-3xl overflow-hidden mb-12 group cursor-pointer" style={{border:`1px solid ${BORDER}`}}>
          <div className="relative">
            <img src={`https://images.unsplash.com/${featured.img}?w=1200&q=80`} alt={featured.title} className="w-full h-80 object-cover opacity-60 group-hover:opacity-80 transition-opacity"/>
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{background:'linear-gradient(to top, rgba(17,16,16,0.95) 0%, transparent 60%)'}}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start" style={{background:AMBER,color:'#000'}}><BookOpen size={10}/> {featured.tag}</div>
              <h2 className="text-3xl font-bold text-white mb-2">{featured.title}</h2>
              <p className="text-white/70 mb-4 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <span>{featured.author}</span><span>·</span><span>{featured.date}</span><span>·</span><span>{featured.readTime} Lesezeit</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(p => (
            <div key={p.title} className="rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-105" style={{background:CARD,border:`1px solid ${BORDER}`}}>
              <img src={`https://images.unsplash.com/${p.img}?w=600&q=80`} alt={p.title} className="w-full h-44 object-cover opacity-60 group-hover:opacity-80 transition-opacity"/>
              <div className="p-6">
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mb-3" style={{background:AMBER_DIM,color:AMBER}}>{p.tag}</div>
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{p.title}</h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center justify-between text-white/40 text-xs">
                  <span>{p.author}</span><span>{p.readTime} Lesezeit</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center rounded-3xl p-12" style={{background:AMBER_DIM,border:`1px solid ${AMBER_BORDER}`}}>
          <Rss size={32} className="mx-auto mb-4" style={{color:AMBER}}/>
          <h2 className="text-3xl font-bold text-white mb-3">Bleiben Sie auf dem Laufenden</h2>
          <p className="text-white/60 mb-6">Neue Artikel und Tipps direkt in Ihren Posteingang.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="ihre@email.de" className="flex-1 px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm outline-none focus:border-amber-400" style={{borderColor:BORDER}}/>
            <button className="px-6 py-3 rounded-xl font-semibold text-sm text-black flex items-center gap-2 justify-center" style={{background:`linear-gradient(135deg,${AMBER},#d97706)`}}>
              Anmelden <ArrowRight size={14}/>
            </button>
          </div>
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
          {h:'2. Erhobene Daten',t:'Wir erheben Daten, die Sie uns direkt mitteilen sowie technische Daten (IP-Adresse, Browser-Typ, Zugriffszeiten).'},
          {h:'3. Zweck der Verarbeitung',t:'Bereitstellung unserer Dienste, Verbesserung der Plattform und Kommunikation mit Nutzern.'},
          {h:'4. Weitergabe an Dritte',t:'Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zur Vertragserfüllung erforderlich.'},
          {h:'5. Datensicherheit',t:'Alle Daten werden SSL-verschlüsselt übertragen und auf zertifizierten Servern in Deutschland gespeichert.'},
          {h:'6. Ihre Rechte',t:'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch. Kontakt: datenschutz@taskmateai.com'},
          {h:'7. Cookies',t:'Wir verwenden technisch notwendige Cookies sowie optionale Analyse-Cookies (nur mit Ihrer Einwilligung).'},
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
          <div><h2 className="text-xl font-bold text-white mb-2">Unternehmen</h2><p>TaskMateAI GmbH<br/>Musterstraße 1<br/>10115 Berlin<br/>Deutschland</p></div>
          <div><h2 className="text-xl font-bold text-white mb-2">Kontakt</h2><p>E-Mail: hello@taskmateai.com<br/>Tel: +49 30 12345678</p></div>
          <div><h2 className="text-xl font-bold text-white mb-2">Registereintrag</h2><p>Handelsregister: Amtsgericht Berlin-Charlottenburg<br/>HRB 123456 B</p></div>
          <div><h2 className="text-xl font-bold text-white mb-2">Umsatzsteuer-ID</h2><p>DE123456789</p></div>
          <div><h2 className="text-xl font-bold text-white mb-2">Geschäftsführung</h2><p>Sarah Müller</p></div>
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
        <Route path="/produkt/ai-assistent" element={<><AiAssistent /><Footer /></>} />
        <Route path="/produkt/workflows"    element={<><Workflows /><Footer /></>} />
        <Route path="/produkt/dashboard"    element={<><DashboardPage /><Footer /></>} />
        <Route path="/produkt/analytics"    element={<><AnalyticsPage /><Footer /></>} />
        <Route path="/features"  element={<><Features /><Footer /></>} />
        <Route path="/preise"    element={<><Preise /><Footer /></>} />
        <Route path="/team"      element={<><Team /><Footer /></>} />
        <Route path="/blog"      element={<><Blog /><Footer /></>} />
        <Route path="/datenschutz" element={<><Datenschutz /><Footer /></>} />
        <Route path="/impressum"   element={<><Impressum /><Footer /></>} />
      </Routes>
    </div>
  )
}
