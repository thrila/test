import { useQueryClient, useQuery } from "@tanstack/react-query"
import Auto from "./components/Autocpmpletion/auto"
export default function Home() {
  // https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        <Auto />
      </h1>

    </main>
  )
}
