'use client';

import { useState } from 'react';
import { NeonCard } from '@/components/ui/neon-card';
import { NeonButton } from '@/components/ui/neon-button';
import { NeonProgress } from '@/components/ui/neon-progress';

export default function ProfilePage() {
  // Mock user data
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    joinDate: '2023-09-15',
    dosha: {
      vata: 0.6,
      pitta: 0.3,
      kapha: 0.1
    },
    recentRecommendations: [
      {
        id: 1,
        date: '2023-10-12',
        primarySymptom: 'Anxiety',
        treatment: 'Anxiety Relief Protocol'
      },
      {
        id: 2,
        date: '2023-09-28',
        primarySymptom: 'Insomnia',
        treatment: 'Sleep Enhancement Protocol'
      }
    ],
    savedHerbs: [
      {
        id: 1,
        name: 'Ashwagandha',
        notes: 'Taking 500mg daily before bed'
      },
      {
        id: 2,
        name: 'Brahmi',
        notes: 'Using in tea form in the morning'
      }
    ]
  });
  
  const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'settings'>('profile');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-foreground">
          <span className="text-primary neon-glow">User</span> Profile
        </h1>
        
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'profile' 
                ? 'bg-primary/10 text-primary neon-glow' 
                : 'bg-card hover:bg-secondary text-foreground'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'history' 
                ? 'bg-primary/10 text-primary neon-glow' 
                : 'bg-card hover:bg-secondary text-foreground'
            }`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
          <button 
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'settings' 
                ? 'bg-primary/10 text-primary neon-glow' 
                : 'bg-card hover:bg-secondary text-foreground'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
      </div>
      
      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Info Card */}
          <NeonCard className="md:col-span-1">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <h2 className="text-xl font-medium text-foreground mb-1">{user.name}</h2>
              <p className="text-foreground/70 mb-4">{user.email}</p>
              
              <div className="text-sm text-foreground/60">
                Member since {new Date(user.joinDate).toLocaleDateString()}
              </div>
              
              <div className="mt-6 w-full">
                <NeonButton variant="outline" className="w-full">
                  Edit Profile
                </NeonButton>
              </div>
            </div>
          </NeonCard>
          
          {/* Dosha Profile Card */}
          <NeonCard title="Your Dosha Profile" className="md:col-span-2">
            <p className="text-foreground/70 mb-6">
              Your unique Ayurvedic constitution (Prakriti) determines your physical and mental characteristics, as well as your predisposition to certain imbalances.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="font-medium text-foreground">Vata</div>
                  <div className="text-sm text-foreground/70">{Math.round(user.dosha.vata * 100)}%</div>
                </div>
                <NeonProgress value={user.dosha.vata * 100} color="secondary" />
                <p className="text-xs text-foreground/60 mt-1">
                  Air & Ether - Movement, creativity, and change
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="font-medium text-foreground">Pitta</div>
                  <div className="text-sm text-foreground/70">{Math.round(user.dosha.pitta * 100)}%</div>
                </div>
                <NeonProgress value={user.dosha.pitta * 100} color="destructive" />
                <p className="text-xs text-foreground/60 mt-1">
                  Fire & Water - Transformation, metabolism, and intelligence
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="font-medium text-foreground">Kapha</div>
                  <div className="text-sm text-foreground/70">{Math.round(user.dosha.kapha * 100)}%</div>
                </div>
                <NeonProgress value={user.dosha.kapha * 100} color="primary" />
                <p className="text-xs text-foreground/60 mt-1">
                  Earth & Water - Stability, strength, and endurance
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <NeonButton variant="outline">
                Update Dosha Assessment
              </NeonButton>
            </div>
          </NeonCard>
          
          {/* Saved Herbs Card */}
          <NeonCard title="Saved Herbs" className="md:col-span-1">
            {user.savedHerbs.length > 0 ? (
              <div className="space-y-4">
                {user.savedHerbs.map(herb => (
                  <div key={herb.id} className="p-3 bg-secondary/20 rounded-md">
                    <div className="font-medium text-foreground mb-1">{herb.name}</div>
                    <p className="text-sm text-foreground/70">{herb.notes}</p>
                  </div>
                ))}
                
                <NeonButton variant="outline" className="w-full mt-2">
                  Add Herb
                </NeonButton>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-foreground/70 mb-4">No saved herbs yet</p>
                <NeonButton variant="outline">
                  Add Your First Herb
                </NeonButton>
              </div>
            )}
          </NeonCard>
          
          {/* Recent Recommendations Card */}
          <NeonCard title="Recent Recommendations" className="md:col-span-2">
            {user.recentRecommendations.length > 0 ? (
              <div className="space-y-4">
                {user.recentRecommendations.map(rec => (
                  <div key={rec.id} className="p-4 bg-secondary/20 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-foreground mb-1">{rec.treatment}</div>
                        <div className="text-sm text-foreground/70">
                          <span>Primary symptom: {rec.primarySymptom}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(rec.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <NeonButton variant="outline" size="sm">
                        View
                      </NeonButton>
                    </div>
                  </div>
                ))}
                
                <div className="text-center mt-4">
                  <NeonButton variant="outline">
                    View All Recommendations
                  </NeonButton>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-foreground/70 mb-4">No recommendations yet</p>
                <NeonButton href="/recommendation">
                  Get Your First Recommendation
                </NeonButton>
              </div>
            )}
          </NeonCard>
        </div>
      )}
      
      {/* History Tab */}
      {activeTab === 'history' && (
        <NeonCard>
          <h2 className="text-xl font-semibold text-primary mb-6">Recommendation History</h2>
          
          {user.recentRecommendations.length > 0 ? (
            <div className="space-y-6">
              {user.recentRecommendations.map(rec => (
                <div key={rec.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{rec.treatment}</h3>
                      <div className="text-sm text-foreground/70">
                        {new Date(rec.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="bg-secondary/30 px-3 py-1 rounded-full text-sm">
                      {rec.primarySymptom}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <NeonButton variant="outline" size="sm">
                      View Details
                    </NeonButton>
                    <NeonButton variant="outline" size="sm">
                      Download PDF
                    </NeonButton>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground/70 mb-4">No recommendation history available</p>
              <NeonButton href="/recommendation">
                Get Your First Recommendation
              </NeonButton>
            </div>
          )}
        </NeonCard>
      )}
      
      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <NeonCard title="Account Settings">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  value={user.name}
                  onChange={(e) => setUser({...user, name: e.target.value})}
                  className="w-full p-2 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  className="w-full p-2 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div className="pt-4">
                <NeonButton>
                  Save Changes
                </NeonButton>
              </div>
            </div>
          </NeonCard>
          
          <NeonCard title="Password">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">
                  Current Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full p-2 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">
                  New Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full p-2 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1">
                  Confirm New Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full p-2 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div className="pt-4">
                <NeonButton>
                  Update Password
                </NeonButton>
              </div>
            </div>
          </NeonCard>
          
          <NeonCard title="Preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Email Notifications</div>
                  <div className="text-sm text-foreground/70">Receive emails about new recommendations</div>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-secondary/50">
                  <input type="checkbox" className="sr-only peer" id="email-notifications" defaultChecked />
                  <span className="absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-white peer-checked:bg-primary peer-checked:left-6 transition-all"></span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Dark Mode</div>
                  <div className="text-sm text-foreground/70">Use dark theme</div>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-secondary/50">
                  <input type="checkbox" className="sr-only peer" id="dark-mode" defaultChecked />
                  <span className="absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-white peer-checked:bg-primary peer-checked:left-6 transition-all"></span>
                </div>
              </div>
              
              <div className="pt-4">
                <NeonButton>
                  Save Preferences
                </NeonButton>
              </div>
            </div>
          </NeonCard>
          
          <div className="flex justify-end">
            <NeonButton variant="outline" className="text-destructive border-destructive hover:bg-destructive/10">
              Delete Account
            </NeonButton>
          </div>
        </div>
      )}
    </div>
  );
}
