// src/components/Testimonials.js
"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { quote: "KriSHE helped increase our yields while creating extra income.", author: "Ramesh K.", role: "Farmer, Telangana", image: "/farmers/ramesh.jpg" },
    { quote: "Biochar improved our soil moisture and crop health.", author: "Anita P.", role: "Farmer, Andhra Pradesh", image: "/farmers/anita.jpg" },
    { quote: "Simple process. Real benefits for our community.", author: "Mahesh V.", role: "Climapreneur", image: "/farmers/mahesh.jpg" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Partners Say</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real stories from farmers and community members who are part of the regenerative revolution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-md"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-emerald-600 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">“{t.quote}”</p>
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

