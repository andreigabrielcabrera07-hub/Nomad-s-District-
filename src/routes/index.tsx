import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Compass, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { OrganicShapes, HandDrawnArrow, HandDrawnStar } from "@/components/site/OrganicShapes";
import heroMarket from "@/assets/hero-market.jpg";

const values = [
  {
    icon: Users,
    title: "Community first",
    body: "Every market is built around the people who show up — neighbors becoming regulars, makers finding their people.",
  },
  {
    icon: Compass,
    title: "Wander together",
    body: "We pop up in unexpected places — rooftops, courtyards, harbor docks. Discovery is part of the craft.",
  },
  {
    icon: Leaf,
    title: "Slow & considered",
    body: "Handmade, local, seasonal. We celebrate makers who care about what they put into the world.",
  },
];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Project Nomad — We're More Than Just a Market" },
      {
        name: "description",
        content:
          "A curated pop-up market brand connecting local merchants and curious customers. Discover, gather, and belong.",
      },
      { property: "og:title", content: "Project Nomad — We're More Than Just a Market" },
      {
        property: "og:description",
        content:
          "A curated pop-up market brand connecting local merchants and customers.",
      },
      {
        property: "og:image",
        content: "https://id-preview--ca01ed95-760d-40dd-9d4f-8b6b0d38bd0d.lovable.app/assets/hero-market.jpg",
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 -z-10 gradient-soft-mesh" aria-hidden="true" />
        <OrganicShapes />

        <div className="container-nomad relative">
          <div className="grid items-center gap-12 pb-20 md:grid-cols-12 md:gap-8 md:pb-28 lg:pb-36">
            {/* Copy */}
            <div className="md:col-span-7 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                <span>Pop-up markets · Local merchants · Free spirits</span>
              </div>

              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                <span className="block">We're</span>
                <span className="font-display text-primary">
                  More Than Just a Market
                </span>
                <span className="mt-2 inline-block text-foreground">—</span>
                <span className="block text-3xl font-medium text-foreground/80 sm:text-4xl lg:text-5xl">
                  a place to gather.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Project Nomad is a roaming pop-up market for the makers, bakers,
                and quiet rebels of the local scene. We show up where the good
                stuff lives — and we bring the neighbors with us.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild variant="gold" size="lg">
                  <Link to="/register">
                    Register Your Store
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="navyOutline" size="lg">
                  <Link to="/about">Read our story</Link>
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-gold/80" />
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-primary/80" />
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-navy-soft" />
                </div>
                <span>
                  <span className="font-semibold text-foreground">120+</span> local merchants
                  and counting.
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl shadow-elevated ring-1 ring-border/60">
                <img
                  src={heroMarket}
                  alt="A curated pop-up market with white canvas tents at golden hour"
                  width={1280}
                  height={896}
                  className="h-[360px] w-full object-cover sm:h-[440px] md:h-[520px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep/30 to-transparent" />
              </div>

              {/* Floating handwritten badge */}
              <div className="absolute -left-6 -top-6 hidden rotate-[-8deg] md:block">
                <div className="rounded-2xl bg-background px-4 py-3 shadow-elevated ring-1 ring-border/60">
                  <p className="font-display text-2xl leading-none text-primary">
                    Roaming
                  </p>
                  <p className="font-display text-2xl leading-none text-gold">
                    everywhere
                  </p>
                </div>
              </div>

              {/* Floating star accent */}
              <div className="absolute -bottom-6 -right-4 hidden md:block">
                <HandDrawnStar className="h-14 w-14 text-gold animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / ABOUT */}
      <section className="relative bg-navy-soft/30 py-24 md:py-32">
        <div className="container-nomad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl text-gold">Our mission</p>
            <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="font-display text-primary">Gathering</span> the makers
              <br className="hidden sm:block" />
              who make a place feel like home.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We started Project Nomad because the best parts of a city aren't on the
              main street — they're tucked into alleys, parked at piers, set up in
              someone's backyard. We're here to bring those corners to light, one
              weekend market at a time.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, idx) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-primary transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  <span className="font-display text-2xl text-primary mr-2">
                    0{idx + 1}
                  </span>
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <HandDrawnArrow className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 -z-10 gradient-navy-radial" aria-hidden="true" />
        <HandDrawnStar className="pointer-events-none absolute left-[8%] top-[18%] h-10 w-10 text-gold/70 animate-float-slower" />
        <HandDrawnStar className="pointer-events-none absolute right-[12%] top-[30%] h-6 w-6 text-gold animate-float-slow" />

        <div className="container-nomad">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-2xl text-gold">Join the caravan</p>
            <h2 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Ready to set up shop
              <span className="font-display text-primary"> with us?</span>
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us about your store and we'll find the next market where your
              story fits. No fees, no algorithms — just real rooms and the right
              crowd.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/register">
                  Register Your Store
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
