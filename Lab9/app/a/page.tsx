import Link from "next/link"
import ThemeDropdown from "@/components/theme/theme-dropdown"

export default function PageA() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold">Page A</h1>

      {/* Nút đổi theme */}
      <ThemeDropdown />

      {/* Chuyển sang B */}
      <Link
        href="/b"
        className="inline-block px-4 py-2 rounded bg-blue-600 text-white"
      >
        Go to Page B
      </Link>
    </div>
  )
}
