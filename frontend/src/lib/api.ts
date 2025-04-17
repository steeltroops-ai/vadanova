// API client for Vedanova backend

// Base URL for API requests
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// For development, log the API URL
console.log("Using API URL:", API_BASE_URL);

// Types
export type Symptom = {
  name: string;
  severity: number;
  duration?: number;
};

export type Dosha = {
  vata: number;
  pitta: number;
  kapha: number;
};

export type DoshaInfo = {
  vata: {
    elements: string[];
    qualities: string[];
    functions: string[];
    imbalance_symptoms: string[];
  };
  pitta: {
    elements: string[];
    qualities: string[];
    functions: string[];
    imbalance_symptoms: string[];
  };
  kapha: {
    elements: string[];
    qualities: string[];
    functions: string[];
    imbalance_symptoms: string[];
  };
};

export type PatientProfile = {
  age: number;
  gender: string;
  dosha: Dosha;
  current_medications?: string[];
  medical_history?: string[];
};

export type Herb = {
  name: string;
  description?: string;
  dosage?: string;
  contraindications?: string[];
  relevance_score: number;
};

export type Treatment = {
  name: string;
  description: string;
  herbs: Herb[];
  lifestyle_changes?: string[];
  dietary_recommendations?: string[];
  relevance_score: number;
};

export type RecommendationRequest = {
  symptoms: Symptom[];
  patient?: PatientProfile;
  additional_notes?: string;
};

export type RecommendationResponse = {
  treatments: Treatment[];
  dosha_analysis?: Dosha;
  explanation?: string;
};

// API functions

/**
 * Get recommendations based on symptoms and patient profile
 */
