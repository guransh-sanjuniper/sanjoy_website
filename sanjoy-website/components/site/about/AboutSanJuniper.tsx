"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

import {
  aboutMotion,
  aboutStaggerContainer,
  aboutStaggerItem,
  ABOUT_SECTION,
} from "@/lib/about-motion"
import { BRAND_LOGOS } from "@/lib/brand-logos"

const infrastructureAreas = [
  {
    title: "AI Architecture & Systems Engineering",
    description:
      "Building scalable intelligence systems for enterprise environments.",
  },
  {
    title: "Robotics & Automation Integration",
    description:
      "Connecting intelligent software with operational automation.",
  },
  {
    title: "Enterprise Deployment Frameworks",
    description:
      "Creating repeatable frameworks for secure enterprise AI adoption.",
  },
  {
    title: "Governance-Driven AI Lifecycle Management",
    description:
      "Ensuring AI systems remain transparent, secure, compliant, and responsible throughout their lifecycle.",
  },
  {
    title: "Strategic International Collaboration",
    description:
      "Partnering with institutions and organizations to advance responsible AI infrastructure globally.",
  },
]

export function AboutSanJuniper() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="san-juniper-heading"
      className={`${ABOUT_SECTION} bg-surface-subtle/60`}
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch md:gap-12 lg:gap-16 xl:gap-20">
          <motion.div
            className="flex min-h-0 flex-col gap-10 md:h-full md:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
            variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
          >
            <div className="shrink-0">
              <motion.p
                className="text-eyebrow"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
              >
                About San Juniper
              </motion.p>
              <motion.h2
                id="san-juniper-heading"
                className="mt-4 text-heading-xl"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
              >
                A Global AI Infrastructure Institution
              </motion.h2>
              <motion.div
                className="mt-6 flex flex-col gap-4"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
              >
                <motion.p
                  className="text-body-lg"
                  variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
                >
                  Sanjoy is developed by San Juniper.
                </motion.p>
                <motion.p
                  className="text-body-lg"
                  variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
                >
                  San Juniper is a Global AI Infrastructure Group focused on
                  designing, governing, and deploying advanced intelligence
                  systems for institutional environments.
                </motion.p>
                <motion.p
                  className="text-body-lg"
                  variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
                >
                  Operating at the intersection of artificial intelligence,
                  infrastructure engineering, and strategic collaboration, San
                  Juniper enables enterprises, governments, and international
                  partners to deploy AI systems with long-term stability,
                  governance alignment, and scalable architecture.
                </motion.p>
                <motion.p
                  className="text-body-lg"
                  variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
                >
                  Our work focuses on building the infrastructure required for
                  responsible and sustainable intelligence systems across
                  industries and geographies.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="flex min-h-0 flex-1 flex-col justify-end pt-8 md:pt-6 lg:pt-8"
              variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
            >
              <div className="flex w-full justify-center md:min-h-0 md:max-h-[10rem] lg:max-h-[12rem]">
                <Image
                  src={BRAND_LOGOS.sanJuniper}
                  alt="San Juniper — Global AI Infrastructure Group"
                  width={1225}
                  height={356}
                  loading="lazy"
                  className="h-auto max-h-full w-full max-w-[13.125rem] object-contain sm:max-w-[16.875rem] md:max-w-full"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="flex h-full min-h-0 flex-col">
            <motion.div
              className="mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
              variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
            >
              <motion.p
                className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-subtle"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
              >
                Our Infrastructure Focus
              </motion.p>
              <motion.p
                className="mt-2 text-body"
                variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
              >
                San Juniper develops enterprise AI infrastructure across five
                strategic areas.
              </motion.p>
            </motion.div>

            <motion.ul
              className="flex flex-col gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
              variants={aboutMotion(shouldReduceMotion, aboutStaggerContainer)}
            >
              {infrastructureAreas.map((area) => (
                <motion.li
                  key={area.title}
                  className="list-none"
                  variants={aboutMotion(shouldReduceMotion, aboutStaggerItem)}
                >
                  <article className="group relative rounded-2xl border border-brand/25 bg-surface px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-md sm:px-6 sm:py-6">
                    <span
                      className="absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-6"
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-semibold tracking-[-0.03em] text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
