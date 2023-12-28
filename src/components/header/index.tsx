import Link from "next/link";
import { Container, ProfileButton } from "..";
import { routes } from "~/const";
import { Button } from "../ui/button";
import { LuShoppingBag } from "react-icons/lu";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Header() {
  const { setTheme } = useTheme()
  return (
    <div className="sm:flex sm:justify-between py-2 px-4 border-b">
      <Container>
        <div className="relative px-3 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="link" className="md:hidden -ml-4">
                  <BiMenuAltLeft className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
              >
                <nav className="flex flex-col gap-4 ml-4 mt-4">
                  {routes.map((route: { href: string, label: string }, id: number) => (
                    <Link
                      key={id}
                      href={route.href}
                      className="text-lg font-medium transition-colors"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-2 lg:ml-0">
              <h1 className="text-xl font-bold">
                STORE NAME
              </h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route: { href: string, label: string }, id: number) => (
              <Button asChild variant="ghost" key={id}>
                <Link
                  key={id}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <LuShoppingBag className="w-6 h-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-3"
                  aria-label="Toggle theme"
                >
                  <IoSunnyOutline className="h-6 w-6 scale-100 transition-all dark:scale-0" />
                  <IoMoonOutline className="absolute h-6 w-6 scale-0 transition-all dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </div>
  )
}
