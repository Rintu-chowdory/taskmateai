import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Brain, LayoutDashboard, BarChart3, Megaphone, CheckSquare, Menu, X, Zap, Users, TrendingUp, Clock, Shield, Star } from 'lucide-react'
import { useState } from 'react'

// ── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Überblick' },
    { to: '/operationen', label: 'Operationen' },
    { to: '/daten-analyse', label: 'Daten & Analyse' },
    { to: '/marketing-vertrieb', label: 'Marketing & Vertrieb' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center">
            <Brain size={18} className="text-white" />
          </div>
          <span className="font-bold text-white text-lg">TaskMate<span className="gradient-text">AI</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive}) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`
            }>{l.label}</NavLink>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Anmelden</a>
          <a href="#" className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">Kostenlos starten</a>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && (
        <div className="md:hidden mt-2 glass rounded-2xl px-4 py-4 max-w-6xl mx-auto space-y-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to==='/'} onClick={() => setOpen(false)}
              className={({isActive}) => `block px-4 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-white/60'}`}
            >{l.label}</NavLink>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <a href="#" className="flex-1 text-center py-2 text-sm text-white/60">Anmelden</a>
            <a href="#" className="flex-1 text-center py-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm font-semibold">Starten</a>
          </div>
        </div>
      )}
    </nav>
  )
}

// ── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 py-10 text-center text-sm text-white/30">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <Link to="/datenschutz" className="hover:text-sky-400 transition-colors">Datenschutz</Link>
        <Link to="/impressum" className="hover:text-sky-400 transition-colors">Impressum</Link>
        <span>TaskMateAI &copy; 2025</span>
      </div>
    </footer>
  )
}

// ── HOME PAGE ────────────────────────────────────────────────────────────────
function Home() {
  const features = [
    { icon: <Brain size={22}/>, title: 'KI-Aufgabenpriorisierung', desc: 'Intelligente Vorschläge helfen Teams, die wichtigsten Aufgaben zuerst zu erledigen.' },
    { icon: <Zap size={22}/>, title: 'Workflow-Automatisierung', desc: 'Routineprozesse automatisch ausführen lassen und Zeit für das Wesentliche gewinnen.' },
    { icon: <BarChart3 size={22}/>, title: 'Echtzeit-Analytics', desc: 'Projektfortschritt und Teamleistung auf einen Blick mit Live-Dashboards.' },
    { icon: <Users size={22}/>, title: 'Team-Kollaboration', desc: 'Nahtlose Zusammenarbeit mit gemeinsamen Boards, Kommentaren und @Mentions.' },
    { icon: <TrendingUp size={22}/>, title: 'Performance-Tracking', desc: 'KPIs messen, Ziele setzen und Fortschritte transparent machen.' },
    { icon: <Clock size={22}/>, title: 'Zeiterfassung', desc: 'Integriertes Time-Tracking für präzise Projektabrechnung und Produktivitätsanalyse.' },
  ]
  const stats = [
    { value: '50K+', label: 'Aktive Teams' },
    { value: '2M+', label: 'Erledigte Aufgaben' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.9★', label: 'Ø Bewertung' },
  ]
  return (
    <div className="pt-32 pb-20 px-4">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/60 mb-8">
          <Zap size={14} className="text-sky-400" />
          KI-gestütztes Projektmanagement der nächsten Generation
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Projekte smarter<br/><span className="gradient-text">managen mit KI</span>
        </h1>
        <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
          TaskMateAI automatisiert Workflows, priorisiert Aufgaben intelligent und gibt Ihrem Team die Werkzeuge, die wirklich zählen.
        </p>
        {/* AI Chat Widget */}
        <div className="glass rounded-2xl p-6 max-w-2xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center">
              <Brain size={16} className="text-white"/>
            </div>
            <span className="text-sm font-semibold text-white">TaskMate KI-Assistent</span>
            <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3 text-white/70 max-w-xs">
              Guten Morgen! Du hast 5 überfällige Aufgaben und ein Meeting in 30 Minuten. Soll ich priorisieren?
            </div>
            <div className="bg-gradient-to-r from-sky-500/20 to-violet-600/20 border border-white/10 rounded-xl rounded-tr-sm px-4 py-3 text-white ml-auto max-w-xs text-right">
              Ja, bitte priorisiere und erstelle eine Zusammenfassung.
            </div>
            <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3 text-white/70 max-w-sm">
              ✅ Erledigt! Die 3 kritischen Aufgaben sind oben, und ich habe eine Meeting-Agenda für 10:00 Uhr erstellt.
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <input className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/70 placeholder-white/30 outline-none" placeholder="Frage den KI-Assistenten…"/>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm font-semibold">→</button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold text-lg hover:opacity-90 transition-opacity">Kostenlos starten</a>
          <a href="#" className="px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-colors">Demo ansehen</a>
        </div>
      </div>
      {/* Stats */}
      <div className="max-w-4xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
            <div className="text-sm text-white/40">{s.label}</div>
          </div>
        ))}
      </div>
      {/* Features */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-black text-center mb-12">Alles was moderne Teams brauchen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="glass rounded-2xl p-6 hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 flex items-center justify-center text-sky-400 mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Banner */}
      <div className="max-w-4xl mx-auto mt-24">
        <div className="glass rounded-3xl p-12 text-center" style={{background:'linear-gradient(135deg,rgba(14,165,233,0.15),rgba(124,58,237,0.15))'}}>
          <h2 className="text-4xl font-black mb-4">Bereit für smarteres Arbeiten?</h2>
          <p className="text-white/50 mb-8">Starten Sie kostenlos – keine Kreditkarte erforderlich.</p>
          <a href="#" className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold text-lg hover:opacity-90 transition-opacity">Jetzt kostenlos starten</a>
        </div>
      </div>
    </div>
  )
}

