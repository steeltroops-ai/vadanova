"use client";

import { useState, useEffect } from "react";
import { getHerbs, getDiseases, getDoshaInfo } from "@/lib/api";
import { NeonCard } from "@/components/ui/neon-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { NeonProgress } from "@/components/ui/neon-progress";

// Define types
type Herb = {
  name: string;
  properties: string[];
  doshas: string[];
};

type Disease = {
  name: string;
  symptoms: string[];
  dosha_imbalance: string[];
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"herbs" | "diseases" | "doshas">(
    "herbs"
  );
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [doshaInfo, setDoshaInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from API
        const [herbsData, diseasesData, doshaData] = await Promise.all([
          getHerbs(),
          getDiseases(),
          getDoshaInfo(),
        ]);

        setHerbs(herbsData);
        setDiseases(diseasesData);
        setDoshaInfo(doshaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">
          Ayurvedic <span className="text-primary neon-glow">Knowledge</span>{" "}
          Dashboard
        </h1>

        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "herbs"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveTab("herbs")}
          >
            Herbs
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "diseases"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveTab("diseases")}
          >
            Conditions
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "doshas"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveTab("doshas")}
          >
            Doshas
          </button>
        </div>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NeonCard title="Herbs" className="bg-card/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-primary">
                {herbs.length || 45}
              </p>
              <p className="text-sm text-foreground/70">
                Ayurvedic herbs in database
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-xs text-foreground/70">
            <p>
              Herbs are a cornerstone of Ayurvedic medicine, used to balance
              doshas and address specific health concerns.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <NeonBadge variant="default">Ashwagandha</NeonBadge>
              <NeonBadge variant="destructive">Turmeric</NeonBadge>
              <NeonBadge variant="primary">Brahmi</NeonBadge>
              <NeonBadge variant="default">Shatavari</NeonBadge>
              <NeonBadge variant="destructive">Triphala</NeonBadge>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs font-medium text-foreground/70 mb-1">
              Herb Categories
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-foreground/90">
                  Adaptogenic: <span className="text-primary">22%</span>
                </p>
                <NeonProgress value={22} className="h-1 mt-1" />
              </div>
              <div>
                <p className="text-foreground/90">
                  Digestive: <span className="text-primary">28%</span>
                </p>
                <NeonProgress value={28} className="h-1 mt-1" />
              </div>
              <div>
                <p className="text-foreground/90">
                  Nervine: <span className="text-primary">15%</span>
                </p>
                <NeonProgress value={15} className="h-1 mt-1" />
              </div>
              <div>
                <p className="text-foreground/90">
                  Rejuvenative: <span className="text-primary">18%</span>
                </p>
                <NeonProgress value={18} className="h-1 mt-1" />
              </div>
            </div>
          </div>
        </NeonCard>

        <NeonCard title="Conditions" className="bg-card/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-primary">
                {diseases.length || 25}
              </p>
              <p className="text-sm text-foreground/70">
                Ayurvedic conditions in database
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-xs text-foreground/70">
            <p>
              Ayurveda views disease as an imbalance in the doshas, addressing
              root causes rather than just symptoms.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <NeonBadge variant="default">Anxiety</NeonBadge>
              <NeonBadge variant="destructive">Inflammation</NeonBadge>
              <NeonBadge variant="primary">Congestion</NeonBadge>
              <NeonBadge variant="default">Insomnia</NeonBadge>
              <NeonBadge variant="destructive">Digestive Issues</NeonBadge>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs font-medium text-foreground/70 mb-1">
              Dosha Imbalance Distribution
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-foreground/90">
                  Vata: <span className="text-secondary">42%</span>
                </p>
                <NeonProgress value={42} className="h-1 mt-1 bg-secondary/30" />
              </div>
              <div>
                <p className="text-foreground/90">
                  Pitta: <span className="text-destructive">35%</span>
                </p>
                <NeonProgress
                  value={35}
                  className="h-1 mt-1 bg-destructive/30"
                />
              </div>
              <div>
                <p className="text-foreground/90">
                  Kapha: <span className="text-primary">23%</span>
                </p>
                <NeonProgress value={23} className="h-1 mt-1 bg-primary/30" />
              </div>
            </div>
          </div>
        </NeonCard>

        <NeonCard title="Doshas" className="bg-card/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-foreground/70">
                Fundamental energies in Ayurveda
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
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
          </div>
          <div className="mt-4 text-xs text-foreground/70">
            <p>
              <span className="text-secondary font-medium">Vata</span> (Air &
              Ether),{" "}
              <span className="text-destructive font-medium">Pitta</span> (Fire
              & Water), and{" "}
              <span className="text-primary font-medium">Kapha</span> (Earth &
              Water) govern all physical and mental processes.
            </p>
          </div>
          <div className="mt-3">
            <p className="text-xs font-medium text-foreground/70 mb-1">
              Dosha Characteristics
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="space-y-1">
                <p className="text-secondary font-medium">Vata</p>
                <p className="text-foreground/80">Dry</p>
                <p className="text-foreground/80">Light</p>
                <p className="text-foreground/80">Cold</p>
                <p className="text-foreground/80">Rough</p>
                <p className="text-foreground/80">Subtle</p>
                <p className="text-foreground/80">Mobile</p>
              </div>
              <div className="space-y-1">
                <p className="text-destructive font-medium">Pitta</p>
                <p className="text-foreground/80">Hot</p>
                <p className="text-foreground/80">Sharp</p>
                <p className="text-foreground/80">Light</p>
                <p className="text-foreground/80">Oily</p>
                <p className="text-foreground/80">Liquid</p>
                <p className="text-foreground/80">Spreading</p>
              </div>
              <div className="space-y-1">
                <p className="text-primary font-medium">Kapha</p>
                <p className="text-foreground/80">Heavy</p>
                <p className="text-foreground/80">Slow</p>
                <p className="text-foreground/80">Cold</p>
                <p className="text-foreground/80">Oily</p>
                <p className="text-foreground/80">Smooth</p>
                <p className="text-foreground/80">Dense</p>
              </div>
            </div>
          </div>
        </NeonCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <NeonCard title="Ayurvedic Principles" className="bg-card/50">
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Prakriti (Constitution)
                </p>
                <p className="text-foreground/70">
                  Your unique combination of doshas at birth, determining your
                  physical and mental characteristics.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Vikriti (Current State)
                </p>
                <p className="text-foreground/70">
                  Your current state of dosha balance or imbalance, which can
                  change due to diet, lifestyle, and environment.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Agni (Digestive Fire)
                </p>
                <p className="text-foreground/70">
                  The digestive and metabolic energy responsible for
                  transforming food into nutrition and eliminating waste.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Ama (Toxins)</p>
                <p className="text-foreground/70">
                  Undigested food residue that can accumulate in the body and
                  lead to disease when agni is weak.
                </p>
              </div>
            </div>
          </div>
        </NeonCard>

        <NeonCard title="Ayurvedic Treatments" className="bg-card/50">
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Panchakarma</p>
                <p className="text-foreground/70">
                  A five-fold detoxification therapy to remove accumulated
                  toxins and restore dosha balance.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Herbal Formulations
                </p>
                <p className="text-foreground/70">
                  Customized herbal preparations to address specific imbalances
                  and health conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Dietary Adjustments
                </p>
                <p className="text-foreground/70">
                  Personalized nutrition plans based on your constitution and
                  current imbalances.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Lifestyle Modifications
                </p>
                <p className="text-foreground/70">
                  Daily and seasonal routines to maintain balance and prevent
                  disease.
                </p>
              </div>
            </div>
          </div>
        </NeonCard>
      </div>

      {/* Main Content */}
      <NeonCard className="overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {activeTab === "herbs" && (
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">
                  Ayurvedic Herbs
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                          Properties
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                          Doshas
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {herbs.map((herb, index) => (
                        <tr
                          key={index}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-foreground">
                            {herb.name}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground/70">
                            {herb.properties.join(", ")}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            <div className="flex gap-1">
                              {herb.doshas.map((dosha) => (
                                <NeonBadge
                                  key={dosha}
                                  variant={
                                    dosha === "vata"
                                      ? "default"
                                      : dosha === "pitta"
                                      ? "destructive"
                                      : "primary"
                                  }
                                >
                                  {dosha}
                                </NeonBadge>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "diseases" && (
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">
                  Ayurvedic Conditions
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                          Condition
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                          Symptoms
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                          Dosha Imbalance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {diseases.map((disease, index) => (
                        <tr
                          key={index}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-foreground">
                            {disease.name}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground/70">
                            {disease.symptoms.join(", ")}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            <div className="flex gap-1">
                              {disease.dosha_imbalance.map((dosha) => (
                                <NeonBadge
                                  key={dosha}
                                  variant={
                                    dosha === "vata"
                                      ? "default"
                                      : dosha === "pitta"
                                      ? "destructive"
                                      : "primary"
                                  }
                                >
                                  {dosha}
                                </NeonBadge>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "doshas" && (
              <div>
                <h2 className="text-xl font-semibold text-primary mb-6">
                  Understanding the Three Doshas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Vata */}
                  <NeonCard className="bg-secondary/30 border-secondary">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-foreground"
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
                      <h3 className="text-lg font-medium text-foreground">
                        Vata
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Elements
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.vata.elements.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Qualities
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.vata.qualities.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Functions
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.vata.functions.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Imbalance Symptoms
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.vata.imbalance_symptoms.join(", ")}
                        </p>
                      </div>
                    </div>
                  </NeonCard>

                  {/* Pitta */}
                  <NeonCard className="bg-secondary/30 border-secondary">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-destructive"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-foreground">
                        Pitta
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Elements
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.pitta.elements.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Qualities
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.pitta.qualities.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Functions
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.pitta.functions.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Imbalance Symptoms
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.pitta.imbalance_symptoms.join(", ")}
                        </p>
                      </div>
                    </div>
                  </NeonCard>

                  {/* Kapha */}
                  <NeonCard className="bg-secondary/30 border-secondary">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-foreground">
                        Kapha
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Elements
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.kapha.elements.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Qualities
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.kapha.qualities.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Functions
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.kapha.functions.join(", ")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground/70 mb-1">
                          Imbalance Symptoms
                        </h4>
                        <p className="text-foreground/90">
                          {doshaInfo?.kapha.imbalance_symptoms.join(", ")}
                        </p>
                      </div>
                    </div>
                  </NeonCard>
                </div>
              </div>
            )}
          </>
        )}
      </NeonCard>
    </div>
  );
}
