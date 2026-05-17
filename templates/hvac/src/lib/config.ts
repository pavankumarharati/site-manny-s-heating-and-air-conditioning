import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Comfort Solutions HVAC",
  tagline: "Expert HVAC. Comfort Guaranteed. Always.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "info@comfortsolutionshvac.com",
  address: "123 Comfort Lane, Anytown, USA",
  serviceAreas: ["Springfield", "Riverdale"],
  license: "HVAC-12345",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "We quickly diagnose and fix all air conditioning issues, restoring your cool comfort efficiently.", urgent: false },
  { icon: "flame", title: "Heating Services", desc: "From furnace repair to heat pump installation, we ensure your home stays warm and cozy all winter long.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Our skilled plumbers handle everything from leaky faucets to water heater installations with expertise.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "Available 24/7 for urgent HVAC and plumbing breakdowns, providing rapid response when you need it most.", urgent: true },
  { icon: "wrench", title: "Maintenance Plans", desc: "Regular tune-ups extend the life of your systems, prevent costly repairs, and improve energy efficiency.", urgent: false },
  { icon: "shield-check", title: "System Installation", desc: "Professional installation of new AC units, furnaces, and water heaters for optimal performance and longevity.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Springfield", text: "Our AC went out on the hottest day of the year! Comfort Solutions HVAC responded within an hour, and their technician, Mark, had our unit running perfectly again by lunchtime. The price was fair, and his professionalism was outstanding. We were so relieved to have our cool air back so quickly!", rating: 5 },
  { name: "David L.", location: "Riverdale", text: "We needed a new furnace installed, and Comfort Solutions HVAC made the entire process seamless. From the initial quote to the final installation, their team was incredibly knowledgeable and efficient. Our home has never felt warmer, and we're already seeing savings on our energy bill. Highly recommend their expertise!", rating: 5 },
  { name: "Emily R.", location: "Springfield", text: "Late one night, our water heater burst, causing a huge mess. I called Comfort Solutions HVAC, and they had a plumber at our house within 45 minutes. He worked tirelessly to stop the leak and even helped us with the initial cleanup. Their emergency service truly saved the day and prevented further damage. Thank you!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians",
  "24/7 Emergency Service",
  "Licensed & Insured",
  "100% Satisfaction Guarantee"
]