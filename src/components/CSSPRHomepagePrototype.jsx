import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  ArrowRight,
  ChevronDown,
  Mail,
  Bookmark,
  Play,
  CircleArrowRight,
} from "lucide-react";

const navLinks = {
    "About Us": "/about",
    Publications: "#",
    Books: "#",
    Podcasts: "#",
    PRISM: "#",
    Events: "#",
    "Pakistan Politico": "#",
  };

const leadStories = [
  {
    topic: "PRISM",
    eyebrow: "Featured Research",
    title: "PRISM SITREP: April 16–30, 2026",
    subtitle: "A concise briefing on Pakistan's security landscape, regional developments, and policy signals worth tracking.",
    author: "Alaiza Farid and Mubashar Rizvi",
    image: "/images/prism-sitrep.jpeg",
    color: "from-emerald-800 via-teal-800 to-slate-950",
  },
  {
    topic: "Reports & Briefs",
    eyebrow: "Latest Report",
    title: "Unpacking Al-Mirsad and the Disinformation War Against Pakistan",
    subtitle: "A clear look at narratives, propaganda, and the information campaigns shaping public perception.",
    author: "Syed Ali Zia Jaffery",
    color: "from-rose-800 via-slate-900 to-emerald-900",
  },
  {
    topic: "International Law",
    eyebrow: "Legal Analysis",
    title: "The War on Iran: An International Law Perspective",
    subtitle: "A timely brief examining escalation, legality, and the regional consequences of conflict.",
    author: "Ayesha Alam Malik",
    color: "from-blue-900 via-cyan-900 to-emerald-900",
  },
  {
    topic: "Opinion",
    eyebrow: "Opinion & Analysis",
    title: "The Venezuela Intervention and the Crisis of Sovereignty",
    subtitle: "What contemporary intervention debates reveal about power, legitimacy, and political vacuum.",
    author: "Abeer Falak",
    color: "from-lime-700 via-emerald-800 to-slate-950",
  },
];

const tabs = ["Featured", "PRISM", "Reports", "Opinion"];

const articles = [
  {
    tab: "Featured",
    type: "Brief",
    title: "Pakistan and the Changing Regional Security Order",
    desc: "A concise guide to the strategic pressures shaping policy choices in the region.",
    author: "CSSPR Editorial Desk",
    color: "from-sky-500 to-emerald-500",
  },
  {
    tab: "Featured",
    type: "Analysis",
    title: "Why Strategic Stability Still Matters in South Asia",
    desc: "How nuclear risk, diplomatic signaling, and regional competition overlap.",
    author: "Naeem Salik",
    color: "from-amber-400 to-rose-500",
  },
  {
    tab: "PRISM",
    type: "PRISM",
    title: "PRISM SITREP: April 1–15, 2026",
    desc: "A fortnightly brief covering major security and geopolitical developments across Pakistan.",
    author: "Moazam Ali",
    color: "from-emerald-600 to-cyan-600",
  },
  {
    tab: "Reports",
    type: "Report",
    title: "Pakistan's Air Pollution: A National Landscape Report Review",
    desc: "A review of risks, public policy gaps, and national coordination challenges.",
    author: "Abdul Waris Hameed",
    color: "from-cyan-500 to-blue-700",
  },
  {
    tab: "Opinion",
    type: "Opinion",
    title: "The Venezuela Intervention: Power and Political Vacuum",
    desc: "What sovereignty debates reveal about contemporary intervention politics.",
    author: "Abeer Falak",
    color: "from-lime-500 to-emerald-700",
  },
  {
    tab: "Reports",
    type: "Book",
    title: "Nuclear Pakistan: Seeking Security & Stability",
    desc: "A book-length contribution to debates on deterrence, security, and stability.",
    author: "Dr. Naeem Salik",
    color: "from-green-600 to-slate-900",
  },
];

const trending = ["Iran War", "India-Pakistan", "AI Security", "Nuclear Risks", "Disinformation", "Climate Security"];

