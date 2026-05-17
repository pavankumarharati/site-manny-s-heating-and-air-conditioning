import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Manny's Heating and Air Conditioning",
  tagline: "Your Comfort, Our Priority – Expert HVAC Services in Tracy, CA",
  phone: "(209) 835-4321",
  phoneHref: "tel:+12098354321",
  email: "info@mannysheatingandac.com",
  address: "123 Main St, Tracy, CA 95376",
  serviceAreas: ["Tracy", "Mountain House", "Lathrop", "Manteca", "Ripon", "Salida"],
  license: "CA Lic #123456",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair & Installation", desc: "Expert repair and seamless installation to keep your home cool and comfortable all summer long.", urgent: true },
  { icon: "flame", title: "Heating System Services", desc: "Reliable furnace repair, maintenance, and new heater installations for a warm and cozy winter.", urgent: false },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Regular tune-ups and inspections to extend the life of your HVAC system and prevent costly breakdowns.", urgent: false },
  { icon: "droplets", title: "Indoor Air Quality Solutions", desc: "Improve your home's air with humidifiers, purifiers, and ventilation systems for a healthier environment.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah L.", location: "Tracy, CA", text: "Manny's Heating and Air Conditioning provided exceptional service. They were prompt, professional, and fixed my AC quickly. Highly recommend!", rating: 5 },
  { name: "David R.", location: "Mountain House, CA", text: "Our furnace broke down in the middle of winter, and Manny's team came out the same day. Their technician was knowledgeable and got us warm again in no time.", rating: 5 },
  { name: "Jessica P.", location: "Lathrop, CA", text: "We used Manny's for a new AC installation, and the entire process was smooth and efficient. Great communication and a fair price.", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency"
]