export async function getRecommendations(
  request: RecommendationRequest
): Promise<RecommendationResponse> {
  console.log("Getting recommendations for:", request);

  try {
    // Try to call the backend API first
    try {
      const backendResponse = await fetch(`${API_BASE_URL}/recommendations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
        // Add a timeout to prevent hanging requests
        signal: AbortSignal.timeout(5000),
      });

      if (backendResponse.ok) {
        const data = await backendResponse.json();
        console.log("Received backend response:", data);
        return data;
      }

      console.log("Backend API not available, falling back to mock data");
    } catch (err) {
      console.log("Error calling backend API, falling back to mock data:", err);
    }

    // If backend call fails, use mock data
    // Mock API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate dynamic mock response based on symptoms
    const primarySymptom = request.symptoms[0]?.name.toLowerCase() || "general";
    let mockResponse: RecommendationResponse;

    // Customize mock response based on symptoms
    if (
      primarySymptom.includes("anxiety") ||
      primarySymptom.includes("stress") ||
      primarySymptom.includes("worry")
    ) {
      mockResponse = {
        treatments: [
          {
            name: "Anxiety Relief Protocol",
            description:
              "A combination of herbs and lifestyle changes to reduce anxiety and promote calm",
            herbs: [
              {
                name: "Ashwagandha",
                description:
                  "An adaptogenic herb that helps reduce stress and anxiety",
                dosage: "1-2 grams of root powder daily",
                contraindications: ["Pregnancy", "Autoimmune conditions"],
                relevance_score: 0.95,
              },
              {
                name: "Brahmi",
                description: "Supports cognitive function and reduces anxiety",
                dosage: "300-600mg of extract daily",
                contraindications: ["Pregnancy", "Breastfeeding"],
                relevance_score: 0.85,
              },
            ],
            lifestyle_changes: [
              "Daily meditation for 20 minutes",
              "Gentle yoga practice",
              "Regular sleep schedule",
            ],
            dietary_recommendations: [
              "Reduce caffeine",
              "Increase warm, cooked foods",
              "Avoid processed foods",
            ],
            relevance_score: 0.9,
          },
        ],
        dosha_analysis: {
          vata: 0.7,
          pitta: 0.3,
          kapha: 0.2,
        },
        explanation:
          "Based on your symptoms, there appears to be a Vata imbalance. The recommended herbs help to calm the nervous system and ground excess Vata energy.",
      };
    } else if (
      primarySymptom.includes("pain") ||
      primarySymptom.includes("inflammation") ||
      primarySymptom.includes("ache")
    ) {
      mockResponse = {
        treatments: [
          {
            name: "Anti-Inflammatory Protocol",
            description:
              "A combination of herbs and lifestyle changes to reduce inflammation and pain",
            herbs: [
              {
                name: "Turmeric",
                description:
                  "Powerful anti-inflammatory herb with numerous health benefits",
                dosage:
                  "500-1000mg of curcumin daily with black pepper for absorption",
                contraindications: [
                  "Gallbladder issues",
                  "Blood thinning medications",
                ],
                relevance_score: 0.95,
              },
              {
                name: "Boswellia",
                description:
                  "Reduces inflammation and pain, particularly in joints",
                dosage: "300-500mg three times daily",
                contraindications: ["Pregnancy"],
                relevance_score: 0.85,
              },
            ],
            lifestyle_changes: [
              "Gentle movement daily",
              "Warm oil massage",
              "Epsom salt baths",
            ],
            dietary_recommendations: [
              "Anti-inflammatory diet",
              "Reduce nightshades",
              "Increase omega-3 fatty acids",
            ],
            relevance_score: 0.9,
          },
        ],
        dosha_analysis: {
          vata: 0.3,
          pitta: 0.7,
          kapha: 0.2,
        },
        explanation:
          "Based on your symptoms, there appears to be a Pitta imbalance. The recommended herbs help to reduce inflammation and cool excess Pitta energy.",
      };
    } else if (
      primarySymptom.includes("digest") ||
      primarySymptom.includes("stomach") ||
      primarySymptom.includes("nausea")
    ) {
      mockResponse = {
        treatments: [
          {
            name: "Digestive Support Protocol",
            description:
              "A combination of herbs and lifestyle changes to improve digestion and gut health",
            herbs: [
              {
                name: "Ginger",
                description: "Supports digestion and reduces nausea",
                dosage: "1-2g of fresh or dried ginger daily",
                contraindications: [
                  "Gallstones",
                  "High blood pressure medications",
                ],
                relevance_score: 0.95,
              },
              {
                name: "Triphala",
                description:
                  "Gentle cleansing and rejuvenating formula for the digestive tract",
                dosage: "500-1000mg before bed with warm water",
                contraindications: ["Pregnancy", "Diarrhea"],
                relevance_score: 0.9,
              },
            ],
            lifestyle_changes: [
              "Eat in a calm environment",
              "Chew food thoroughly",
              "Take a short walk after meals",
            ],
            dietary_recommendations: [
              "Eat freshly prepared meals",
              "Avoid cold foods and drinks",
              "Include digestive spices like cumin and fennel",
            ],
            relevance_score: 0.95,
          },
        ],
        dosha_analysis: {
          vata: 0.4,
          pitta: 0.5,
          kapha: 0.3,
        },
        explanation:
          "Based on your symptoms, there appears to be digestive imbalance. The recommended herbs help to strengthen digestion and support proper assimilation of nutrients.",
      };
    } else if (
      primarySymptom.includes("sleep") ||
      primarySymptom.includes("insomnia")
    ) {
      mockResponse = {
        treatments: [
          {
            name: "Sleep Enhancement Protocol",
            description:
              "A combination of herbs and lifestyle changes to improve sleep quality and duration",
            herbs: [
              {
                name: "Ashwagandha",
                description:
                  "Adaptogenic herb that helps reduce stress and promote sleep",
                dosage: "300-500mg before bed",
                contraindications: ["Pregnancy", "Autoimmune conditions"],
                relevance_score: 0.9,
              },
              {
                name: "Jatamansi",
                description:
                  "Traditional Ayurvedic herb for promoting deep, restful sleep",
                dosage: "250-500mg before bed",
                contraindications: ["Pregnancy", "Low blood pressure"],
                relevance_score: 0.95,
              },
            ],
            lifestyle_changes: [
              "Regular sleep schedule",
              "No screens 1 hour before bed",
              "Warm oil massage to feet before sleep",
            ],
            dietary_recommendations: [
              "Warm milk with nutmeg before bed",
              "Light dinner at least 3 hours before sleep",
              "Avoid caffeine after noon",
            ],
            relevance_score: 0.95,
          },
        ],
        dosha_analysis: {
          vata: 0.8,
          pitta: 0.3,
          kapha: 0.1,
        },
        explanation:
          "Based on your symptoms, there appears to be a Vata imbalance affecting sleep. The recommended herbs help to calm the nervous system and promote restful sleep.",
      };
    } else {
      // Default response for any other symptoms
      mockResponse = {
        treatments: [
          {
            name: "General Wellness Protocol",
            description:
              "A balanced approach to support overall health and wellbeing",
            herbs: [
              {
                name: "Triphala",
                description: "Supports digestion and gentle detoxification",
                dosage: "500-1000mg before bed with warm water",
                contraindications: ["Pregnancy", "Diarrhea"],
                relevance_score: 0.85,
              },
              {
                name: "Ashwagandha",
                description:
                  "Adaptogenic herb that supports stress resilience and vitality",
                dosage: "300-500mg twice daily",
                contraindications: ["Pregnancy", "Autoimmune conditions"],
                relevance_score: 0.8,
              },
            ],
            lifestyle_changes: [
              "Regular daily routine",
              "Moderate exercise appropriate for your constitution",
              "Adequate rest and relaxation",
            ],
            dietary_recommendations: [
              "Eat according to your constitution",
              "Include all six tastes in each meal",
              "Eat freshly prepared foods",
            ],
            relevance_score: 0.85,
          },
        ],
        dosha_analysis: {
          vata: 0.4,
          pitta: 0.4,
          kapha: 0.4,
        },
        explanation: `Based on your symptoms (${request.symptoms
          .map((s) => s.name)
          .join(
            ", "
          )}), we recommend a balanced approach to support your overall health and address your specific concerns.`,
      };
    }

    console.log("Returning mock response:", mockResponse);
    return mockResponse;
  } catch (error) {
    console.error("Error getting recommendations:", error);
    throw error;
  }
}

export type HerbInfo = {
  name: string;
  properties: string[];
  doshas: string[];
};

/**
 * Get a list of all herbs
 */
export async function getHerbs(): Promise<HerbInfo[]> {
  try {
    // For development, return mock data
    return [
      {
        name: "Ashwagandha",
        properties: ["adaptogenic", "rejuvenating"],
        doshas: ["vata", "kapha"],
      },
      {
        name: "Turmeric",
        properties: ["anti-inflammatory", "antioxidant"],
        doshas: ["pitta", "kapha"],
      },
      {
        name: "Brahmi",
        properties: ["cognitive", "nervine"],
        doshas: ["pitta", "vata", "kapha"],
      },
    ];

    // Actual API call (commented out for now)
    // const response = await fetch(`${API_BASE_URL}/ayurveda/herbs`);
    // if (!response.ok) {
    //   throw new Error(`API error: ${response.status}`);
    // }
    // return await response.json();
  } catch (error) {
    console.error("Error getting herbs:", error);
    throw error;
  }
}

export type DiseaseInfo = {
  name: string;
  symptoms: string[];
  dosha_imbalance: string[];
};

/**
 * Get a list of all diseases/conditions
 */
export async function getDiseases(): Promise<DiseaseInfo[]> {
  try {
    // For development, return mock data
    return [
      {
        name: "Anxiety",
        symptoms: ["worry", "restlessness", "insomnia"],
        dosha_imbalance: ["vata"],
      },
      {
        name: "Inflammation",
        symptoms: ["heat", "redness", "pain"],
        dosha_imbalance: ["pitta"],
      },
      {
        name: "Congestion",
        symptoms: ["mucus", "heaviness", "lethargy"],
        dosha_imbalance: ["kapha"],
      },
    ];

    // Actual API call (commented out for now)
    // const response = await fetch(`${API_BASE_URL}/ayurveda/diseases`);
    // if (!response.ok) {
    //   throw new Error(`API error: ${response.status}`);
    // }
    // return await response.json();
  } catch (error) {
    console.error("Error getting diseases:", error);
    throw error;
  }
}

/**
 * Get information about the three doshas
 */
export async function getDoshaInfo(): Promise<DoshaInfo> {
  try {
    // For development, return mock data
    return {
      vata: {
        elements: ["Air", "Ether"],
        qualities: ["Dry", "Light", "Cold", "Rough", "Subtle", "Mobile"],
        functions: ["Movement", "Respiration", "Nervous system", "Elimination"],
        imbalance_symptoms: [
          "Anxiety",
          "Insomnia",
          "Dry skin",
          "Constipation",
          "Weight loss",
        ],
      },
      pitta: {
        elements: ["Fire", "Water"],
        qualities: ["Hot", "Sharp", "Light", "Oily", "Liquid", "Spreading"],
        functions: [
          "Digestion",
          "Metabolism",
          "Body temperature",
          "Vision",
          "Skin complexion",
        ],
        imbalance_symptoms: [
          "Inflammation",
          "Acid reflux",
          "Rashes",
          "Anger",
          "Excessive hunger",
        ],
      },
      kapha: {
        elements: ["Earth", "Water"],
        qualities: [
          "Heavy",
          "Slow",
          "Cold",
          "Oily",
          "Smooth",
          "Dense",
          "Soft",
          "Static",
        ],
        functions: [
          "Structure",
          "Lubrication",
          "Fluid balance",
          "Immune system",
          "Emotional stability",
        ],
        imbalance_symptoms: [
          "Congestion",
          "Weight gain",
          "Lethargy",
          "Attachment",
          "Depression",
        ],
      },
    };

    // Actual API call (commented out for now)
    // const response = await fetch(`${API_BASE_URL}/ayurveda/doshas`);
    // if (!response.ok) {
    //   throw new Error(`API error: ${response.status}`);
    // }
    // return await response.json();
  } catch (error) {
    console.error("Error getting dosha info:", error);
    throw error;
  }
}
