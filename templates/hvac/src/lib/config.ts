import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Comfort Climate Solutions",
  tagline: "Your Home. Perfect Comfort.",
  phone: "(704) 555-1234",
  phoneHref: "tel:+17045551234",
  email: "info@comfortclimatesolutions.com",
  address: "123 HVAC Way, Charlotte, NC 28202",
  serviceAreas: ["Charlotte", "Matthews", "Huntersville"],
  license: "NC HVAC Lic #12345",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Fast, reliable repairs to get your cooling system running efficiently again.", urgent: false },
  { icon: "flame", title: "Heating Services", desc: "Expert heating system repair, maintenance, and installation for a warm, cozy home.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services from leak fixes to water heater installation.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for urgent HVAC and plumbing breakdowns when you need it most.", urgent: true },
  { icon: "wrench", title: "System Maintenance", desc: "Preventative maintenance plans to extend system life and ensure peak performance.", urgent: false },
  { icon: "shield-check", title: "New Installations", desc: "Professional installation of new AC, heating, and water heater systems.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  {