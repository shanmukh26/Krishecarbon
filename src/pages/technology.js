import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Technology() {
  return (
    <>
      <Navbar />
      <main>
      <section className="bg-[#F8FAFC] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-merriweather leading-tight">
                    Technology That Makes It Verifiable
                    </h2>
                    <p className=" w-[80%] text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                    Discover how rural innovation, smart technology, and biochar come together to generate income and climate impact.
                    </p>
                </div>

                {/* Right Image */}
                <div className="relative h-80 md:h-96 lg:h-[400px]">
                    <Image
                    src="/drone_technology.svg" // Replace with your actual image path
                    alt="farmer with drone"
                    fill
                    className="object-cover rounded-lg"
                    priority
                    />
                </div>
                </div>
            </div>
            </section>




            <section className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-merriweather mb-4">
        Smart. Transparent. Scalable.
      </h2>
      <p className="text-xl md:text-2xl text-[#808080] font-merriweather">
        How farmers and entrepreneurs power climate solutions.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-8 gap-y-6 mb-12 place-items-center">
      {/* Smart Kilns */}
      {/* Smart Kilns */}
      <div className="bg-white p-6 md:p-8 text-center w-full max-w-xs md:max-w-sm lg:w-80 h-80 md:h-[347px] shadow-2xl flex flex-col justify-center">
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A7C59] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black font-merriweather mb-3 md:mb-4">
          Smart Kilns
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-[#808080] font-merriweather leading-relaxed">
          Log every burn — track biomass in/out in real-time
        </p>
      </div>

      {/* Soil Testing & MRV Compliant Reports */}
      <div className="bg-white p-6 md:p-8 text-center w-full max-w-xs md:max-w-sm lg:w-80 h-80 md:h-[347px] shadow-2xl flex flex-col justify-center">
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A7C59] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
            </svg>
          </div>
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black font-merriweather mb-3 md:mb-4">
          Soil Testing & MRV Compliant Reports
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-[#808080] font-merriweather leading-relaxed">
          Physical sampling + auto-generated digital reports
        </p>
      </div>

      {/* Hyperspectral + AI Monitoring */}
      <div className="bg-white p-6 md:p-8 text-center w-full max-w-xs md:max-w-sm lg:w-80 h-80 md:h-[347px] shadow-2xl flex flex-col justify-center">
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A7C59] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black font-merriweather mb-3 md:mb-4">
          Hyperspectral + AI Monitoring
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-[#808080] font-merriweather leading-relaxed">
          Remote sensing + deep learning to detect true biochar usage
        </p>
      </div>

      {/* Geo-tagged Data Capture App */}
      <div className="bg-white p-6 md:p-8 text-center w-full max-w-xs md:max-w-sm lg:w-80 h-80 md:h-[347px] shadow-2xl flex flex-col justify-center">
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A7C59] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black font-merriweather mb-3 md:mb-4">
          Geo-tagged Data Capture App
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-[#808080] font-merriweather leading-relaxed">
          Used by agents or farmers to upload field-level data
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center">
      <button className="bg-[#4A7C59] hover:bg-[#3d6848] text-white font-merriweather px-8 py-4 rounded-lg text-lg transition-colors">
        Explore the Science
      </button>
    </div>
  </div>
</section>





<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-merriweather mb-4">
        Real Climate Impact. Real Rural Income.
      </h2>
      <p className="text-xl md:text-2xl text-[#808080] font-merriweather">
        Proven results from farms to the atmosphere.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Farmers Onboarded */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
          
            <Image
              src="/icon_farmers.svg"
              alt="Farmers Onboarded"
              width={40}
              height={40}
              className="w-8 h-8 text-white"
            />

          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-bold text-black font-merriweather mb-2">
              500+
            </div>
            <div className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              Farmers Onboarded
            </div>
          </div>
        </div>
      </div>

      {/* Biochar Produced */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
            <Image
              src="/icon_biochar.svg"
              alt="Biochar Produced"
              width={40}
              height={40}
              className="w-8 h-8 text-white"
            />

          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-bold text-black font-merriweather mb-2">
              XX Tons
            </div>
            <div className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              Biochar Produced
            </div>
          </div>
        </div>
      </div>

      {/* Pilot Zones */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
            <Image
              src="/icon_zones.svg"
              alt="Pilot Zones with Satellite MRV"
              width={32}
              height={32}
              className="w-8 h-8 text-white"
            />

          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-bold text-black font-merriweather mb-2">
              3
            </div>
            <div className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              Pilot Zones with Satellite MRV
            </div>
          </div>
        </div>
      </div>

      {/* Soil Samples */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
            <Image
              src="/icon_soilsample.svg"
              alt="Soil Samples Tested"
              width={32}
              height={32}
              className="w-8 h-8 text-white"
            />

          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-bold text-black font-merriweather mb-2">
              200+
            </div>
            <div className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              Soil Samples Tested
            </div>
          </div>
        </div>
      </div>

      {/* Rural Earnings */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
            <Image
              src="/icon_money.svg"
              alt="Earned by Rural Participants"
              width={32}
              height={32}
              className="w-8 h-8 text-white"
            />
          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-bold text-black font-merriweather mb-2">
              ₹XX Lakhs
            </div>
            <div className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              Earned by Rural Participants
            </div>
          </div>
        </div>
      </div>

      {/* CO2 Removed */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start space-x-4">
            <Image
              src="/icon_co2.svg"
              alt="CO2 removed from atmosphere"
              width={50}
              height={50}
              className="w-8 h-8 text-white"
            />
          <div className="flex-1">
            <div className="text-2xl md:text-3xl font-bold text-black font-merriweather mb-2">
              XX Tons
            </div>
            <div className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              CO2 removed from atmosphere
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </main>
      <Footer />
    </>
  );
}