function GraphicPanel({ color = "from-emerald-700 to-slate-950", label = "CSSPR" }) {
  return (
    <div className={`relative min-h-56 overflow-hidden bg-gradient-to-br ${color}`}>
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_18%),radial-gradient(circle_at_80%_30%,white_0,transparent_14%),linear-gradient(120deg,transparent_0_45%,rgba(255,255,255,.22)_45%_47%,transparent_47%_100%)]" />
      <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full border border-white/25" />
      <div className="absolute -right-5 bottom-5 h-28 w-28 rounded-full border border-white/30" />
      <div className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function LeadVisual({ story }) {
    return (
      <div
        className={`relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-950/20 ${
          story.image ? "bg-slate-900" : `bg-gradient-to-br ${story.color}`
        }`}
      >
        {story.image && (
          <img
            src={story.image}
            alt={story.title}
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        )}
  
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent" />
  
        {!story.image && (
          <>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,.22),transparent_18%),radial-gradient(circle_at_74%_24%,rgba(34,211,238,.25),transparent_20%),linear-gradient(130deg,transparent_0_45%,rgba(255,255,255,.16)_45%_47%,transparent_47%_100%)]" />
            <div className="absolute -right-20 -top-20 z-0 h-72 w-72 rounded-full border border-white/20" />
          </>
        )}
  
        <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-cyan-100">
            {story.topic}
          </p>
  
          <div className="mt-6 max-w-sm font-serif text-5xl leading-[0.9]">
            {story.topic === "PRISM" ? (
              <>
                PRISM
                <br />
                SITREP
              </>
            ) : (
              <>
                CSSPR
                <br />
                Brief
              </>
            )}
          </div>
  
          <p className="mt-5 max-w-md text-sm leading-6 text-white/80">
            {story.subtitle}
          </p>
        </div>
      </div>
    );
  }

