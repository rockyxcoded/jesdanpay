import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PhoneCall,
  Zap,
  Tv,
  Wifi,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  RefreshCcw,
  Star,
  ChevronDown,
  CheckCircle2,
  Menu,
  X,
  Play,
  Globe2,
  Clock,
  Banknote,
  Send,
  Lock,
  Headset,
  Wallet
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// const slideInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// Custom Hook for Scroll Animations
function useAnimateOnView(threshold = 0.1) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "-50px 0px",
  });
  return [ref, inView] as const;
}

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Intersection Observers
  const [heroRef, heroInView] = useAnimateOnView();
  const [servicesRef, servicesInView] = useAnimateOnView();
  const [exchangeRef, exchangeInView] = useAnimateOnView();
  const [howRef, howInView] = useAnimateOnView();
  const [whyRef, whyInView] = useAnimateOnView();
  const [testimonyRef, testimonyInView] = useAnimateOnView();
  const [faqRef, faqInView] = useAnimateOnView();
  const [ctaRef, ctaInView] = useAnimateOnView();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const faqs = [
    {
      q: "How fast are the transactions?",
      a: "Our transactions are lightning-fast. Airtime, data, and bill payments are processed instantly, usually within seconds of confirmation."
    },
    {
      q: "Is it secure to link my card?",
      a: "Absolutely. We use bank-grade AES-256 encryption and partner with PCI-DSS compliant payment gateways to ensure your data is always safe."
    },
    {
      q: "How does the Naira to RMB exchange work?",
      a: "You simply enter the amount of Naira you wish to exchange, and we instantly calculate the RMB equivalent at our highly competitive rates. The funds are sent directly to the provided Alipay or WeChat wallet."
    },
    {
      q: "What utility bills can I pay?",
      a: "You can pay electricity bills (IKEDC, EKEDC, AEDC, etc.), cable TV (DSTV, GOTV, Startimes), and internet subscriptions (Spectranet, Smile) all from our app."
    },
    {
      q: "What if I have an issue with a transaction?",
      a: "Our customer support team is available 24/7 via in-app chat, email, and phone to resolve any issues you might encounter within minutes."
    }
  ];

  const testimonials = [
    {
      name: "Chukwudi N.",
      role: "Business Owner",
      text: "Jesdanpay has completely changed how I handle my daily transactions. The RMB exchange feature is a lifesaver for my mini-importation business."
    },
    {
      name: "Aisha T.",
      role: "Freelancer",
      text: "I love the clean interface and how fast my data and airtime top-ups go through. I’ve never experienced any downtime!"
    },
    {
      name: "Olamide B.",
      role: "Student",
      text: "Paying for my electricity and DSTV is now stress-free. The customer support is also incredibly responsive whenever I have questions."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans text-slate-900 bg-slate-50 overflow-x-hidden selection:bg-[#4CAF50] selection:text-white">

      {/* Navigation Layer */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] shadow-lg shadow-green-500/30">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              Jesdan<span className="text-[#4CAF50]">pay</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Services", "Exchange", "How it Works", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-slate-600 hover:text-[#4CAF50] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm font-semibold text-slate-700 hover:text-[#4CAF50] transition-colors">
              Sign In
            </a>
            <Button className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white rounded-full px-6 font-semibold shadow-lg shadow-green-500/25 transition-all hover:scale-105 active:scale-95">
              Get the App
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {["Services", "Exchange", "How it Works", "FAQs"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-[#4CAF50]"
                  >
                    {item}
                  </a>
                ))}
                <hr className="border-slate-100 my-2" />
                <Button className="w-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white rounded-xl py-6 font-semibold shadow-lg shadow-green-500/25">
                  Download App
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1 pt-24 lg:pt-32">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full pb-20 pt-10 lg:pt-16 lg:pb-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-green-50/80 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute top-40 right-10 w-64 h-64 bg-[#FFDE21]/10 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
            >
              {/* Hero Text */}
              <div className="space-y-8 text-center lg:text-left">
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/50 border border-green-200 text-green-700 text-sm font-semibold mx-auto lg:mx-0 shadow-sm backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-green-600 text-green-600" />
                  <span>Nigeria's #1 Digital Finance App</span>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
                >
                  Simplify Your <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#2E7D32]">
                    Digital Payments
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                >
                  Fast, secure, and reliable. Top-up airtime, buy data, pay utility bills, and exchange Naira to RMB effortlessly — all within one powerful app.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                  <Button className="h-14 px-8 rounded-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white text-lg font-semibold shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 text-slate-700 text-lg font-semibold bg-white hover:bg-slate-50 transition-all w-full sm:w-auto group">
                    <Play className="w-5 h-5 mr-2 text-[#4CAF50] group-hover:scale-110 transition-transform" fill="currentColor" />
                    See How it Works
                  </Button>
                </motion.div>

                <motion.div variants={fadeIn} className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-500">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="text-slate-900 font-bold block">500k+</span>
                    Active Users
                  </div>
                </motion.div>
              </div>

              {/* Hero Image/Mockup */}
              <motion.div
                variants={scaleIn}
                className="relative mx-auto w-full max-w-md lg:max-w-none lg:h-[600px] flex items-center justify-center"
              >
                {/* Abstract UI Elements Floating */}
                <motion.div
                  animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-20 top-10 -left-10 lg:-left-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-1">Transfer Success</p>
                    <p className="text-sm font-bold text-slate-900">+ ¥5,000 RMB</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute z-20 bottom-20 -right-5 lg:-right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#FFDE21]" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-1">Bill Payment</p>
                    <p className="text-sm font-bold text-slate-900">IKEDC Prepaid</p>
                  </div>
                </motion.div>

                {/* Main Mockup Placeholder (Using standard images or styled divs as requested in guidelines to avoid external broken images) */}
                <div className="relative z-10 w-[280px] h-[580px] lg:w-[320px] lg:h-[650px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl border-[6px] border-slate-800 mockup-glow">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative border border-slate-200 flex flex-col pt-8">
                    {/* Dynamic Header */}
                    <div className="absolute top-0 w-full h-6 bg-slate-900 flex justify-center rounded-t-xl">
                      <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
                    </div>
                    {/* Mockup UI Inner Content */}
                    <div className="p-5 flex-1 bg-slate-50 space-y-4">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <p className="text-xs text-slate-500 font-medium">Total Balance</p>
                          <h3 className="text-2xl font-bold text-slate-900">₦245,500.00</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <ShieldCheck className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div className="w-full h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full"></div>
                        <p className="text-white/80 text-xs font-medium mb-1">Virtual Card</p>
                        <p className="text-lg font-mono tracking-widest bg-white/20 inline-block px-2 rounded backdrop-blur-sm">**** 4592</p>
                      </div>

                      <div className="grid grid-cols-4 gap-3 pt-2">
                        {[
                          { i: <Smartphone className="w-5 h-5" />, l: "Airtime" },
                          { i: <Wifi className="w-5 h-5" />, l: "Data" },
                          { i: <Zap className="w-5 h-5" />, l: "Power" },
                          { i: <RefreshCcw className="w-5 h-5" />, l: "Swap" },
                        ].map((act, i) => (
                          <div key={i} className="flex flex-col items-center gap-1.5">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600">
                              {act.i}
                            </div>
                            <span className="text-[10px] font-semibold text-slate-600">{act.l}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-white rounded-2xl shadow-sm mt-4 border border-slate-100">
                        <div className="flex justify-between items-center mb-3">
                          <p className="text-xs font-bold text-slate-800">Recent Transactions</p>
                          <p className="text-[10px] font-semibold text-green-600">See All</p>
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                  <Banknote className="w-4 h-4 text-slate-500" />
                                </div>
                                <div>
                                  <p className="text-[10px] font-bold text-slate-800">Transfer out</p>
                                  <p className="text-[8px] text-slate-400">Today, 10:42 AM</p>
                                </div>
                              </div>
                              <p className="text-xs font-bold text-slate-800">-₦5,000</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="w-full py-20 lg:py-32 bg-white relative">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              ref={servicesRef}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.h4 variants={fadeIn} className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">All In One Platform</motion.h4>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Everything you need <br /> in your pocket
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg">
                Experience seamless payments across all your daily needs. No queues, no delays—just instant confirming transactions.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {[
                { title: "Airtime & Data", desc: "Instant top-ups for MTN, Airtel, Glo, & 9mobile. Earn cashback on selections.", icon: <Smartphone />, color: "bg-blue-50 text-blue-600" },
                { title: "Utility Bills", desc: "Never get disconnected. Pay your electricity and water bills instantly and safely.", icon: <Zap />, color: "bg-[#FFDE21]/20 text-yellow-600" },
                { title: "Cable TV", desc: "Subscribe to DSTV, GOTV, and Startimes without leaving your cozy couch.", icon: <Tv />, color: "bg-purple-50 text-purple-600" },
                { title: "Internet", desc: "Renew your Spectranet, Smile, and Swift internet subscriptions seamlessly.", icon: <Globe2 />, color: "bg-rose-50 text-rose-600" },
              ].map((svc, i) => (
                <motion.div key={i} variants={scaleIn} whileHover={{ y: -10 }} className="h-full">
                  <Card className="h-full border-none shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 rounded-2xl ${svc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {svc.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {svc.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- EXCHANGE SECTION (NAIRA TO RMB) --- */}
        <section id="exchange" className="w-full py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
          {/* dark background decors */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              ref={exchangeRef}
              initial="hidden"
              animate={exchangeInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <motion.div variants={slideInLeft} className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-[2rem] p-8 shadow-2xl">
                  <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                    <RefreshCcw className="text-green-400 w-5 h-5" /> Live Exchange Rate
                  </h3>

                  {/* Mock Calculator */}
                  <div className="space-y-4">
                    <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/50">
                      <p className="text-slate-400 text-xs font-semibold mb-2">You Send (NGN)</p>
                      <div className="flex justify-between flex-wrap items-center">
                        <span className="text-3xl font-bold text-white">₦ 500,000</span>
                        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                          <span className="text-xs font-bold text-white">🇳🇬 NGN</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center -my-3 relative z-10">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 border-[4px] border-slate-800">
                        <ArrowRight className="w-4 h-4 text-white rotate-90" />
                      </div>
                    </div>

                    <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/50">
                      <p className="text-slate-400 text-xs font-semibold mb-2">Recipient Gets (RMB)</p>
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-green-400">¥ 2,840.90</span>
                        <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                          <span className="text-xs font-bold text-white">🇨🇳 RMB</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Current Rate</span>
                        <span className="text-white font-medium">1 RMB = 176.00 NGN</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Transfer Fee</span>
                        <span className="text-green-400 font-medium">Free</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 h-14 bg-[#4CAF50] hover:bg-[#3d8b40] text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/20">
                      Start Exchange Context
                    </Button>
                  </div>
                </motion.div>

                {/* Decorative floating badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 top-10 bg-[#FFDE21] text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2 z-20"
                >
                  <Lock className="w-4 h-4" /> Secure & Fast
                </motion.div>
              </div>

              <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-green-400 text-sm font-semibold">
                  <Globe2 className="w-4 h-4" />
                  <span>Cross-Border Payments</span>
                </motion.div>
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Seamless <span className="text-green-400">Naira to RMB</span> Exchange.
                </motion.h2>
                <motion.p variants={fadeIn} className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Business with China just got easier. Fund your suppliers' Alipay or WeChat accounts directly with Naira from your Jesdanpay wallet at the best market rates.
                </motion.p>
                <motion.ul variants={fadeIn} className="space-y-4 pt-4 text-left inline-block lg:block">
                  {[
                    "Best exchange rates in the market",
                    "Instant funding to Alipay & WeChat",
                    "Zero hidden fees or charges",
                    "Dedicated support for importers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section id="how-it-works" className="w-full py-20 lg:py-32 bg-slate-50 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              ref={howRef}
              initial="hidden"
              animate={howInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h4 variants={fadeIn} className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">Simple Process</motion.h4>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                How Jesdanpay Works
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg">
                Get started in 3 easy steps. It takes less than 2 minutes to set up your account and start making payments.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={howInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 lg:gap-12 relative"
            >
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-green-200 via-green-400 to-green-200 -z-10" />

              {[
                { step: "01", title: "Download & Register", desc: "Get the app from your store, sign up in seconds with just your phone number.", icon: <Smartphone className="text-slate-700 w-8 h-8" /> },
                { step: "02", title: "Fund Your Wallet", desc: "Add money securely using your bank card, USSD, or direct bank transfer.", icon: <Wallet className="text-slate-700 w-8 h-8" /> },
                { step: "03", title: "Start Transacting", desc: "Pay bills, send RMB, or buy airtime instantly without any hassle.", icon: <Send className="text-slate-700 w-8 h-8" /> },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-50 mb-6 relative z-10">
                    {item.icon}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="w-full py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              ref={whyRef}
              initial="hidden"
              animate={whyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <motion.h4 variants={fadeIn} className="text-green-600 font-bold tracking-wider uppercase text-sm">Why Choose Us</motion.h4>
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Built for speed, <br className="hidden lg:block" /> designed for security.
                </motion.h2>
                <motion.p variants={fadeIn} className="text-slate-600 text-lg leading-relaxed">
                  We understand the importance of your money and time. That's why we built a robust infrastructure that guarantees 99.9% uptime and impenetrable security.
                </motion.p>

                <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6 pt-6">
                  {[
                    { title: "Bank-Grade Security", icon: <ShieldCheck className="text-green-600" /> },
                    { title: "Zero Downtime", icon: <Clock className="text-green-600" /> },
                    { title: "24/7 Support", icon: <Headset className="text-green-600" /> },
                    { title: "Instant Processing", icon: <Zap className="text-green-600" /> },
                  ].map((f, i) => (
                    <motion.div key={i} variants={fadeIn} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        {f.icon}
                      </div>
                      <span className="font-bold text-slate-800">{f.title}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={scaleIn} className="relative w-full h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-green-300 rounded-[2.5rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                <div className="relative h-full bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl p-8 flex flex-col justify-center">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800" alt="People using app" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
                  <div className="relative z-10 text-white space-y-4">
                    <QuoteIcon className="w-12 h-12 text-[#FFDE21] mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">
                      "Jesdanpay has revolutionized our digital transactions. What used to take hours now takes seconds. It’s the ultimate financial toolkit."
                    </h3>
                    <div className="pt-6">
                      <p className="font-bold text-lg">Dr. Olatunbosun Ade</p>
                      <p className="text-green-400 font-medium text-sm">Fintech Analyst</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="w-full py-20 lg:py-32 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              ref={testimonyRef}
              initial="hidden"
              animate={testimonyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.h4 variants={fadeIn} className="text-green-600 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</motion.h4>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Loved by thousands
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={testimonyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Card className="h-full border-none shadow-lg shadow-slate-200/50 bg-white rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-[#FFDE21] text-[#FFDE21]" />)}
                      </div>
                      <p className="text-slate-600 text-lg italic mb-6">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={t.name} className="w-12 h-12 rounded-full border-2 border-green-100" />
                        <div>
                          <h4 className="font-bold text-slate-900">{t.name}</h4>
                          <p className="text-sm text-slate-500">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faqs" className="w-full py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div
              ref={faqRef}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg">
                Got questions? We've got answers. If you don't see your question, reach out to our support.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-4"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === i ? 'border-green-500 bg-green-50/50 shadow-md' : 'border-slate-200 hover:border-green-300'}`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${activeFaq === i ? 'text-green-700' : 'text-slate-800'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-slate-400 ${activeFaq === i ? 'rotate-180 text-green-600' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-slate-600 leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="w-full py-20 lg:py-32 relative overflow-hidden bg-[#4CAF50]">
          {/* Animated Background Graphics */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-400 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFDE21] rounded-full blur-[150px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white">
            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-8"
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Ready to experience the future of payments?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-green-50 font-medium">
                Join over 500,000 users managing their daily needs on Jesdanpay.
              </motion.p>

              <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button className="h-16 px-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold shadow-2xl transition-all hover:scale-105 w-full sm:w-auto flex items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8 brightness-0 invert" />
                </Button>
                <Button className="h-16 px-10 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-lg font-bold shadow-2xl transition-all hover:scale-105 w-full sm:w-auto flex items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full pt-20 pb-10 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-green-500">
                  <Zap className="text-white w-5 h-5 fill-white" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  Jesdan<span className="text-[#4CAF50]">pay</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Empowering Nigerians with fast, secure, and reliable digital transactions. Redefining how you pay.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
                  { icon: <Instagram className="h-5 w-5" />, name: "Instagram" },
                  { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
                ].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Careers", "Blog", "Contact", "Partners"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                {["Airtime & Data", "Electricity Bills", "TV Subscriptions", "Internet Tops-ups", "RMB Exchange"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6">Contact Support</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <Globe2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span>123 Victoria Island, Lagos, Nigeria</span>
                </li>
                <li className="flex gap-3">
                  <Headset className="w-5 h-5 text-green-500 shrink-0" />
                  <span>support@jesdanpay.com</span>
                </li>
                <li className="flex gap-3">
                  <PhoneCall className="w-5 h-5 text-green-500 shrink-0" />
                  <span>+234 800 123 4567</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Jesdanpay Technology Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Simple Helper for Quote Icon in Why Choose Us
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.912 6c-3.238 0-5.834 2.596-5.834 5.833 0 1.256.402 2.417 1.083 3.363-.984 2.053-2.618 3.528-4.661 4.316l1.248 1.488c2.977-1.464 5.166-3.771 6.273-6.611 1.085-2.774.831-5.733-.298-8.389H12.912zm11.088 0c-3.238 0-5.833 2.596-5.834 5.833 0 1.256.403 2.417 1.084 3.363-.984 2.053-2.618 3.528-4.661 4.316l1.248 1.488c2.977-1.464 5.166-3.771 6.273-6.611 1.086-2.774.831-5.733-.297-8.389H24z" />
    </svg>
  );
}
