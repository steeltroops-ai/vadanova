import http.server
import socketserver
import json
from urllib.parse import urlparse, parse_qs

PORT = 8000

class MockAPIHandler(http.server.SimpleHTTPRequestHandler):
    def _set_headers(self, content_type="application/json"):
        self.send_response(200)
        self.send_header('Content-type', content_type)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_OPTIONS(self):
        self._set_headers()
        
    def do_GET(self):
        parsed_path = urlparse(self.path)
        
        if parsed_path.path == '/api/health':
            self._set_headers()
            self.wfile.write(json.dumps({"status": "ok"}).encode())
            
        elif parsed_path.path == '/api/herbs':
            self._set_headers()
            herbs = [
                {
                    "name": "Ashwagandha",
                    "properties": ["Adaptogenic", "Rejuvenating", "Calming"],
                    "doshas": ["vata", "kapha"]
                },
                {
                    "name": "Turmeric",
                    "properties": ["Anti-inflammatory", "Antioxidant", "Blood purifier"],
                    "doshas": ["pitta", "kapha"]
                },
                {
                    "name": "Brahmi",
                    "properties": ["Cognitive enhancer", "Nervine", "Adaptogenic"],
                    "doshas": ["vata", "pitta", "kapha"]
                },
                {
                    "name": "Triphala",
                    "properties": ["Detoxifying", "Rejuvenative", "Digestive"],
                    "doshas": ["vata", "pitta", "kapha"]
                },
                {
                    "name": "Shatavari",
                    "properties": ["Rejuvenative", "Nutritive", "Demulcent"],
                    "doshas": ["vata", "pitta"]
                }
            ]
            self.wfile.write(json.dumps(herbs).encode())
            
        elif parsed_path.path == '/api/diseases':
            self._set_headers()
            diseases = [
                {
                    "name": "Anxiety",
                    "symptoms": ["Excessive worry", "Restlessness", "Insomnia"],
                    "dosha_imbalance": ["vata"]
                },
                {
                    "name": "Inflammation",
                    "symptoms": ["Redness", "Swelling", "Heat", "Pain"],
                    "dosha_imbalance": ["pitta"]
                },
                {
                    "name": "Congestion",
                    "symptoms": ["Mucus buildup", "Heaviness", "Lethargy"],
                    "dosha_imbalance": ["kapha"]
                },
                {
                    "name": "Digestive Issues",
                    "symptoms": ["Bloating", "Gas", "Irregular bowel movements"],
                    "dosha_imbalance": ["vata", "pitta"]
                },
                {
                    "name": "Skin Conditions",
                    "symptoms": ["Rash", "Itching", "Dryness"],
                    "dosha_imbalance": ["vata", "pitta"]
                }
            ]
            self.wfile.write(json.dumps(diseases).encode())
            
        elif parsed_path.path == '/api/dosha-info':
            self._set_headers()
            dosha_info = {
                "vata": {
                    "elements": ["Air", "Ether"],
                    "qualities": ["Dry", "Light", "Cold", "Rough", "Subtle", "Mobile"],
                    "functions": ["Movement", "Breathing", "Natural urges", "Transformation"],
                    "imbalance_symptoms": ["Anxiety", "Insomnia", "Dry skin", "Constipation", "Joint pain"]
                },
                "pitta": {
                    "elements": ["Fire", "Water"],
                    "qualities": ["Hot", "Sharp", "Light", "Oily", "Liquid", "Spreading"],
                    "functions": ["Digestion", "Metabolism", "Temperature", "Vision", "Complexion"],
                    "imbalance_symptoms": ["Inflammation", "Acid reflux", "Rashes", "Anger", "Excessive hunger"]
                },
                "kapha": {
                    "elements": ["Earth", "Water"],
                    "qualities": ["Heavy", "Slow", "Cold", "Oily", "Smooth", "Dense", "Soft", "Stable"],
                    "functions": ["Structure", "Lubrication", "Fluid balance", "Memory", "Immunity"],
                    "imbalance_symptoms": ["Congestion", "Weight gain", "Lethargy", "Attachment", "Depression"]
                }
            }
            self.wfile.write(json.dumps(dosha_info).encode())
            
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Not found"}).encode())
    
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        parsed_path = urlparse(self.path)
        
        if parsed_path.path == '/api/recommendations':
            self._set_headers()
            
            try:
                request_data = json.loads(post_data.decode('utf-8'))
                symptoms = request_data.get('symptoms', [])
                
                # Generate response based on symptoms
                primary_symptom = symptoms[0]['name'].lower() if symptoms else ''
                
                if 'anxiety' in primary_symptom or 'stress' in primary_symptom:
                    response = {
                        "treatments": [
                            {
                                "name": "Anxiety Relief Protocol",
                                "description": "A combination of herbs and lifestyle changes to reduce anxiety and promote calm",
                                "herbs": [
                                    {
                                        "name": "Ashwagandha",
                                        "description": "An adaptogenic herb that helps reduce stress and anxiety",
                                        "dosage": "1-2 grams of root powder daily",
                                        "contraindications": ["Pregnancy", "Autoimmune conditions"],
                                        "relevance_score": 0.95
                                    },
                                    {
                                        "name": "Brahmi",
                                        "description": "Supports cognitive function and reduces anxiety",
                                        "dosage": "300-600mg of extract daily",
                                        "contraindications": ["Pregnancy", "Breastfeeding"],
                                        "relevance_score": 0.85
                                    }
                                ],
                                "lifestyle_changes": ["Daily meditation for 20 minutes", "Gentle yoga practice", "Regular sleep schedule"],
                                "dietary_recommendations": ["Reduce caffeine", "Increase warm, cooked foods", "Avoid processed foods"],
                                "relevance_score": 0.9
                            }
                        ],
                        "dosha_analysis": {
                            "vata": 0.7,
                            "pitta": 0.3,
                            "kapha": 0.2
                        },
                        "explanation": "Based on your symptoms, there appears to be a Vata imbalance. The recommended herbs help to calm the nervous system and ground excess Vata energy."
                    }
                elif 'pain' in primary_symptom or 'inflammation' in primary_symptom:
                    response = {
                        "treatments": [
                            {
                                "name": "Anti-Inflammatory Protocol",
                                "description": "A combination of herbs and lifestyle changes to reduce inflammation and pain",
                                "herbs": [
                                    {
                                        "name": "Turmeric",
                                        "description": "Powerful anti-inflammatory herb with numerous health benefits",
                                        "dosage": "500-1000mg of curcumin daily with black pepper for absorption",
                                        "contraindications": ["Gallbladder issues", "Blood thinning medications"],
                                        "relevance_score": 0.95
                                    },
                                    {
                                        "name": "Boswellia",
                                        "description": "Reduces inflammation and pain, particularly in joints",
                                        "dosage": "300-500mg three times daily",
                                        "contraindications": ["Pregnancy"],
                                        "relevance_score": 0.85
                                    }
                                ],
                                "lifestyle_changes": ["Gentle movement daily", "Warm oil massage", "Epsom salt baths"],
                                "dietary_recommendations": ["Anti-inflammatory diet", "Reduce nightshades", "Increase omega-3 fatty acids"],
                                "relevance_score": 0.9
                            }
                        ],
                        "dosha_analysis": {
                            "vata": 0.3,
                            "pitta": 0.7,
                            "kapha": 0.2
                        },
                        "explanation": "Based on your symptoms, there appears to be a Pitta imbalance. The recommended herbs help to reduce inflammation and cool excess Pitta energy."
                    }
                else:
                    # Default response
                    response = {
                        "treatments": [
                            {
                                "name": "General Wellness Protocol",
                                "description": "A balanced approach to support overall health and wellbeing",
                                "herbs": [
                                    {
                                        "name": "Triphala",
                                        "description": "Supports digestion and gentle detoxification",
                                        "dosage": "500-1000mg before bed with warm water",
                                        "contraindications": ["Pregnancy", "Diarrhea"],
                                        "relevance_score": 0.85
                                    },
                                    {
                                        "name": "Ashwagandha",
                                        "description": "Adaptogenic herb that supports stress resilience and vitality",
                                        "dosage": "300-500mg twice daily",
                                        "contraindications": ["Pregnancy", "Autoimmune conditions"],
                                        "relevance_score": 0.8
                                    }
                                ],
                                "lifestyle_changes": ["Regular daily routine", "Moderate exercise appropriate for your constitution", "Adequate rest and relaxation"],
                                "dietary_recommendations": ["Eat according to your constitution", "Include all six tastes in each meal", "Eat freshly prepared foods"],
                                "relevance_score": 0.85
                            }
                        ],
                        "dosha_analysis": {
                            "vata": 0.4,
                            "pitta": 0.4,
                            "kapha": 0.4
                        },
                        "explanation": f"Based on your symptoms ({', '.join([s['name'] for s in symptoms])}), we recommend a balanced approach to support your overall health and address your specific concerns."
                    }
                
                self.wfile.write(json.dumps(response).encode())
                
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Not found"}).encode())

def run_server():
    print(f"Starting mock Vedanova API server on port {PORT}...")
    print(f"API endpoints available at http://localhost:{PORT}/api/")
    
    with socketserver.TCPServer(("", PORT), MockAPIHandler) as httpd:
        print("Server running. Press Ctrl+C to stop.")
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()
