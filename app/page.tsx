import ClientOnly from "@/components/client-only"
import Dashboard from "@/dashboard"

export default function Home() {
  return (
    <ClientOnly>
      <Dashboard />
    </ClientOnly>
  )
}