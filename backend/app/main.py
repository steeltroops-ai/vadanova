from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import recommendations, ayurveda
from .database import init_db

app = FastAPI(
    title="Vedanova API",
    description="AI-powered Ayurvedic treatment recommendation system",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database
@app.on_event("startup")
async def startup_db_client():
    await init_db()

# Include routers
app.include_router(recommendations.router, prefix="/api/recommendations", tags=["recommendations"])
app.include_router(ayurveda.router, prefix="/api/ayurveda", tags=["ayurveda"])

@app.get("/")
async def root():
    return {"message": "Welcome to Vedanova API - AI-powered Ayurvedic treatment recommendation system"}
