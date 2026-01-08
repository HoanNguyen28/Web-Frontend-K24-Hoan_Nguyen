"use client"
import { RootState } from "@/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const mode = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark")
  }, [mode])

  return <>{children}</>
}
