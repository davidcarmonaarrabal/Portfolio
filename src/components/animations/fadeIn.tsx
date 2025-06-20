'use client'
import { motion } from 'framer-motion'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}
