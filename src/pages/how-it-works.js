import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HowItWorks() {
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
              From Crop Residue to Carbon Credits: Our Process
            </h2>
            <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
              Discover how rural innovation, smart technology, and biochar come together to 
              generate income and climate impact.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-80 md:h-96 lg:h-[400px]">
            <Image
              src="/cr2cc.svg" // Replace with your actual image path
              alt="Crop residue to carbon credits process"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>


    <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-merriweather mb-4">
                How Krishe Carbon Works
            </h2>
            <p className="text-xl md:text-2xl text-[#808080] font-merriweather">
                How farmers and entrepreneurs power climate solutions.
            </p>
            </div>

            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Biomass Collection */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-black font-merriweather mb-4">
                Biomass Collection
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                Farmers collect crop residue or agri-waste from their own farms.
                </p>
            </div>

            {/* Smart Kilns Create Biochar */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-black font-merriweather mb-4">
                Smart Kilns Create Biochar
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                We provide kilns that convert the biomass into stable carbon.
                </p>
            </div>

            {/* AI + Satellite Verification */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-black font-merriweather mb-4">
                AI + Satellite Verification
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                We use hyperspectral imagery and AI models to verify usage.
                </p>
            </div>

            {/* Geotagged Biochar Application */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-black font-merriweather mb-4">
                Geotagged Biochar Application
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                Farmers apply biochar to their land. Our agent app collects image + data.
                </p>
            </div>

            {/* Carbon Credits Generated */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-black font-merriweather mb-4">
                Carbon Credits Generated
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                Our MRV stack translates this into verified, high-quality credits.
                </p>
            </div>

            {/* Revenue Shared */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-black font-merriweather mb-4">
                Revenue Shared
                </h3>
                <p className="text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                Profits from credits go back to those who made it happen.
                </p>
            </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
            <button className="bg-[#4A7C59] hover:bg-[#3d6848] text-white font-merriweather px-8 py-4 rounded-lg text-lg transition-colors">
                Learn About Our Technology
            </button>
            </div>
        </div>
        </section>

        <section className="bg-[#F8FAFC] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-merriweather mb-4">
                    Farmer & Agent Opportunity
                </h2>
                <p className="text-xl md:text-2xl text-[#808080] font-merriweather">
                    Partner with us to turn waste into wealth.
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#4A7C59] font-merriweather">
                    Earn With Us!
                    </h3>
                    <p className="w-[60%] text-base md:text-lg text-[#808080] font-merriweather leading-relaxed">
                    Whether you're a farmer, student, or local changemaker — you can 
                    become an agent, track biochar usage, and earn money every time a 
                    credit is created from your uploads.
                    </p>
                </div>

                {/* Right Process Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Use Our App */}
                    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 text-center">
                    <div className="mb-4 flex justify-center">
                        <Image
                            src="/app_demo_icon.svg"
                            alt="app demo icon"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h4 className="text-lg font-bold text-black font-merriweather">
                        Use Our App
                    </h4>
                    </div>

                    {/* Upload Photos + Locations */}
                    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 text-center">
                    <div className="mb-4 flex justify-center">
                    <Image
                            src="/upload_icon.svg"
                            alt="upload icon"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h4 className="text-lg font-bold text-black font-merriweather">
                        Upload Photos + Locations
                    </h4>
                    </div>

                    {/* Get Verified */}
                    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 text-center">
                    <div className="mb-4 flex justify-center">
                    <Image
                            src="/verified_icon.svg"
                            alt="verified icon"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h4 className="text-lg font-bold text-black font-merriweather">
                        Get Verified
                    </h4>
                    </div>

                    {/* Earn Per Verified Plot */}
                    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 text-center">
                    <div className="mb-4 flex justify-center">
                    <Image
                            src="/earn_icon.svg"
                            alt="earn icon"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h4 className="text-lg font-bold text-black font-merriweather">
                        Earn Per Verified Plot
                    </h4>
                    </div>
                </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                <button className="bg-[#4A7C59] hover:bg-[#3d6848] text-white font-merriweather px-8 py-4 rounded-lg text-lg transition-colors">
                    Become an Agent
                </button>
                </div>
            </div>
            </section>
      </main>
      <Footer />
    </>
  );
}
