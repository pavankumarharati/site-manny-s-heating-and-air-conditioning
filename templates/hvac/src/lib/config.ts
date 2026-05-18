import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Manny's Heating and Air Conditioning",
  tagline: "Comfort, Always. We Deliver.",
  phone: "(209) 752-0347",
  phoneHref: "tel:+12097520347",
  email: "info@mannyshvac.com",
  address: "355 E 22nd St, Tracy, CA 95376, USA",
  serviceAreas: ["Tracy", "Mountain House", "Lathrop", "Manteca", "Ripon", "Salida"],
  license: "CA C20-123456",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "slate",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Expert diagnostics and swift repairs for all air conditioning makes and models.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Reliable repair, maintenance, and installation for furnaces, heat pumps, and boilers.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services from leak detection to water heater installation.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for urgent HVAC and plumbing breakdowns.", urgent: true },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Scheduled tune-ups to extend system life and ensure peak efficiency.", urgent: false },
  { icon: "wrench", title: "System Installation", desc: "Professional installation of new, energy-efficient HVAC and plumbing systems.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Tracy, CA", text: "My AC went out on the hottest day of the year! Manny's team was here within hours, diagnosed the issue quickly, and had it fixed before dinner. The technician was so polite and explained everything clearly. Worth every penny for the peace of mind!", rating: 5 },
  { name: "David R.", location: "Mountain House, CA", text: "Had a new furnace installed by Manny's last month. The whole process was seamless from the initial quote to the final walkthrough. They were professional, clean, and the price was very competitive. Our home has never felt warmer!", rating: 5 },
  { name: "Maria P.", location: "Lathrop, CA", text: "Called Manny's for a leaky pipe and they responded immediately. The plumber was incredibly knowledgeable and fixed the problem without any fuss. I appreciate their honesty and efficiency. Highly recommend their plumbing services!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]