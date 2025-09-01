import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="py-16 space-y-6 max-w-xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Kontakt</h1>
      <form className="space-y-4">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm">E-Mail</label>
          <Input id="email" type="email" placeholder="du@example.com" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm">Nachricht</label>
          <textarea id="message" className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm" required />
        </div>
        <Button type="submit">Senden</Button>
      </form>
    </main>
  )
}