// ── OPERATIONEN PAGE ─────────────────────────────────────────────────────────
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
        <h1 className="text-5xl font-black mb-4">Operationen & <span className="gradient-text">Workflows</span></h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">Alle Werkzeuge für reibungslose Abläufe — von der Aufgabe bis zum abgeschlossenen Projekt.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(t => (
          <div key={t.title} className="glass rounded-2xl p-6 hover:bg-white/8 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 flex items-center justify-center text-sky-400 mb-4">{t.icon}</div>
            <h3 className="font-bold text-white mb-2">{t.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── DATEN & ANALYSE PAGE ─────────────────────────────────────────────────────
function DatenAnalyse() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 fade-up">
        <h1 className="text-5xl font-black mb-4">Daten & <span className="gradient-text">Analyse</span></h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">Echtzeit-Einblicke in Projektperformance, Teamproduktivität und Engpässe.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[{v:'94%',l:'Aufgaben pünktlich'},{v:'↑23%',l:'Produktivität'},{v:'3.2h',l:'Ø Zeit gespart/Tag'}].map(s => (
          <div key={s.l} className="glass rounded-2xl p-8 text-center">
            <div className="text-4xl font-black gradient-text mb-2">{s.v}</div>
            <div className="text-sm text-white/40">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: <BarChart3 size={20}/>, title: 'Team-Performance Dashboard', desc: 'Wer liefert was, wann und wie schnell — alles auf einem Blick.' },
          { icon: <TrendingUp size={20}/>, title: 'Burndown-Charts', desc: 'Sprint-Fortschritt visualisieren und frühzeitig Abweichungen erkennen.' },
          { icon: <Clock size={20}/>, title: 'Zeitauswertungen', desc: 'Projektzeit vs. geschätzte Zeit — für präzisere Planung in Zukunft.' },
          { icon: <Brain size={20}/>, title: 'KI-Prognosen', desc: 'Maschinelles Lernen sagt Projektverzögerungen 5 Tage im Voraus vorher.' },
        ].map(c => (
          <div key={c.title} className="glass rounded-2xl p-6 flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 flex items-center justify-center text-sky-400 flex-shrink-0">{c.icon}</div>
            <div><h3 className="font-bold text-white mb-1">{c.title}</h3><p className="text-sm text-white/50">{c.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── MARKETING & VERTRIEB PAGE ─────────────────────────────────────────────────
function MarketingVertrieb() {
  const plans = [
    { name: 'Starter', price: '0€', period: '/Monat', features: ['5 Projekte', '10 Teammitglieder', 'Basis-KI-Vorschläge', 'Kanban-Boards'], highlight: false },
    { name: 'Pro', price: '19€', period: '/Nutzer/Monat', features: ['Unbegrenzte Projekte', 'Unbegrenzte Mitglieder', 'Vollständige KI-Integration', 'Erweiterte Analytics', 'Priority Support'], highlight: true },
    { name: 'Enterprise', price: 'Individuell', period: '', features: ['Alles aus Pro', 'SSO & SAML', 'Dedizierter Account Manager', 'SLA-Garantie', 'On-Premise Option'], highlight: false },
  ]
  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 fade-up">
        <h1 className="text-5xl font-black mb-4">Marketing & <span className="gradient-text">Vertrieb</span></h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">Wachstum beschleunigen mit KI-Tools für Kampagnen, Leads und Sales-Pipelines.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map(p => (
          <div key={p.name} className={`rounded-2xl p-8 ${p.highlight ? 'bg-gradient-to-b from-sky-500/20 to-violet-600/20 border border-sky-500/40' : 'glass'}`}>
            {p.highlight && <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">Empfohlen</div>}
            <h3 className="text-xl font-black text-white mb-1">{p.name}</h3>
            <div className="text-4xl font-black gradient-text mb-1">{p.price}</div>
            <div className="text-sm text-white/40 mb-6">{p.period}</div>
            <ul className="space-y-2 mb-8">
              {p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-white/70"><Star size={12} className="text-sky-400"/>  {f}</li>)}
            </ul>
            <a href="#" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80 ${p.highlight ? 'bg-gradient-to-r from-sky-500 to-violet-600 text-white' : 'glass text-white'}`}>
              {p.highlight ? 'Jetzt starten' : 'Auswählen'}
            </a>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-black mb-6 text-center">KI-gestützte Marketing-Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: <Megaphone size={18}/>, t: 'Kampagnen-Planung', d: 'KI erstellt Kampagnenkalender und Content-Pläne automatisch.' },
            { icon: <TrendingUp size={18}/>, t: 'Lead-Scoring', d: 'Maschinelles Lernen bewertet Leads nach Abschlusswahrscheinlichkeit.' },
            { icon: <BarChart3 size={18}/>, t: 'ROI-Tracking', d: 'Marketing-Ausgaben direkt mit Umsatz verknüpfen.' },
            { icon: <Brain size={18}/>, t: 'Content-KI', d: 'Textentwürfe, Subject Lines und CTAs in Sekunden generieren.' },
          ].map(c => (
            <div key={c.t} className="flex gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">{c.icon}</div>
              <div><div className="font-semibold text-white text-sm mb-1">{c.t}</div><div className="text-xs text-white/50">{c.d}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── DATENSCHUTZ PAGE ─────────────────────────────────────────────────────────
function Datenschutz() {
  const sections = [
    { n:'1', t:'Verantwortlicher', c:'TaskMateAI, Musterstraße 1, 12345 Berlin, Deutschland. E-Mail: datenschutz@taskmateai.de' },
    { n:'2', t:'Erhobene Daten', c:'Wir verarbeiten Daten, die Sie bei der Registrierung angeben (Name, E-Mail), sowie Nutzungsdaten (Aufgaben, Projekte, Zeiterfassung). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).' },
    { n:'3', t:'Google OAuth', c:'Zur Authentifizierung nutzen wir Google OAuth 2.0. Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Datenschutzerklärung: https://policies.google.com/privacy' },
    { n:'4', t:'KI-Verarbeitung', c:'Unsere KI-Funktionen (Aufgabenpriorisierung, Vorschläge) analysieren Ihre Projektdaten. Dies geschieht lokal in Ihrer Organisation und wird nicht für das Training externer Modelle verwendet.' },
    { n:'5', t:'Datensicherheit', c:'Alle Daten werden verschlüsselt übertragen (TLS 1.3) und gespeichert (AES-256). Server befinden sich in der EU (Frankfurt, Deutschland).' },
    { n:'6', t:'Ihre Rechte', c:'Nach DSGVO haben Sie das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18) und Datenübertragbarkeit (Art. 20). Kontakt: datenschutz@taskmateai.de' },
    { n:'7', t:'Kontakt', c:'Bei Datenschutzfragen wenden Sie sich an: datenschutz@taskmateai.de' },
  ]
  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-600/20 flex items-center justify-center mx-auto mb-4">
          <Shield size={28} className="text-sky-400"/>
        </div>
        <h1 className="text-4xl font-black mb-3">Datenschutzerklärung</h1>
        <p className="text-white/40">Gemäß DSGVO | Stand: Januar 2025</p>
      </div>
      <div className="space-y-4">
        {sections.map(s => (
          <div key={s.n} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{s.n}</div>
              <h2 className="font-bold text-white">{s.t}</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{s.c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── IMPRESSUM PAGE ───────────────────────────────────────────────────────────
function Impressum() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-3">Impressum</h1>
        <p className="text-white/40">Angaben gemäß § 5 TMG</p>
      </div>
      <div className="space-y-4">
        {[
          { n:'1', t:'Anbieter', c:'TaskMateAI\nMusterstraße 1\n12345 Berlin\nDeutschland' },
          { n:'2', t:'Kontakt', c:'E-Mail: kontakt@taskmateai.de\nTelefon: auf Anfrage' },
          { n:'3', t:'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV', c:'TaskMateAI, Musterstraße 1, 12345 Berlin' },
          { n:'4', t:'Haftungsausschluss', c:'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte verantwortlich.' },
          { n:'5', t:'Haftung für Links', c:'Unser Angebot enthält Links zu externen Webseiten Dritter. Auf deren Inhalte haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.' },
          { n:'6', t:'Urheberrecht', c:'Die durch den Betreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung.' },
          { n:'7', t:'KI-Hinweis', c:'TaskMateAI verwendet KI-gestützte Funktionen zur Aufgabenpriorisierung und Workflow-Automatisierung. KI-generierte Inhalte werden als solche gekennzeichnet.' },
        ].map(s => (
          <div key={s.n} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{s.n}</div>
              <h2 className="font-bold text-white">{s.t}</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{s.c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/operationen" element={<><Operationen /><Footer /></>} />
        <Route path="/daten-analyse" element={<><DatenAnalyse /><Footer /></>} />
        <Route path="/marketing-vertrieb" element={<><MarketingVertrieb /><Footer /></>} />
        <Route path="/datenschutz" element={<><Datenschutz /><Footer /></>} />
        <Route path="/impressum" element={<><Impressum /><Footer /></>} />
      </Routes>
    </>
  )
}