import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Search,
  Tag,
  Calendar,
  Shield,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Brain
} from 'lucide-react';
import './App.css';

// CV Data
const cvData = {
  personal: {
    name: "Uddip Ranjan Das",
    location: "New Delhi, India",
    phone: "+91 9311237276",
    email: "contact@uddip.dev", // placeholder, you can update
    linkedin: "https://linkedin.com/in/uddip-das", // placeholder
    twitter: "https://twitter.com/uddip_das", // placeholder
    github: "https://github.com/uddip", // placeholder
    blog: "https://blog.uddip.dev" // placeholder
  },
  summary: "Cybersecurity Specialist with 5+ years of experience across threat intelligence, malware analysis, and SOC operations. Proven success managing security for clients with 2000+ endpoints, reducing response times, and enhancing detection efficiency. Skilled in malware research, APT hunting, and SIEM/SOAR optimization. Published writer and strategic thinker with strong technical and communication skills.",
  experience: [
    {
      title: "Writer & CTI Analyst",
      company: "The CTI Dispatch",
      period: "June 2025 – Present",
      description: "My own publication of weekly editions of curated CTI news and analysis, along with special bulletins of high impact events."
    },
    {
      title: "Senior SOC Analyst & CTI Analyst",
      company: "Versprite Cybersecurity",
      period: "March 2023 – June 2025",
      description: [
        "Led 6+ cyber threat intelligence projects across 8 clients, identifying 20+ critical risks.",
        "Delivered security for clients with 2000+ endpoints; average investigation time <15 mins, response time <30 secs.",
        "Managed 3 clients simultaneously, improving SOC workflows by 65% and reducing false positives by 40%.",
        "Published 4 technical blogs and 25+ weekly threat intel newsletters consumed by marketing team, clients and stakeholders.",
        "Participated in APT threat hunting, enabling early detection of 7+ threat groups.",
        "Analyzed 10,000+ security logs/month via Stellar Cyber, D3, Cybereason, SentinelOne, and Rapid7; mitigated 500+ intrusions/vulnerabilities.",
        "Streamlined IR processes with Blue Teams, enhancing detection precision by 25% and reducing false alerts by 30%."
      ]
    },
    {
      title: "Senior SOC Analyst",
      company: "Versprite Cybersecurity",
      period: "March 2022 – March 2023",
      description: [
        "Monitored and triaged 3000+ alerts/month for 2 enterprise clients using SentinelOne and Rapid7.",
        "Tuned SIEM detection rules and developed dashboards, improving signal-to-noise ratio by 35%.",
        "Conducted malware investigations and supported RCA documentation for weekly incident reports.",
        "Collaborated with Blue Teams to escalate and resolve P1 incidents within SLA, maintaining 98% on-time resolution."
      ]
    },
    {
      title: "Security Research Intern",
      company: "Versprite Cybersecurity",
      period: "December 2021 – February 2022",
      description: [
        "Performed malware analysis and system hardening using Windows Internals.",
        "Conducted OSINT-driven threat hunting for training and internal use cases."
      ]
    },
    {
      title: "Security Researcher",
      company: "Ministry of Defence of India",
      period: "August 2021 – December 2021",
      description: [
        "Contributed to 5+ cyber defense initiatives, performing malware triage and delivering technical assessments.",
        "Participated in Blue Team simulations involving nation-state threats; identified 12+ IOCs linked to APT actors.",
        "Delivered weekly intelligence updates and final reports to defense cybersecurity leadership."
      ]
    },
    {
      title: "Information Security Analyst",
      company: "Innefu Labs Pvt. Ltd.",
      period: "December 2019 – July 2020",
      description: [
        "Managed endpoint defense and vulnerability scans across 1500+ nodes.",
        "Generated 20+ risk assessment and vulnerability reports with actionable remediation plans.",
        "Enhanced detection efficiency in internal Blue Team lab by implementing MITRE ATT&CK-based playbooks.",
        "Coordinated patching cycles and tracked resolution metrics, achieving >90% patch compliance."
      ]
    },
    {
      title: "Information Security Trainee",
      company: "Innobuzz Knowledge Solutions",
      period: "July 2018 – July 2019",
      description: [
        "Conducted penetration testing and web application security training for students."
      ]
    }
  ],
  skills: {
    "Threat Intel & OSINT": ["APT tracking", "geopolitical analysis", "Intelx", "Maltego"],
    "SOC & SIEM": ["Stellar Cyber", "D3", "SentinelOne", "Cybereason", "Rapid7", "Qualys"],
    "Malware Analysis": ["Static & dynamic reverse engineering"],
    "IR & Detection": ["Incident response", "log analysis", "MITRE ATT&CK", "IDS tuning"],
    "Soft Skills": ["Technical writing", "cross-functional collaboration"]
  },
  education: [
    {
      degree: "Bachelor of Arts",
      school: "Subharti University, New Delhi",
      period: "2020 – 2023"
    },
    {
      degree: "Senior Secondary (CBSE)",
      school: "Indirapuram Public School, Ghaziabad",
      period: "2016 – 2017"
    }
  ],
  certifications: [
    "Cybereason: Cyber Threat Intelligence Analyst",
    "Pentester Academy: Certified Red Team Professional",
    "D3 Security: SOC Analyst",
    "Innobuzz: Advanced InfoSec Diploma"
  ],
  achievements: [
    "Reverse Engineering by U.S. Department of Homeland Security",
    "SOC Core Skills by Wild West Hack Fest",
    "Top 1% on TryHackMe and Hack The Box",
    "Contributor to PolyX and Operation Chimera",
    "Intel 471: Intelligence Planning Workshop",
    "Flare Academy Training-Cybercrime Forums: Investigation and Intelligence Gathering"
  ],
  interests: [
    "Building and experimenting with custom hardware and tech setups",
    "Engaging in cybersecurity challenges and Capture the Flag (CTF) events",
    "Exploring off-road travel and customizing 4x4 vehicles—hands-on problem-solving in motion",
    "Dog lover and advocate for animal welfare"
  ]
};

