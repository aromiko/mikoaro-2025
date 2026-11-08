import { Construction } from "lucide-react";

export function UnderConstruction({ title }: { title: string }) {
  return (
    <section className="container flex flex-col items-center justify-center gap-12 px-4 py-12 text-center lg:py-20">
      <Construction className="size-32" aria-hidden="true" />
      <div>
        <h1 className="text-2xl font-extrabold lg:text-4xl">{title}</h1>
        <p className="mt-2 text-lg font-bold tracking-wide uppercase">
          Under construction
        </p>
      </div>
    </section>
  );
}
