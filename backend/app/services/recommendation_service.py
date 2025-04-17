from ..models import RecommendationRequest, RecommendationResponse, Treatment, Herb, Dosha
from ..nlp.text_processor import process_symptoms, analyze_dosha_from_symptoms
from typing import List

async def get_recommendations(request: RecommendationRequest) -> RecommendationResponse:
    """
    Generate Ayurvedic treatment recommendations based on symptoms and patient profile

    Args:
        request: The recommendation request containing symptoms and patient profile

    Returns:
        A recommendation response containing treatments, dosha analysis, and explanation
    """
    # Process symptoms using NLP
    processed_symptoms = await process_symptoms(request.symptoms)

    # Analyze dosha imbalance based on symptoms
    dosha_analysis = await analyze_dosha_from_symptoms(processed_symptoms, request.patient)

    # For development, return a sample recommendation
    sample_herbs = [
        Herb(
            name="Ashwagandha",
            description="Adaptogenic herb that helps balance all doshas",
            dosage="1-2 grams of root powder daily",
            contraindications=["Pregnancy"],
            relevance_score=0.9
        ),
        Herb(
            name="Brahmi",
            description="Supports cognitive function and reduces anxiety",
            dosage="300-600mg of extract daily",
            contraindications=["Pregnancy", "Breastfeeding"],
            relevance_score=0.85
        )
    ]

    sample_treatment = Treatment(
        name="Anxiety Relief Protocol",
        description="A combination of herbs and lifestyle changes to reduce anxiety and promote calm",
        herbs=sample_herbs,
        lifestyle_changes=["Daily meditation for 20 minutes", "Gentle yoga practice", "Regular sleep schedule"],
        dietary_recommendations=["Reduce caffeine", "Increase warm, cooked foods", "Avoid processed foods"],
        relevance_score=0.9
    )

    # Create explanation based on dosha analysis
    explanation = "Based on your symptoms, there appears to be a Vata imbalance. "
    explanation += "The recommended herbs help to calm the nervous system and ground excess Vata energy."

    # Create and return the recommendation response
    return RecommendationResponse(
        treatments=[sample_treatment],
        dosha_analysis=dosha_analysis,
        explanation=explanation
    )
