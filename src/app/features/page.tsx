import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Map, Newspaper, Users, QrCode, CalendarDays, Sparkles, Settings, ShieldCheck } from "lucide-react"

export default function FeaturesPage() {
  const items = [
    { title: "Interaktive Karte", desc: "POIs, Partner & Events auf smarter Map.", icon: Map },
    { title: "News & Umfragen", desc: "Publiziere News, Reaktionen & Surveys.", icon: Newspaper },
    { title: "Community & Chat", desc: "Chatrooms und neue Leute entdecken.", icon: Users },
    { title: "QR‑Codes & Treuekarte", desc: "Scans, Rewards und Stempelkarten.", icon: QrCode },
    { title: "Events & Kalender", desc: "Erstellen, favorisieren, planen.", icon: CalendarDays },
    { title: "Optimierte Routenplanung", desc: "TSP‑Optimierung & manuelles Re‑Ranking.", icon: Sparkles },
    { title: "Einstellungen & Profile", desc: "Profil, Präferenzen, Sprachen & Theme.", icon: Settings },
    { title: "Security by Design", desc: "Sichere API‑Keys & Best Practices.", icon: ShieldCheck },
  ]

  return (
    <main className="py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Smart City Guide – Features</h1>
        <p className="text-muted-foreground max-w-3xl">Aus den Projekt-Dokumenten übernommen: Kernfunktionen für Routen, Orte und Community.</p>
      </header>
      <section className="grid md:grid-cols-3 gap-6">
        {items.map(({ title, desc, icon: Icon }) => (
          <Card key={title} className="relative overflow-hidden transition-transform hover:-translate-y-0.5">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,oklch(0.92_0.22_270_/_0.18),transparent_70%)]" />
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-foreground/10 backdrop-blur">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}


