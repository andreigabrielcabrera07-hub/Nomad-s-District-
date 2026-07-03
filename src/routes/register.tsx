import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Instagram, Globe, Mail, Phone, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { OrganicShapes, HandDrawnStar } from "@/components/site/OrganicShapes";

const productCategories = [
  "Food & Drink",
  "Ceramics & Pottery",
  "Art & Prints",
  "Jewelry",
  "Clothing & Textiles",
  "Candles & Home",
  "Plants & Flowers",
  "Vintage & Curated",
  "Wellness & Beauty",
  "Other",
] as const;

type FormState = {
  storeName: string;
  ownerName: string;
  email: string;
  phone: string;
  category: string;
  instagram: string;
  website: string;
  notes: string;
};

const emptyForm: FormState = {
  storeName: "",
  ownerName: "",
  email: "",
  phone: "",
  category: "",
  instagram: "",
  website: "",
  notes: "",
};

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Register Your Store — Project Nomad" },
      {
        name: "description",
        content:
          "Apply to be a vendor at a Project Nomad pop-up market. Tell us about your store and we'll find the right fit.",
      },
      { property: "og:title", content: "Register Your Store — Project Nomad" },
      {
        property: "og:description",
        content: "Apply to vendor at our next pop-up market.",
      },
    ],
  }),
});

function RegisterPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 -z-10 gradient-soft-mesh" aria-hidden="true" />
        <OrganicShapes />
        <HandDrawnStar className="pointer-events-none absolute left-[6%] top-[24%] h-12 w-12 text-gold/70 animate-float-slower" />

        <div className="container-nomad pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3 text-foreground/70">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back home
              </Link>
            </Button>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Vendor application</span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="font-display text-primary">Register</span> your store
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us a bit about what you make and where to find you. We'll review
              every application personally and reach out within a week.
            </p>

            {submitted ? (
              <SuccessCard />
            ) : (
              <RegistrationForm
                form={form}
                update={update}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function RegistrationForm({
  form,
  update,
  onSubmit,
}: {
  form: FormState;
  update: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 grid gap-6 rounded-3xl border border-border/60 bg-card/90 p-6 shadow-soft backdrop-blur sm:p-8 md:p-10"
      noValidate
    >
      {/* Store */}
      <FieldGroup title="About your store" subtitle="The basics so we can introduce you properly.">
        <Field label="Store name" required htmlFor="storeName">
          <Input
            id="storeName"
            name="storeName"
            required
            placeholder="e.g. Willow & Clay"
            value={form.storeName}
            onChange={(e) => update("storeName", e.target.value)}
            className="h-12 rounded-xl border-border/80 bg-background px-4 text-base"
          />
        </Field>

        <Field label="Product category" required htmlFor="category">
          <select
            id="category"
            name="category"
            required
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="h-12 w-full rounded-xl border border-border/80 bg-background px-4 text-base text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <option value="" disabled>
              Pick what fits best
            </option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </Field>
      </FieldGroup>

      {/* Owner */}
      <FieldGroup title="About you" subtitle="How we'll reach you after we review your application.">
        <Field label="Owner name" required htmlFor="ownerName">
          <Input
            id="ownerName"
            name="ownerName"
            required
            placeholder="Your full name"
            value={form.ownerName}
            onChange={(e) => update("ownerName", e.target.value)}
            className="h-12 rounded-xl border-border/80 bg-background px-4 text-base"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" required htmlFor="email" icon={<Mail className="h-4 w-4" />}>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@yourstore.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="h-12 rounded-xl border-border/80 bg-background px-4 text-base"
            />
          </Field>
          <Field label="Phone" htmlFor="phone" icon={<Phone className="h-4 w-4" />}>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Optional, but helpful"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="h-12 rounded-xl border-border/80 bg-background px-4 text-base"
            />
          </Field>
        </div>
      </FieldGroup>

      {/* Social */}
      <FieldGroup title="Where to find you online" subtitle="Paste your handles — we'll do the rest.">
        <Field label="Instagram" htmlFor="instagram" icon={<Instagram className="h-4 w-4" />}>
          <Input
            id="instagram"
            name="instagram"
            placeholder="@yourstore"
            value={form.instagram}
            onChange={(e) => update("instagram", e.target.value)}
            className="h-12 rounded-xl border-border/80 bg-background px-4 text-base"
          />
        </Field>

        <Field label="Website" htmlFor="website" icon={<Globe className="h-4 w-4" />}>
          <Input
            id="website"
            name="website"
            type="url"
            placeholder="https://yourstore.com"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            className="h-12 rounded-xl border-border/80 bg-background px-4 text-base"
          />
        </Field>
      </FieldGroup>

      {/* Notes */}
      <FieldGroup title="A few words" subtitle="Anything you want us to know before we meet.">
        <Field label="Notes" htmlFor="notes">
          <Textarea
            id="notes"
            name="notes"
            placeholder="What are you hoping to bring to a Nomad market?"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            rows={4}
            className="rounded-xl border-border/80 bg-background px-4 py-3 text-base"
          />
        </Field>
      </FieldGroup>

      <div className="flex flex-col-reverse items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We read every application. By submitting you agree to a friendly
          follow-up email.
        </p>
        <Button type="submit" variant="gold" size="lg" className="sm:min-w-[200px]">
          Submit application
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}

function FieldGroup({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid gap-5">
      <legend className="mb-1">
        <p className="font-display text-2xl text-primary">{title}</p>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  htmlFor,
  required,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
        {icon ? <span className="text-muted-foreground">{icon}</span> : null}
        {label}
        {required ? <span className="text-gold">*</span> : null}
      </Label>
      {children}
    </div>
  );
}

function SuccessCard() {
  return (
    <div className="mt-10 rounded-3xl border border-gold/40 bg-card p-8 shadow-elevated sm:p-12 animate-fade-up">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-primary">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="font-display text-primary">You're in the queue.</span>
      </h2>
      <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
        Thanks for applying to Project Nomad. We read every form ourselves and
        will get back to you within a week — usually with a few follow-up
        questions and, hopefully, a market invitation.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild variant="gold" size="lg">
          <Link to="/">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="navyOutline" size="lg">
          <Link to="/about">Read our story</Link>
        </Button>
      </div>
    </div>
  );
}
