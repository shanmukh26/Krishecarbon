
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HowItWorksSection from "@/components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSection from "@/components/Testimonials";
import Footer from "@/components/Footer";

import { Geist, Geist_Mono, Merriweather_Sans, Inter } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const merriweather = Merriweather_Sans({ subsets: ["latin"], variable: "--font-merriweather" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen flex flex-col`}
    >
      <Navbar />

           <section
              className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center"
              style={{ backgroundImage: "url('/Herosection_image.svg')" }}
            >

              <div className="z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-merriweather">
                  KriSHE CARBON
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-merriweather">
                  Empowering Rural India | Healing the Planet
                </p>
                <button className="bg-green-100 text-green-900 font-semibold px-6 py-3 rounded-md hover:bg-green-200 transition font-merriweather">
                  Join the Regenerative Revolution
                </button>
              </div>
            </section>

            <section className="bg-[#F5F5F5] py-8 px-4">
              <div className="flex overflow-x-auto space-x-6 px-4 md:px-8 lg:px-16 scrollbar-hide">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="min-w-[120px] h-[60px] bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm font-merriweather"
                  >
                    Logo {index + 1}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#F5F5F5] py-16 px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 font-merriweather mb-4">
                  Who Are We?
                </h2>
                <h3 className="text-xl md:text-2xl text-[#808080] font-merriweather mb-6">
                  Connecting farmers to the global carbon economy.
                </h3>
                <p className="text-lg md:text-xl text-[#808080] font-merriweather leading-relaxed">
                  Krishi Carbon is India’s first platform that enables farmers to generate carbon credits
                  through sustainable farming practices. We work with Rural Entrepreneurs who help farmers join
                  the global climate economy — one field at a time.
                </p>
              </div>
            </section>

            <section className="bg-[#E9EFEA] py-20 px-6 text-center">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-black font-merriweather mb-4">
                  Our Mission
                </h2>
                <h3 className="text-xl md:text-2xl text-[#808080] font-merriweather mb-6">
                  To make carbon markets work for rural India.
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                  To create climate-positive income for farmers by turning agricultural waste into biochar
                  and using satellite monitoring to track soil health and carbon sequestration.
                </p>
              </div>
            </section>

            <section className="bg-[#F5F5F5] py-20 px-6 text-center">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-black font-merriweather mb-4">
      Our Impact
    </h2>
    <h3 className="text-xl md:text-2xl text-[#808080] font-merriweather mb-12">
      Measurable climate and community gains.
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          icon: '/icon_farmers.svg',
          title: '500+ Farmers',
          text: 'Cut down processing time with automation and smart workflows.',
        },
        {
          icon: '/icon_biochar.svg',
          title: 'XX Tons Biochar',
          text: 'Role-based access ensures accuracy and reduces manual error.',
        },
        {
          icon: '/icon_zones.svg',
          title: '3 Pilot Zones',
          text: 'Sync with CRM, analytics, and services to create one connected flow.',
        },
        {
          icon: '/icon_soilsample.svg',
          title: '200+ Soil Samples',
          text: 'Cut down processing time with automation and smart workflows.',
        },
        {
          icon: '/icon_money.svg',
          title: '₹XX Lakhs Earned',
          text: 'Role-based access ensures accuracy and reduces manual error.',
        },
        {
          icon: '/icon_co2.svg',
          title: 'XX Tons CO₂ Sequestered',
          text: 'Sync with CRM, analytics, and services to create one connected flow.',
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between w-full aspect-[1/1.1] mx-auto relative group transition-transform hover:scale-105"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="absolute top-6 left-6 w-[88px] h-[92px]"
          />
          <div className="mt-auto text-left pt-20">
            <h3 className="text-2xl font-semibold mb-2 font-merriweather">
              {item.title}
            </h3>
            <p className="text-base text-gray-600 font-merriweather leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




             <HowItWorksSection />

             <section className="bg-[#F5F5F5] text-black py-16 px-4 text-center">
                <h2 className="text-4xl font-bold mb-4 font-merriweather">
                  Why it Matters
                </h2>

                <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#808080] font-merriweather mb-12">
                  Empowering Farmers. Healing the Planet. Transforming Rural Lives.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                  <div className="bg-white text-black rounded-lg shadow-md p-6 w-full md:w-72">
                    <h3 className="text-xl font-semibold mb-2 text-center font-inter">Social Justice</h3>
                    <p className="text-center text-gray-700 font-inter">
                      Most carbon markets ignore smallholder farmers. We don’t.
                    </p>
                  </div>

                  <div className="bg-white text-black rounded-lg shadow-md p-6 w-full md:w-72">
                    <h3 className="text-xl font-semibold mb-2 text-center font-inter">Climate Action</h3>
                    <p className="text-center text-gray-700 font-inter">
                      Burning crop waste emits CO₂. We turn waste into value.
                    </p>
                  </div>

                  <div className="bg-white text-black rounded-lg shadow-md p-6 w-full md:w-72">
                    <h3 className="text-xl font-semibold mb-2 text-center font-inter">Rural Income</h3>
                    <p className="text-center text-gray-700 font-inter">
                      Rural farmers earn income from waste.
                    </p>
                  </div>
                </div>

                <p className="text-xl font-semibold text-[#808080] mt-12 max-w-2xl mx-auto font-inter">
                  "Each acre we transform is a step toward a healthier planet and stronger rural economy."
                </p>
              </section>

              <TestimonialSection/>
              <Footer/>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Krishecarbon. All rights reserved.
      </footer>
    </div>
  );
}
