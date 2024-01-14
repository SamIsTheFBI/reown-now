import Link from "next/link";
import { Container } from "..";

export default function Footer() {
  return (
    <footer className="sm:flex sm:justify-between px-4 border-t h-16">
      <Container>
        <div className="relative px-3 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between w-full gap-2 py-3">
          <Link href="/">
            <h1 className="text-xl font-bold">
              REOWN.now
            </h1>
          </Link>
          <span className="text-sm">All rights reserved &copy; 2023</span>
        </div>
      </Container>
    </footer>
  )
}
