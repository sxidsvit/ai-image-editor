import { useIntersectionObserver } from "@/hooks/use-landing-hooks";
import { useState } from "react";

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${isHovered ? "transform scale-105 rotate-1 shadow-2xl" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: "✂️",
      title: "Smart Crop & Resize",
      description:
        "Smart Cropping with Precision Ratios. Seamlessly resize while maintaining stunning image clarity in any format",
    },
    {
      icon: "🎨",
      title: "Color & Light Adjustment",
      description:
        "Pro-Level Adjustments for Brightness, Contrast, and Saturation. Instant Previews with Smart Auto-Enhance Magic",
    },
    {
      icon: "🤖",
      title: "AI Background Removal",
      description:
        "Swap or Erase Backgrounds in a Flash. Cutting-Edge AI Masters Intricate Edges and Subtle Details with Flawless Accuracy",
    },
    {
      icon: "🔧",
      title: "AI Content Editor",
      description:
        "Transform Images with Simple Words. Erase Objects, Swap Elements, or Create New Visuals with Powerful Generative AI",
    },
    {
      icon: "📏",
      title: "Image Extender",
      description:
        "Grow Your Canvas Freely in Any Direction. AI-Driven Generative Fill Blends New Visuals Effortlessly with Your Original Image",
    },
    {
      icon: "⬆️",
      title: "AI Upscaler",
      description:
        "Boost Image Clarity Up to 4x. AI-Powered Upscaling Sharpens Details and Minimizes Imperfections",
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Dynamic AI Tools Unleashed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All You Need to Craft, Refine, and Elevate Images with Top-Tier AI-Powered Tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
