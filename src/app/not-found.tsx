import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <p className="text-6xl font-extrabold text-primary">404</p>
      <h1 className="text-2xl font-bold lg:text-4xl">Page not found</h1>
      <p className="text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Button size="lg" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </section>
  );
}
