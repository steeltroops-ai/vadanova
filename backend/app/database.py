import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# In-memory database for development
db = {
    "herbs": [
        {"name": "Ashwagandha", "properties": ["adaptogenic", "rejuvenating"], "doshas": ["vata", "kapha"]},
        {"name": "Turmeric", "properties": ["anti-inflammatory", "antioxidant"], "doshas": ["pitta", "kapha"]},
        {"name": "Brahmi", "properties": ["cognitive", "nervine"], "doshas": ["pitta", "vata", "kapha"]}
    ],
    "diseases": [
        {"name": "Anxiety", "symptoms": ["worry", "restlessness", "insomnia"], "dosha_imbalance": ["vata"]},
        {"name": "Inflammation", "symptoms": ["heat", "redness", "pain"], "dosha_imbalance": ["pitta"]},
        {"name": "Congestion", "symptoms": ["mucus", "heaviness", "lethargy"], "dosha_imbalance": ["kapha"]}
    ],
    "treatments": []
}

async def init_db():
    """Initialize database"""
    print("Using in-memory database for development")
    return True

def get_db():
    """Get database instance"""
    return db
