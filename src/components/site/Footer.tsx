import { Link } from "@tanstack/react-router";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/register", label: "Register" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-navy-soft/40">
      <div className="container-nomad py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-primary">
                Project Nomad
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              A curated pop-up market brand connecting local merchants with curious
              customers. Made for makers, gatherers, and free spirits.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </p>
            <ul className="flex flex-col gap-2 md:items-end">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {year} Project Nomad. Crafted with care.</p>
          <p className="font-display text-lg text-primary">Wander often. Stay curious.</p>
        </div>
      </div>
    </footer>
  );
}
