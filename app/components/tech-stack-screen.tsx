'use client'

import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { motion } from 'framer-motion'
import { KeyRound, Lock, Radio, Shield, Sparkles, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    name: 'Tauri 2.0',
    description: 'Rust-powered native desktop framework. Tiny binaries, fast startup, and full OS integration without Electron overhead.',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400'
  },
  {
    icon: Sparkles,
    name: 'React 19 + Vite',
    description: 'A blazing-fast, reactive UI layer with Tailwind CSS and shadcn/ui components for a polished, accessible experience.',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Radio,
    name: 'OpenClaw Gateway',
    description: 'WebSocket-based AI gateway that proxies requests to your chosen models. Self-hosted, giving you full control over your data.',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400'
  },
  {
    icon: Lock,
    name: 'Local-first Storage',
    description: 'All chat history and settings live on your machine via @tauri-apps/plugin-store. Your conversations never touch a third-party server.',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400'
  },
  {
    icon: KeyRound,
    name: 'Ed25519 Auth',
    description: 'Cryptographic keypair signing ensures only your machine can talk to your OpenClaw instance — no passwords, no tokens.',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    iconColor: 'text-rose-400'
  },
  {
    icon: Shield,
    name: 'Privacy by Design',
    description: 'No telemetry, no cloud accounts, no data collection. Talon is built from the ground up for users who value their privacy.',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
}

export function TechStackScreen() {
  return (
    <ScrollItemWrapper id="stack" className="flex flex-col justify-center py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm font-semibold tracking-widest text-purple-400 uppercase"
      >
        Architecture
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="subsection-headline mb-6"
      >
        Built on solid foundations.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-16 max-w-lg text-xl text-[#86868b]"
      >
        Modern tech stack chosen for performance, security, and privacy —
        not convenience for us, but for you.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.name}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`group flex flex-col gap-3 rounded-2xl border ${pillar.border} ${pillar.bg} p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20`}
          >
            <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{pillar.name}</p>
            <p className="text-sm leading-relaxed text-[#86868b]">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </ScrollItemWrapper>
  )
}
