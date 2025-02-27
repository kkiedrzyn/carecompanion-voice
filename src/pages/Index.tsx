
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Bell, Sparkles, Users, ArrowRight, Shield, Layout } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate('/family');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <main className="min-h-screen bg-white">
      <div className="relative min-h-screen bg-gradient-to-br from-[#F97316] via-[#EA580C] to-[#9A3412] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex justify-between pt-6 sm:pt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white -tracking-wide" style={{ fontFamily: 'Crimson Text, serif' }}>
              neighbour
            </h2>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-white hover:text-white/80 hover:bg-white/10 animate-fade-in rounded-full text-base sm:text-lg"
            >
              Log in
            </Button>
          </nav>
        </div>

        <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-80px)] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Intelligent Care <br />for Your Family
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-lg">
                Personalized AI companion that brings comfort and connection to your loved ones
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/signup')}
                  className="bg-white text-primary hover:bg-white/90 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-full sm:w-auto"
                >
                  Try Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/demo')}
                  className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-primary text-white hover:bg-primary/90 rounded-full w-full sm:w-auto"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className={`relative h-[300px] sm:h-[400px] md:h-[500px] transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[280px] sm:w-[320px] md:w-[400px] h-[280px] sm:h-[320px] md:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute inset-8 bg-gradient-to-br from-white/60 to-white/30 rounded-full blur-xl animate-pulse [animation-delay:1s]" />
                  <div className="absolute inset-16 bg-gradient-to-br from-white/80 to-white/40 rounded-full blur-lg animate-pulse [animation-delay:2s]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-xl sm:text-2xl font-medium text-white" style={{ fontFamily: 'Crimson Text, serif' }}>
                      Hi, neighbour
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-[#FEC6A1]/5 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Empathetic Voice Assistance",
                description: "Your personal neighbor is always ready to help using natural, easy-to-understand language."
              },
              {
                icon: <Bell className="h-8 w-8" />,
                title: "Dynamic Daily Reminders",
                description: "Get timely alerts for medication intake, doctor appointments, and daily check-ins—all personalized from your live data."
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Real-Time Updates",
                description: "Stay informed with up-to-date weather, news, and event notifications to help you plan your day."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Family Connectivity",
                description: "Never miss a birthday or special moment. Receive reminders about family events and stay connected with your loved ones."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Emergency Support",
                description: "In urgent situations, your neighbor promptly suggests contacting family or emergency services for immediate assistance."
              },
              {
                icon: <Layout className="h-8 w-8" />,
                title: "User-Friendly Interface",
                description: "Enjoy a modern, high-contrast design with large, accessible buttons, making navigation and interaction effortless."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#FEC6A1]/20 hover:border-[#F97316]/30 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{ 
                  animationDelay: `${600 + index * 200}ms`,
                  background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(254,198,161,0.1) 100%)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 via-transparent to-[#FEC6A1]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#FEC6A1] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="bg-gradient-to-br from-[#F97316] to-[#FEC6A1] rounded-xl p-3 sm:p-4 w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative">
                      {React.cloneElement(feature.icon, {
                        className: `h-6 w-6 sm:h-8 sm:w-8 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`
                      })}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-[#F97316] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/20 to-[#F97316]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced luminous orbs background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? '#F97316' : '#FEC6A1'} 0%, transparent 70%)`,
                width: `${300 + i * 80}px`,
                height: `${300 + i * 80}px`,
                top: `${10 + i * 20}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${8 + i * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      <footer className="bg-gradient-to-b from-[#FEC6A1]/5 to-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#F97316]" style={{ fontFamily: 'Crimson Text, serif' }}>
                neighbour
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Bringing comfort and connection to your loved ones
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Product</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Features</Button></li>
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Security</Button></li>
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">How it Works</Button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">About</Button></li>
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Blog</Button></li>
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Contact</Button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Privacy</Button></li>
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Terms</Button></li>
                <li><Button variant="link" className="text-sm sm:text-base text-gray-600 hover:text-[#F97316] p-0 h-auto">Cookies</Button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-center text-sm sm:text-base text-gray-600">
              © {new Date().getFullYear()} neighbour. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
