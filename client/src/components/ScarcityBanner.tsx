/**
 * QVA Holdings — Scarcity Banner Component
 * Implements urgency and scarcity tactics (Hormozi framework)
 * Creates FOMO and drives immediate action
 */

import { Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScarcityBanner() {
  // Simulated live counter (in production, this would be real-time from backend)
  const [spotsRemaining, setSpotsRemaining] = useState(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-navy py-3 px-4"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Shield className="shrink-0" size={18} />
            <span className="font-semibold text-sm">
              Limited Partnerships Available
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-navy/20" />

          <div className="flex items-center gap-2">
            <Users className="shrink-0" size={18} />
            <span className="text-sm">
              Only accepting <strong>12 new partners</strong> this quarter
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-navy/20" />

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-sm font-bold">
              {spotsRemaining} spots remaining
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
