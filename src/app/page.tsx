"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function HomePage() {
  return <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
    <Image src="https://i.imgur.com/MkesUYT.jpeg" alt="Background" fill priority className="object-cover" quality={90} />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 py-10 sm:py-20">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Entre no nosso Grupo VIP!</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">Receba ofertas exclusivas e dicas especiais.</p>
          
          <motion.a href="https://chat.whatsapp.com/ICS1xGmPGizAEpCNuFsN5D?mode=ac_t" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            Entrar no Grupo
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
          {['/img/WhatsApp Image 2025-03-14 at 17.14.24(1).jpeg', '/img/WhatsApp Image 2025-03-14 at 17.14.24.jpeg'].map((src, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2 * (index + 1)
        }} className="rounded-lg overflow-hidden shadow-2xl relative aspect-[4/3]">
              <Image src={src} alt="Casino imagery" fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" className="object-cover" loading={index === 0 ? "eager" : "lazy"} quality={75} />
            </motion.div>)}
        </div>
      </div>
    </div>;
}
