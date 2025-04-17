from pydantic import BaseModel, Field
from typing import List, Optional

class Dosha(BaseModel):
    """Dosha model representing the three Ayurvedic doshas"""
    vata: float = Field(0.0, ge=0.0, le=1.0, description="Vata dosha level")
    pitta: float = Field(0.0, ge=0.0, le=1.0, description="Pitta dosha level")
    kapha: float = Field(0.0, ge=0.0, le=1.0, description="Kapha dosha level")

class PatientProfile(BaseModel):
    """Patient profile model"""
    age: int = Field(..., ge=0, le=120, description="Patient age")
    gender: str = Field(..., description="Patient gender")
    dosha: Dosha = Field(..., description="Patient dosha constitution")
    current_medications: Optional[List[str]] = Field(default=None, description="Current medications")
    medical_history: Optional[List[str]] = Field(default=None, description="Medical history")

class Symptom(BaseModel):
    """Symptom model"""
    name: str = Field(..., description="Symptom name")
    severity: float = Field(..., ge=0.0, le=1.0, description="Symptom severity")
    duration: Optional[int] = Field(default=None, description="Symptom duration in days")

class RecommendationRequest(BaseModel):
    """Recommendation request model"""
    symptoms: List[Symptom] = Field(..., min_items=1, description="List of symptoms")
    patient: Optional[PatientProfile] = Field(default=None, description="Patient profile")
    additional_notes: Optional[str] = Field(default=None, description="Additional notes")

class Herb(BaseModel):
    """Herb model"""
    name: str = Field(..., description="Herb name")
    description: Optional[str] = Field(default=None, description="Herb description")
    dosage: Optional[str] = Field(default=None, description="Recommended dosage")
    contraindications: Optional[List[str]] = Field(default=None, description="Contraindications")
    relevance_score: float = Field(..., ge=0.0, le=1.0, description="Relevance score")

class Treatment(BaseModel):
    """Treatment model"""
    name: str = Field(..., description="Treatment name")
    description: str = Field(..., description="Treatment description")
    herbs: List[Herb] = Field(..., min_items=1, description="List of herbs")
    lifestyle_changes: Optional[List[str]] = Field(default=None, description="Lifestyle changes")
    dietary_recommendations: Optional[List[str]] = Field(default=None, description="Dietary recommendations")
    relevance_score: float = Field(..., ge=0.0, le=1.0, description="Relevance score")

class RecommendationResponse(BaseModel):
    """Recommendation response model"""
    treatments: List[Treatment] = Field(..., min_items=1, description="List of recommended treatments")
    dosha_analysis: Optional[Dosha] = Field(default=None, description="Dosha analysis based on symptoms")
    explanation: Optional[str] = Field(default=None, description="Explanation of recommendations")
