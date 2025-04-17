from fastapi import APIRouter, Depends, HTTPException
from ..models import RecommendationRequest, RecommendationResponse, Treatment, Herb, Dosha
from ..database import get_db
from ..services.recommendation_service import get_recommendations
from typing import List

router = APIRouter()

@router.post("/", response_model=RecommendationResponse)
async def create_recommendation(request: RecommendationRequest):
    """
    Generate Ayurvedic treatment recommendations based on symptoms and patient profile
    """
    try:
        # Get recommendations from the recommendation service
        recommendations = await get_recommendations(request)
        return recommendations
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate recommendations: {str(e)}")

@router.get("/sample", response_model=RecommendationResponse)
async def get_sample_recommendation():
    """
    Get a sample recommendation for demonstration purposes
    """
    # Create a sample recommendation response
    sample_herbs = [
        Herb(
            name="Ashwagandha",
            description="An adaptogenic herb that helps reduce stress and anxiety",
            dosage="1-2 grams of root powder daily",
            contraindications=["Pregnancy", "Autoimmune conditions"],
            relevance_score=0.95
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
    
    sample_dosha = Dosha(vata=0.7, pitta=0.3, kapha=0.2)
    
    return RecommendationResponse(
        treatments=[sample_treatment],
        dosha_analysis=sample_dosha,
        explanation="Based on your symptoms of anxiety and restlessness, there appears to be a Vata imbalance. The recommended herbs help to calm the nervous system and ground excess Vata energy."
    )
