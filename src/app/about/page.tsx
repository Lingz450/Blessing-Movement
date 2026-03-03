"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScriptureQuote } from "@/components/ui/ScriptureQuote";
import { teamMembers } from "@/data/team";
import {
  Heart,
  Target,
  Users,
  Sparkles,
  Calendar,
  MapPin,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Love in Action",
    description: "We demonstrate the love of Christ through practical service and spiritual care.",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every program exists to spread the gospel and bless nations.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build family—locally and globally—where people grow and serve together.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We steward resources and opportunities with integrity and excellence.",
  },
];

const timeline = [
  { year: "2024", title: "Birth of the vision", detail: "Blessings Global Outreach was birthed from a desire to see physical and spiritual needs met in one movement." },
  { year: "2025", title: "First outreaches", detail: "Medical and welfare outreaches launched; first Praise & Prophesy events held." },
  { year: "2026", title: "Going global", detail: "Expansion into multiple cities; Blessings Pods and Career Bootcamps launched." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)] dark:from-[#1A1208] dark:via-transparent dark:to-[#050302]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] dark:text-[#F5F0E8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-[var(--text-secondary)] dark:text-[#F5F0E8B3]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Spreading the Love of Christ. Blessing Nations.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[var(--background)] dark:bg-[#0D0A07]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="font-display text-2xl font-semibold text-[var(--text-primary)] dark:text-[#F5F0E8] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--text-secondary)] dark:text-[#F5F0E8B3] leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Spread the gospel and love of Jesus Christ to everyone on earth by blessing people—and
            that in turn, these people become a blessing to others.
          </motion.p>
          <div className="mt-8">
            <ScriptureQuote
              verse="And you will be blessed. Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you."
              reference="Luke 6:38"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background-secondary)] dark:bg-[#0D0A07]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="font-display text-2xl font-semibold text-[var(--text-primary)] dark:text-[#F5F0E8] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-20 text-[var(--accent-gold)] dark:text-accent font-display font-bold text-lg">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] dark:text-[#F5F0E8]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[var(--text-secondary)] dark:text-[#F5F0E8B3]">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background)] dark:bg-[#0D0A07]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="font-display text-2xl font-semibold text-[var(--text-primary)] dark:text-[#F5F0E8] mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex gap-4 p-6 section-card hover:shadow-[0_8px_32px_var(--shadow)] dark:hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] dark:bg-primary/25 dark:text-accent">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] dark:text-[#F5F0E8]">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-[var(--text-secondary)] dark:text-[#F5F0E8B3] text-sm">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background-secondary)] dark:bg-[#0D0A07]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="font-display text-2xl font-semibold text-[#F5F0E8] mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative h-48 w-48 mx-auto rounded-2xl overflow-hidden border-4 border-[var(--accent-gold)]/80 dark:border-accent/80 shadow-[0_8px_32px_var(--shadow)] dark:shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[var(--text-primary)] dark:text-[#F5F0E8]">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                {member.bio && (
                  <p className="mt-2 text-sm text-[var(--text-secondary)] dark:text-[#F5F0E8B3]">
                    {member.bio}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--background)] dark:bg-[#0D0A07]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            className="text-[var(--text-secondary)] dark:text-[#F5F0E8B3]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Calendar className="inline h-5 w-5 mr-1 text-accent" /> Events across Nigeria and
            beyond.
            <br />
            <MapPin className="inline h-5 w-5 mr-1 text-accent mt-2" /> Lagos, Abuja, and growing.
          </motion.p>
        </div>
      </section>
    </>
  );
}
