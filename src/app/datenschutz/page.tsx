export const metadata = { title: "Datenschutz — routiq" }

export default function DatenschutzPage() {
  return (
    <main className="py-12 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>
      <section className="space-y-3 max-w-3xl">
        <h2 className="font-semibold">Verantwortlicher</h2>
        <p>Dominik Engelmann, Bienenweg 4, 90537 Feucht, Deutschland</p>
        <p>E‑Mail: <a className="underline" href="mailto:dengelma.solutions@gmail.com">dengelma.solutions@gmail.com</a></p>
      </section>
      <section className="space-y-3 max-w-3xl">
        <h2 className="font-semibold">Allgemeines</h2>
        <p>
          Diese Website ist ein Demonstrations‑Projekt. Es werden keine personenbezogenen Daten ohne Ihre
          Mitwirkung verarbeitet. Bei einer Kontaktaufnahme per E‑Mail verarbeiten wir die von Ihnen übermittelten
          Informationen ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO).
        </p>
      </section>
      <section className="space-y-3 max-w-3xl">
        <h2 className="font-semibold">Server‑Logs</h2>
        <p>
          Beim Aufruf der Website können durch den Hosting‑Anbieter technische Logdaten erhoben werden (z. B.
          IP‑Adresse, Zeitpunkt des Zugriffs, User‑Agent). Diese Daten sind für die Bereitstellung der Seite
          erforderlich und werden nach kurzer Zeit gelöscht.
        </p>
      </section>
      <section className="space-y-3 max-w-3xl">
        <h2 className="font-semibold">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an die oben genannten Kontaktdaten.
        </p>
      </section>
    </main>
  )
}


