import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { OrganicShapes, HandDrawnStar } from "@/components/site/OrganicShapes";
import aboutStory from "@/assets/about-story.jpg";

const milestones = [
  { year: "2019", body: "A single Saturday market in a borrowed courtyard. 12 vendors. Coffee in paper cups." },
  { year: "2021", body: "Three cities, a team of two, and a waiting list of makers longer than our tent poles." },
  { year: "2024", body: "A roaming calendar, a small grant fund for first-time vendors, and a name that felt like ours." },
  { year: "Today", body: "120+ merchants, eight seasonal pop-ups, and a community that keeps showing up." },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Project Nomad" },
      {
        name: "description",
        content:
          "Project Nomad is a curated pop-up market brand for the makers, bakers, and quiet rebels of the local scene.",
      },
      { property: "og:title", content: "About — Project Nomad" },
      {
        property: "og:description",
        content: "The story behind the pop-up market brand connecting local merchants and customers.",
      },
      {
        property: "og:image",
        content: "https://id-preview--ca01ed95-760d-40dd-9d4f-8b6b0d38bd0d.lovable.app/assets/about-story.jpg",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 -z-10 gradient-soft-mesh" aria-hidden="true" />
        <OrganicShapes />

        <div className="container-nomad">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Our story</span>
            </div>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              <span className="font-display text-primary">Markets</span> that wander,
              <br />
              people that stay.
            </h1>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-muted-foreground">
              We started Project Nomad with a simple, slightly stubborn idea: the
              best things in a city aren't on the main drag. They're tucked away,
              made by hand, and waiting to be found.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-20 md:py-28">
        <div className="container-nomad">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative overflow-hidden rounded-3xl shadow-elevated ring-1 ring-border/60">
              <img
                src={aboutStory}
                alt="A young artisan vendor arranging handmade ceramics at a Project Nomad pop-up market"
                width={1024}
                height={768}
                loading="lazy"
                className="h-[400px] w-full object-cover md:h-[520px]"
              />
            </div>
            <div>
              <p className="font-display text-2xl text-gold">What we believe</p>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Local things, made by{" "}
                <span className="font-display text-primary">real people</span>,
                deserve a room that fits.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Every market we run is small on purpose. We hand-pick vendors,
                design the layout ourselves, and stay for the conversation. No
                booth fees that price out first-timers, no algorithms deciding
                who gets seen — just a place, a few good tables, and the right
                crowd.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Whether you're a baker with a single signature recipe or a
                ceramicist three years into a practice, we want to help you
                find your people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="relative bg-navy-soft/30 py-24 md:py-32">
        <HandDrawnStar className="pointer-events-none absolute right-[6%] top-[14%] h-12 w-12 text-gold/70 animate-float-slower" />
        <div className="container-nomad">
          <div className="mx-auto max-w-3xl">
            <p className="text-center font-display text-2xl text-gold">
              How we got here
            </p>
            <h2 className="mt-2 text-center text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="font-display text-primary">A small</span> timeline.
            </h2>

            <ol className="mt-14 space-y-6">
              {milestones.map((m) => (
                <li
                  key={m.year}
                  className="grid grid-cols-[auto_1fr] gap-6 rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:shadow-elevated"
                >
                  <span className="font-display text-3xl text-primary leading-none">
                    {m.year}
                  </span>
                  <p className="text-base leading-relaxed text-foreground/85">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-32">
        <div className="absolute inset-0 -z-10 gradient-navy-radial" aria-hidden="true" />
        <div className="container-nomad">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="font-display text-primary">Bring</span> your store to
              the next market.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us a little about what you make — we'll take it from there.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/register">
                  Register Your Store
                  <ArrowRight className="h-4 w-4" />
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
