"use client";

import { useState } from "react";
import { getRecommendations, Symptom, RecommendationResponse } from "@/lib/api";
import { NeonButton } from "@/components/ui/neon-button";
import { NeonCard } from "@/components/ui/neon-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { NeonProgress } from "@/components/ui/neon-progress";

export default function RecommendationPage() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([
    { name: "", severity: 0.5 },
  ]);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] =
    useState<RecommendationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Add a new symptom input field
  const addSymptom = () => {
    setSymptoms([...symptoms, { name: "", severity: 0.5 }]);
  };

  // Update symptom data
  const updateSymptom = (
    index: number,
    field: keyof Symptom,
    value: string | number
  ) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms[index] = { ...updatedSymptoms[index], [field]: value };
    setSymptoms(updatedSymptoms);
  };

  // Remove a symptom
  const removeSymptom = (index: number) => {
    if (symptoms.length > 1) {
      const updatedSymptoms = [...symptoms];
      updatedSymptoms.splice(index, 1);
      setSymptoms(updatedSymptoms);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate symptoms
    const validSymptoms = symptoms.filter((s) => s.name.trim() !== "");
    if (validSymptoms.length === 0) {
      setError("Please enter at least one symptom");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Submitting symptoms:", validSymptoms);

      // Call the API to get recommendations
      const response = await getRecommendations({
        symptoms: validSymptoms,
      });

      console.log("Received recommendations:", response);

      // Validate response
      if (
        !response ||
        !response.treatments ||
        response.treatments.length === 0
      ) {
        throw new Error("Invalid response received from the server");
      }

      setRecommendations(response);
    } catch (err: Error | unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.error("Error getting recommendations:", err);
      setError(
        `Failed to get recommendations: ${errorMessage || "Please try again."}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        <span className="text-primary neon-glow">Ayurvedic</span> Treatment
        Recommendations
      </h1>

      {!recommendations ? (
        <NeonCard className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Enter Your Symptoms
          </h2>

          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className="p-4 border border-border rounded-md bg-card/50"
              >
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-foreground font-medium">
                    Symptom {index + 1}
                  </label>
                  {symptoms.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSymptom(index)}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  value={symptom.name}
                  onChange={(e) => updateSymptom(index, "name", e.target.value)}
                  placeholder="Enter symptom (e.g., anxiety, insomnia, pain)"
                  className="w-full p-2 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary mb-3"
                  required
                />

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-foreground/70 text-sm">
                      Severity
                    </label>
                    <span className="text-sm text-foreground/70">
                      {Math.round(symptom.severity * 10)}/10
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={symptom.severity}
                    onChange={(e) =>
                      updateSymptom(
                        index,
                        "severity",
                        parseFloat(e.target.value)
                      )
                    }
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={addSymptom}
                className="flex items-center px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Another Symptom
              </button>

              <NeonButton
                variant="primary"
                disabled={loading}
                className={loading ? "opacity-70 cursor-not-allowed" : ""}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Get Recommendations"
                )}
              </NeonButton>
            </div>
          </form>
        </NeonCard>
      ) : (
        <div className="space-y-6">
          {/* Results section */}
          <NeonCard glowEffect={true} className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Your Ayurvedic Analysis
            </h2>

            {recommendations.dosha_analysis && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Dosha Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-secondary/30 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium text-foreground">Vata</div>
                      <div className="text-sm text-foreground/70">
                        {Math.round(recommendations.dosha_analysis.vata * 100)}%
                      </div>
                    </div>
                    <NeonProgress
                      value={recommendations.dosha_analysis.vata * 100}
                      color="secondary"
                    />
                  </div>
                  <div className="bg-secondary/30 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium text-foreground">Pitta</div>
                      <div className="text-sm text-foreground/70">
                        {Math.round(recommendations.dosha_analysis.pitta * 100)}
                        %
                      </div>
                    </div>
                    <NeonProgress
                      value={recommendations.dosha_analysis.pitta * 100}
                      color="destructive"
                    />
                  </div>
                  <div className="bg-secondary/30 p-3 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium text-foreground">Kapha</div>
                      <div className="text-sm text-foreground/70">
                        {Math.round(recommendations.dosha_analysis.kapha * 100)}
                        %
                      </div>
                    </div>
                    <NeonProgress
                      value={recommendations.dosha_analysis.kapha * 100}
                      color="primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {recommendations.explanation && (
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-md mb-6">
                <p className="text-foreground">{recommendations.explanation}</p>
              </div>
            )}
          </NeonCard>

          {/* Treatments */}
          <h2 className="text-xl font-semibold text-primary mb-4">
            Recommended Treatments
          </h2>

          {recommendations.treatments.map((treatment, index) => (
            <NeonCard key={index} className="max-w-4xl mx-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-foreground">
                  {treatment.name}
                </h3>
                <NeonBadge variant="primary">
                  {Math.round(treatment.relevance_score * 100)}% match
                </NeonBadge>
              </div>

              <p className="text-foreground/70 mb-6">{treatment.description}</p>

              {/* Herbs */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">
                  Recommended Herbs
                </h4>
                <div className="space-y-3">
                  {treatment.herbs.map((herb, herbIndex) => (
                    <div
                      key={herbIndex}
                      className="p-3 bg-secondary/20 rounded-md"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-foreground">
                          {herb.name}
                        </span>
                        <NeonBadge variant="outline">
                          {Math.round(herb.relevance_score * 100)}% relevance
                        </NeonBadge>
                      </div>
                      {herb.description && (
                        <p className="text-sm text-foreground/70 mt-2">
                          {herb.description}
                        </p>
                      )}
                      {herb.dosage && (
                        <p className="text-sm text-foreground/70 mt-1">
                          Dosage: {herb.dosage}
                        </p>
                      )}
                      {herb.contraindications &&
                        herb.contraindications.length > 0 && (
                          <div className="mt-2">
                            <span className="text-xs text-destructive font-medium">
                              Contraindications:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {herb.contraindications.map((item, i) => (
                                <NeonBadge key={i} variant="destructive">
                                  {item}
                                </NeonBadge>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle changes */}
              {treatment.lifestyle_changes &&
                treatment.lifestyle_changes.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">
                      Lifestyle Recommendations
                    </h4>
                    <ul className="space-y-2 text-foreground/70">
                      {treatment.lifestyle_changes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Dietary recommendations */}
              {treatment.dietary_recommendations &&
                treatment.dietary_recommendations.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground mb-3">
                      Dietary Recommendations
                    </h4>
                    <ul className="space-y-2 text-foreground/70">
                      {treatment.dietary_recommendations.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </NeonCard>
          ))}

          <div className="flex justify-center mt-8">
            <NeonButton
              onClick={() => setRecommendations(null)}
              variant="outline"
            >
              Start New Recommendation
            </NeonButton>
          </div>

          <div className="text-xs text-foreground/50 text-center mt-8">
            Disclaimer: This tool provides general information and is not a
            substitute for professional medical advice.
          </div>
        </div>
      )}
    </div>
  );
}
