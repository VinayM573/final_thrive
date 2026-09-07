import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useState, useEffect } from "react";
import hero from "@/assets/IMG_7350f.jpg";
import premium from "@/assets/IMG_7387.jpg";
import expert from "@/assets/DSC09697.jpg";
import clean from "@/assets/IMG_7355.jpg";
import strong from "@/assets/21.jpg";
import dwarka from "@/assets/60.jpg";
import class1 from "@/assets/IMG_7358.jpg";
import class2 from "@/assets/IMG_7370.jpg";
import class3 from "@/assets/IMG_7382.jpg";
import class4 from "@/assets/IMG_7391f.jpg";
import hero1 from "@/assets/1.jpg";
import hero2 from "@/assets/5.jpg";
import hero3 from "@/assets/8.jpg";
import hero4 from "@/assets/9.jpg";
import hero5 from "@/assets/10.jpg";
import founder1 from "@/assets/IMG_1202.png";
import founder2 from "@/assets/IMG_1200.png";
import { Nav } from "@/components/sites/Nav";
import { Footer } from "@/components/sites/Footer";
import { Marquee } from "@/components/sites/Marquee";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Thrive Gym — Train Hard. Live Well. Thrive." },
      { name: "description", content: "India's most exciting gym experience. Premium equipment, expert coaches, group classes and a community built around your goals." },
      { property: "og:title", content: "Thrive Gym — Train Hard. Live Well. Thrive." },
      { property: "og:description", content: "India's most exciting gym experience." },
    ],
  }),
  component: Home,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function GoogleGLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.6h11.9c-.5 2.8-2.1 5.1-4.4 6.7v5.6h7.1c4.2-3.9 6.5-9.6 6.5-16.4z"/>
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.6-5.3l-7.1-5.6c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.6-3.9-12.4-9.1H4.3v5.7C8 41.9 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.6 28.1c-.5-1.3-.7-2.7-.7-4.1s.3-2.8.7-4.1v-5.7H4.3C2.8 17.1 2 20.4 2 24s.8 6.9 2.3 9.8z"/>
      <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.2 29.9 2 24 2 15.4 2 8 6.1 4.3 14.2l7.3 5.7c1.8-5.2 6.6-9.2 12.4-9.2z"/>
    </svg>
  );
}



type LocationData = {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  members: string;
  coaches: string;
  rating: string;
  features: string[];
  mapEmbed: string;
  directions: string;
  images: string[]; // <-- HERE, replaces "img:" from your original object
};

const locations: LocationData[] = [
  {
    id: 1,
    name: "Ocus Medley, Gurugram",
    address: "Dwarka Expy, G99, Sector 99, Gurugram, Haryana",
    hours: "Open daily: 9 AM – 11 PM",
    phone: "+91 79966 69935",
    email: "gurugram@thrivegym.in",
    members: "2,400+",
    coaches: "18",
    rating: "4.9",
    features: ["Dedicated Yoga & Zumba Studio", "Sauna & Recovery", "Premium International Equipments", "Parking Available", "Free Wifi"],
    mapEmbed: "https://maps.google.com/maps?q=Thrive+Gym+Ocus+Medley+FX99%2B5G+Gurugram,+Haryana&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=FX99%2B5G+Gurugram,+Haryana",
    images: [class4, class2, class3, class1], // renamed from "img", now always an array
  },
  {
    id: 2,
    name: "Thrive Gym, Dwarka",
    address: "2nd floor, Plot No 39, near yes bank, above Aapka bazar, MBR Enclave, Sector 23, Dwarka, New Delhi, Delhi",
    hours: "Open daily: 5:30 AM – 10:30 PM",
    phone: "+91 96257 52323",
    email: "dwarka@thrivegym.in",
    members: "1,800+",
    coaches: "14",
    rating: "4.8",
    features: ["Dedicated Yoga & Zumba Studio", "Sauna & Recovery", "Premium International Equipments", "Parking Available", "Free Wifi"],
    mapEmbed: "https://maps.google.com/maps?q=Thrive+Gym+Dwarka+H382%2B29+New+Delhi,+Delhi&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=H382%2B29+New+Delhi,+Delhi",
    images: [dwarka, hero1, hero2, hero3, hero4, hero5],
  },
];

type Location = LocationData; // keep this so the rest of your file (LocationModal etc.) still works unchanged

