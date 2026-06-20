import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-900">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-70 bg-cover bg-center"
        style={{ backgroundImage: 'url("/cliaaerea.png")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/40 via-brand-900/70 to-brand-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 mt-20">
            Oportunidade de Investimento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
              GGM Pouso Alegre
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Ativo logístico de alto padrão, operando como o principal hub aduaneiro e de comércio exterior do Sul de Minas Gerais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* CTA buttons removed for the presentation cover */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