function ArticleCard({ article }) {
  return (
    <article className="group bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/50">
      <GraphicPanel color={article.color} label={article.type} />
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-cyan-100 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-900">{article.type}</span>
          <Bookmark size={18} className="text-slate-400 transition group-hover:text-emerald-700" />
        </div>
        <h3 className="font-serif text-3xl leading-tight text-slate-950">{article.title}</h3>
        <p className="mt-4 leading-7 text-slate-600">{article.desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-slate-700">{article.author}</p>
          <ArrowRight size={19} className="text-emerald-700 transition group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

export default function CSSPRHomepagePrototype() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [activeLead, setActiveLead] = useState(0);
  const selectedLead = leadStories[activeLead];
  const filtered = activeTab === "Featured" ? articles.slice(0, 3) : articles.filter((article) => article.tab === activeTab);

  return (
    <main className="min-h-screen bg-[#f4f2ec] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-6">
            <button aria-label="Open menu" className="p-1 text-slate-800 hover:text-emerald-800">
              <Menu size={22} />
            </button>
            <button aria-label="Search" className="p-1 text-slate-800 hover:text-emerald-800">
              <Search size={20} />
            </button>
            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="#" className="hover:text-emerald-800">Popular</a>
              <a href="#" className="hover:text-emerald-800">Latest</a>
              <a href="#" className="hover:text-emerald-800">Newsletters</a>
            </nav>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hidden hover:text-emerald-800 sm:inline">Contact</a>
            <button className="rounded-full bg-emerald-800 px-5 py-2.5 font-semibold text-white hover:bg-emerald-950">Subscribe</button>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-7">
            <div className="h-px bg-slate-300" />
            <div className="text-center">
              <p className="font-serif text-6xl leading-none text-emerald-800 md:text-8xl">CSSPR</p>
              <h1 className="mt-1 font-serif text-xl md:text-3xl">Center for Security, Strategy & Policy Research</h1>
            </div>
            <div className="h-px bg-slate-300" />
          </div>

          <nav className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-700">
            {Object.keys(navLinks).map((item) => (
                <Link
                key={item}
                to={navLinks[item]}
                className="inline-flex items-center gap-1 hover:text-emerald-800"
                >
                {item}
                {item === "Publications" || item === "Events" ? (
                    <ChevronDown size={14} />
                ) : null}
                </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f2ec]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,rgba(16,185,129,.10),transparent_24%),radial-gradient(circle_at_92%_22%,rgba(34,211,238,.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto mb-10 max-w-5xl text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
            Security · Strategy · Geopolitics
        </p>

        <h2 className="mt-4 font-serif text-5xl leading-[1.02] text-slate-950 md:text-7xl">
            Clear policy research for a region that moves fast.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            CSSPR brings together security briefings, strategy essays, reports, and expert commentary on Pakistan, South Asia, and global geopolitics.
        </p>
        </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-[#052f45] p-4 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-white/60 md:p-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
              <div className="flex flex-col justify-between p-3 md:p-6">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">{selectedLead.eyebrow}</p>
                  <h3 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                    {selectedLead.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50/85">{selectedLead.subtitle}</p>
                  <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/75">By {selectedLead.author}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-6 py-3 font-bold text-[#052f45] hover:bg-cyan-100">Read story</button>
                  <button className="rounded-full border border-white/35 px-6 py-3 font-bold text-white hover:bg-white/10">Explore section</button>
                </div>
              </div>

              <LeadVisual story={selectedLead} />
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/15 pt-5 md:grid-cols-2 lg:grid-cols-4">
              {leadStories.map((story, index) => (
                <button
                  key={story.title}
                  onClick={() => setActiveLead(index)}
                  className={`group rounded-2xl p-4 text-left transition ${
                    activeLead === index ? "bg-white text-[#052f45]" : "bg-white/8 text-white hover:bg-white/14"
                  }`}
                >
                  <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.18em] ${activeLead === index ? "text-emerald-800" : "text-cyan-200"}`}>{story.topic}</p>
                  <h4 className="mt-2 font-serif text-lg leading-tight">{story.title}</h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 border border-emerald-900/15 bg-white px-6 py-6 shadow-sm">
          <h2 className="mr-4 font-serif text-3xl">Trending Topics</h2>
          {trending.map((topic) => (
            <button key={topic} className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-950 hover:bg-[#052f45] hover:text-white">
              {topic} <CircleArrowRight size={15} />
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">Browse research</p>
            <h2 className="mt-3 font-serif text-5xl leading-none">Latest from CSSPR</h2>
          </div>
          <div className="flex flex-wrap gap-2 rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeTab === tab ? "bg-emerald-800 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 lg:grid-cols-[1fr_0.72fr] lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm ring-1 ring-slate-200">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <GraphicPanel color="from-indigo-700 via-sky-600 to-emerald-500" label="Podcast" />
            <div className="p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">Listen</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">Conversations that make policy debates easier to enter.</h2>
              <p className="mt-5 leading-7 text-slate-600">Feature podcasts and explainers as a softer entry point for first-time visitors who may not be ready to open a full report.</p>
              <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white hover:bg-emerald-800">
                <Play size={17} /> Start listening
              </button>
            </div>
          </div>
        </div>

        <aside className="bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-emerald-800">Newsletter</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight">Get briefings in your inbox.</h2>
          <p className="mt-4 leading-7 text-slate-600">A small interactive sign-up gives the homepage a clear next step beyond scrolling.</p>
          <form className="mt-7 flex overflow-hidden rounded-full border border-slate-300 bg-white">
            <div className="grid place-items-center px-4 text-slate-400"><Mail size={18} /></div>
            <input className="min-w-0 flex-1 py-3 pr-3 outline-none" placeholder="Email address" />
            <button className="bg-emerald-800 px-5 font-bold text-white hover:bg-emerald-950">Join</button>
          </form>
        </aside>
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
