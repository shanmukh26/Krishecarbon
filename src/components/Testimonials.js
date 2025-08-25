// components/TestimonialSection.js (or directly in your index.js)

import Slider from "react-slick";

const testimonials = [
  {
    name: "Amit .B",
    location: "Hyderabad",
    image: "/images/amit.jpg", // replace with correct path
    content:
      "Built into the KriSHE Carbon platform, our marketplace empowers Climapreneurs to directly sell high-quality, MRV-verified biochar carbon credits to buyers across the world. Each credit is traceable from soil to sale, ensuring trust, transparency, and value for all.",
  },
  {
    name: "Raghav .M",
    location: "Hyderabad",
    image: "/images/raghav.jpg",
    content:
      "Built into the KriSHE Carbon platform, our marketplace empowers Climapreneurs to directly sell high-quality, MRV-verified biochar carbon credits to buyers across the world. Each credit is traceable from soil to sale, ensuring trust, transparency, and value for all.",
  },
  {
    name: "Amit .B",
    location: "Hyderabad",
    image: "/images/amit.jpg",
    content:
      "Built into the KriSHE Carbon platform, our marketplace empowers Climapreneurs to directly sell high-quality, MRV-verified biochar carbon credits to buyers across the world. Each credit is traceable from soil to sale, ensuring trust, transparency, and value for all.",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-[#0C3B2E] to-[#178D46] py-16 px-6 md:px-20 text-white text-center font-merriweather">
      <h2 className="text-3xl font-semibold mb-4">Why our partners believe in kriSHE.</h2>
      <p className="text-base mb-10 text-gray-200 max-w-2xl mx-auto">
        Built into the kriSHE Carbon platform, our marketplace empowers Climapreneurs to directly sell high-quality, MRV-verified biochar carbon credits to buyers across the world.
      </p>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-md h-full flex flex-col justify-between min-h-[370px]">
              <div className="text-3xl text-green-700 mb-4">“</div>
              <p className="text-sm text-gray-700 mb-6">{item.content}</p>
              <div className="w-12 h-1 bg-green-600 mx-auto mb-4 rounded" />
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mb-2"
                />
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
