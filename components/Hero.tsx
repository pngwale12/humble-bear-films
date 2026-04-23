import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold">Humble Bear Films</h1>
        <p className="text-gray-300 mt-4">
          Multi-Media Producer • Music Video Director
        </p>
        <p className="italic text-gray-500 mt-4">
          “Be Humble, Be Diligent & Stay Dedicated”
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-black px-5 py-2 rounded-full flex gap-2">
            <Play size={16} /> Watch Reel
          </button>
          <button className="border px-5 py-2 rounded-full flex gap-2">
            <Mail size={16} /> Contact
          </button>
        </div>
      </motion.div>
    </section>
  );
}