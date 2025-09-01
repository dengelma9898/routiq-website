import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionCard } from "@/lib/motion/motion-card";
import { Reveal } from "@/lib/motion/reveal";
import { Map, Sparkles, ListPlus, Trash2, RefreshCw, Rocket, Users, TrendingUp, Workflow } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function Home() {
  return (
    <main className="py-16">
      <section className="text-center space-y-6 relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(40%_40%_at_50%_0%,black,transparent)]">
          <div className="absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(closest-side,oklch(0.88_0.25_310_/_0.6),transparent_70%)] blur-3xl" />
          <div className="absolute left-1/2 top-20 h-[30rem] w-[60rem] -translate-x-1/2 bg-[radial-gradient(closest-side,oklch(0.9_0.22_210_/_0.45),transparent_70%)] blur-3xl" />
          <div className="absolute left-1/2 top-40 h-[20rem] w-[40rem] -translate-x-1/2 bg-[radial-gradient(closest-side,oklch(0.92_0.2_145_/_0.35),transparent_70%)] blur-3xl" />
        </div>
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Routiq</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-3">
            Routiq ist ein Smart‑City‑Guide: TSP‑optimierte Routenplanung, schnelle POI‑Discovery,
            Swipe‑basierte Auswahl, vollständige Reoptimierung sowie performantes Caching – inspiriert von den
            Architektur‑ und Sicherheitsrichtlinien des Projekt‑Repos. Fokus: klare UX, sanfte Motion, starke Performance.
          </p>
        </Reveal>
      </section>
      
      
      <section className="mt-10">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Warum Routiq?</h2>
            </div>
            <SpotlightCard className="p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium">Für wen?</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>Besucher, die Highlights effizient erleben möchten</li>
                    <li>Einheimische, die neue Spots entdecken wollen</li>
                    <li>Partner/Veranstalter mit kuratierten Routen</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium">Was bringt’s?</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>Weniger Planungszeit, mehr vor Ort</li>
                    <li>Sinnvolle Laufwege statt Zickzack</li>
                    <li>Spontan bleiben: POIs ad hoc hinzufügbar</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Workflow className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium">Wie funktioniert’s?</h3>
                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    <li>POIs entdecken, per Swipe auswählen</li>
                    <li>TSP‑Optimierung ordnet die Reihenfolge</li>
                    <li>Mit einem Klick komplett reoptimieren</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>
      </section>
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Funktionen</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
        {[
          { id: "tsp", title: "TSP‑optimierte Routen", desc: "Intelligente Reihenfolge für Stopps.", icon: Sparkles, details: "Routenoptimierung via TSP‑Heuristiken; Start/Ziel fix; Re‑Ranking möglich." },
          { id: "poi", title: "POI‑Discovery", desc: "Orte finden und hinzufügen.", icon: Map, details: "Schnelle Ortssuche, Kategorien, Vorschläge; manuelle Ergänzungen möglich." },
          { id: "swipe", title: "POIs per Swipe‑Deck", desc: "Schnell nehmen oder überspringen.", icon: ListPlus, details: "Deck‑UI: links überspringen, rechts übernehmen; mehrere POIs nacheinander." },
          { id: "delete", title: "Stopps löschen (Swipe)", desc: "Einzelne Zwischenstopps entfernen.", icon: Trash2, details: "Route passt sich an; beim letzten Stopp zurück zur Planung." },
          { id: "reopt", title: "Vollständige Reoptimierung", desc: "CTA „Jetzt optimieren“.", icon: RefreshCw, details: "Neuordnung aller Stopps; robuste Heuristiken und Constraints." },
          { id: "perf", title: "Caching & Performance", desc: "Schnelle Ladezeiten & Caches.", icon: Rocket, details: "POI‑ und Routen‑Caches; minimaler Overhead; sauberes Error‑Handling." },
        ].map(({ id, title, desc, icon: Icon }) => (
          <MotionCard key={id} className="relative">
            <SpotlightCard className="p-4 overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,oklch(0.92_0.22_270_/_0.14),transparent_70%)]" />
            <CardHeader className="flex flex-row items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle className="text-foreground">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{desc}</p>
              <a href={`#feature-${id}`} className="text-sm text-primary hover:underline mt-2 inline-block">Mehr erfahren →</a>
            </CardContent>
            </SpotlightCard>
          </MotionCard>
        ))}
        </div>
      </section>
      <section className="mt-20 space-y-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Feature‑Details</h2>
        </Reveal>
        <div className="space-y-16">
          {[
            { id: "tsp", title: "TSP‑optimierte Routen", text: "Optimiert die Reihenfolge zwischen Stopps mithilfe effizienter Heuristiken; Start/Ziel bleiben fixierbar.", icon: Sparkles },
            { id: "poi", title: "POI‑Discovery", text: "Schnelle Suche, Kategorien, Vorschläge und manuelle Ergänzungen – flexibel für unterschiedliche Städte.", icon: Map },
            { id: "swipe", title: "Swipe‑Deck", text: "Nehmen/Überspringen per Swipe; mehrere POIs in einem Flow hinzufügen ohne Kontextwechsel.", icon: ListPlus },
            { id: "delete", title: "Stopps löschen", text: "Einzelne Stopps entfernen; intelligente Anpassung der Route; sinnvolle Defaults für leere Listen.", icon: Trash2 },
            { id: "reopt", title: "Reoptimierung", text: "Komplette Neuordnung mit einem CTA; Re‑Ranking berücksichtigt bestehende Constraints.", icon: RefreshCw },
            { id: "perf", title: "Caching & Performance", text: "Aggressives Caching für POIs/Wege; optimierte Netznutzung und stabiles Error‑Handling.", icon: Rocket },
          ].map(({ id, title, text, icon: Icon }) => (
            <div key={id} id={`feature-${id}`} className="scroll-mt-24">
              <Reveal>
                <SpotlightCard className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                      <p className="text-muted-foreground mt-1 max-w-3xl">{text}</p>
                      {id === "tsp" && (
                        <ul className="mt-3 list-disc pl-6 text-muted-foreground max-w-3xl">
                          <li>Heuristische Optimierung (z. B. lokale Verbesserungen) für schnelle, gute Lösungen.</li>
                          <li>Konfigurierbare Constraints: Start/Ziel fixieren, maximale Weglänge, Reihenfolge sperren.</li>
                          <li>Distanz‑/Dauer‑Matrix; vermeidet unnötige Backtracking‑Strecken.</li>
                        </ul>
                      )}
                      {id === "poi" && (
                        <ul className="mt-3 list-disc pl-6 text-muted-foreground max-w-3xl">
                          <li>Kategorie‑/Keyword‑Suche mit Autovervollständigung und sinnvollen Defaults.</li>
                          <li>Manuelles Hinzufügen; Dubletten‑Erkennung reduziert Mehrfacheinträge.</li>
                          <li>Flexible Provider‑Anbindung; robuste Fehlerbehandlung & Rate‑Limit‑Schutz.</li>
                        </ul>
                      )}
                      {id === "swipe" && (
                        <ul className="mt-3 list-disc pl-6 text-muted-foreground max-w-3xl">
                          <li>Rechts = übernehmen, links = überspringen; schneller Flow ohne Kontextwechsel.</li>
                          <li>Batch‑Aufnahme mehrerer POIs; klare visuelle Bestätigung.</li>
                          <li>Optionaler CTA zur direkten Reoptimierung im Anschluss.</li>
                        </ul>
                      )}
                      {id === "delete" && (
                        <ul className="mt-3 list-disc pl-6 text-muted-foreground max-w-3xl">
                          <li>Swipe‑to‑delete pro Zwischenstopp; Rest der Route bleibt konsistent.</li>
                          <li>Automatische Neu‑Berechnung der Übergänge; sinnvolle Fallbacks bei leerer Liste.</li>
                          <li>Sanfte Motion zur Orientierung (keine hart springenden Elemente).</li>
                        </ul>
                      )}
                      {id === "reopt" && (
                        <ul className="mt-3 list-disc pl-6 text-muted-foreground max-w-3xl">
                          <li>„Jetzt optimieren“ startet eine vollständige Anordnung aller Stopps.</li>
                          <li>Berücksichtigt gesperrte Reihenfolgen & fixierte Start‑/Zielpunkte.</li>
                          <li>Progress‑Feedback und idempotentes Verhalten bei wiederholtem Auslösen.</li>
                        </ul>
                      )}
                      {id === "perf" && (
                        <ul className="mt-3 list-disc pl-6 text-muted-foreground max-w-3xl">
                          <li>POI‑ und Routen‑Caching mit klaren Invalidierungsregeln.</li>
                          <li>Debouncte Suche, minimale Overdraws, GPU‑freundliche Transitions.</li>
                          <li>Graceful Error‑Handling: Fallback‑UI und Retries ohne Blockieren.</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt – letzte Sektion */}
      <section className="mt-24" id="contact">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Kontakt</h2>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Fragen, Ideen oder Feedback? Schreib uns – wir freuen uns über Austausch rund um Routiq.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <a href="mailto:hello@routiq.app" className="rounded-md border p-4 hover:bg-accent hover:text-accent-foreground transition-colors">hello@routiq.app</a>
            <a href="https://github.com/dengelma9898/smart-city-guide" target="_blank" rel="noreferrer" className="rounded-md border p-4 hover:bg-accent hover:text-accent-foreground transition-colors">GitHub Projekt</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
