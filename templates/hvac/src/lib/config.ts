import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Comfort HVAC Solutions",
  tagline: "Your Home, Perfect Climate.",
  phone: "(555) 888-9999",
  phoneHref: "tel:+15558889999",
  email: "info@comforthvac.com",
  address: "789 Climate Way, Metroville, CA 90210",
  serviceAreas: ["Metroville", "Suburbia", "Green Valley"],
  license: "CA-HVAC-123456",
  since: "2008",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Swiftly diagnose and fix all air conditioning issues.", urgent: false },
  { icon: "flame", title: "Heating", desc: "Reliable repair and installation for all heating systems.", urgent: false },
  { icon: "droplets", title: "Plumbing", desc: "Expert solutions for leaks, clogs, and water heater problems.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for urgent HVAC and plumbing breakdowns.", urgent: true },
  { icon: "shield-check", title: "Maintenance", desc: "Preventative care to extend system life and improve efficiency.", urgent: false },
  { icon: "wrench", title: "