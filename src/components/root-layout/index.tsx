import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Footer, Header } from "~/components"
import { Inter as FontSans } from "next/font/google"
import { cn } from "~/utils/shadcn"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const RootLayout = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default RootLayout
