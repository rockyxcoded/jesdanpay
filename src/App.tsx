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
  // Star,
  // Download,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Custom hook for animations
function useAnimateOnView() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return [ref, inView] as const;
}

function App() {
  const [heroRef, heroInView] = useAnimateOnView();
  const [vtuRef, vtuInView] = useAnimateOnView();
  const [billsRef, billsInView] = useAnimateOnView();
  const [featuresRef, featuresInView] = useAnimateOnView();
  const [appRef, appInView] = useAnimateOnView();
  const [ctaRef, ctaInView] = useAnimateOnView();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full border-b bg-white"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="font-bold text-2xl text-[#4CAF50]">Jesdanpay</div>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["Home", "Features", "About", "Download"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <a
                  href="#"
                  className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="hidden md:flex border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
              >
                Login
              </Button>
            </motion.div> */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-green-700 hover:bg-[#3d8b40] text-white">
                Download App
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="md:grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
            >
              <div className="space-y-4">
                {/* <motion.div
                  variants={fadeIn}
                  className="inline-block rounded-lg bg-[#FFDE21] px-3 py-1 text-sm font-medium"
                >
                  Mobile App
                </motion.div> */}
                <motion.h1
                  variants={fadeIn}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  Pay Bills & Top-up{" "}
                  <span className="text-[#4CAF50]">On The Go</span>
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  className="max-w-[600px] text-gray-500 md:text-xl"
                >
                  Nigeria's most reliable mobile app for airtime, data bundles,
                  and bill payments. Fast, secure, and available 24/7.
                </motion.p>
                <motion.div
                  variants={fadeIn}
                  className="flex sm:flex-row gap-4 pt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get it on Google Play"
                        className="h-14 w-auto"
                      />
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        alt="Download on the App Store"
                        className="h-14 w-auto"
                      />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
              {/* <motion.div
                variants={scaleIn}
                className="flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <img
                    src="/hero_1.png"
                    alt="Jesdanpay Mobile App"
                    className="w-80 h-auto rounded-3xl shadow-2xl"
                  />
                  <motion.div
                    className="absolute -top-4 -right-4 bg-[#FFDE21] rounded-full px-3 py-1 flex items-center gap-1 shadow-lg"
                    animate={{
                      rotate: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  >
                    <Star className="h-4 w-4 text-[#4CAF50] fill-[#4CAF50]" />
                    <span className="font-bold text-sm">4.9 Rating</span>
                  </motion.div>
                </motion.div>
              </motion.div> */}
            </motion.div>
          </div>
        </section>

        {/* VTU Services Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              ref={vtuRef}
              initial="hidden"
              animate={vtuInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-[#FFDE21] px-3 py-1 text-sm font-medium">
                  Mobile Services
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Top-up Instantly
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Purchase airtime and data bundles for all major networks in
                  Nigeria with just a few taps.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={vtuInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
            >
              {[
                {
                  name: "MTN",
                  color: "bg-yellow-50",
                  icon: <PhoneCall className="h-8 w-8 text-white" />,
                  image: "mtn.svg",
                },
                {
                  name: "Airtel",
                  color: "bg-red-50",
                  icon: <PhoneCall className="h-8 w-8 text-white" />,
                  image: "airtel.svg",
                },
                {
                  name: "Glo",
                  color: "bg-green-50",
                  icon: <PhoneCall className="h-8 w-8 text-white" />,
                  image: "glo.svg",
                },
                {
                  name: "9mobile",
                  color: "bg-green-50",
                  icon: <PhoneCall className="h-8 w-8 text-white" />,
                  image: "9mobile.svg",
                },
              ].map((provider, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 5,
                          ease: "easeInOut",
                        }}
                        className={`${provider.color} p-3 rounded-full`}
                      >
                        <img src={provider.image} className="h-10" alt="" />
                      </motion.div>
                      <h3 className="font-bold text-xl">{provider.name}</h3>
                      <p className="text-sm text-gray-500">Airtime & Data</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bill Payments Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              ref={billsRef}
              initial="hidden"
              animate={billsInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-[#FFDE21] px-3 py-1 text-sm font-medium">
                  Utility Bills
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Pay Bills Easily
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Settle your utility bills quickly and securely without leaving
                  your home.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={billsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {[
                {
                  name: "Electricity",
                  icon: <Zap className="h-10 w-10 text-[#4CAF50]" />,
                  description: "EKEDC, IKEDC, AEDC, and more",
                },
                {
                  name: "Cable TV",
                  icon: <Tv className="h-10 w-10 text-[#4CAF50]" />,
                  description: "DSTV, GOTV, Startimes",
                },
                {
                  name: "Internet",
                  icon: <Wifi className="h-10 w-10 text-[#4CAF50]" />,
                  description: "Spectranet, Smile, Swift",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "#4CAF50",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col items-center space-y-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                        className="bg-gray-50 p-4 rounded-full"
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="font-bold text-xl">{service.name}</h3>
                      <p className="text-sm text-gray-500">
                        {service.description}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className="mt-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
                        >
                          Pay Now
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* App Showcase Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              ref={appRef}
              initial="hidden"
              animate={appInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-[#FFDE21] px-3 py-1 text-sm font-medium">
                  App Features
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Designed For Simplicity
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Our intuitive mobile app makes managing payments and top-ups
                  effortless.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={appInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              <motion.div
                variants={fadeIn}
                className="order-2 lg:order-1 col-span-1"
              >
                <div className="space-y-6">
                  {[
                    {
                      title: "Quick Transactions",
                      description:
                        "Complete any payment in less than 10 seconds",
                      icon: <Smartphone className="h-6 w-6 text-[#4CAF50]" />,
                    },
                    {
                      title: "Transaction History",
                      description: "View and track all your past transactions",
                      icon: <Smartphone className="h-6 w-6 text-[#4CAF50]" />,
                    },
                    {
                      title: "Saved Beneficiaries",
                      description:
                        "Save frequent recipients for faster payments",
                      icon: <Smartphone className="h-6 w-6 text-[#4CAF50]" />,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={slideIn}
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-[#FFDE21] p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="order-1 lg:order-2 col-span-1 flex justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="screenshot_6.png"
                    alt="Jesdanpay App Dashboard"
                    className="w-70 h-auto rounded-3xl shadow-2xl border-8 border-white"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn} className="order-3 col-span-1">
                <div className="space-y-6">
                  {[
                    {
                      title: "Secure Payments",
                      description: "Bank-grade security for all transactions",
                      icon: <Smartphone className="h-6 w-6 text-[#4CAF50]" />,
                    },
                    {
                      title: "Instant Notifications",
                      description: "Get alerts for all account activities",
                      icon: <Smartphone className="h-6 w-6 text-[#4CAF50]" />,
                    },
                    {
                      title: "24/7 Support",
                      description: "In-app chat support whenever you need help",
                      icon: <Smartphone className="h-6 w-6 text-[#4CAF50]" />,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={slideIn}
                      whileHover={{ x: -5 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-[#FFDE21] p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-[#FFDE21] px-3 py-1 text-sm font-medium">
                  App Screenshots
                </div> */}
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  See The App In Action
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Explore the intuitive interface and powerful features of our
                  mobile app.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={featuresRef}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 no-scrollbar"
            >
              {[
                "screenshot_1.png",
                "screenshot_2.png",
                "screenshot_3.png",
                "screenshot_4.png",
                "screenshot_5.png",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`App Screenshot ${index + 1}`}
                    className="w-55 h-auto rounded-3xl shadow-lg border-8 border-white"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-[#4CAF50] overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold tracking-tighter md:text-4xl text-white mb-4"
              >
                Download The App Today
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="max-w-[700px] text-white/90 md:text-xl mx-auto mb-8"
              >
                Join over 500,000 Nigerians who trust Jesdanpay for their daily
                transactions.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-16 w-auto"
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download on the App Store"
                      className="h-16 w-auto"
                    />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 -z-10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Jesdanpay</h3>
              <p className="text-gray-400">
                Making bill payments and top-ups easy for every Nigerian.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, name: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, name: "Twitter" },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    name: "Instagram",
                  },
                  { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white">
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Services", "Contact Us", "FAQs"].map(
                  (link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <a href="#" className="text-gray-400 hover:text-white">
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                {[
                  "Airtime Top-up",
                  "Data Bundles",
                  "Electricity Bills",
                  "Cable TV",
                  "Internet Services",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-white">
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lagos, Nigeria</li>
                <li>info@Jesdanpay.com</li>
                <li>+234 800 123 4567</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>© {new Date().getFullYear()} Jesdanpay. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