// Sample blog posts data - this would normally come from your posts folder
const samplePosts = [
  {
    id: 1,
    title: "Advanced APT Detection Techniques",
    date: "2025-06-15",
    tags: ["APT", "Threat Hunting", "SOC"],
    category: "Threat Intelligence",
    excerpt: "Deep dive into advanced persistent threat detection methodologies and their implementation in modern SOC environments.",
    content: `# Advanced APT Detection Techniques

## Introduction

Advanced Persistent Threats (APTs) represent one of the most sophisticated challenges in cybersecurity today. This post explores cutting-edge detection techniques and methodologies.

## Key Detection Strategies

### 1. Behavioral Analysis
- **Anomaly Detection**: Looking for deviations from baseline behavior
- **Process Chain Analysis**: Tracking process genealogy for suspicious patterns
- **Network Flow Analysis**: Identifying unusual communication patterns

### 2. Intelligence-Driven Hunting
- **IOC Matching**: Using threat intelligence feeds
- **TTP Analysis**: Focusing on tactics, techniques, and procedures
- **Attribution Analysis**: Connecting indicators to known threat actors

## Implementation in SOC

\`\`\`python
# Example detection rule for APT activity
def detect_apt_activity(process_chain, network_flows):
    suspicious_score = 0
    
    # Check for living-off-the-land techniques
    if contains_lolbins(process_chain):
        suspicious_score += 30
    
    # Check for C2 communication patterns
    if has_beacon_pattern(network_flows):
        suspicious_score += 40
    
    return suspicious_score > 50
\`\`\`

## Conclusion

Effective APT detection requires a multi-layered approach combining threat intelligence, behavioral analysis, and advanced hunting techniques.`
  },
  {
    id: 2,
    title: "MITRE ATT&CK Framework Implementation",
    date: "2025-06-10",
    tags: ["MITRE", "Framework", "Implementation"],
    category: "Security Operations",
    excerpt: "Practical guide to implementing MITRE ATT&CK framework in your security operations center.",
    content: `# MITRE ATT&CK Framework Implementation

## Overview

The MITRE ATT&CK framework provides a comprehensive knowledge base of adversary tactics and techniques...

## Implementation Steps

1. **Assessment Phase**
2. **Mapping Current Capabilities**
3. **Gap Analysis**
4. **Implementation Planning**

This framework has revolutionized how we approach threat detection and response.`
  },
  {
    id: 3,
    title: "Malware Analysis Deep Dive",
    date: "2025-06-01",
    tags: ["Malware", "Reverse Engineering", "Analysis"],
    category: "Research",
    excerpt: "Comprehensive guide to malware analysis techniques including static and dynamic analysis methods.",
    content: `# Malware Analysis Deep Dive

## Static Analysis Techniques

Static analysis involves examining malware without executing it...

## Dynamic Analysis Methods

Dynamic analysis requires running malware in a controlled environment...

## Tools and Techniques

- **IDA Pro**: For disassembly and reverse engineering
- **Wireshark**: For network traffic analysis
- **Process Monitor**: For system activity monitoring`
  }
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-cyan-400">
            {cvData.personal.name}
          </div>
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <Shield className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-cyan-400">{cvData.personal.name.split(' ')[0]}</span>{' '}
          <span className="text-gray-300">{cvData.personal.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Cybersecurity Specialist • Threat Intelligence Analyst • Malware Researcher
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
            SOC Operations
          </span>
          <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
            APT Hunting
          </span>
          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
            Malware Analysis
          </span>
        </div>
        <div className="flex justify-center space-x-6">
          <a href={cvData.personal.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={cvData.personal.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={cvData.personal.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {cvData.summary}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">2000+</div>
                <div className="text-gray-400">Endpoints Managed</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">20+</div>
                <div className="text-gray-400">Critical Risks ID'd</div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400">98%</div>
                <div className="text-gray-400">SLA Compliance</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Threat Intelligence</h4>
                  <p className="text-gray-400">APT tracking, geopolitical analysis, and strategic threat hunting</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Malware Analysis</h4>
                  <p className="text-gray-400">Static & dynamic reverse engineering of malicious software</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">SOC Operations</h4>
                  <p className="text-gray-400">SIEM/SOAR optimization and incident response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {cvData.experience.map((job, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-cyan-400 font-medium">{job.company}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  {job.period}
                </div>
              </div>
              {Array.isArray(job.description) ? (
                <ul className="space-y-2">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{job.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        <div className="grid gap-8">
          {Object.entries(cvData.skills).map(([category, skills], index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award className="w-6 h-6 text-cyan-400 mr-2" />
              Certifications
            </h3>
            <ul className="space-y-2">
              {cvData.certifications.map((cert, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <GraduationCap className="w-6 h-6 text-cyan-400 mr-2" />
              Education
            </h3>
            <ul className="space-y-4">
              {cvData.education.map((edu, index) => (
                <li key={index} className="text-gray-300">
                  <div className="font-semibold">{edu.degree}</div>
                  <div className="text-cyan-400">{edu.school}</div>
                  <div className="text-gray-400 text-sm">{edu.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [...new Set(samplePosts.map(post => post.category))];
  const allTags = [...new Set(samplePosts.flatMap(post => post.tags))];

  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-cyan-400 hover:text-cyan-300 flex items-center"
          >
            ← Back to Blog
          </button>
          <article className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-4">{selectedPost.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedPost.date}
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  {selectedPost.category}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="prose prose-invert prose-cyan max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Blog</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <select
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm">{post.category}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg text-center mb-8">
              Interested in collaborating on cybersecurity projects or discussing threat intelligence? 
              Let's connect and explore how we can work together.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${cvData.personal.email}`}
                className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-600 hover:border-cyan-500/50 transition-colors group"
              >
                <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {cvData.personal.email}
                  </div>
                </div>
              </a>
              <a
                href={`tel:${cvData.personal.phone}`}
                className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-600 hover:border-cyan-500/50 transition-colors group"
              >
                <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {cvData.personal.phone}
                  </div>
                </div>
              </a>
              <div className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-600">
                <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-400">{cvData.personal.location}</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href={cvData.personal.linkedin}
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-cyan-400" />
              </a>
              <a
                href={cvData.personal.github}
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              >
                <Github className="w-6 h-6 text-cyan-400" />
              </a>
              <a
                href={cvData.personal.twitter}
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              >
                <Twitter className="w-6 h-6 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 {cvData.personal.name}. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "When I'm not busy chasing cyber threats or tinkering with technology, you'll find me traveling or trying to solve impossible cybersecurity puzzles."
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;