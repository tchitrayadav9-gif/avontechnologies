import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from 'react-icons/hi2'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import FadeIn from '../components/common/FadeIn'
import { COMPANY } from '../utils/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you shortly.')
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: HiOutlineMapPin, label: 'Address', value: COMPANY.address },
    { icon: HiOutlineEnvelope, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: HiOutlinePhone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: HiOutlineClock, label: 'Business Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM IST' },
  ]

  return (
    <>
      <section className="gradient-primary py-16 text-center">
        <div className="section-container">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Contact Us
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Have a project in mind? Reach out to our team in Hyderabad for a free consultation.
          </p>
        </div>
      </section>

      <section className="section-container py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn direction="left" className="lg:col-span-2">
            <SectionHeading
              badge="Reach Us"
              title="Contact Information"
              subtitle="We'd love to hear from you. Send us a message and we'll respond within 24 hours."
              align="left"
            />

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              className="card-shadow rounded-xl bg-card p-8"
            >
              <h3 className="text-xl font-semibold text-text">Send a Message</h3>
              <p className="mt-1 text-sm text-muted">Fill out the form below and we&apos;ll be in touch.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-surface px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-surface px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-surface px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-surface px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-slate-200 bg-surface px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <div className="mt-6">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </motion.form>
          </FadeIn>
        </div>
      </section>

      <section className="section-container pb-20">
        <FadeIn>
          <div className="card-shadow overflow-hidden rounded-xl bg-card">
            <div className="flex h-64 items-center justify-center bg-slate-100 sm:h-80">
              <div className="text-center">
                <HiOutlineMapPin className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-3 text-lg font-semibold text-text">HITEC City, Hyderabad</p>
                <p className="mt-1 text-sm text-muted">{COMPANY.address}</p>
                <a
                  href="https://maps.google.com/?q=HITEC+City+Madhapur+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
