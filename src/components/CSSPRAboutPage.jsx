import React from "react";
import {
  Menu,
  Search,
  ChevronDown,
  ArrowRight,
  Mail,
  MapPin,
  Globe2,
  BookOpen,
  Users,
  Shield,
  ExternalLink,
} from "lucide-react";

const navItems = [
  "About Us",
  "Publications",
  "Books",
  "Podcasts",
  "PRISM",
  "Events",
  "Pakistan Politico",
];

const teamMembers = [
  {
    name: "Dr. Rabia Akhtar",
    role: "Director",
    image: "/images/team/rabia-akhtar.jpeg",
  },
  {
    name: "Awais Raoof",
    role: "President",
    image: "/images/team/awais-raoof.jpeg",
  },
  {
    name: "Syed Ali Zia Jaffery",
    role: "Deputy Director",
    image: "/images/team/syed-ali-zia-jaffery.jpeg",
  },
  {
    name: "Abdul Waris Hameed",
    role: "Research Associate",
    image: "/images/team/abdul-waris-hameed.jpeg",
  },
];

const principles = [
  {
    icon: <Shield size={22} />,
    title: "Security-focused research",
    text: "CSSPR examines national, regional, and international security challenges with a focus on Pakistan and South Asia.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Policy-driven analysis",
    text: "Our work translates complex strategic debates into clear, timely, and useful policy commentary.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Regional and global outlook",
    text: "We connect Pakistan’s security concerns with broader developments in geopolitics, diplomacy, and global order.",
  },
  {
    icon: <Users size={22} />,
    title: "Scholarly collaboration",
    text: "CSSPR serves as a platform for researchers, scholars, students, and practitioners to contribute to public debate.",
  },
];

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-6">
            <button
              aria-label="Open menu"
              className="p-1 text-slate-800 hover:text-emerald-800"
            >
              <Menu size={22} />
            </button>

            <button
              aria-label="Search"
              className="p-1 text-slate-800 hover:text-emerald-800"
            >
              <Search size={20} />
            </button>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="#" className="hover:text-emerald-800">
                Popular
              </a>
              <a href="#" className="hover:text-emerald-800">
                Latest
              </a>
              <a href="#" className="hover:text-emerald-800">
                Newsletters
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hidden hover:text-emerald-800 sm:inline">
              Contact
            </a>
            <button className="rounded-full bg-emerald-800 px-5 py-2.5 font-semibold text-white hover:bg-emerald-950">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-7">
            <div className="h-px bg-slate-300" />

            <div className="text-center">
              <a
                href="/"
                className="font-serif text-6xl leading-none text-emerald-800 md:text-8xl"
              >
                CSSPR
              </a>

              <h1 className="mt-1 font-serif text-xl text-slate-950 md:text-3xl">
                Center for Security, Strategy & Policy Research
              </h1>
            </div>

            <div className="h-px bg-slate-300" />
          </div>

          <nav className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "About Us" ? "/about" : "#"}
                className={`inline-flex items-center gap-1 hover:text-emerald-800 ${
                  item === "About Us" ? "text-emerald-800" : ""
                }`}
              >
                {item}
                {item === "Publications" || item === "Events" ? (
                  <ChevronDown size={14} />
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}

function PrincipleCard({ principle }) {
  return (
    <article className="group bg-white p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/40">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-emerald-800 ring-1 ring-emerald-900/10 transition group-hover:bg-emerald-800 group-hover:text-white">
        {principle.icon}
      </div>

      <h3 className="font-serif text-3xl leading-tight text-slate-950">
        {principle.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">{principle.text}</p>
    </article>
  );
}

function TeamCard({ member }) {
  return (
    <article className="group overflow-hidden bg-[#1f2522] text-white shadow-sm ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/25">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

        <button
          aria-label={`View ${member.name}`}
          className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950 shadow-lg transition group-hover:bg-emerald-700 group-hover:text-white"
        >
          <ArrowRight size={22} />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-2xl leading-tight">{member.name}</h3>
        <p className="mt-2 text-sm font-semibold text-emerald-400">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export default function CSSPRAboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f2ec] text-slate-950">
      <Header />

      {/* Centered intro */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f4f2ec]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(16,185,129,.12),transparent_25%),radial-gradient(circle_at_92%_18%,rgba(14,116,144,.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
            About CSSPR
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl font-serif text-5xl leading-[1.02] text-slate-950 md:text-7xl">
            Research for security, strategy, and policy.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            The Center for Security, Strategy and Policy Research is a policy
            research center at the University of Lahore focused on critical
            issues of security, geopolitics, strategy, and regional affairs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#mission"
              className="rounded-full bg-emerald-800 px-6 py-3 font-bold text-white hover:bg-emerald-950"
            >
              Our mission
            </a>

            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 hover:border-emerald-800 hover:text-emerald-800"
            >
              Meet the team <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Mission moved up */}
      <section id="mission" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
              Mission
            </p>

            <h2 className="mt-4 font-serif text-5xl leading-tight">
              To produce clear, timely, and useful research on the issues
              shaping Pakistan’s strategic environment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              CSSPR’s work is grounded in academic rigor, policy relevance, and
              public engagement. The center aims to make complex security and
              strategic debates easier to understand for policymakers,
              researchers, students, and informed readers.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white hover:bg-emerald-800"
            >
              Explore publications <ExternalLink size={17} />
            </a>
          </div>

          <div className="relative overflow-hidden bg-[#1f2522] p-8 text-white shadow-sm ring-1 ring-slate-200 md:p-10">
            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_16%),linear-gradient(120deg,transparent_0_45%,rgba(255,255,255,.16)_45%_47%,transparent_47%_100%)]" />

            <div className="relative">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
                Research areas
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "National security and strategic affairs",
                  "Pakistan and South Asian geopolitics",
                  "Regional conflict and diplomacy",
                  "Global security trends and policy debates",
                  "Disinformation, technology, and emerging threats",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/15 pb-5"
                  >
                    <p className="text-lg font-semibold">{item}</p>
                    <ArrowRight size={18} className="text-emerald-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section className="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
        <div className="grid gap-8 border-y border-slate-300 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
              Our role
            </p>

            <h2 className="mt-3 font-serif text-5xl leading-none">
              A platform for serious policy debate.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              CSSPR conducts research, publishes analysis, hosts conversations,
              and contributes to debates on Pakistan’s national security,
              regional stability, and international affairs.
            </p>

            <p>
              The center brings together scholars, researchers, students, and
              practitioners to examine fast-moving developments with clarity,
              rigor, and policy relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Team moved higher */}
      <section id="team" className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
                People
              </p>

              <h2 className="mt-3 font-serif text-5xl leading-none">
                CSSPR team
              </h2>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 hover:border-emerald-800 hover:text-emerald-800"
            >
              View all members <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Research principles with no blue background */}
      <section className="border-y border-slate-200 bg-white/55 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
                What guides us
              </p>

              <h2 className="mt-3 font-serif text-5xl leading-none">
                Research principles
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Clear sections help the About page feel credible without turning
              it into a dense institutional document.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <PrincipleCard key={principle.title} principle={principle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16452a] px-5 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-serif text-4xl">CSSPR</p>

            <p className="mt-5 max-w-sm text-lg leading-8 text-white/85">
              CSSPR specializes in issues related to national and international
              security, strategy, and regional and global geopolitics.
            </p>

            <a
              href="mailto:csspr@siss.uol.edu.pk"
              className="mt-6 inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Mail size={18} />
              csspr@siss.uol.edu.pk
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-3xl">Contact us</h3>

              <div className="mt-5 flex gap-3 text-sm">
                <a href="#" className="hover:text-emerald-200">
                  Facebook
                </a>
                <a href="#" className="hover:text-emerald-200">
                  X
                </a>
                <a href="#" className="hover:text-emerald-200">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl">Visit us</h3>

              <p className="mt-5 flex max-w-sm gap-3 leading-7 text-white/85">
                <MapPin size={20} className="mt-1 shrink-0" />
                SOCA Basement, The University of Lahore, 1-Km Defence Road,
                Near Bhuptian Chowk, Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-slate-600 md:flex-row">
          <p>© 2026 Center for Security, Strategy & Policy Research</p>
          <p>SOCA Basement, The University of Lahore · csspr@siss.uol.edu.pk</p>
        </div>
      </footer>
    </main>
  );
}