import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard } from "@/components/ui/neon-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background grid-lines">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,224,192,0.15),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary neon-glow mb-6 tracking-tight">
              VEDANOVA
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 italic">
              Ancient Healing. Intelligent Future.
            </p>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              An AI-powered Ayurvedic treatment recommendation system that
              bridges ancient wisdom with cutting-edge machine learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/recommendation" variant="primary" size="lg">
                Get Recommendations
              </NeonButton>
              <NeonButton href="/dashboard" variant="outline" size="lg">
                Explore Dashboard
              </NeonButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            <span className="text-primary neon-glow">Key</span> Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NeonCard
              glowEffect={true}
              className="transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Symptom-Based Analysis
                </h3>
                <p className="text-foreground/70">
                  Advanced NLP algorithms analyze your symptoms to provide
                  personalized Ayurvedic treatment recommendations.
                </p>
              </div>
            </NeonCard>

            <NeonCard
              glowEffect={true}
              className="transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Dosha-Aware Analysis
                </h3>
                <p className="text-foreground/70">
                  Understand your unique dosha constitution and receive
                  treatments tailored to your specific imbalances.
                </p>
              </div>
            </NeonCard>

            <NeonCard
              glowEffect={true}
              className="transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Educational Insights
                </h3>
                <p className="text-foreground/70">
                  Learn about the principles behind each recommendation and
                  deepen your understanding of Ayurvedic medicine.
                </p>
              </div>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,224,192,0.15),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Experience{" "}
              <span className="text-primary neon-glow">Ayurvedic Wisdom</span>?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Get personalized Ayurvedic treatment recommendations based on your
              symptoms and constitution.
            </p>

            <NeonButton href="/recommendation" variant="primary" size="lg">
              Start Your Journey
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="mb-2 text-foreground/70">
            VEDANOVA - AI-powered Ayurvedic Treatment Engine
          </p>
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} VEDANOVA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
