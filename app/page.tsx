'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Navigation />
      <div className="stars"></div>
      
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="text-center z-10 px-4">
          <div 
            className="jupiter-orbit inline-block mb-8"
            style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full jupiter-gradient jupiter-glow relative">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-300 via-red-400 to-brown-600 opacity-60"></div>
              <div className="absolute top-1/4 left-1/4 w-20 h-16 bg-red-600 rounded-full opacity-70 blur-sm"></div>
              <div className="absolute bottom-1/3 right-1/4 w-16 h-12 bg-orange-400 rounded-full opacity-60 blur-sm"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-red-400 to-yellow-200 bg-clip-text text-transparent">
            Jupiter
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            The King of Planets • Largest World in Our Solar System • A Giant Among Giants
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/data"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 text-center"
            >
              Explore Jupiter Data
            </Link>
            <Link 
              href="/3d"
              className="px-8 py-4 border-2 border-orange-400 rounded-full font-semibold hover:bg-orange-400 hover:text-black transition-all text-center"
            >
              Interactive 3D Model
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="explore" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Explore the Giant
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/data" className="group">
              <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/30 backdrop-blur-sm h-full hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-300 group-hover:text-orange-200">Massive Scale</h3>
                <p className="text-gray-300">
                  Jupiter is so large that all other planets in the solar system could fit inside it. 
                  Its diameter is about 88,846 miles (142,984 kilometers).
                </p>
              </div>
            </Link>
            
            <Link href="/great-red-spot" className="group">
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm h-full hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-2xl font-bold mb-4 text-red-300 group-hover:text-red-200">Great Red Spot</h3>
                <p className="text-gray-300">
                  A giant storm that has been raging for hundreds of years, larger than Earth itself. 
                  This anticyclone spins counterclockwise with wind speeds exceeding 400 mph.
                </p>
              </div>
            </Link>
            
            <Link href="/moons" className="group">
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-8 rounded-2xl border border-yellow-500/30 backdrop-blur-sm h-full hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300 group-hover:text-yellow-200">Galilean Moons</h3>
                <p className="text-gray-300">
                  Jupiter has 95 known moons, including the four largest discovered by Galileo: 
                  Io, Europa, Ganymede, and Callisto.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
            Discover Jupiter's Wonders
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/3d" className="group">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all">
                <h3 className="text-xl font-bold text-blue-300 mb-3 group-hover:text-blue-200">3D Interactive Model</h3>
                <p className="text-gray-300">Explore Jupiter's surface features with our interactive 3D visualization</p>
              </div>
            </Link>
            
            <Link href="/weather" className="group">
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm hover:scale-105 transition-all">
                <h3 className="text-xl font-bold text-green-300 mb-3 group-hover:text-green-200">Weather & Atmosphere</h3>
                <p className="text-gray-300">Learn about Jupiter's extreme weather patterns and atmospheric layers</p>
              </div>
            </Link>
            
            <Link href="/missions" className="group">
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-orange-500/30 backdrop-blur-sm hover:scale-105 transition-all">
                <h3 className="text-xl font-bold text-orange-300 mb-3 group-hover:text-orange-200">Space Missions</h3>
                <p className="text-gray-300">Discover the history of spacecraft that have explored Jupiter</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="facts" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent">
            Astonishing Facts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-300">Fastest Rotation</h4>
                  <p className="text-gray-300">Jupiter rotates once every 9.9 hours, creating the shortest day of any planet.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-red-300">Gas Giant</h4>
                  <p className="text-gray-300">Made mostly of hydrogen and helium, Jupiter has no solid surface.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300">Magnetic Field</h4>
                  <p className="text-gray-300">Jupiter's magnetic field is 14 times stronger than Earth's.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-300">Ancient Planet</h4>
                  <p className="text-gray-300">Jupiter formed over 4.5 billion years ago, making it one of the oldest planets.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-red-300">Protective Shield</h4>
                  <p className="text-gray-300">Jupiter's gravity protects inner planets from many asteroids and comets.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300">Weight on Jupiter</h4>
                  <p className="text-gray-300">If you could stand on Jupiter, you'd weigh 2.4 times your Earth weight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-4 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Jupiter • The King of Planets</p>
          <p className="text-sm text-gray-500 mb-6">Exploring the wonders of our solar system's largest world</p>
          <div className="flex justify-center space-x-6">
            <Link href="/data" className="text-gray-400 hover:text-orange-300 transition-colors">Data</Link>
            <Link href="/3d" className="text-gray-400 hover:text-orange-300 transition-colors">3D Model</Link>
            <Link href="/moons" className="text-gray-400 hover:text-orange-300 transition-colors">Moons</Link>
            <Link href="/great-red-spot" className="text-gray-400 hover:text-orange-300 transition-colors">Great Red Spot</Link>
            <Link href="/weather" className="text-gray-400 hover:text-orange-300 transition-colors">Weather</Link>
            <Link href="/missions" className="text-gray-400 hover:text-orange-300 transition-colors">Missions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
