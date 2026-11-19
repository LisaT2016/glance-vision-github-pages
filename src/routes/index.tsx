import { createFileRoute } from "@tanstack/react-router";
import { Check, Eye, Gauge, ShieldCheck, Wrench } from "lucide-react";

import { JoinLink } from "../components/join-link";
/*import cityTraffic from "public/images/citytraffic.jpg"; //../assets/citytraffic.jpg.asset.json";
import sideMirror from "public/images/sidemirror.jpg"; //../assets/sidemirror.jpg.asset.json";
import snow from "public/images/snow.jpg"; //../assets/snow.jpg.asset.json";
import sunset from "public/images/sunset.jpg"; //../assets/sunset.jpg.asset.json";
import traffic from "public/images/traffic.jpg"; //../assets/traffic.jpg.asset.json";*/

const cityTrafficUrl = `${import.meta.env.BASE_URL}images/citytraffic.jpg`;
const sideMirrorUrl = `${import.meta.env.BASE_URL}images/sidemirror.jpg`;
const snowUrl = `${import.meta.env.BASE_URL}images/snow.jpg`;
const sunsetUrl = `${import.meta.env.BASE_URL}images/sunset.jpg`;
const trafficUrl = `${import.meta.env.BASE_URL}images/traffic.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glance Vision | Blind Spot Alerts for Truck Fleets" },
      {
        name: "description",
        content:
          "A self-install digital kit delivering real-time blind spot alerts for Class 6 truck drivers and fleet managers.",
      },
      { property: "og:title", content: "Glance Vision | Blind Spot Alerts for Truck Fleets" },
      {
        property: "og:description",
        content: "Real-time blind spot alerts in a digital kit fleet teams can install themselves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-hero-foreground/20">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-24 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="min-w-0 font-display text-xl font-bold text-hero-foreground sm:text-2xl"
          >
            Glance <span className="text-accent">Vision</span>
          </a>
          <JoinLink compact />
        </div>
      </header>

      <section
        id="top"
        className="hero-section relative flex min-h-[720px] items-end sm:min-h-[760px]"
      >
        <img
          src={sideMirrorUrl}
          alt="Heavy traffic visible in a truck side mirror at sunset"
          className="absolute inset-0 h-full w-full object-cover object-[54%_center]"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
              <span className="h-px w-10 bg-accent" /> Built for Class 6 fleets
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.98] text-hero-foreground sm:text-7xl lg:text-8xl">
              Real-time blind spot alerts for truck drivers.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-hero-muted sm:text-xl">
              A digital safety kit that your fleet can self-install, without taking trucks out of
              service for lengthy professional installation.
            </p>
            <div className="mt-9">
              <JoinLink />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <p className="section-kicker text-accent">The risk is already on the road</p>
            <h2 className="section-title mt-4 max-w-xl">
              Blind spots put your drivers and business in a difficult position.
            </h2>
          </div>
          <div className="grid gap-7 border-l border-primary-foreground/25 pl-6 sm:pl-10">
            <p className="text-xl leading-relaxed text-primary-foreground/80 sm:text-2xl">
              Class 6 trucks have severe blind spots. In dense Chicagoland traffic, what a driver
              cannot see can quickly become an accident.
            </p>
            <p className="text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
              Without Glance Vision, truckers risk continued exposure to collisions, liability, and
              avoidable downtime. Conventional installations can keep a working truck off the road
              longer than your fleet can afford.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-kicker text-secondary">The Glance Vision kit</p>
              <h2 className="section-title mt-4">Clear alerts. Practical installation.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Give drivers added awareness without needing to schedule every truck for a
              time-consuming professional installation.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Real-time alerts",
                text: "Digital blind spot alerts help drivers recognize what is beside the truck while they are on the road.",
              },
              {
                icon: Wrench,
                title: "Self-install design",
                text: "The user can install the device, reducing dependence on a lengthy professional installation process.",
              },
              {
                icon: Gauge,
                title: "Fleet-ready approach",
                text: "Designed for fleet owners and managers who need additional safety measures without extended downtime.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="bg-background p-7 sm:p-9">
                <div className="mb-10 flex items-center justify-between">
                  <Icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <img
              src={snowUrl}
              alt="Class 6 trucks traveling on a winter highway"
              className="h-full min-h-80 w-full object-cover"
              loading="lazy"
            />
            <div className="bg-muted p-7 sm:p-10">
              <p className="section-kicker text-secondary">What changes</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                More awareness without a long stop in the shop.
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  "Drivers receive added visibility where mirrors fall short.",
                  "Your team installs the kit around fleet schedules and at your convenience.",
                  "Working trucks spend less time waiting for outside installation.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[580px] overflow-hidden py-24 sm:py-32">
        <img
          src={sunsetUrl}
          alt="Heavy-duty trucks traveling at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="story-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl text-hero-foreground">
            <p className="section-kicker text-accent">Why Glance Vision</p>
            <h2 className="section-title mt-4">Three years focused on safer views from the cab.</h2>
            <p className="mt-7 text-lg leading-relaxed text-hero-muted">
              We work with fleet owners and managers who understand the daily pressure of keeping
              drivers safe and trucks moving. Glance Vision is a participant in the 2026 mPOWER
              program at mHUB Chicago.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-px bg-hero-foreground/25">
              <div className="bg-primary/80 p-6 backdrop-blur-sm">
                <p className="font-display text-4xl font-bold text-accent">3</p>
                <p className="mt-2 text-sm text-hero-muted">Years in business</p>
              </div>
              <div className="bg-primary/80 p-6 backdrop-blur-sm">
                <ShieldCheck className="h-9 w-9 text-accent" aria-hidden="true" />
                <p className="mt-3 text-sm text-hero-muted">Built for fleet operators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-kicker text-secondary">Early access</p>
            <h2 className="section-title mt-4">A straightforward path to get involved.</h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Sign Up for the Mailer List",
                "Stay informed as the Glance Vision kit moves forward.",
              ],
              [
                "02",
                "Share Your Insights",
                "Tell us what your fleet and drivers need from blind spot alerts.",
              ],
              ["03", "Get Early Access", "Be among the first fleet teams considered for access."],
            ].map(([number, title, text]) => (
              <li key={number} className="border-t-2 border-secondary pt-6">
                <span className="font-mono text-sm font-bold text-secondary">{number}</span>
                <h3 className="mt-8 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid min-h-[620px] lg:grid-cols-2">
        <div className="relative min-h-80 overflow-hidden lg:min-h-full">
          <img
            src={trafficUrl}
            alt="Heavy trucks in wet highway traffic"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center bg-secondary px-5 py-20 text-secondary-foreground sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="section-kicker text-accent">Keep your fleet moving</p>
            <h2 className="section-title mt-4">Help shape a blind spot kit for working fleets.</h2>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80">
              Join the mailer list, share what matters to your operation, and be considered for
              early access.
            </p>
            <div className="mt-9">
              <JoinLink />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 lg:px-12">
          <div>
            <p className="font-display text-2xl font-bold">
              Glance <span className="text-accent">Vision</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/60">
              Real-time blind spot alerts for heavy-duty truck fleets.
            </p>
          </div>
          <p className="text-sm text-primary-foreground/60">
            Chicago, Illinois · Contact through the Join form
          </p>
        </div>
        <img
          src={cityTrafficUrl}
          alt="Chicagoland highway traffic beneath the city skyline"
          className="h-40 w-full object-cover object-[center_68%] opacity-55"
          loading="lazy"
        />
      </footer>
    </main>
  );
}
