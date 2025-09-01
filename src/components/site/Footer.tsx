export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} routiq. Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-4">
          <a href="/impressum" className="hover:text-foreground">Impressum</a>
          <a href="/datenschutz" className="hover:text-foreground">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}



