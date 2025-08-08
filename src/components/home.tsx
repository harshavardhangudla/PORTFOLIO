import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  BookOpen,
  Award,
  Cpu,
} from "lucide-react";

import Navbar from "./Navbar";
import SectionContainer from "./SectionContainer";
import CertificationCard from "./CertificationCard";
import CollapsibleCertGroup from "./CollapsibleCertGroup";
import CodingProfileCard from "./CodingProfileCard";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

// Initialize EmailJS with proper configuration
const initEmailJS = () => {
  try {
    emailjs.init({
      publicKey: "E04aDKwusJJoI5ONC",
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
  } catch (error) {
    console.error("EmailJS initialization failed:", error);
  }
};

const Home = () => {
  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);
  // State for current active section
  const [activeSection, setActiveSection] = useState("hero");

  // Refs for scrolling to sections
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const codingProfilesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Navigation links for the navbar
  const navLinks = [
    { name: "About", ref: aboutRef, id: "about" },
    { name: "Education", ref: educationRef, id: "education" },
    { name: "Coding Profiles", ref: codingProfilesRef, id: "coding-profiles" },
    { name: "Experience", ref: experienceRef, id: "experience" },
    { name: "Certifications", ref: certificationsRef, id: "certifications" },
    { name: "Skills", ref: skillsRef, id: "skills" },
    { name: "Projects", ref: projectsRef, id: "projects" },
    { name: "Contact", ref: contactRef, id: "contact" },
  ];

  // Handle intersection observer for sections
  useEffect(() => {
    const sectionRefs = [
      { ref: heroRef, id: "hero" },
      { ref: aboutRef, id: "about" },
      { ref: educationRef, id: "education" },
      { ref: codingProfilesRef, id: "coding-profiles" },
      { ref: experienceRef, id: "experience" },
      { ref: certificationsRef, id: "certifications" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActiveSection(id);
        }
      });
    }, observerOptions);

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Certification data
  const certifications = [
    {
      title: "Fundamentals of C++",
      issuer: "IBM",
      link: "https://drive.google.com/file/d/1DAd6m4EnJyJvpIdswrxIuQwcNmfr5gSx/view?usp=drive_link",
    },
    {
      title: "Python Basics for Data Science",
      issuer: "IBM",
      link: "https://drive.google.com/file/d/1dS6ZFPp6EaRTp5TYEqjgN7E_7TXAF0cH/view?usp=drive_link",
    },
    {
      title: "Python for Beginners",
      issuer: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1civoIPj8CsxFYBHREmpT4qIqmoMXqQv5/view?usp=drive_link",
    },
    {
      title: "Principles of UI/UX Design",
      issuer: "Meta",
      link: "https://drive.google.com/file/d/1mR0mtDbsONDcckI1gcHLRbvIVkuUxGRf/view?usp=drive_link",
    },
    {
      title: "Specializing in Ethical Hacking",
      issuer: "Cyberthreya",
      link: "https://drive.google.com/file/d/1mV76EXkmirABXVyizuGYAVJ-xZLKRrsj/view?usp=drive_link",
    },
    {
      title: "Power BI Workshop",
      issuer: "Office Master",
      link: "https://drive.google.com/file/d/1j_ilzjR60krx0NnWwIBJDVaJGHuXw7Z6/view?usp=drive_link",
    },
    {
      title: "Prompt Engineering",
      issuer: "LinkedIn",
      link: "https://drive.google.com/file/d/1Sr52xH67py847MQERACqcfvIDG88IY_D/view?usp=drive_link",
    },
  ];

  // Front-End Developer Track certifications
  const frontEndCerts = [
    {
      title: "HTML",
      link: "https://drive.google.com/file/d/1IFPKtPO2DH40k22iWzE6rs4gcbIBGsHa/view?usp=drive_link",
    },
    {
      title: "CSS",
      link: "https://drive.google.com/file/d/1kyTTZgE07ttudm-W48TmzCdgKGjYPd6-/view?usp=drive_link",
    },
    {
      title: "JavaScript",
      link: "https://drive.google.com/file/d/11a8nSs6gl-Sjcl9O3uLDr2NBHsPsl-6L/view?usp=drive_link",
    },
  ];

  // VOIS AI/ML Series certifications
  const aiMlCerts = [
    {
      title: "Introduction to Machine Learning",
      link: "https://drive.google.com/file/d/1Pgz6QQr592n9ZCEutl1gLiVuy6pTLR5K/view?usp=drive_link",
    },
    {
      title: "Performance Evaluation in Machine Learning",
      link: "https://drive.google.com/file/d/1smzUuuHqDGz-O02YBC2k4IZo_u6rYfry/view?usp=drive_link",
    },
    {
      title: "Machine Learning Models",
      link: "https://drive.google.com/file/d/1MxNyuuaMR5WkG7FmM0npnpEY3MsicF1t/view?usp=drive_link",
    },
    {
      title: "Exploratory Data Analysis for ML",
      link: "https://drive.google.com/file/d/1yxITWEhGYbF5jfcWnQMuBX33xPa4uxmL/view?usp=drive_link",
    },
    {
      title: "Artificial Intelligence in Practice",
      link: "https://drive.google.com/file/d/1A_JjkInSLIiMLc1QafdviMQm85fKaS0L/view?usp=drive_link",
    },
    {
      title: "AI Design Challenges",
      link: "https://drive.google.com/file/d/1zXp77dT63VnjbMZr5QwguLaFEgGQJul3/view?usp=drive_link",
    },
    {
      title: "Neural Networks with Python",
      link: "https://drive.google.com/file/d/1uIFMfOgmXIXWuFW8P-FexD80zjPVj3Ja/view?usp=drive_link",
    },
    {
      title: "Building Neural Networks with Keras",
      link: "https://drive.google.com/file/d/1Uw3qNC1MdbgeB0DGM0rlPWCPELd9Cu-S/view?usp=drive_link",
    },
    {
      title: "Introduction to Computer Vision",
      link: "https://drive.google.com/file/d/1YULnaDZ9eQsp_aMd_tLu0NOAG3FxOZL3/view?usp=drive_link",
    },
  ];

  // Coding profiles data
  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "harshavardhan_gudla",
      profileUrl: "https://leetcode.com/u/harshavardhan_gudla/",
      icon: <Code className="h-5 w-5" />,
    },
    {
      platform: "GeeksforGeeks",
      username: "harshavardklty",
      profileUrl: "https://www.geeksforgeeks.org/user/harshavardklty/",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      platform: "CodeChef",
      username: "g_harsha_ghv04",
      profileUrl: "https://www.codechef.com/users/g_harsha_ghv04",
      icon: <Award className="h-5 w-5" />,
    },
    {
      platform: "Striver",
      username: "harshavardhangudla",
      profileUrl: "https://takeuforward.org/profile/harshavardhangudla",
      icon: <Cpu className="h-5 w-5" />,
    },
  ];

  // Skills data grouped by category
  const skillsGroups = [
    {
      category: "Programming Skills",
      skills: ["C++", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Technical Skills",
      skills: [
        "Machine Learning",
        "Neural Networks",
        "Exploratory Data Analysis",
        "Sentiment Analysis",
        "Salesforce CRM",
        "Power BI",
        "Computer Vision",
      ],
    },
    {
      category: "Cybersecurity & Tools",
      skills: [
        "Ethical Hacking",
        "Network Security",
        "Git & GitHub",
        "Figma",
        "Keras",
      ],
    },
  ];

  // Projects data
  const projects = [
    {
      title: "CRM for Hand's men Threads: Men's Fashion",
      description:
        "A CRM and order management system for a bespoke men's fashion retailer, with multi-user support and sales analytics features.",
      technologies: ["Salesforce CRM", "Analytics"],
      githubLink:
        "https://github.com/harshavardhangudla/HandsMenThreads_MensFashion_ByHarsha",
      liveLink: "",
      figmaLink: "",
      image: "https://i.postimg.cc/0jrr5PmP/generated-image-6.png",
    },
    {
      title: "CRM for Wholesale Rice Mill",
      description:
        "A custom CRM solution designed for rice mill businesses—features include inventory management, client profiles, and automated invoice generation.",
      technologies: ["Salesforce CRM"],
      githubLink:
        "https://github.com/harshavardhangudla/A-CRM-APPLICATION-FOR-WHOLESALE-RICE-MILL",
      liveLink: "",
      figmaLink: "",
      image: "https://i.postimg.cc/PfFP3vsx/generated-image-2.png",
    },
    {
      title: "MNIST Digit Classifier",
      description:
        "A machine learning project recognizing handwritten digits from the MNIST dataset using deep learning techniques.",
      technologies: ["Python", "Neural Networks", "Deep Learning"],
      githubLink: "",
      liveLink: "",
      figmaLink: "",
      image: "https://i.postimg.cc/Gh89Z3dj/generated-image-3.png",
    },
    {
      title: "Full Stack: Should I Bunk?",
      description:
        "A full stack attendance tracker that helps students decide if they can afford to skip a class based on historical attendance data.",
      technologies: ["Full Stack", "React", "Node.js"],
      githubLink: "https://github.com/harshavardhangudla/Should-I-Bunk",
      liveLink: "https://should-i-bunk.lovable.app",
      figmaLink: "",
      image: "https://i.postimg.cc/TYzhG8Pv/generated-image-4.png",
    },
    {
      title: "Little Lemon : Restaurant Application UI",
      description:
        "A fully interactive and visually appealing UI for a restaurant application, designed in Figma, featuring menu navigation, table reservation, and user-friendly interfaces.",
      technologies: ["UI/UX Design", "Figma", "Prototyping"],
      githubLink: "",
      liveLink: "",
      figmaLink:
        "https://www.figma.com/proto/kzJ96LRfIi0KtSgob51lpv/little-lemon?node-id=0-1&t=lXDYnEGT56YKwH3p-1",
      image: "https://i.postimg.cc/hvwvf6bx/generated-image-5.png",
    },
  ];

  // Section transition variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <Navbar
        items={navLinks.map((link) => ({
          label: link.name,
          href: `#${link.id}`,
        }))}
      />

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="bg-gradient-to-b from-primary/20 via-primary/10 to-background min-h-screen flex items-center pt-24 pb-16"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-[#36728f]">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hi, I'm{" "}
                <span className="text-primary">Harsha Vardhan Gudla</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A passionate software engineer in the making.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a
                    href="https://drive.google.com/file/d/1qsD_NnQ9hFYUc_AVbMFOjFboNg8-t6YP/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/harshavardhangudla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/harsha-vardhan-gudla/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-full overflow-hidden border-4 border-primary/20 shadow-xl w-64 h-64 md:w-80 md:h-80"
            >
              <img
                src="https://i.ibb.co/Hpn8w4VX/harsha.jpg"
                alt="Harsha Vardhan Gudla"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=harsha";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <SectionContainer
        id="about"
        ref={aboutRef}
        className="min-h-screen flex items-center py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            A passionate fourth-year Computer Science Engineering student eager
            to gain practical experience and grow in the tech industry. Seeking
            to apply knowledge in real-world projects and use communication,
            leadership, and problem-solving skills to contribute to impactful
            tech solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/harshavardhangudla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/harsha-vardhan-gudla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </SectionContainer>
      {/* Education Section */}
      <SectionContainer
        id="education"
        ref={educationRef}
        className="min-h-screen flex items-center py-16 bg-gradient-to-b from-background to-primary/5 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  Gayatri Vidya Parishad College of Engineering (Autonomous)
                </h3>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science and Engineering (2022–Present)
                </p>
                <p className="font-medium mt-2">CGPA: 8.66</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Ascent Junior College</h3>
                <p className="text-muted-foreground">
                  Senior Secondary Education – MPC Stream (2020–2022)
                </p>
                <p className="font-medium mt-2">Percentage: 83.7%</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  Vijnana Vihara Residential School (CBSE)
                </h3>
                <p className="text-muted-foreground">Schooling (2016–2020)</p>
                <p className="font-medium mt-2">Percentage: 81%</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </SectionContainer>
      {/* Coding Profiles Section */}
      <SectionContainer
        id="coding-profiles"
        ref={codingProfilesRef}
        className="min-h-screen flex items-center py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Coding Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codingProfiles.map((profile, index) => (
              <CodingProfileCard
                key={index}
                platform={profile.platform}
                username={profile.username}
                profileUrl={profile.profileUrl}
                icon={profile.icon}
              />
            ))}
          </div>
        </motion.div>
      </SectionContainer>
      {/* Experience Section */}
      <SectionContainer
        id="experience"
        ref={experienceRef}
        className="min-h-screen flex items-center py-16 bg-gradient-to-b from-primary/5 to-background transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  Salesforce Developer Virtual Internship
                </h3>
                <p className="text-muted-foreground mb-4">SmartInternz</p>
                <p className="mb-4">
                  Developed a CRM system for a wholesale rice mill. Managed
                  customers, automated order processing, and streamlined
                  inventory using Salesforce CRM.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" asChild>
                    <a
                      href="https://drive.google.com/file/d/1PuOahoq3hctmsYgX-VVu8DIpRQ9cSaVe/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com/harshavardhangudla/A-CRM-APPLICATION-FOR-WHOLESALE-RICE-MILL.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  Google AI-ML Virtual Internship
                </h3>
                <p className="text-muted-foreground mb-4">Google</p>
                <p className="mb-4">
                  Built real-world machine learning models and explored Google
                  Cloud's AI/ML workflows.
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://drive.google.com/file/d/1OrviTZjgvh0euFGKX455eyCEwM6XJZ1D/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </SectionContainer>
      {/* Certifications Section */}
      <SectionContainer
        id="certifications"
        ref={certificationsRef}
        className="min-h-screen flex items-center py-16 bg-gradient-to-b from-background to-primary/5 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>

          <div className="space-y-8">
            {/* Regular certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    certificateUrl={cert.link}
                  />
                ))}
              </div>
            </div>

            {/* Front-End Developer Track */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Front-End Developer Track
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CollapsibleCertGroup
                  title="Front-End Developer Program"
                  issuer="Infosys Springboard"
                  certificates={frontEndCerts}
                />
              </div>
            </div>

            {/* AI/ML Series */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                AI/ML Certification Series
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CollapsibleCertGroup
                  title="Machine Learning Series"
                  issuer="VOIS"
                  certificates={aiMlCerts}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
      {/* Skills Section */}
      <SectionContainer
        id="skills"
        ref={skillsRef}
        className="min-h-screen flex items-center py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="space-y-8">
            {skillsGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-muted rounded-lg p-4 text-center hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                {groupIndex < skillsGroups.length - 1 && (
                  <Separator className="my-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
      {/* Projects Section */}
      <SectionContainer
        id="projects"
        ref={projectsRef}
        className="min-h-screen flex items-center py-16 bg-gradient-to-b from-primary/5 to-background transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                figmaLink={project.figmaLink}
                image={project.image}
              />
            ))}
          </div>
        </motion.div>
      </SectionContainer>
      {/* Contact Section */}
      <SectionContainer
        id="contact"
        ref={contactRef}
        className="min-h-screen flex items-center py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+91 8096035866</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>harshavardhangudla4@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>Vizianagaram, Andhra Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/harshavardhangudla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/harshavardhangudla
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/harsha-vardhan-gudla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/harsha-vardhan-gudla
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const formValues = {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      subject: formData.get("subject"),
                      message: formData.get("message"),
                    };

                    // Validate form
                    if (
                      !formValues.name ||
                      !formValues.email ||
                      !formValues.subject ||
                      !formValues.message
                    ) {
                      alert("Please fill in all fields");
                      return;
                    }

                    // Send email using EmailJS
                    emailjs
                      .send(
                        "service_rle6y17",
                        "template_n9t39x1",
                        {
                          from_name: formValues.name,
                          from_email: formValues.email,
                          subject: `[Portfolio] New message: ${formValues.subject}`,
                          message: formValues.message,
                          to_email: "harshavardhangudla4@gmail.com",
                        },
                        "E04aDKwusJJoI5ONC",
                      )
                      .then((response) => {
                        console.log("EmailJS Success:", response);
                        alert(
                          "✅ Message sent successfully! Thank you for reaching out.",
                        );
                        e.currentTarget.reset();
                      })
                      .catch((error) => {
                        console.error("EmailJS Error:", error);
                        console.error("Error details:", {
                          status: error.status,
                          text: error.text,
                        });
                        alert(
                          "❌ Failed to send message. Please try again later or contact me directly at harshavardhangudla4@gmail.com",
                        );
                      });
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full p-2 rounded-md border border-input bg-background"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-2 rounded-md border border-input bg-background min-h-[120px]"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </SectionContainer>
      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Harsha Vardhan Gudla. All rights
            reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Made with <span className="text-red-500">❤</span> by Harsha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
