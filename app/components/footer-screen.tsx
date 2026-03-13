'use client'

import { motion } from 'framer-motion'
import { Github, Heart, Star, Twitter } from 'lucide-react'
import Image from 'next/image'

const links = [
  {
    section: 'Product',
    items: [
      { label: 'Preview', href: '#preview' },
      { label: 'Features', href: '#features' },
      { label: 'Architecture', href: '#stack' },
      { label: 'Download', href: '#download' }
    ]
  },
  {
    section: 'Resources',
    items: [
      { label: 'GitHub', href: 'https://github.com/YanceyOfficial/talon', external: true },
      { label: 'Releases', href: 'https://github.com/YanceyOfficial/talon/releases', external: true },
      { label: 'Issues', href: 'https://github.com/YanceyOfficial/talon/issues', external: true },
      { label: 'OpenClaw', href: 'https://github.com/YanceyOfficial/openclaw', external: true }
    ]
  },
  {
    section: 'Connect',
    items: [
      { label: 'Twitter', href: 'https://twitter.com/YanceyOfficial', external: true },
      { label: 'Sponsor', href: 'https://github.com/sponsors/YanceyOfficial', external: true },
      { label: 'Product Hunt', href: 'https://www.producthunt.com/posts/talon', external: true }
    ]
  }
]

export function FooterScreen() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pt-20 pb-16">
      <div className="mx-auto max-w-[980px]">
        {/* Top section */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <Image src="/logo/app-icon-transparent.png" alt="Talon" width={28} height={28} className="rounded-lg" />
              <h3 className="text-2xl font-black tracking-tight text-white">Talon</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/40">
              The floating AI assistant for macOS. Open source, private, and
              always within reach.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/YanceyOfficial/talon',
                  label: 'GitHub'
                },
                {
                  icon: Twitter,
                  href: 'https://twitter.com/YanceyOfficial',
                  label: 'Twitter'
                },
                {
                  icon: Star,
                  href: 'https://github.com/YanceyOfficial/talon/stargazers',
                  label: 'Star'
                }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.section}>
              <p className="mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase">
                {group.section}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Yancey Inc. All rights reserved.
          </p>
          <motion.p
            className="flex items-center gap-1.5 text-xs text-white/25"
            whileHover={{ scale: 1.05 }}
          >
            Built with <Heart className="h-3 w-3 fill-pink-400 text-pink-400" />{' '}
            by Yancey
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
