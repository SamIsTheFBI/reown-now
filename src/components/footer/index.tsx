import Link from "next/link";
import { Container } from "..";

export default function Footer() {
  return (
    <div className="sm:flex sm:justify-between py-2 px-4 border-t">
      <Container>
        <div className="relative px-3 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <Link href="/" className="ml-2 lg:ml-0">
            <h1 className="text-xl font-bold">
              REOWN.now
            </h1>
          </Link>
          <p>All rights reserved &copy; 2023</p>
        </div>
      </Container>
    </div>
  )
}
