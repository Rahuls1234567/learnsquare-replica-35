// "use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EditableImage } from "@/src/components/EditableImage";

interface PartnershipCard {
  id: number;
  title: string;
  image: string;
}

export default function ClientPartnershipsSection() {
  const [cards, setCards] = useState<PartnershipCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/client-partnerships");
        if (res.ok) {
          const data = await res.json();
          setCards(data.cards ?? []);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) return <p className="text-slate-500">Loading partnerships…</p>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Client Partnerships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
            >
              <EditableImage
                contentKey={`client_partnership_${c.id}_photo`}
                defaultImage={c.image}
                alt={c.title}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <p className="text-center font-medium text-slate-800">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
