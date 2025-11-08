import React from "react";
import { GlassCard } from "./GlassCard";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection: React.FC = () => {
  const navigate = useNavigate();
  
  const plans = [
    {
      name: "Free",
      subtitle: "Starter Vibes",
      price: "$0",
      features: [
        "5 Projects",
        "Basic AI Copilot",
        "1GB Storage",
        "Community Access",
        "Basic Analytics"
      ]
    },
    {
      name: "Creator",
      subtitle: "Pro",
      price: "$19",
      popular: true,
      features: [
        "Unlimited Projects",
        "Advanced AI Copilot",
        "50GB Storage",
        "Priority Support",
        "Advanced Analytics",
        "Team Collaboration (5 members)",
        "GitHub Integration"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Custom",
      price: "Contact",
      features: [
        "Everything in Creator",
        "Unlimited Team Members",
        "Unlimited Storage",
        "Custom AI Training",
        "24/7 Premium Support",
        "SLA Guarantee",
        "Advanced Security"
      ]
    }
  ];

  const handleGetStarted = (planName: string) => {
    if (planName === "Enterprise") {
      // Navigate to contact or open email
      window.location.href = "mailto:sales@vibexcraft.com?subject=Enterprise Plan Inquiry";
    } else {
      navigate("/pricing");
    }
  };

  return (
    <section className="px-6 sm:px-20 xl:px-32 py-24 bg-background">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] bg-clip-text text-transparent mb-4">
          Choose Your Plan
        </h2>
        <p className="text-xl text-muted-foreground">
          Scale your creativity with the perfect plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <GlassCard 
            key={i} 
            hover 
            className={`p-8 relative ${plan.popular ? 'border-primary shadow-glow-purple' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] rounded-full text-sm font-semibold text-white">
                Most Popular
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
              <div className="text-5xl font-bold bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] bg-clip-text text-transparent mb-2">
                {plan.price}
              </div>
              {plan.price !== "Contact" && (
                <p className="text-sm text-muted-foreground">per month</p>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => handleGetStarted(plan.name)}
              className={`w-full ${
                plan.popular 
                  ? 'bg-gradient-to-r from-[#9B5CF5] to-[#00E0FF] hover:shadow-glow-purple' 
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {plan.price === "Contact" ? "Contact Sales" : "Get Started"}
            </Button>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

