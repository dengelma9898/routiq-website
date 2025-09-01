export const metadata = { title: "Impressum — routiq" }

export default function ImpressumPage() {
  return (
    <main className="py-12 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Impressum</h1>
      <section className="space-y-3 max-w-3xl">
        <h2 className="font-semibold">Angaben gemäß § 5 TMG</h2>
        <p>Dominik Engelmann</p>
        <p>Bienenweg 4</p>
        <p>90537 Feucht</p>
        <p>Deutschland</p>
      </section>

      <section className="space-y-3 max-w-3xl">
        <h2 className="font-semibold">Kontakt</h2>
        <p>E‑Mail: <a className="underline" href="mailto:dengelma.solutions@gmail.com">dengelma.solutions@gmail.com</a></p>
      </section>

      <section className="space-y-3 max-w-3xl text-sm text-muted-foreground">
        <h2 className="font-semibold text-foreground">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
          konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
        <h2 className="font-semibold text-foreground">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
          wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        </p>
        <h2 className="font-semibold text-foreground">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </main>
  )
}


