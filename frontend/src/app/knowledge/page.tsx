"use client";

import { useState } from "react";
import { NeonCard } from "@/components/ui/neon-card";
import { NeonBadge } from "@/components/ui/neon-badge";

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState<
    "principles" | "herbs" | "treatments" | "history" | "diet" | "lifestyle"
  >("principles");

  // Ayurvedic principles data
  const principles = [
    {
      title: "The Three Doshas",
      description:
        "Ayurveda identifies three fundamental energies or doshas—Vata, Pitta, and Kapha—that govern all physical and mental processes and provide a unique blueprint for health and fulfillment.",
      content: [
        "Vata (Air & Ether): Controls movement, breathing, natural urges, transformation of tissues, motor functions and sensory functions. When imbalanced, can lead to anxiety, insomnia, and digestive issues.",
        "Pitta (Fire & Water): Governs digestion, metabolism, temperature, vision, and skin complexion. When imbalanced, can lead to inflammation, acid reflux, and anger.",
        "Kapha (Earth & Water): Maintains structure, lubrication, and fluid balance in the body. When imbalanced, can lead to weight gain, congestion, and lethargy.",
      ],
    },
    {
      title: "The Five Elements",
      description:
        "Ayurveda recognizes five basic elements that make up the universe and the human body: Space (Akasha), Air (Vayu), Fire (Tejas), Water (Jala), and Earth (Prithvi).",
      content: [
        "Space (Akasha): Represents emptiness, lightness, and the potential for growth.",
        "Air (Vayu): Represents movement, dryness, and lightness.",
        "Fire (Tejas): Represents transformation, heat, and intensity.",
        "Water (Jala): Represents cohesiveness, fluidity, and softness.",
        "Earth (Prithvi): Represents stability, heaviness, and structure.",
      ],
    },
    {
      title: "The Seven Dhatus (Tissues)",
      description:
        "Ayurveda identifies seven dhatus or tissues that make up the physical body, each formed from the previous one in a sequential process of transformation.",
      content: [
        "Rasa (Plasma): Nourishes all tissues, cells and organs.",
        "Rakta (Blood): Carries oxygen and nutrients to all tissues.",
        "Mamsa (Muscle): Provides physical strength and protects organs.",
        "Meda (Fat): Lubricates the body and provides energy reserves.",
        "Asthi (Bone): Gives structure and support to the body.",
        "Majja (Marrow & Nerves): Fills bone cavities and facilitates communication in the body.",
        "Shukra/Artava (Reproductive Tissues): Responsible for reproduction.",
      ],
    },
    {
      title: "The Six Tastes",
      description:
        "Ayurveda recognizes six tastes that can impact the doshas and overall health: Sweet, Sour, Salty, Pungent, Bitter, and Astringent.",
      content: [
        "Sweet (Madhura): Increases Kapha, decreases Vata and Pitta. Found in sugar, milk, rice.",
        "Sour (Amla): Increases Kapha and Pitta, decreases Vata. Found in citrus fruits, yogurt.",
        "Salty (Lavana): Increases Kapha and Pitta, decreases Vata. Found in salt, seaweed.",
        "Pungent (Katu): Increases Vata and Pitta, decreases Kapha. Found in chili peppers, ginger.",
        "Bitter (Tikta): Increases Vata, decreases Kapha and Pitta. Found in leafy greens, turmeric.",
        "Astringent (Kashaya): Increases Vata, decreases Kapha and Pitta. Found in beans, pomegranate.",
      ],
    },
    {
      title: "The Three Gunas",
      description:
        "Ayurveda recognizes three fundamental qualities or attributes (gunas) that are present in all things, including food, activities, and mental states.",
      content: [
        "Sattva: Represents purity, clarity, harmony, and balance. Sattvic foods include fresh fruits, vegetables, whole grains, and ghee.",
        "Rajas: Represents activity, passion, and movement. Rajasic foods include spicy, salty, and sour foods, as well as caffeine.",
        "Tamas: Represents inertia, dullness, and heaviness. Tamasic foods include processed foods, leftovers, meat, and alcohol.",
      ],
    },
    {
      title: "The Twenty Attributes",
      description:
        "Ayurveda classifies all substances and experiences according to twenty opposing qualities or attributes (gunas) that affect the doshas.",
      content: [
        "Heavy (Guru) vs. Light (Laghu): Heavy substances increase Kapha, while light substances increase Vata.",
        "Cold (Shita) vs. Hot (Ushna): Cold substances increase Vata and Kapha, while hot substances increase Pitta.",
        "Oily (Snigdha) vs. Dry (Ruksha): Oily substances increase Kapha and Pitta, while dry substances increase Vata.",
        "Dull (Manda) vs. Sharp (Tikshna): Dull substances increase Kapha, while sharp substances increase Pitta.",
        "Stable (Sthira) vs. Mobile (Chala): Stable substances increase Kapha, while mobile substances increase Vata.",
        "Soft (Mridu) vs. Hard (Kathina): Soft substances increase Kapha and Pitta, while hard substances increase Vata.",
        "Non-slimy (Vishada) vs. Slimy (Picchila): Non-slimy substances increase Vata, while slimy substances increase Kapha.",
        "Smooth (Shlakshna) vs. Rough (Khara): Smooth substances increase Kapha and Pitta, while rough substances increase Vata.",
        "Subtle (Sukshma) vs. Gross (Sthula): Subtle substances increase Vata, while gross substances increase Kapha.",
        "Liquid (Drava) vs. Solid (Sandra): Liquid substances increase Pitta, while solid substances increase Kapha.",
      ],
    },
    {
      title: "The Three Malas (Waste Products)",
      description:
        "Ayurveda recognizes three primary waste products (malas) that must be properly eliminated for optimal health.",
      content: [
        "Purisha (Feces): Proper elimination of feces is essential for colon health and overall well-being.",
        "Mutra (Urine): Proper urination is necessary for removing water-soluble waste products.",
        "Sveda (Sweat): Proper sweating helps eliminate toxins through the skin.",
      ],
    },
    {
      title: "The Fifteen Srotas (Channels)",
      description:
        "Ayurveda identifies fifteen channels or pathways (srotas) through which nutrients, wastes, and other substances flow in the body.",
      content: [
        "Pranavaha Srotas: Channels for breath and vital energy.",
        "Annavaha Srotas: Channels for food and digestion.",
        "Udakavaha Srotas: Channels for water and hydration.",
        "Rasavaha Srotas: Channels for plasma and lymph.",
        "Raktavaha Srotas: Channels for blood circulation.",
        "Mamsavaha Srotas: Channels for muscle tissue.",
        "Medavaha Srotas: Channels for fat tissue.",
        "Asthivaha Srotas: Channels for bone tissue.",
        "Majjavaha Srotas: Channels for bone marrow and nerves.",
        "Shukravaha Srotas: Channels for reproductive tissue.",
        "Mutravaha Srotas: Channels for urine.",
        "Purishavaha Srotas: Channels for feces.",
        "Svedavaha Srotas: Channels for sweat.",
        "Artavavaha Srotas: Channels for menstruation.",
        "Stanyavaha Srotas: Channels for breast milk.",
      ],
    },
  ];

  // Common Ayurvedic herbs data
  const herbs = [
    {
      name: "Ashwagandha",
      sanskrit: "Withania somnifera",
      properties: "Adaptogenic, Rejuvenating, Nervine",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Reduces stress and anxiety, improves energy and stamina, enhances cognitive function, supports immune system, promotes restful sleep.",
      usage:
        "Typically taken as a powder (1-2 teaspoons) mixed with warm milk or water, or as a capsule (500-1000mg daily).",
    },
    {
      name: "Turmeric",
      sanskrit: "Curcuma longa",
      properties: "Anti-inflammatory, Antioxidant, Blood purifier",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Reduces inflammation, supports joint health, improves digestion, purifies blood, enhances skin health.",
      usage:
        "Can be used in cooking (1/4-1/2 teaspoon daily), or taken as a supplement (400-600mg of curcumin daily).",
    },
    {
      name: "Brahmi",
      sanskrit: "Bacopa monnieri",
      properties: "Cognitive enhancer, Nervine, Adaptogenic",
      doshas: ["Pitta", "Vata", "Kapha"],
      benefits:
        "Improves memory and cognitive function, reduces anxiety and stress, supports nervous system health.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a capsule (300-600mg daily).",
    },
    {
      name: "Triphala",
      sanskrit: "Three fruits (Amalaki, Bibhitaki, Haritaki)",
      properties: "Detoxifying, Rejuvenative, Digestive",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "Supports digestion, cleanses and detoxifies the body, promotes regular elimination, nourishes tissues.",
      usage:
        "Typically taken as a powder (1/2-1 teaspoon) with warm water before bed, or as a capsule (500-1000mg daily).",
    },
    {
      name: "Shatavari",
      sanskrit: "Asparagus racemosus",
      properties: "Rejuvenative, Nutritive, Demulcent",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Supports female reproductive health, enhances lactation, nourishes tissues, soothes digestive tract.",
      usage:
        "Typically taken as a powder (1/2-1 teaspoon) with warm milk, or as a capsule (500-1000mg daily).",
    },
    {
      name: "Amalaki",
      sanskrit: "Emblica officinalis",
      properties: "Rejuvenative, Antioxidant, Nutritive",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "One of the richest natural sources of vitamin C, supports immune function, promotes longevity, improves digestion, enhances skin and hair health.",
      usage:
        "Can be taken as a powder (1/2-1 teaspoon) with honey, as a fresh fruit, or as a component of Triphala.",
    },
    {
      name: "Guduchi",
      sanskrit: "Tinospora cordifolia",
      properties: "Immune-modulator, Adaptogenic, Detoxifying",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "Boosts immunity, reduces inflammation, supports liver function, helps manage diabetes, purifies blood, reduces fever.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a decoction.",
    },
    {
      name: "Tulsi",
      sanskrit: "Ocimum sanctum (Holy Basil)",
      properties: "Adaptogenic, Immune-enhancing, Respiratory support",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Supports respiratory health, reduces stress, enhances immunity, improves digestion, purifies blood, promotes clarity of mind.",
      usage:
        "Can be consumed as a tea (1-3 cups daily), as a powder (1/4-1/2 teaspoon), or chewed fresh.",
    },
    {
      name: "Gotu Kola",
      sanskrit: "Centella asiatica",
      properties: "Rejuvenative, Nervine, Cognitive enhancer",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "Enhances memory and cognitive function, promotes longevity, supports skin health, reduces anxiety, improves circulation.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a tea.",
    },
    {
      name: "Licorice",
      sanskrit: "Glycyrrhiza glabra",
      properties: "Demulcent, Expectorant, Anti-inflammatory",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Soothes mucous membranes, supports respiratory health, nourishes tissues, enhances immunity, improves voice quality.",
      usage:
        "Can be taken as a powder (1/4-1/2 teaspoon), as a tea, or as a component in herbal formulations. Not recommended for long-term use in cases of high blood pressure.",
    },
    {
      name: "Neem",
      sanskrit: "Azadirachta indica",
      properties: "Bitter, Cooling, Detoxifying",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Purifies blood, supports skin health, has antimicrobial properties, balances blood sugar, supports liver function, repels insects.",
      usage:
        "Can be taken as a powder (1/8-1/4 teaspoon) with honey to mask the bitter taste, or applied externally as an oil or paste for skin conditions.",
    },
    {
      name: "Guggulu",
      sanskrit: "Commiphora mukul",
      properties: "Detoxifying, Anti-inflammatory, Rejuvenative",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Supports healthy cholesterol levels, reduces inflammation, promotes weight management, cleanses blood, supports joint health.",
      usage:
        "Typically taken as a purified extract (250-500mg) two to three times daily, often combined with other herbs in formulations.",
    },
    {
      name: "Manjistha",
      sanskrit: "Rubia cordifolia",
      properties: "Blood purifier, Anti-inflammatory, Lymphatic support",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Cleanses blood, supports lymphatic drainage, promotes healthy skin, reduces inflammation, supports female reproductive health.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a component in herbal formulations for skin and blood.",
    },
    {
      name: "Shankhapushpi",
      sanskrit: "Convolvulus pluricaulis",
      properties: "Nervine, Cognitive enhancer, Tranquilizer",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "Enhances memory and intellect, reduces anxiety and stress, promotes sleep, supports nervous system health, improves concentration.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm milk, or as a component in brain tonics.",
    },
    {
      name: "Haritaki",
      sanskrit: "Terminalia chebula",
      properties: "Rejuvenative, Detoxifying, Laxative",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "Supports digestion, promotes elimination, cleanses the colon, enhances intelligence, promotes longevity, improves voice quality.",
      usage:
        "Can be taken as a powder (1/4-1/2 teaspoon) with warm water or honey, or as a component of Triphala.",
    },
    {
      name: "Bibhitaki",
      sanskrit: "Terminalia bellirica",
      properties: "Astringent, Detoxifying, Rejuvenative",
      doshas: ["Kapha", "Pitta"],
      benefits:
        "Supports respiratory health, promotes healthy eyes and hair, cleanses the blood, reduces Kapha accumulation in the lungs, supports proper elimination.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with honey or warm water, or as a component of Triphala.",
    },
    {
      name: "Jatamansi",
      sanskrit: "Nardostachys jatamansi",
      properties: "Nervine, Sedative, Antidepressant",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Promotes deep, restful sleep, calms the mind, reduces anxiety and depression, supports healthy skin, balances emotions, enhances meditation.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm milk before bed, or as a medicated oil for external application.",
    },
    {
      name: "Vidari",
      sanskrit: "Ipomoea digitata",
      properties: "Nutritive, Rejuvenative, Demulcent",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Supports female reproductive health, enhances fertility, increases breast milk production, builds muscle tissue, improves strength and stamina.",
      usage:
        "Typically taken as a powder (1/2-1 teaspoon) with warm milk, or as a component in rejuvenative formulations.",
    },
    {
      name: "Punarnava",
      sanskrit: "Boerhavia diffusa",
      properties: "Diuretic, Anti-inflammatory, Rejuvenative",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Supports kidney and urinary tract health, reduces edema and water retention, promotes healthy liver function, supports heart health, rejuvenates the body.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a decoction.",
    },
    {
      name: "Bhumyamalaki",
      sanskrit: "Phyllanthus niruri",
      properties: "Hepatoprotective, Antiviral, Diuretic",
      doshas: ["Pitta"],
      benefits:
        "Supports liver health, protects against viral hepatitis, promotes healthy kidney function, reduces urinary stones, balances blood sugar levels.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a fresh juice.",
    },
    {
      name: "Kutki",
      sanskrit: "Picrorhiza kurroa",
      properties: "Bitter, Hepatoprotective, Anti-inflammatory",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Supports liver health, reduces inflammation, promotes healthy digestion, purifies the blood, reduces fever, supports respiratory health.",
      usage:
        "Typically taken as a powder (1/8-1/4 teaspoon) with honey to mask the bitter taste, or as a component in liver formulations.",
    },
    {
      name: "Bala",
      sanskrit: "Sida cordifolia",
      properties: "Nutritive, Rejuvenative, Demulcent",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Strengthens muscles and tissues, enhances physical strength, supports nervous system health, promotes healthy joints, improves energy and stamina.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm milk, or as a medicated oil for external application.",
    },
    {
      name: "Arjuna",
      sanskrit: "Terminalia arjuna",
      properties: "Cardiotonic, Astringent, Rejuvenative",
      doshas: ["Kapha", "Pitta"],
      benefits:
        "Supports heart health, strengthens cardiac muscle, maintains healthy cholesterol levels, promotes healthy circulation, reduces stress on the heart.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm milk or water, or as a decoction.",
    },
    {
      name: "Kapikacchu",
      sanskrit: "Mucuna pruriens",
      properties: "Nervine, Aphrodisiac, Rejuvenative",
      doshas: ["Vata"],
      benefits:
        "Supports nervous system health, enhances fertility and reproductive function, improves mood and mental health, supports healthy dopamine levels, enhances physical strength.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm milk, or as a component in reproductive health formulations.",
    },
    {
      name: "Yashtimadhu",
      sanskrit: "Glycyrrhiza glabra (Licorice)",
      properties: "Demulcent, Expectorant, Anti-inflammatory",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Soothes mucous membranes, supports respiratory health, enhances immunity, improves voice quality, promotes longevity, harmonizes the effects of other herbs.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water or milk, or as a tea. Not recommended for long-term use in cases of high blood pressure.",
    },
    {
      name: "Vacha",
      sanskrit: "Acorus calamus",
      properties: "Nervine, Expectorant, Digestive",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Enhances memory and intelligence, improves speech and voice quality, supports respiratory health, promotes mental clarity, clears excess Kapha from the system.",
      usage:
        "Typically taken in very small amounts (pinch to 1/8 teaspoon) with honey, due to its potency. Not recommended for long-term use without professional guidance.",
    },
    {
      name: "Pippali",
      sanskrit: "Piper longum (Long Pepper)",
      properties: "Stimulant, Expectorant, Bioavailability enhancer",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Enhances digestion, improves absorption of other herbs, supports respiratory health, kindles digestive fire, clears excess Kapha from the lungs, enhances metabolism.",
      usage:
        "Typically taken as a powder (1/8-1/4 teaspoon) with honey or warm water, or as a component in respiratory and digestive formulations.",
    },
    {
      name: "Chitrak",
      sanskrit: "Plumbago zeylanica",
      properties: "Digestive stimulant, Carminative, Anthelmintic",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Strongly kindles digestive fire, improves metabolism, reduces intestinal parasites, promotes healthy weight management, clears excess Kapha and Ama (toxins).",
      usage:
        "Typically taken in small amounts (pinch to 1/8 teaspoon) with warm water after meals, or as a component in digestive formulations. Use with caution due to its heating nature.",
    },
    {
      name: "Musta",
      sanskrit: "Cyperus rotundus",
      properties: "Digestive, Anti-inflammatory, Diuretic",
      doshas: ["Kapha", "Pitta"],
      benefits:
        "Supports digestive health, reduces inflammation in the digestive tract, promotes healthy urination, reduces fever, balances blood sugar levels, improves appetite.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a component in digestive formulations.",
    },
    {
      name: "Shilajit",
      sanskrit: "Asphaltum punjabinum",
      properties: "Rejuvenative, Adaptogenic, Antioxidant",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Enhances energy and stamina, supports healthy aging, improves nutrient absorption, supports kidney and urinary tract health, enhances male reproductive health.",
      usage:
        "Typically taken in small amounts (rice grain to pea size) with warm milk or water, preferably in the morning. Pure shilajit should dissolve completely in warm water.",
    },
    {
      name: "Gokshura",
      sanskrit: "Tribulus terrestris",
      properties: "Diuretic, Rejuvenative, Aphrodisiac",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Supports urinary tract health, enhances male and female reproductive function, promotes healthy hormone levels, supports kidney health, reduces inflammation.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water or milk, or as a decoction.",
    },
    {
      name: "Guggul",
      sanskrit: "Commiphora mukul",
      properties: "Anti-inflammatory, Detoxifying, Rejuvenative",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Supports healthy cholesterol and triglyceride levels, promotes weight management, reduces inflammation, supports joint health, scrapes away toxins.",
      usage:
        "Typically taken as a purified extract (250-500mg) two to three times daily, often combined with other herbs in formulations.",
    },
    {
      name: "Amaltas",
      sanskrit: "Cassia fistula",
      properties: "Laxative, Anti-inflammatory, Antipyretic",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Gently cleanses the bowels, reduces inflammation, lowers fever, supports liver health, purifies the blood, promotes healthy skin.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a decoction of the fruit pulp.",
    },
    {
      name: "Bhringaraj",
      sanskrit: "Eclipta alba",
      properties: "Rejuvenative, Hepatoprotective, Hair tonic",
      doshas: ["Vata", "Pitta", "Kapha"],
      benefits:
        "Promotes healthy hair growth, prevents premature graying, supports liver health, enhances memory and intellect, improves eyesight, calms the mind.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water or milk, or applied externally as an oil for hair and scalp.",
    },
    {
      name: "Pushkarmool",
      sanskrit: "Inula racemosa",
      properties: "Expectorant, Bronchodilator, Cardiotonic",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Supports respiratory health, opens the bronchial passages, strengthens the heart, improves circulation, reduces chest congestion, balances blood sugar.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with honey or warm water, or as a component in respiratory formulations.",
    },
    {
      name: "Sariva",
      sanskrit: "Hemidesmus indicus",
      properties: "Alterative, Blood purifier, Anti-inflammatory",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Purifies the blood, supports healthy skin, reduces inflammation, promotes urinary health, reduces heat in the body, supports healthy immune function.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a decoction.",
    },
    {
      name: "Nagkesar",
      sanskrit: "Mesua ferrea",
      properties: "Astringent, Anti-inflammatory, Carminative",
      doshas: ["Kapha", "Pitta"],
      benefits:
        "Supports digestive health, reduces inflammation, improves skin complexion, supports respiratory health, promotes healthy menstruation, reduces bleeding disorders.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water or honey, or as a component in formulations for skin and reproductive health.",
    },
    {
      name: "Kanchanar",
      sanskrit: "Bauhinia variegata",
      properties: "Alterative, Detoxifying, Lymphatic",
      doshas: ["Kapha"],
      benefits:
        "Supports thyroid health, reduces lymphatic congestion, promotes healthy metabolism, supports proper glandular function, reduces benign growths and cysts.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water, or as a component in formulations for thyroid and lymphatic health.",
    },
    {
      name: "Rasna",
      sanskrit: "Pluchea lanceolata",
      properties: "Anti-inflammatory, Analgesic, Nervine",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Reduces joint pain and inflammation, supports nervous system health, improves mobility, reduces sciatica pain, supports respiratory health.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with warm water or milk, or as a component in formulations for joint health.",
    },
    {
      name: "Lodhra",
      sanskrit: "Symplocos racemosa",
      properties: "Astringent, Hemostatic, Anti-inflammatory",
      doshas: ["Kapha", "Pitta"],
      benefits:
        "Supports female reproductive health, reduces excessive menstrual bleeding, promotes healthy skin, reduces inflammation, supports oral health, tones tissues.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with honey or warm water, or as a component in formulations for women's health.",
    },
    {
      name: "Daruharidra",
      sanskrit: "Berberis aristata",
      properties: "Bitter, Anti-inflammatory, Antimicrobial",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Supports liver health, reduces inflammation, has antimicrobial properties, supports eye health, promotes healthy digestion, purifies the blood.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with honey or warm water, or as a decoction.",
    },
    {
      name: "Shatavari",
      sanskrit: "Asparagus racemosus",
      properties: "Rejuvenative, Nutritive, Demulcent",
      doshas: ["Vata", "Pitta"],
      benefits:
        "Supports female reproductive health, enhances lactation, nourishes tissues, soothes digestive tract, promotes fertility, supports immune function.",
      usage:
        "Typically taken as a powder (1/2-1 teaspoon) with warm milk, or as a component in rejuvenative formulations.",
    },
    {
      name: "Kumari (Aloe Vera)",
      sanskrit: "Aloe barbadensis",
      properties: "Bitter, Cooling, Rejuvenative",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Supports digestive health, promotes healthy skin, cleanses the liver, supports female reproductive health, reduces inflammation, promotes tissue healing.",
      usage:
        "Fresh gel can be consumed (1-2 tablespoons) with a pinch of turmeric, or applied externally for skin conditions. Also available as juice or powder.",
    },
    {
      name: "Trikatu",
      sanskrit: "Three Spices (Pippali, Ginger, Black Pepper)",
      properties: "Heating, Stimulant, Digestive",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Enhances digestion, improves metabolism, clears respiratory congestion, enhances bioavailability of other herbs, reduces excess Kapha and Ama (toxins).",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with honey or warm water before meals, or as a component in digestive and respiratory formulations.",
    },
    {
      name: "Vidanga",
      sanskrit: "Embelia ribes",
      properties: "Anthelmintic, Carminative, Digestive",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Eliminates intestinal parasites, improves digestion, reduces bloating and gas, supports healthy metabolism, promotes healthy weight management.",
      usage:
        "Typically taken as a powder (1/4-1/2 teaspoon) with honey or warm water, or as a component in digestive and antiparasitic formulations.",
    },
    {
      name: "Bakuchi",
      sanskrit: "Psoralea corylifolia",
      properties: "Stimulant, Antifungal, Rejuvenative",
      doshas: ["Kapha", "Vata"],
      benefits:
        "Supports skin health, particularly for vitiligo and psoriasis, enhances pigmentation, has antimicrobial properties, supports reproductive health.",
      usage:
        "Typically taken as a powder (1/8-1/4 teaspoon) with warm water, or applied externally as an oil for skin conditions. Use with caution and professional guidance.",
    },
    {
      name: "Ajwain",
      sanskrit: "Trachyspermum ammi",
      properties: "Carminative, Digestive, Antispasmodic",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Relieves gas and bloating, improves digestion, reduces intestinal spasms, supports respiratory health, clears congestion, enhances appetite.",
      usage:
        "Can be chewed directly (1/4-1/2 teaspoon) after meals, or taken with warm water. Also used in cooking or as ajwain water for digestive issues.",
    },
    {
      name: "Ela (Cardamom)",
      sanskrit: "Elettaria cardamomum",
      properties: "Carminative, Digestive, Diaphoretic",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Improves digestion, freshens breath, reduces bloating and gas, supports respiratory health, enhances the taste of food and herbal formulations.",
      usage:
        "Can be chewed directly (1-2 pods), added to food and beverages, or taken as a powder (1/4 teaspoon) with honey or warm water.",
    },
    {
      name: "Jatiphala (Nutmeg)",
      sanskrit: "Myristica fragrans",
      properties: "Carminative, Nervine, Astringent",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Promotes sleep, reduces anxiety, improves digestion, reduces diarrhea, enhances reproductive health, supports nervous system function.",
      usage:
        "Typically taken in very small amounts (pinch to 1/8 teaspoon) with warm milk before bed. Use with caution as higher doses can be toxic.",
    },
    {
      name: "Lavanga (Clove)",
      sanskrit: "Syzygium aromaticum",
      properties: "Analgesic, Carminative, Antimicrobial",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Relieves toothache and oral pain, improves digestion, reduces gas and bloating, has antimicrobial properties, enhances circulation, supports respiratory health.",
      usage:
        "Can be chewed directly for toothache, used in cooking, or taken as a powder (1/8-1/4 teaspoon) with honey or warm water.",
    },
    {
      name: "Tvak (Cinnamon)",
      sanskrit: "Cinnamomum zeylanicum",
      properties: "Warming, Stimulant, Carminative",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Balances blood sugar, improves circulation, enhances digestion, reduces gas and bloating, supports respiratory health, warms the body.",
      usage:
        "Can be used in cooking, taken as a powder (1/4-1/2 teaspoon) with honey or warm water, or as a component in digestive formulations.",
    },
    {
      name: "Maricha (Black Pepper)",
      sanskrit: "Piper nigrum",
      properties: "Stimulant, Carminative, Bioavailability enhancer",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Enhances digestion, improves absorption of nutrients and herbs, reduces gas and bloating, clears respiratory congestion, enhances metabolism.",
      usage:
        "Can be used in cooking, taken as a powder (1/8-1/4 teaspoon) with honey or warm water, or as a component in digestive and respiratory formulations.",
    },
    {
      name: "Haridra (Turmeric)",
      sanskrit: "Curcuma longa",
      properties: "Anti-inflammatory, Antioxidant, Blood purifier",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Reduces inflammation, supports joint health, improves digestion, purifies blood, enhances skin health, has antimicrobial properties.",
      usage:
        "Can be used in cooking (1/4-1/2 teaspoon daily), taken with warm milk (golden milk), or as a supplement (400-600mg of curcumin daily).",
    },
    {
      name: "Methi (Fenugreek)",
      sanskrit: "Trigonella foenum-graecum",
      properties: "Nutritive, Galactagogue, Demulcent",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Enhances breast milk production, supports healthy blood sugar levels, reduces inflammation, improves digestion, promotes healthy hair growth.",
      usage:
        "Seeds can be sprouted and eaten, used in cooking, or taken as a powder (1/4-1/2 teaspoon) with warm water. Also available as capsules.",
    },
    {
      name: "Dhanyaka (Coriander)",
      sanskrit: "Coriandrum sativum",
      properties: "Cooling, Carminative, Diuretic",
      doshas: ["Pitta", "Kapha"],
      benefits:
        "Supports digestive health, reduces inflammation, promotes healthy urination, balances blood sugar, reduces heat in the body, enhances taste.",
      usage:
        "Fresh leaves can be used in cooking, seeds can be used whole or ground (1/4-1/2 teaspoon) with warm water, or as a cooling tea.",
    },
    {
      name: "Jeeraka (Cumin)",
      sanskrit: "Cuminum cyminum",
      properties: "Carminative, Digestive, Diuretic",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Improves digestion, reduces gas and bloating, supports healthy metabolism, promotes healthy urination, enhances taste of food.",
      usage:
        "Can be used in cooking, roasted and eaten after meals (1/4-1/2 teaspoon), or taken as a powder with warm water.",
    },
    {
      name: "Hingu (Asafoetida)",
      sanskrit: "Ferula asafoetida",
      properties: "Carminative, Antispasmodic, Expectorant",
      doshas: ["Vata", "Kapha"],
      benefits:
        "Reduces gas and bloating, improves digestion, reduces intestinal spasms, supports respiratory health, enhances taste of food.",
      usage:
        "Used in very small amounts (pinch) in cooking, particularly with legumes to reduce gas. Can also be taken with warm water for digestive issues.",
    },
  ];

  // Ayurvedic history data
  const history = [
    {
      title: "Origins of Ayurveda",
      period: "3000-5000 BCE",
      description:
        "Ayurveda originated in the Indian subcontinent as one of the world's oldest holistic healing systems. The knowledge was passed down orally from generation to generation before being written down.",
      keyPoints: [
        "The term 'Ayurveda' comes from Sanskrit: 'Ayur' meaning life and 'Veda' meaning knowledge or science.",
        "Ayurveda is considered a 'sister science' to yoga, both originating from the same Vedic traditions.",
        "Archaeological evidence of Ayurvedic medical practices has been found in the Indus Valley Civilization (3300-1300 BCE).",
      ],
    },
    {
      title: "Classical Period",
      period: "1000 BCE - 800 CE",
      description:
        "During this period, the foundational texts of Ayurveda were composed, establishing the theoretical and practical framework that continues to guide Ayurvedic practice today.",
      keyPoints: [
        "The Charaka Samhita (composed around 400-200 BCE) is the oldest and most important text on Ayurvedic internal medicine.",
        "The Sushruta Samhita (composed around 600 BCE) focuses on surgery and describes over 300 surgical procedures and 120 surgical instruments.",
        "The Ashtanga Hridaya (composed around 500 CE) synthesizes the teachings of the earlier texts into a more concise form.",
      ],
    },
    {
      title: "Medieval Period",
      period: "800 CE - 1800 CE",
      description:
        "This period saw the integration of Ayurveda with other medical systems and the development of regional traditions and specialized texts.",
      keyPoints: [
        "Ayurveda was influenced by and influenced Islamic medicine (Unani) during the medieval period in India.",
        "Regional schools of Ayurveda developed, particularly in Kerala, Bengal, and Kashmir.",
        "Specialized texts on topics such as toxicology, pediatrics, and rejuvenation therapy were composed.",
      ],
    },
    {
      title: "Modern Revival",
      period: "1800 CE - Present",
      description:
        "After a period of decline during colonial rule, Ayurveda has experienced a revival both in India and globally as interest in traditional and complementary medicine has grown.",
      keyPoints: [
        "The Indian government established the Central Council for Research in Ayurvedic Sciences (CCRAS) in 1978 to promote scientific research in Ayurveda.",
        "The World Health Organization recognizes Ayurveda as a traditional medical system.",
        "Today, Ayurveda is practiced worldwide, with increasing scientific research validating many of its approaches and treatments.",
      ],
    },
  ];

  // Ayurvedic diet data
  const diet = [
    {
      title: "Six Tastes (Rasas)",
      description:
        "Ayurveda recognizes six tastes that should be included in every meal for optimal nutrition and satisfaction.",
      content: [
        "Sweet (Madhura): Builds tissues, calms nerves. Found in sugar, milk, rice, wheat.",
        "Sour (Amla): Stimulates digestion, energizes the body. Found in citrus fruits, yogurt, fermented foods.",
        "Salty (Lavana): Improves taste, stimulates digestion. Found in sea salt, seaweed.",
        "Pungent (Katu): Stimulates digestion and metabolism. Found in chili peppers, ginger, garlic.",
        "Bitter (Tikta): Detoxifies and lightens tissues. Found in leafy greens, turmeric, coffee.",
        "Astringent (Kashaya): Absorbs water, tightens tissues. Found in beans, lentils, pomegranate.",
      ],
    },
    {
      title: "Dosha-Specific Diets",
      description:
        "Different body types (doshas) benefit from different dietary approaches.",
      content: [
        "Vata Diet: Favor warm, cooked, moist, and oily foods. Reduce raw, cold, and dry foods. Best tastes: sweet, sour, salty.",
        "Pitta Diet: Favor cooling, moderate, and dry foods. Reduce hot, spicy, and oily foods. Best tastes: sweet, bitter, astringent.",
        "Kapha Diet: Favor warm, light, and dry foods. Reduce cold, heavy, and oily foods. Best tastes: pungent, bitter, astringent.",
      ],
    },
    {
      title: "Mindful Eating Practices",
      description: "How you eat is as important as what you eat in Ayurveda.",
      content: [
        "Eat in a calm, peaceful environment without distractions.",
        "Eat only when hungry and stop before feeling completely full.",
        "Eat freshly prepared foods, avoiding leftovers when possible.",
        "Include all six tastes in each meal for satisfaction and nutrition.",
        "Eat according to the seasons, favoring foods that balance the predominant dosha of the season.",
      ],
    },
    {
      title: "Digestive Fire (Agni)",
      description:
        "Maintaining a strong digestive fire is central to Ayurvedic nutrition.",
      content: [
        "Agni is responsible for breaking down food and absorbing nutrients.",
        "Weak agni leads to the formation of ama (toxins) and disease.",
        "Spices like ginger, black pepper, and cumin help kindle agni.",
        "Eating a small piece of ginger with a pinch of salt before meals can stimulate agni.",
        "Avoid ice-cold beverages, which can dampen agni.",
      ],
    },
  ];

  // Ayurvedic lifestyle data
  const lifestyle = [
    {
      title: "Daily Routine (Dinacharya)",
      description:
        "Ayurveda recommends a specific daily routine to maintain balance and health.",
      practices: [
        "Wake before sunrise (ideally between 4:00-6:00 AM).",
        "Begin the day with a glass of warm water to cleanse the digestive tract.",
        "Practice oral hygiene, including tongue scraping to remove ama (toxins).",
        "Self-massage (Abhyanga) with warm oil appropriate for your dosha.",
        "Practice yoga, pranayama (breathing exercises), and meditation.",
        "Eat meals at regular times, with the largest meal at midday when digestion is strongest.",
        "Go to bed early, ideally by 10:00 PM.",
      ],
    },
    {
      title: "Seasonal Routine (Ritucharya)",
      description:
        "Adjusting lifestyle and diet according to the seasons helps maintain dosha balance.",
      practices: [
        "Spring (Kapha season): Focus on reducing Kapha with light, warm, and dry foods. Increase physical activity.",
        "Summer (Pitta season): Stay cool with sweet, bitter, and astringent foods. Reduce intense exercise during the hottest part of the day.",
        "Fall/Early Winter (Vata season): Maintain warmth and moisture with regular oil massage and warm, nourishing foods.",
        "Late Winter (Kapha season): Keep active and warm, favoring pungent, bitter, and astringent tastes.",
      ],
    },
    {
      title: "Mental and Emotional Health",
      description:
        "Ayurveda recognizes the profound connection between mind and body.",
      practices: [
        "Practice meditation daily to calm the mind and reduce stress.",
        "Cultivate positive emotions like love, compassion, and contentment.",
        "Engage in activities that bring joy and fulfillment.",
        "Practice pranayama (breathing exercises) to balance the mind and emotions.",
        "Use aromatherapy with essential oils appropriate for your dosha.",
        "Spend time in nature to ground and rejuvenate the mind.",
      ],
    },
    {
      title: "Sleep Hygiene (Nidra)",
      description:
        "Quality sleep is considered one of the three pillars of health in Ayurveda.",
      practices: [
        "Establish a regular sleep schedule, going to bed and waking at the same times each day.",
        "Create a calming bedtime routine, such as gentle stretching, warm milk with spices, or meditation.",
        "Sleep in a dark, quiet, and cool environment.",
        "Avoid electronic devices for at least an hour before bed.",
        "Apply oil to the soles of the feet and the crown of the head before sleep to promote relaxation.",
        "Sleep on your left side to promote digestion and proper circulation.",
      ],
    },
  ];

  // Common Ayurvedic treatments data
  const treatments = [
    {
      name: "Panchakarma",
      description:
        "A comprehensive detoxification and rejuvenation program that includes five main therapies to eliminate toxins from the body.",
      procedures: [
        "Vamana (Therapeutic emesis)",
        "Virechana (Therapeutic purgation)",
        "Basti (Therapeutic enema)",
        "Nasya (Nasal administration of medication)",
        "Raktamokshana (Bloodletting therapy)",
      ],
      benefits:
        "Removes accumulated toxins, balances doshas, improves digestion and metabolism, enhances immunity, promotes mental clarity.",
    },
    {
      name: "Abhyanga",
      description:
        "A full-body oil massage that nourishes the tissues, calms the nervous system, and promotes overall well-being.",
      procedures: [
        "Warm oil is applied to the entire body",
        "Specific strokes are used to massage the oil into the skin",
        "Special attention is given to marma points (energy centers)",
      ],
      benefits:
        "Reduces Vata, improves circulation, nourishes tissues, promotes sleep, enhances skin health, reduces stress and anxiety.",
    },
    {
      name: "Shirodhara",
      description:
        "A therapy in which warm oil is poured in a continuous stream over the forehead, particularly on the 'third eye' area.",
      procedures: [
        "Patient lies on a massage table",
        "Warm oil is poured in a steady stream over the forehead",
        "Treatment typically lasts for 30-60 minutes",
      ],
      benefits:
        "Calms the mind, reduces anxiety and stress, improves sleep, enhances mental clarity, balances the nervous system.",
    },
    {
      name: "Nasya",
      description:
        "The administration of herbal oils, powders, or pastes through the nasal passages to clear the sinuses and improve brain function.",
      procedures: [
        "Facial massage to prepare the nasal passages",
        "Steam inhalation to open the channels",
        "Administration of medicated oil or powder into the nostrils",
      ],
      benefits:
        "Clears sinuses, improves mental clarity, enhances sensory perception, relieves headaches, supports respiratory health.",
    },
    {
      name: "Udvartana",
      description:
        "A vigorous massage using herbal powders or pastes to exfoliate the skin, reduce Kapha, and improve circulation.",
      procedures: [
        "Herbal powder or paste is applied to the body",
        "Vigorous massage strokes are used to work the herbs into the skin",
        "The treatment is followed by a warm shower",
      ],
      benefits:
        "Reduces Kapha, improves circulation, exfoliates the skin, reduces cellulite, promotes weight loss, enhances muscle tone.",
    },
    {
      name: "Pinda Sweda",
      description:
        "A therapy in which warm herbal pouches (pindas) are used to massage the body, reducing pain and stiffness.",
      procedures: [
        "Herbs are cooked in milk or other liquids and tied in cloth pouches",
        "The warm pouches are dipped in medicated oil and used to massage the body",
        "Special attention is given to painful or stiff areas",
      ],
      benefits:
        "Reduces pain and stiffness, improves circulation, nourishes tissues, reduces Vata, enhances mobility, relieves muscle tension.",
    },
    {
      name: "Kati Basti",
      description:
        "A specialized treatment for lower back pain in which warm medicated oil is pooled over the lower back area.",
      procedures: [
        "A dough ring is created and placed on the lower back",
        "Warm medicated oil is poured into the ring and retained for 30-45 minutes",
        "The oil is periodically replaced to maintain warmth",
      ],
      benefits:
        "Relieves lower back pain, reduces inflammation, nourishes spinal tissues, improves flexibility, reduces Vata in the lower back.",
    },
    {
      name: "Netra Tarpana",
      description:
        "An eye treatment in which warm ghee (clarified butter) is pooled around the eyes to nourish and rejuvenate the eyes.",
      procedures: [
        "Dough rings are created and placed around the eyes",
        "Warm medicated ghee is poured into the rings",
        "The patient lies still with eyes open, blinking occasionally, for 15-20 minutes",
      ],
      benefits:
        "Relieves eye strain, improves vision, reduces dryness, soothes tired eyes, nourishes eye tissues, reduces Vata and Pitta in the eyes.",
    },
    {
      name: "Karna Purana",
      description:
        "An ear treatment in which warm medicated oil is poured into the ear canal to relieve ear conditions and improve hearing.",
      procedures: [
        "The patient lies on their side with the affected ear facing up",
        "Warm medicated oil is gently poured into the ear canal",
        "The oil is retained for 10-15 minutes before being drained",
      ],
      benefits:
        "Relieves ear pain, improves hearing, reduces tinnitus, prevents ear infections, reduces excess ear wax, balances Vata in the ears.",
    },
    {
      name: "Pizhichil",
      description:
        "A luxurious treatment in which warm medicated oil is continuously poured over the body while being simultaneously massaged.",
      procedures: [
        "The patient lies on a wooden table",
        "4-6 therapists continuously pour warm oil over the body while simultaneously massaging",
        "Treatment typically lasts for 60-90 minutes",
      ],
      benefits:
        "Deeply nourishes tissues, rejuvenates the body, reduces Vata, improves circulation, enhances skin health, promotes longevity.",
    },
    {
      name: "Takradhara",
      description:
        "A variation of Shirodhara in which medicated buttermilk is poured over the forehead to cool the mind and body.",
      procedures: [
        "Patient lies on a massage table",
        "Cool medicated buttermilk is poured in a steady stream over the forehead",
        "Treatment typically lasts for 30-45 minutes",
      ],
      benefits:
        "Cools the mind and body, reduces Pitta, relieves headaches, improves sleep, reduces skin inflammation, calms the nervous system.",
    },
    {
      name: "Lepana",
      description:
        "The application of herbal pastes to the body or specific areas to treat various conditions, particularly skin disorders.",
      procedures: [
        "Herbal powders are mixed with water, milk, or other liquids to form a paste",
        "The paste is applied to the affected area or the entire body",
        "The paste is allowed to dry and then washed off",
      ],
      benefits:
        "Treats skin disorders, reduces inflammation, draws out toxins, improves complexion, reduces Pitta and Kapha, enhances skin health.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">
          Ayurvedic <span className="text-primary neon-glow">Knowledge</span>{" "}
          Base
        </h1>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button
            className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
              activeCategory === "principles"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveCategory("principles")}
          >
            Principles
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
              activeCategory === "history"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveCategory("history")}
          >
            History
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
              activeCategory === "herbs"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveCategory("herbs")}
          >
            Herbs
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
              activeCategory === "treatments"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveCategory("treatments")}
          >
            Treatments
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
              activeCategory === "diet"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveCategory("diet")}
          >
            Diet
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
              activeCategory === "lifestyle"
                ? "bg-primary/10 text-primary neon-glow"
                : "bg-card hover:bg-secondary text-foreground"
            }`}
            onClick={() => setActiveCategory("lifestyle")}
          >
            Lifestyle
          </button>
        </div>
      </div>

      {/* Principles Section */}
      {activeCategory === "principles" && (
        <div className="space-y-6">
          <p className="text-foreground/70">
            Ayurveda, the &quot;science of life,&quot; is one of the
            world&apos;s oldest holistic healing systems. It emphasizes balance
            between body, mind, and spirit to promote health and prevent
            disease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <NeonCard key={index} className="h-full">
                <h3 className="text-lg font-medium text-primary mb-2">
                  {principle.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {principle.description}
                </p>
                <ul className="space-y-2">
                  {principle.content.map((item, i) => (
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </NeonCard>
            ))}
          </div>
        </div>
      )}

      {/* Herbs Section */}
      {activeCategory === "herbs" && (
        <div className="space-y-6">
          <p className="text-foreground/70">
            Ayurvedic herbs are a cornerstone of Ayurvedic medicine, used to
            balance doshas, support bodily functions, and address specific
            health concerns.
          </p>

          <div className="space-y-4">
            {herbs.map((herb, index) => (
              <NeonCard key={index}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-medium text-primary mr-2">
                        {herb.name}
                      </h3>
                      <span className="text-sm text-foreground/60 italic">
                        ({herb.sanskrit})
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="text-sm font-medium text-foreground/70">
                        Properties:
                      </span>
                      <span className="ml-2 text-foreground/80">
                        {herb.properties}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm font-medium text-foreground/70">
                        Balances:
                      </span>
                      <div className="inline-flex gap-1 ml-2">
                        {herb.doshas.map((dosha, i) => (
                          <NeonBadge
                            key={i}
                            variant={
                              dosha === "Vata"
                                ? "default"
                                : dosha === "Pitta"
                                ? "destructive"
                                : "primary"
                            }
                          >
                            {dosha}
                          </NeonBadge>
                        ))}
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-2">{herb.benefits}</p>
                    <p className="text-sm text-foreground/70">{herb.usage}</p>
                  </div>

                  <div className="md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      )}

      {/* Treatments Section */}
      {activeCategory === "treatments" && (
        <div className="space-y-6">
          <p className="text-foreground/70">
            Ayurvedic treatments are therapeutic procedures designed to balance
            doshas, remove toxins, and restore health and harmony to the body
            and mind.
          </p>

          <div className="space-y-4">
            {treatments.map((treatment, index) => (
              <NeonCard key={index}>
                <h3 className="text-lg font-medium text-primary mb-2">
                  {treatment.name}
                </h3>
                <p className="text-foreground/80 mb-4">
                  {treatment.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground/70 mb-2">
                    Procedure:
                  </h4>
                  <ul className="space-y-1">
                    {treatment.procedures.map((procedure, i) => (
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="text-foreground/80">{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground/70 mb-2">
                    Benefits:
                  </h4>
                  <p className="text-foreground/80">{treatment.benefits}</p>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      )}

      {/* History Section */}
      {activeCategory === "history" && (
        <div className="space-y-6">
          <p className="text-foreground/70">
            Ayurveda has a rich history spanning thousands of years, evolving
            from ancient wisdom to a globally recognized system of medicine.
          </p>

          <div className="space-y-4">
            {history.map((period, index) => (
              <NeonCard key={index}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-primary font-medium">
                      {period.period}
                    </div>
                    <div className="text-lg font-semibold mt-1">
                      {period.title}
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-foreground/80 mb-4">
                      {period.description}
                    </p>

                    <h4 className="text-sm font-medium text-foreground/70 mb-2">
                      Key Developments:
                    </h4>
                    <ul className="space-y-1">
                      {period.keyPoints.map((point, i) => (
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      )}

      {/* Diet Section */}
      {activeCategory === "diet" && (
        <div className="space-y-6">
          <p className="text-foreground/70">
            Ayurvedic nutrition is personalized based on your unique
            constitution and current imbalances, with emphasis on the six tastes
            and mindful eating practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diet.map((section, index) => (
              <NeonCard key={index} className="h-full">
                <h3 className="text-lg font-medium text-primary mb-2">
                  {section.title}
                </h3>
                <p className="text-foreground/70 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </NeonCard>
            ))}
          </div>
        </div>
      )}

      {/* Lifestyle Section */}
      {activeCategory === "lifestyle" && (
        <div className="space-y-6">
          <p className="text-foreground/70">
            Ayurveda offers comprehensive lifestyle guidelines to maintain
            balance and prevent disease, emphasizing daily and seasonal routines
            aligned with natural rhythms.
          </p>

          <div className="space-y-4">
            {lifestyle.map((section, index) => (
              <NeonCard key={index}>
                <h3 className="text-lg font-medium text-primary mb-2">
                  {section.title}
                </h3>
                <p className="text-foreground/80 mb-4">{section.description}</p>

                <h4 className="text-sm font-medium text-foreground/70 mb-2">
                  Recommended Practices:
                </h4>
                <ul className="space-y-1">
                  {section.practices.map((practice, i) => (
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-foreground/80">{practice}</span>
                    </li>
                  ))}
                </ul>
              </NeonCard>
            ))}
          </div>
        </div>
      )}

      <div className="text-xs text-foreground/50 text-center mt-8">
        Disclaimer: This information is for educational purposes only and is not
        intended as medical advice.
      </div>
    </div>
  );
}
