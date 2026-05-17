import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Comfort Masters HVAC",
  tagline: "Your Home, Perfect Comfort Now.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "info@comfortmastershvac.com",
  address: "123 Climate Way, Anytown, USA 12345",
  serviceAreas: ["Anytown", "Springfield", "Shelbyville", "Capital City"],
  license: "HVAC-PRO-12345",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Swiftly diagnose and fix all air conditioning issues for cool comfort.", urgent: true },
  { icon: "flame", title: "Heating Solutions", desc: "Expert repair and