function LocationModal({ loc, onClose }: { loc: Location; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = loc.images;
  const activeSrc = images[activeImg] ?? images[0];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <motion.div
          className="relative z-10 w-full max-w-2xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── IMAGE CAROUSEL ── */}
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSrc}
                src={images[activeImg]}
                alt={loc.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

            {/* Prev */}
            <button
              onClick={() => setActiveImg((p) => (p - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"
            >
              <LucideIcons.ChevronLeft className="size-4" />
            </button>

            {/* Next */}
            <button
              onClick={() => setActiveImg((p) => (p + 1) % images.length)}
              className="absolute right-16 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"
            >
              <LucideIcons.ChevronRight className="size-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 size-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/80 transition"
            >
              <LucideIcons.X className="size-4" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-10 left-4 flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`size-12 rounded-lg overflow-hidden border-2 transition ${
                    i === activeImg ? "border-primary" : "border-white/20"
                  }`}
                >
                  <img src={img} className="size-full object-cover" />
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeImg ? "w-6 bg-primary" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <LucideIcons.MapPin className="size-3" /> Thrive Gym
              </span>
            </div>
          </div>

          {/* ── ALL ORIGINAL DETAILS ── */}
          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-display text-3xl">{loc.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground flex items-start gap-2">
                <LucideIcons.MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                {loc.address}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: LucideIcons.Users, label: "Members", value: loc.members },
                { icon: LucideIcons.Star, label: "Rating", value: loc.rating },
                { icon: LucideIcons.Dumbbell, label: "Coaches", value: loc.coaches },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-surface rounded-xl p-3 text-center">
                  <Icon className="size-4 text-primary mx-auto mb-1" />
                  <div className="text-display text-xl">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <LucideIcons.Clock className="size-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm">{loc.hours}</p>
            </div>

            {/* Facilities */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Facilities</p>
              <div className="flex flex-wrap gap-2">
                {loc.features.map((f) => (
                  <span key={f} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              
              <a  href={`tel:${loc.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <LucideIcons.Phone className="size-4" /> {loc.phone}
              </a>
              <a
                href={`mailto:${loc.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                <LucideIcons.Mail className="size-4" /> Email Us
              </a>
            </div>
            <a
              href={loc.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold hover:bg-secondary transition"
            >
              <LucideIcons.Navigation className="size-4" /> Get Directions
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
const heroImages = [hero, hero1, hero2, hero3];
const whyImages = [strong, expert, dwarka];

function Home() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [whySlide, setWhySlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setHeroSlide((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setWhySlide((p) => (p + 1) % whyImages.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* MARQUEE — fixed at the very top */}
      <div className="fixed top-0 inset-x-0 z-50">
        <Marquee items={["STRENGTH", "ENDURANCE", "MOBILITY", "COMMUNITY", "RECOVERY", "MINDSET"]} />
      </div>

    <Nav offsetTop />


{/* spacer for fixed marquee + fixed nav */}
<div className="h-14" />
<div className="h-16" />

{/* Location selector — sits cleanly below marquee */}
<div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-wrap items-center gap-4">
  <p className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">
    Select a location
  </p>
  <div className="flex flex-wrap gap-3">
    {locations.map((loc) => (
      <button
        key={loc.id}
        onClick={() => setActiveLocation(loc)}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
          activeLocation?.id === loc.id
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background hover:border-primary hover:text-primary"
        }`}
      >
        <LucideIcons.MapPin className="size-3.5" />
        {loc.name}
      </button>
    ))}
  </div>
</div>

{/* HERO */}
<section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={heroSlide}
            src={heroImages[heroSlide]}
            alt="Athlete training in a dark gym"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            width={1600}
            height={1200}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

        {/* Slide indicators */}
        <div className="absolute top-6 right-5 lg:right-8 z-10 flex gap-1.5">
          {heroImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === heroSlide ? "w-6 bg-primary" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-5 lg:px-8 pb-16 lg:pb-24 pt-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest">
              <LucideIcons.Sparkles className="size-3 text-primary" /> India's new fitness standard
            </span>
            <h1 className="mt-6 text-display text-[14vw] md:text-[9vw] leading-[0.85]">
              TRAIN HARD.<br />
              LIVE <span className="text-primary italic">WELL.</span><br />
              THRIVE.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Premium equipment. World-class coaches. A community that pushes you to be 1% better — every single day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
                Start your trial <LucideIcons.ArrowRight className="size-4" />
              </a>
              <Link to="/vision" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-7 py-4 font-semibold hover:bg-secondary transition">
                Our Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: "2+", l: "Active Outlets Delhi NCR" },
          { v: "1000+", l: "Members thriving" },
          { v: "30+", l: "Certified coaches" },
        ].map((s) => (
          <motion.div key={s.l} {...fade} className="border-l-2 border-primary pl-5">
            <div className="text-display text-5xl md:text-6xl">{s.v}</div>
            <div className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{s.l}</div>
          </motion.div>
        ))}
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">What we offer</p>
              <h2 className="text-display text-6xl md:text-8xl">PICK YOUR<br />WEAPON.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From strength to mindfulness — pick a program built around the energy you bring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: premium, tag: "Premium", title: "Premium Equipment", desc: "Train with the right equipment for every goal." },
              { img: expert, tag: "Expert", title: "Expert Coaching", desc: "Get guidance from trainers who know how to help you progress." },
              { img: clean, tag: "Clean", title: "Clean & Premium Space", desc: "A comfortable, well-maintained environment for your workouts." },
              { img: strong, tag: "Community", title: "Strong Community", desc: "Good energy, familiar faces and people who keep you motivated." },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1280} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <motion.div {...fade} className="mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">The people behind Thrive</p>
          <h2 className="text-display text-5xl md:text-7xl">MEET THE<br /><span className="text-primary">FOUNDER.</span></h2>
        </motion.div>

        {/* Founders */}
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Founders</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { img: founder1, name: "Rahul Ron", role: "Founder", bio: "With nearly 30 years of experience in the fitness industry, Rahul Ron has built his journey around one clear vision: to bring an aesthetic, premium, and world-class gym experience to people across India. His focus goes beyond fitness — creating spaces that combine premium design, quality training, and an experience members genuinely enjoy being part of." },
              { img: founder2, name: "Kez Rahul Ron", role: "Co-Founder", bio: "With 20 years of experience in fitness and community building, Kez Rahul Ron brings a strong people-first approach to the brand. He believes a great gym is built not just through equipment and training, but through relationships and community. Being on the ground, connecting personally with members, and understanding their journey is at the heart of his approach — with the goal of building a community where everyone feels welcomed, connected, and at home." },
            ].map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 rounded-2xl border border-border bg-surface p-5 hover:border-primary/40 transition"
              >
                <div className="relative shrink-0">
                  <img src={f.img} alt={f.name} className="size-28 rounded-xl object-cover" />
                  <span className="absolute -bottom-2 -right-2 size-6 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                    <LucideIcons.Star className="size-3 text-primary-foreground fill-primary-foreground" />
                  </span>
                </div>
                <div>
                  <h3 className="text-display text-2xl">{f.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary mt-0.5 mb-3">{f.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* ── LOCATIONS ── */}
      <section id="locations" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...fade} className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Find us</p>
            <h2 className="text-display text-5xl md:text-7xl">OUR<br />LOCATIONS.</h2>
            <p className="mt-4 text-muted-foreground max-w-md">Click on any location to see hours, facilities, and how to reach us.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-left rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/60 transition-all hover:shadow-[0_0_40px_-10px_oklch(0.92_0.24_130/0.3)]"
              >
                <button
                  onClick={() => setActiveLocation(loc)}
                  className="w-full text-left cursor-pointer"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={loc.images[0]} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur border border-primary/30 px-3 py-1.5">
                      <LucideIcons.MapPin className="size-3.5 text-primary" />
                      <span className="text-xs font-semibold text-primary">Thrive Gym</span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2.5 py-1">
                      <LucideIcons.Star className="size-3 text-primary fill-primary" />
                      <span className="text-xs font-semibold">{loc.rating}</span>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-display text-2xl group-hover:text-primary transition">{loc.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{loc.address}</p>
                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
                        <LucideIcons.Clock className="size-3 text-primary" />
                        {loc.hours}
                      </p>
                    </div>
                    <div className="shrink-0 size-10 rounded-full border border-border bg-surface flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition ml-4">
                      <LucideIcons.ChevronRight className="size-4 group-hover:text-primary-foreground transition" />
                    </div>
                  </div>
                </button>
                <div className="px-5 pb-5">
                  <a
                    href={loc.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full border border-border py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition"
                  >
                    <LucideIcons.Navigation className="size-3.5" /> Get Directions
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fade} className="relative">
            <div className="relative rounded-3xl overflow-hidden w-full h-[520px]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={whySlide}
                  src={whyImages[whySlide]}
                  alt="Thrive gym interior"
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="absolute inset-0 object-cover w-full h-full"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 max-w-xs hidden md:block">
              <div className="text-display text-5xl">98%</div>
              <p className="text-sm mt-1">of members hit their first goal within 90 days.</p>
            </div>
          </motion.div>
          <motion.div {...fade}>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Why Thrive</p>
            <h2 className="text-display text-5xl md:text-7xl">MORE THAN<br />A GYM.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We exist to give India a fitness experience that doesn't compromise — on equipment, on coaching, on atmosphere, on you.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
               { t: "Best-in-class kit", d: "Hammer Strength, Rogue, Technogym.", icon: LucideIcons.Wrench },
               { t: "Real coaching", d: "Certified PTs who actually care.", icon: LucideIcons.Users },
               { t: "Group energy", d: "Classes that feel like a concert.", icon: LucideIcons.Zap },
             ].map(({ t, d, icon: Icon }) => (
               <div key={t} className="flex gap-3">
                 <div className="size-10 grid place-items-center rounded-xl bg-primary/15 text-primary shrink-0">
                   <Icon className="size-5" />
                 </div>
                 <div>
                   <p className="font-semibold">{t}</p>
                   <p className="text-sm text-muted-foreground">{d}</p>
                 </div>
               </div>
             ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS — Google Reviews style */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div {...fade} className="mb-4">
            <h2 className="text-display text-5xl md:text-7xl">
              REAL PEOPLE. <span className="text-primary">REAL RESULTS.</span>
            </h2>
          </motion.div>

          {/* Aggregate rating bar */}
          <motion.div
            {...fade}
            className="mb-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4 w-fit"
          >
            <GoogleGLogo className="size-7 shrink-0" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold leading-none">4.9</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LucideIcons.Star key={i} className="size-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">612</span> Google reviews
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                n: "Aarav Sharma",
                r: "Lost 18kg in 6 months , the trainers here are very professional and knowledgable.",
                localGuide: true,
                reviewCount: 24,
                time: "2 weeks ago",
                rating: 5,
                helpful: 12,
                color: "bg-[#1A73E8]",
              },
              {
                n: "Neha Kulkarni",
                r: "Best gym i’ve ever trained in dwarka , the energy here is unmatched",
                localGuide: false,
                reviewCount: 8,
                time: "1 month ago",
                rating: 5,
                helpful: 7,
                color: "bg-[#EA4335]",
              },
              {
                n: "Karthik Reddy",
                r: "Best crowd gym i have ever visited , this is best gym in gurugram",
                localGuide: true,
                reviewCount: 41,
                time: "3 weeks ago",
                rating: 5,
                helpful: 19,
                color: "bg-[#34A853]",
              },
            ].map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`size-11 rounded-full ${t.color} grid place-items-center text-white font-semibold shrink-0`}>
                      {t.n.split(" ").map((w) => w[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{t.n}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.localGuide ? "Local Guide · " : ""}{t.reviewCount} reviews
                      </p>
                    </div>
                  </div>
                  <GoogleGLogo className="size-5 shrink-0 mt-0.5" />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <LucideIcons.Star
                        key={s}
                        className={`size-3.5 ${s < t.rating ? "fill-[#FBBC04] text-[#FBBC04]" : "fill-none text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{t.time}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{t.r}</p>

                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <LucideIcons.ThumbsUp className="size-3.5" />
                  <span>Helpful ({t.helpful})</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade} className="mt-8 text-center">
            <a
              href="https://www.google.com/search?q=thrive+gym+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-primary/60 hover:text-primary transition"
            >
              <GoogleGLogo className="size-4" /> See all reviews on Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <motion.div {...fade} className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Get in touch</p>
          <h2 className="text-display text-5xl md:text-7xl">LET'S<br /><span className="text-primary">TALK.</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div {...fade} className="space-y-6">
            <p className="text-muted-foreground text-lg max-w-md">
              Have a question about memberships, franchises, or just want to say hi? We're here for all of it.
            </p>
            <div className="space-y-4">
              {[
                { icon: LucideIcons.Phone, label: "Call us", value: "+91 96257 52323", href: "tel:+919625752323" },
                { icon: LucideIcons.Mail, label: "Email us", value: "hello@thrivegym.in", href: "mailto:hello@thrivegym.in" },
                { icon: LucideIcons.Rss, label: "Follow us", value: "@thrivegym.in", href: "https://instagram.com/thrivegym.in" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-primary/50 transition group"
                >
                  <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                  <LucideIcons.ArrowRight className="size-4 ml-auto text-muted-foreground group-hover:text-primary transition" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Location Shortcuts</p>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm hover:border-primary/60 hover:text-primary transition"
                  >
                    <LucideIcons.MapPin className="size-3.5 text-primary" />
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick form */}
          <motion.div {...fade} className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h3 className="text-display text-2xl">Send a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us what you're looking for…"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
              />
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
              Send Message <LucideIcons.ArrowRight className="size-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-28 text-center">
          <motion.h2 {...fade} className="text-display text-6xl md:text-9xl">
            YOUR BEST SELF<br /><span className="text-primary">IS WAITING.</span>
          </motion.h2>
          <motion.div {...fade} className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition">
              Book a free trial <LucideIcons.ArrowRight className="size-4" />
            </a>
            <Link to="/partner" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold hover:bg-secondary transition">
              Partner with us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Location modal */}
      {activeLocation && (
        <LocationModal loc={activeLocation} onClose={() => setActiveLocation(null)} />
      )}
    </div>
  );
}






