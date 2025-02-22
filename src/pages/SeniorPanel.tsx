
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const SeniorPanel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [panelData, setPanelData] = useState<any>(null);

  useEffect(() => {
    const fetchPanelData = async () => {
      const { data, error } = await supabase
        .from('panels')
        .select('*, family_members(*)')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching panel data:', error);
        return;
      }

      console.log('Fetched panel data:', data);
      setPanelData(data);
    };

    fetchPanelData();
  }, [id]);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="convai-widget"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[src*="convai-widget"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Get the primary family member's name
  const primaryFamilyName = panelData?.family_members?.[0]?.name || 'there';

  return (
    <>
      <Button 
        variant="ghost" 
        className="fixed top-4 left-4 z-[9999] text-white flex items-center gap-2 hover:bg-white/10"
        onClick={() => navigate('/family')}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Family Panel
      </Button>

      <div className="min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#0006] animate-gradient z-0"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradient 15s ease infinite',
          }}
        />
        
        <div className="relative z-10 min-h-screen">
          <div className="container mx-auto px-4 h-[calc(100vh-2rem)] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
              <div className="text-center md:text-left order-2 md:order-1">
                <h1 
                  className={cn(
                    "text-4xl md:text-6xl font-bold text-white",
                    "opacity-0 animate-fade-in"
                  )}
                  style={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    animationDelay: '0.4s',
                    animationFillMode: 'forwards'
                  }}
                >
                  Welcome {primaryFamilyName},
                  <br />
                  <span className="text-orange-200">I'm your neighbor</span>
                </h1>
              </div>

              <div className="animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
                <elevenlabs-convai 
                  agent-id="xUPvftKCr58LTe0Ffz5m"
                  style={{ width: '100%', height: '600px' }}
                ></elevenlabs-convai>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeniorPanel;
