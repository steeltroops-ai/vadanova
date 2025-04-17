from fastapi import APIRouter, Depends, HTTPException
from ..database import get_db
from typing import List, Dict, Any

router = APIRouter()

@router.get("/herbs")
async def get_herbs():
    """
    Get a list of all Ayurvedic herbs
    """
    try:
        db = get_db()
        return db["herbs"]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve herbs: {str(e)}")

@router.get("/herbs/{name}")
async def get_herb_by_name(name: str):
    """
    Get information about a specific herb
    """
    try:
        db = get_db()
        for herb in db["herbs"]:
            if herb["name"].lower() == name.lower():
                return herb
        raise HTTPException(status_code=404, detail=f"Herb '{name}' not found")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve herb: {str(e)}")

@router.get("/diseases")
async def get_diseases():
    """
    Get a list of all Ayurvedic diseases/conditions
    """
    try:
        db = get_db()
        return db["diseases"]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve diseases: {str(e)}")

@router.get("/diseases/{name}")
async def get_disease_by_name(name: str):
    """
    Get information about a specific disease/condition
    """
    try:
        db = get_db()
        for disease in db["diseases"]:
            if disease["name"].lower() == name.lower():
                return disease
        raise HTTPException(status_code=404, detail=f"Disease '{name}' not found")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve disease: {str(e)}")

@router.get("/doshas")
async def get_dosha_info():
    """
    Get information about the three doshas (Vata, Pitta, Kapha)
    """
    doshas = {
        "vata": {
            "elements": ["Air", "Ether"],
            "qualities": ["Dry", "Light", "Cold", "Rough", "Subtle", "Mobile"],
            "functions": ["Movement", "Respiration", "Nervous system", "Elimination"],
            "imbalance_symptoms": ["Anxiety", "Insomnia", "Dry skin", "Constipation", "Weight loss"]
        },
        "pitta": {
            "elements": ["Fire", "Water"],
            "qualities": ["Hot", "Sharp", "Light", "Oily", "Liquid", "Spreading"],
            "functions": ["Digestion", "Metabolism", "Body temperature", "Vision", "Skin complexion"],
            "imbalance_symptoms": ["Inflammation", "Acid reflux", "Rashes", "Anger", "Excessive hunger"]
        },
        "kapha": {
            "elements": ["Earth", "Water"],
            "qualities": ["Heavy", "Slow", "Cold", "Oily", "Smooth", "Dense", "Soft", "Static"],
            "functions": ["Structure", "Lubrication", "Fluid balance", "Immune system", "Emotional stability"],
            "imbalance_symptoms": ["Congestion", "Weight gain", "Lethargy", "Attachment", "Depression"]
        }
    }
    return doshas
