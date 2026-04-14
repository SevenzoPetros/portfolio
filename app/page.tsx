"use client";

import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      setScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ["about", "skills", "experience", "education", "projects", "contact"];
      const scrollPositionWithOffset = scrollPosition + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const parallaxOffset = scrollY * 0.5;
  const mouseOffsetX = typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.01 : 0;
  const mouseOffsetY = typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) * 0.01 : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="particle w-2 h-2 bg-blue-400/30 rounded-full" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="particle w-3 h-3 bg-cyan-400/30 rounded-full" style={{ left: '30%', animationDelay: '2s' }}></div>
          <div className="particle w-2 h-2 bg-purple-400/30 rounded-full" style={{ left: '50%', animationDelay: '4s' }}></div>
          <div className="particle w-4 h-4 bg-pink-400/30 rounded-full" style={{ left: '70%', animationDelay: '6s' }}></div>
          <div className="particle w-2 h-2 bg-blue-400/30 rounded-full" style={{ left: '90%', animationDelay: '8s' }}></div>
        </div>
        
        {/* Complex loader */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full complex-loader"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-cyan-200 border-b-cyan-600 rounded-full complex-loader" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }}></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full morph-blob"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="split-text text-gray-600 text-sm">
            <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans font-roboto scroll-smooth overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50 transition-all duration-300 ${scrolled ? "py-2 shadow-lg" : "py-4"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/me.jpg"
              alt="Sevenzo Petros Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-500 shadow-lg"
            />
            <div className="font-helvetica-neue text-xl font-bold">Sevenzo Petros Kudakwashe</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${activeSection === "about" ? "text-blue-600 font-semibold" : ""}`}
              style={{
                animation: activeSection === "about" ? 'bounce 2s infinite' : 'none',
                WebkitAnimation: activeSection === "about" ? 'bounce 2s infinite' : 'none'
              }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${activeSection === "skills" ? "text-blue-600 font-semibold" : ""}`}
              style={{
                animation: activeSection === "skills" ? 'bounce 2s infinite' : 'none',
                WebkitAnimation: activeSection === "skills" ? 'bounce 2s infinite' : 'none'
              }}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${activeSection === "experience" ? "text-blue-600 font-semibold" : ""}`}
              style={{
                animation: activeSection === "experience" ? 'bounce 2s infinite' : 'none',
                WebkitAnimation: activeSection === "experience" ? 'bounce 2s infinite' : 'none'
              }}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("education")}
              className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${activeSection === "education" ? "text-blue-600 font-semibold" : ""}`}
              style={{
                animation: activeSection === "education" ? 'bounce 2s infinite' : 'none',
                WebkitAnimation: activeSection === "education" ? 'bounce 2s infinite' : 'none'
              }}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${activeSection === "projects" ? "text-blue-600 font-semibold" : ""}`}
              style={{
                animation: activeSection === "projects" ? 'bounce 2s infinite' : 'none',
                WebkitAnimation: activeSection === "projects" ? 'bounce 2s infinite' : 'none'
              }}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className={`text-muted-foreground hover:text-foreground transition-all duration-300 ${activeSection === "contact" ? "text-blue-600 font-semibold" : ""}`}
              style={{
                animation: activeSection === "contact" ? 'bounce 2s infinite' : 'none',
                WebkitAnimation: activeSection === "contact" ? 'bounce 2s infinite' : 'none'
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Advanced Parallax */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center perspective-container">
        {/* Advanced background parallax elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Morphing blobs */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 morph-blob blur-3xl"
            style={{
              transform: `translate(${mouseOffsetX * 3}px, ${mouseOffsetY * 3 + parallaxOffset * 1.5}px)`,
            }}
          ></div>
          <div 
            className="absolute right-0 top-32 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 morph-blob blur-3xl"
            style={{
              transform: `translate(${-mouseOffsetX * 2 + parallaxOffset * 1.2}px, ${mouseOffsetY * 2}px)`,
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute left-1/4 bottom-20 w-64 h-64 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 morph-blob blur-3xl"
            style={{
              transform: `translate(${mouseOffsetX * 2.5}px, ${-mouseOffsetY * 2.5 + parallaxOffset * 0.8}px)`,
              animationDelay: '4s'
            }}
          ></div>
          
          {/* Floating particles */}
          <div className="particle w-1 h-1 bg-blue-400/50 rounded-full" style={{ left: '15%', animationDelay: '1s' }}></div>
          <div className="particle w-2 h-2 bg-cyan-400/50 rounded-full" style={{ left: '45%', animationDelay: '3s' }}></div>
          <div className="particle w-1 h-1 bg-purple-400/50 rounded-full" style={{ left: '75%', animationDelay: '5s' }}></div>
          <div className="particle w-3 h-3 bg-pink-400/50 rounded-full" style={{ left: '85%', animationDelay: '7s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 
              className="font-futura text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent glitch-hover timeline-reveal"
              style={{
                transform: `translateY(${parallaxOffset * 0.3}px) rotateX(${scrollY * 0.01}deg)`,
                opacity: 1 - scrollY * 0.001,
                textShadow: scrollY > 100 ? '0 0 30px rgba(59, 130, 246, 0.5)' : 'none'
              }}
            >
              Sevenzo Petros Kudakwashe
            </h1>
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto timeline-reveal"
              style={{
                transform: `translateY(${parallaxOffset * 0.5}px) rotateX(${scrollY * 0.005}deg)`,
                opacity: 1 - scrollY * 0.001,
                animationDelay: '0.3s'
              }}
            >
              Passionate Data Scientist & Software Developer building innovative digital solutions
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{
                transform: `translateY(${parallaxOffset * 0.7}px)`,
                opacity: 1 - scrollY * 0.001
              }}
            >
              <button 
                onClick={() => scrollToSection("projects")}
                className="group magnetic-button liquid-button inline-flex items-center justify-center border-2 border-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 font-medium relative overflow-hidden hover-glow-3d timeline-reveal"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 animate-bounce">View Projects</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="group magnetic-button liquid-button inline-flex items-center justify-center border-2 border-cyan-500 text-cyan-600 bg-transparent px-8 py-3 font-medium relative overflow-hidden hover-glow-3d timeline-reveal"
              >
                <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 animate-bounce">Get In Touch</span>
                <div className="absolute inset-0 bg-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity: 1 - scrollY * 0.002 }}
        >
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Me</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  I&#39;m a passionate software developer with a keen eye for creating exceptional digital experiences. 
                  My journey in tech has been driven by curiosity and a desire to solve meaningful problems through code.
                </p>
                <p className="text-gray-700">
                  I specialize in modern web technologies and enjoy working on projects that challenge me to learn and grow. 
                  When I&#39;m not coding, you&#39;ll find me exploring new technologies or contributing to open-source projects. I architect scalable mobile applications and deliver compelling web solutions with integrated graphics design. Beyond development, I&#39;m dedicated to advancing AI research and contributing to innovative open-source initiatives.
                </p>
              </div>
              <div className="space-y-3">
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/50 hover:border-blue-400 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Email:</span>
                    <a href="mailto:kudakwashesevenzo1@gmail.com" className="text-sm text-blue-600 hover:text-blue-700 font-medium block">
                      kudakwashesevenzo1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/50 hover:border-blue-400 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Phone:</span>
                    <a href="tel:+263780068789" className="text-sm text-blue-600 hover:text-blue-700 font-medium block">
                      +263 780 068 789
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="group relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/me.jpg"
                  alt="Sevenzo Petros"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <div id="cv" style={{ 
        backgroundColor: '#1e293b', 
        padding: '80px 20px',
        minHeight: '400px'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ 
              fontFamily: 'Helvetica Neue, Arial, sans-serif', 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#f8fafc', 
              marginBottom: '20px' 
            }}>
              My Curriculum Vitae
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#cbd5e1', 
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              Download my CV to learn more about my professional experience, skills, and qualifications.
            </p>
            <a
              href="/SEVENZO PETROS K CV.pdf"
              download
              style={{ 
                background: 'linear-gradient(to right, #06b6d4, #3b82f6)', 
                color: '#ffffff', 
                padding: '15px 35px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '16px',
                fontWeight: '500',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)',
                animation: 'bounce 2s infinite',
                WebkitAnimation: 'bounce 2s infinite'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(6, 182, 212, 0.4)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.3)';
              }}
            >
              Download CV
            </a>
          </div>
          
          <div style={{ 
            backgroundColor: '#334155', 
            border: '1px solid #475569', 
            borderRadius: '16px', 
            padding: '40px', 
            textAlign: 'center',
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '30px' 
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #1e3a8a, #1e40af)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}>
                <svg style={{ width: '40px', height: '40px', color: '#60a5fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            <div>
              <h3 style={{ 
                fontFamily: 'Futura, Arial, sans-serif', 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#f8fafc', 
                marginBottom: '12px' 
              }}>
                SEVENZO PETROS KUDAKWASHE
              </h3>
              <p style={{ 
                fontSize: '18px', 
                color: '#cbd5e1', 
                marginBottom: '24px',
                lineHeight: '1.5'
              }}>
                Data Scientist | Software Developer | Web Developer | Graphic Designer
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px', 
                justifyContent: 'center',
                fontSize: '16px',
                color: '#cbd5e1'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <svg style={{ width: '20px', height: '20px', color: '#60a5fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>kudakwashesevenzo1@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <svg style={{ width: '20px', height: '20px', color: '#60a5fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+263 780 068 789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-futura font-semibold text-lg text-purple-700">Data Science & AI</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">Machine Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">Deep Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">Data Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">Data Visualization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700">Model Training & Testing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-futura font-semibold text-lg text-blue-700">Web Development</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">React & Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Node.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Wix</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">HTML/CSS/Tailwind</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">REST APIs</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-futura font-semibold text-lg text-cyan-700">Mobile Development</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span className="text-gray-700">React Native</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span className="text-gray-700">Flutter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span className="text-gray-700">iOS Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span className="text-gray-700">Android Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span className="text-gray-700">Cross-Platform Apps</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="font-futura font-semibold text-lg text-pink-700">Graphics & Design</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="text-gray-700">UI/UX Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="text-gray-700">Adobe Creative Suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="text-gray-700">Figma</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="text-gray-700">3D Modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="text-gray-700">Animation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Professional Experience</h2>
          
          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-cyan-300 to-purple-300"></div>
            <div className="space-y-8">
              <div className="relative flex items-start gap-6">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>
                <div className="flex-1 bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-futura font-semibold text-lg text-blue-700 mb-2">Data Scientist</h3>
                  <p className="text-sm text-gray-700 mb-2">Synapse Technologies Pvt Ltd.</p>
                  <p className="text-sm text-gray-700 mb-3">2024 - Present</p>
                  <p className="text-sm text-gray-700">Leading AI model development and optimization projects. Implementing machine learning solutions for business challenges.</p>
                </div>
              </div>
              
              <div className="relative flex items-start gap-6">
                <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>
                <div className="flex-1 bg-white border border-cyan-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-futura font-semibold text-lg text-cyan-700 mb-2">Web Developer</h3>
                  <p className="text-sm text-gray-700 mb-2">HomeFixGroup Pty Ltd.</p>
                  <p className="text-sm text-gray-700 mb-3">2025</p>
                  <p className="text-sm text-gray-700 mb-4">Developed scalable web applications using React, Node.js, Wix and cloud technologies. Led mobile app development initiatives.</p>
                  <a
                    href="https://homefixgroup.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 via-cyan-300 to-purple-300"></div>
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <h3 className="font-futura font-semibold text-lg text-blue-700 mb-2">Data Scientist</h3>
                    <p className="text-sm text-gray-700 mb-2">Synapse Technologies Pvt Ltd.</p>
                    <p className="text-sm text-gray-700 mb-3">2024 - Present</p>
                    <p className="text-sm text-gray-700">Leading AI model development and optimization projects. Implementing machine learning solutions for business challenges.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-5/12 pl-8"></div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-5/12 pr-8"></div>
                <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white border border-cyan-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <h3 className="font-futura font-semibold text-lg text-cyan-700 mb-2">Web Developer</h3>
                    <p className="text-sm text-gray-700 mb-2">HomeFixGroup Pty Ltd.</p>
                    <p className="text-sm text-gray-700 mb-3">2025</p>
                    <p className="text-sm text-gray-700 mb-4">Developed scalable web applications using React, Node.js, Wix and cloud technologies. Led mobile app development initiatives.</p>
                    <a
                        href="https://homefixgroup.co.za"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        Visit Website
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-futura font-semibold text-lg text-blue-700 mb-2">Bachelor of Commerce in Data Science and Informatics</h3>
                  <p className="text-sm text-gray-700 mb-2">Midlands State University</p>
                  <p className="text-sm text-gray-700 mb-3">2021 - 2025</p>
                  <p className="text-sm text-gray-700">Specialized in Artificial Intelligence and Machine Learning. Graduated with Upper Second Class Honors.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-futura font-semibold text-lg text-purple-700 mb-2">Master Of Commerce in Information Systems Management</h3>
                  <p className="text-sm text-gray-700 mb-2">Midlands State University</p>
                  <p className="text-sm text-gray-700 mb-3">2026 - 2027</p>
                  <p className="text-sm text-gray-700">Advanced studies in strategic information systems, digital transformation, and enterprise architecture. Focus on aligning technology solutions with business objectives for organizational growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 hover:border-cyan-300">
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-futura text-xl font-semibold mb-2">Fairness AI Insights</h3>
              <p className="text-gray-700 mb-4">
                An AI-powered platform for analyzing dataset fairness across demographic groups with interactive visualizations and bias detection. Features model training management, real-time fairness metrics, and comprehensive bias analysis tools.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">Tailwind</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">Recharts</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 hover:border-cyan-300">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-futura text-xl font-semibold mb-2">HomeFixGroup Web Application</h3>
              <p className="text-gray-700 mb-4">
                Developed a comprehensive web application for HomeFixGroup Pty Ltd, a professional home services platform. Features include service booking, customer management, real-time notifications, and integrated payment processing. Built with modern web technologies for optimal performance and user experience.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-medium">Wix</span>
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-medium">HTML/CSS</span>
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-medium">API Integration</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 hover:border-cyan-300">
              <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-futura text-xl font-semibold mb-2">Personal Portfolio Website</h3>
              <p className="text-gray-700 mb-4">
                Designed and developed a modern, responsive portfolio website showcasing professional experience, projects, and technical skills. Features smooth animations, gradient designs, and optimized performance with SEO best practices.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold mb-6 text-gray-800">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you&apos;d like to collaborate or just have a chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kudakwashesevenzo1@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Sevenzo,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20..." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href="tel:+263780068789" 
              className="inline-flex items-center justify-center rounded-full border-2 border-cyan-500 text-cyan-600 bg-transparent px-8 py-3 font-medium transition-all hover:bg-cyan-500 hover:text-white"
            >
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            2024 Sevenzo Petros Kudakwashe. All rights reserved.
          </p>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
