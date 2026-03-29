import Image from "next/image";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Sevenzo Petros Kudakwashe - Data Scientist | Software Developer | Web Developer | Graphic Designer",
  description: "Passionate Data Scientist & Software Developer building innovative digital solutions. Specializing in AI, machine learning, full-stack development, and graphic design.",
  keywords: ["Data Scientist", "Software Developer", "Web Developer", "Graphic Designer", "AI", "Machine Learning", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Sevenzo Petros Kudakwashe" }],
  openGraph: {
    title: "Sevenzo Petros Kudakwashe - Portfolio",
    description: "Data Scientist & Software Developer specializing in AI, web development, and graphic design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sevenzo Petros Kudakwashe - Portfolio",
    description: "Data Scientist & Software Developer specializing in AI, web development, and graphic design.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans font-roboto">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-helvetica-neue text-xl font-bold">Sevenzo Petros Kudakwashe</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="font-futura text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Sevenzo Petros Kudakwashe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Passionate Data Scientist & Software Developer building innovative digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full border-2 border-cyan-500 text-cyan-600 bg-transparent px-8 py-3 font-medium transition-all hover:bg-cyan-500 hover:text-white"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-gray-700 mb-4">
                I&#39;m a passionate software developer with a keen eye for creating exceptional digital experiences. 
                My journey in tech has been driven by curiosity and a desire to solve meaningful problems through code.
              </p>
              <p className="text-gray-700 mb-6">
                I specialize in modern web technologies and enjoy working on projects that challenge me to learn and grow. 
                When I&#39;m not coding, you&#39;ll find me exploring new technologies or contributing to open-source projects. I architect scalable mobile applications and deliver compelling web solutions with integrated graphics design. Beyond development, I&#39;m dedicated to advancing AI research and contributing to innovative open-source initiatives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-800">Email:</span>
                  <a href="mailto:kudakwashesevenzo1@gmail.com" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    kudakwashesevenzo1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-800">Phone:</span>
                  <a href="tel:+263780068789" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    +263 780 068 789
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/me.jpg"
                  alt="Sevenzo Petros"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Curriculum Vitae</h2>
            <p className="text-gray-700 mb-8">
              Download my CV to learn more about my professional experience, skills, and qualifications.
            </p>
            <a
              href="/SEVENZO PETROS K CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              Download CV
            </a>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 border border-cyan-200 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-futura text-xl font-semibold mb-2 text-gray-800">SEVENZO PETROS KUDAKWASHE</h3>
              <p className="text-gray-600 mb-4">Data Scientist | Software Developer | Web Developer | Graphic Designer</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  kudakwashesevenzo1@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +263 780 068 789
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-helvetica-neue text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-futura font-semibold text-lg mb-4 text-purple-700">Data Science & AI</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
            <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-futura font-semibold text-lg mb-4 text-blue-700">Web Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
            <div className="bg-white border border-cyan-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-futura font-semibold text-lg mb-4 text-cyan-700">Mobile Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
            <div className="bg-white border border-pink-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-futura font-semibold text-lg mb-4 text-pink-700">Graphics & Design</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
                  <p className="text-sm text-gray-700">Developed scalable web applications using React, Node.js, Wix and cloud technologies. Led mobile app development initiatives.</p>
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
                    <p className="text-sm text-gray-700">Developed scalable web applications using React, Node.js, Wix and cloud technologies. Led mobile app development initiatives.</p>
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
              href="mailto:kudakwashesevenzo1@gmail.com" 
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
