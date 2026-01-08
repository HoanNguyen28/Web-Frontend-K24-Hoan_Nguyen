import Link from "next/link"
import ThemeDropdown from "@/components/theme/theme-dropdown"

export default function PageB() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold">Page B</h1>

     
      <ThemeDropdown />

     
      <Link
        href="/a"
        className="inline-block px-4 py-2 rounded bg-green-600 text-white"
      >
        Back to Page A
      </Link>
    </div>
  )
}
