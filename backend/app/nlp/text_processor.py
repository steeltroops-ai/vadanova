from ..models import Symptom, PatientProfile, Dosha
from typing import List, Dict, Any, Optional

# Dictionary mapping symptoms to doshas
SYMPTOM_DOSHA_MAP = {
    # Vata symptoms
    "anxiety": "vata",
    "worry": "vata",
    "insomnia": "vata",
    "dry": "vata",
    "cold": "vata",
    "constipation": "vata",
    "pain": "vata",
    "stiffness": "vata",
    "restlessness": "vata",

    # Pitta symptoms
    "inflammation": "pitta",
    "heat": "pitta",
    "rash": "pitta",
    "anger": "pitta",
    "irritation": "pitta",
    "burning": "pitta",
    "acid": "pitta",
    "fever": "pitta",

    # Kapha symptoms
    "congestion": "kapha",
    "mucus": "kapha",
    "heaviness": "kapha",
    "lethargy": "kapha",
    "weight gain": "kapha",
    "attachment": "kapha",
    "depression": "kapha",
    "swelling": "kapha"
}

# Simplified functions for development
async def process_symptoms(symptoms: List[Symptom]) -> List[str]:
    """Process symptoms - simplified version"""
    return [symptom.name.lower() for symptom in symptoms]

async def analyze_dosha_from_symptoms(processed_symptoms: List[str], patient: Optional[PatientProfile] = None) -> Dosha:
    """Analyze dosha imbalance - simplified version"""
    # Default values for development
    return Dosha(vata=0.7, pitta=0.3, kapha=0.2)
