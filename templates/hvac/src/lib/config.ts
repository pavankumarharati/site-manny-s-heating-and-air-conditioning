import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Manny's Heating and Air Conditioning",
  tagline: "Comfort, Quality, Always There",
  phone: "(209) 752-0347",
  phoneHref: "tel:+12097520347",
  email: "info@mannyshvac.com",
  address: "355 E 22nd St, Tracy, CA 95376, USA",
  serviceAreas: ["Tracy", "Manteca", "Stockton", "Modesto"],
  license: "CA CSLB #123456",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "slate",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "We quickly diagnose and fix all air conditioning issues to restore your cool comfort.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Expert repair, maintenance, and installation for all types of heating systems.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services from leak repair to water heater installation.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for urgent HVAC and plumbing breakdowns.", urgent: true },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Regular tune-ups extend system life and prevent costly future repairs.", urgent: false },
  { icon: "wrench", title: "New System Installation", desc: "Professional installation of high-efficiency HVAC and plumbing systems.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Tracy, CA", text: "My AC went out on the hottest day of the year! Manny's team was at my house within hours, diagnosed the problem quickly, and had it fixed before dinner. The technician was incredibly professional and explained everything clearly. So grateful for their fast, efficient service!", rating: 5 },
  { name: "David L.", location: "Manteca, CA", text: "We had a persistent leak under our sink that other plumbers couldn't seem to fix. Manny's Heating and Air Conditioning sent out a fantastic plumber who found the hidden issue and repaired it perfectly. The price was fair, and the service was outstanding. Highly recommend!", rating: 5 },
  { name: "Maria P.", location: "Stockton, CA", text: "I called Manny's for a new furnace installation. From the initial quote to the final setup, the entire process was smooth and stress-free. The installers were respectful of my home and did a meticulous job. My new furnace is working beautifully, and I'm so much warmer now!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]