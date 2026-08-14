import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import { useForm } from "@formspree/react";

const Scene3D = lazy(
  () => import("./components/Scene3D")
);

const Skills3D = lazy(
  () => import("./components/Skills3D")
);

const Timeline3D = lazy(
  () => import("./components/Timeline3D")
);

type ProjectType = "assistant" | "quiz";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState<ProjectType | null>(null);

  // Formspree contact form
  const [contactState, handleContactSubmit] =
    useForm("xzepgngw");

  const contactFormRef =
    useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (contactState.succeeded) {
      contactFormRef.current?.reset();
    }
  }, [contactState.succeeded]);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const handleProjectOpen = (
    project: ProjectType
  ) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  // Close project modal with Escape
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        handleProjectClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <button
          className="logo"
          onClick={() => handleNav("home")}
          aria-label="Go to home"
        >
          AK<span>.</span>
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "mobile-open" : ""
          }`}
        >
          <button
            onClick={() => handleNav("home")}
          >
            Home
          </button>

          <button
            onClick={() => handleNav("about")}
          >
            About
          </button>

          <button
            onClick={() => handleNav("skills")}
          >
            Skills
          </button>

          <button
            onClick={() => handleNav("projects")}
          >
            Projects
          </button>

          <button
            onClick={() =>
              handleNav("experience")
            }
          >
            Experience
          </button>

          <button
            onClick={() =>
              handleNav("education")
            }
          >
            Education
          </button>

          <button
            onClick={() =>
              handleNav("certifications")
            }
          >
            Certifications
          </button>

          <button
            onClick={() => handleNav("hackathons")}
          >
            Hackathons
          </button>

          <button
            onClick={() => handleNav("strengths")}
          >
            Strengths
          </button>

          <button
            onClick={() =>
              handleNav("languages")
            }
          >
            Languages
          </button>

          <button
            onClick={() => handleNav("contact")}
          >
            Contact
          </button>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kadamabhishek890@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-contact"
        >
          Let's Talk
        </a>

        <button
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero">

        <Suspense
          fallback={
            <div className="scene3d-loading" />
          }
        >
          <Scene3D />
        </Suspense>

        <div className="hero-content">

          <div className="status">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hello">
            Hi, I'm
          </p>

          <h1>
            Abhishek
            <br />
            <span>V Kadam</span>
          </h1>

          <h2>
            Python Developer
            <span> · </span>
            Full-Stack Developer
            <span> · </span>
            Cybersecurity Enthusiast
          </h2>

          <p className="hero-description">
            MCA student passionate about software
            development, problem-solving,
            automation, cybersecurity,
            AI-powered applications and modern
            web technologies.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                handleNav("projects")
              }
            >
              Explore My Work
              <span>→</span>
            </button>

            <a
              href="/resume/Abhishek_Kadam.pdf"
              download="Abhishek_Kadam_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume
            </a>

          </div>

          <div className="socials">

            <a
              href="https://www.linkedin.com/in/contactabhishekkadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Abhi801156"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kadamabhishek890@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>

          </div>

        </div>

        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>

      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="section"
      >

        <div className="section-label">
          01 / ABOUT
        </div>

        <div className="section-grid">

          <div>
            <h2 className="section-title">
              Turning ideas into
              <span>
                {" "}
                digital experiences.
              </span>
            </h2>
          </div>

          <div>

            <p className="section-text">
              I'm a detail-oriented and highly
              motivated MCA student with expertise
              in Python, C and web development.
            </p>

            <p className="section-text">
              I'm passionate about problem-solving,
              software development and full-stack
              programming, with a strong interest
              in building practical technology
              solutions.
            </p>

            <p className="section-text">
              I'm currently pursuing a Cyber Security
              specialization with an interest in
              practical cybersecurity and secure
              software development.
            </p>

          </div>

        </div>

        <div className="info-grid">

          <div className="glass-card">
            <div className="card-number">
              01
            </div>

            <h3>
              MCA Student
            </h3>

            <p>
              RNS Institute of Technology,
              Bangalore
            </p>
          </div>

          <div className="glass-card">
            <div className="card-number">
              02
            </div>

            <h3>
              Python Developer
            </h3>

            <p>
              Focused on software development
              and automation.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-number">
              03
            </div>

            <h3>
              Full-Stack Development
            </h3>

            <p>
              Practical exposure to front-end
              and back-end development.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-number">
              04
            </div>

            <h3>
              Cybersecurity
            </h3>

            <p>
              Developing a foundation in
              cybersecurity and secure software
              practices.
            </p>
          </div>

          <div className="glass-card specialization-card">
            <div className="card-number">
              05
            </div>

            <h3>
              Cyber Security Specialization
            </h3>

            <p>
              Building skills in cybersecurity,
              secure software development and
              practical security concepts.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-label">
          02 / SKILLS
        </div>

        <div className="skills-3d-layout">

          <div className="skills-text">

            <h2 className="section-title">
              My
              <span>
                {" "}
                technology universe.
              </span>
            </h2>

            <p className="section-text">
              Explore the technologies and
              programming foundations I use across
              software development, web development,
              databases and cybersecurity.
            </p>

            <div className="skill-list">

              <div>
                <strong>
                  Programming
                </strong>

                <span>
                  Python · C
                </span>
              </div>

              <div>
                <strong>
                  Web Development
                </strong>

                <span>
                  HTML · CSS · JavaScript
                </span>
              </div>

              <div>
                <strong>
                  Cybersecurity
                </strong>

                <span>
                  Cybersecurity fundamentals ·
                  Secure software development
                </span>
              </div>

              <div>
                <strong>
                  Coursework
                </strong>

                <span>
                  C · Python · Web Development ·
                  Database Management
                </span>
              </div>

            </div>

          </div>

          <div className="skills-3d-wrapper">

            <Suspense
              fallback={
                <div className="skills-3d-loading" />
              }
            >
              <Skills3D />
            </Suspense>

          </div>

        </div>

      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-label">
          03 / PROJECTS
        </div>

        <div className="projects-heading">

          <div>
            <h2 className="section-title">
              Selected
              <span>
                {" "}
                projects.
              </span>
            </h2>
          </div>

          <p>
            Interactive showcases of my software
            development, automation and web
            development work.
          </p>

        </div>

        <div className="projects-showcase">

          {/* =========================
              PROJECT 01
          ========================= */}

          <article
            className="holo-project assistant-project"
            onClick={() =>
              handleProjectOpen("assistant")
            }
            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " "
              ) {
                event.preventDefault();
                handleProjectOpen("assistant");
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Open Virtual Desktop Assistant project"
          >

            <div className="holo-visual">

              <div className="holo-grid"></div>

              <div className="scan-line"></div>

              <div className="assistant-core">

                <div className="core-ring core-ring-1"></div>
                <div className="core-ring core-ring-2"></div>
                <div className="core-ring core-ring-3"></div>

                <div className="core-sphere"></div>

                <div className="core-pulse"></div>

              </div>

              <div className="data-chip chip-1">
                PYTHON
              </div>

              <div className="data-chip chip-2">
                AI
              </div>

              <div className="data-chip chip-3">
                AUTOMATION
              </div>

              <div className="terminal-hud">

                <div>
                  <span className="terminal-dot"></span>
                  SYSTEM ONLINE
                </div>

                <strong>
                  assistant.start()
                </strong>

                <small>
                  Virtual Desktop Assistant
                </small>

              </div>

            </div>

            <div className="holo-content">

              <div className="holo-top">

                <span>
                  PROJECT 01
                </span>

                <button
                  type="button"
                  className="open-project"
                  aria-label="Open Virtual Desktop Assistant details"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleProjectOpen("assistant");
                  }}
                >
                  ↗
                </button>

              </div>

              <h3>
                Virtual Desktop Assistant
              </h3>

              <p>
                AI-powered assistant using Python
                for automation.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>AI</span>
                <span>Automation</span>
              </div>

              <div className="project-action">
                Explore Project
                <span>→</span>
              </div>

            </div>

          </article>

          {/* =========================
              PROJECT 02
          ========================= */}

          <article
            className="holo-project quiz-project"
            onClick={() =>
              handleProjectOpen("quiz")
            }
            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " "
              ) {
                event.preventDefault();
                handleProjectOpen("quiz");
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Open Online Quiz System project"
          >

            <div className="holo-visual">

              <div className="quiz-glow"></div>

              <div className="quiz-hud">

                <div className="quiz-top">

                  <span>
                    QUIZ SYSTEM
                  </span>

                  <span className="timer">
                    01:25
                  </span>

                </div>

                <div className="quiz-progress">
                  <div></div>
                </div>

                <small>
                  QUESTION 01
                </small>

                <h4>
                  Select the correct answer
                </h4>

                <div className="quiz-answer selected">
                  <span>A</span>
                  Option One
                </div>

                <div className="quiz-answer">
                  <span>B</span>
                  Option Two
                </div>

                <div className="quiz-answer">
                  <span>C</span>
                  Option Three
                </div>

                <div className="quiz-answer">
                  <span>D</span>
                  Option Four
                </div>

                <div className="quiz-score">
                  <span>SCORE</span>
                  <strong>80</strong>
                </div>

              </div>

              <div className="floating-quiz-data">
                SCORE TRACKING
              </div>

            </div>

            <div className="holo-content">

              <div className="holo-top">

                <span>
                  PROJECT 02
                </span>

                <button
                  type="button"
                  className="open-project"
                  aria-label="Open Online Quiz System details"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleProjectOpen("quiz");
                  }}
                >
                  ↗
                </button>

              </div>

              <h3>
                Online Quiz System
              </h3>

              <p>
                Django-based online examination
                platform with role-based
                authentication.
              </p>

              <div className="tags">
                <span>Django</span>
                <span>Python</span>
                <span>SQLite</span>
              </div>

              <div className="project-action">
                Explore Project
                <span>→</span>
              </div>

            </div>

          </article>

        </div>

      </section>

      {/* =========================
          EXPERIENCE
      ========================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-label">
          04 / EXPERIENCE
        </div>

        <div className="experience-layout">

          <div className="experience-info">

            <h2 className="section-title">
              Internship
              <span>
                {" "}
                experience.
              </span>
            </h2>

            <div className="experience-card">

              <span className="experience-label">
                PYTHON FULL STACK DEVELOPER INTERN
              </span>

              <h3>
                Innoovatum Engineering &amp;
                Technology LLP
              </h3>

              <p>
                Developed full-stack applications
                using Python and web technologies.
              </p>

              <p>
                Gained hands-on experience in
                front-end and back-end development,
                debugging and deployment.
              </p>

              <div className="experience-certificate-actions">

                <a
                  href="/internship/Internship-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  View Certificate ↗
                </a>

                <a
                  href="/internship/Internship-Certificate.pdf"
                  download="Internship-Certificate.pdf"
                  className="secondary-btn"
                >
                  Download Certificate ↓
                </a>

              </div>

            </div>

          </div>

          <div className="experience-visual">

            <div className="experience-glow"></div>

            <div className="experience-orbit">

              <div className="experience-core">
                <div className="experience-core-inner"></div>
              </div>

              <div className="experience-ring experience-ring-1"></div>
              <div className="experience-ring experience-ring-2"></div>
              <div className="experience-ring experience-ring-3"></div>

              <div className="experience-chip chip-python">
                PYTHON
              </div>

              <div className="experience-chip chip-fullstack">
                FULL STACK
              </div>

              <div className="experience-chip chip-web">
                WEB
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          EDUCATION
      ========================= */}

      <section
        id="education"
        className="section education-section"
      >

        <div className="section-label">
          05 / EDUCATION
        </div>

        <div className="education-intro">

          <h2 className="section-title">
            My academic
            <span>
              {" "}
              journey.
            </span>
          </h2>

          <p className="section-text">
            My education has provided a foundation
            in programming, web development and
            database management.
          </p>

        </div>

        <div className="education-3d-layout">

          <div className="education-visual">

            <Suspense
              fallback={
                <div className="timeline-3d-loading" />
              }
            >
              <Timeline3D />
            </Suspense>

          </div>

          <div className="education-grid">

            <div className="education-card">
              <span>
                HSC
              </span>

              <h3>
                Govt PU College for Girls
              </h3>

              <p>
                Athani
              </p>
            </div>

            <div className="education-card">
              <span>
                BCA
              </span>

              <h3>
                A S Patil College of Commerce
              </h3>

              <p>
                Vijayapur
              </p>
            </div>

            <div className="education-card">
              <span>
                MCA
              </span>

              <h3>
                RNS Institute of Technology
              </h3>

              <p>
                Bangalore
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          CERTIFICATIONS
      ========================= */}

      <section
        id="certifications"
        className="section certifications"
      >

        <div className="section-label">
          06 / CERTIFICATIONS
        </div>

        <h2 className="section-title">
          Credentials &
          <span>
            {" "}
            learning.
          </span>
        </h2>

        <p className="section-text">
          Certifications and practical learning
          experiences supporting my software
          development and cybersecurity
          specialization.
        </p>

        <div className="cert-vault">

          <a
            className="cert-card"
            href="/certificates/SAPCertification20260426-31-u4v1xz.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              SAP
            </span>

            <h3>
              SAP Certified – SAP Business Data Cloud
            </h3>

            <p>
              SAP Certification
            </p>

            <div className="cert-glow"></div>

            <div className="cert-open">
              View Certificate ↗
            </div>
          </a>

          <a
            className="cert-card"
            href="/certificates/Cyber%20Job.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              CYBERSECURITY
            </span>

            <h3>
              Deloitte Australia – Cyber Job Simulation
            </h3>

            <p>
              Certificate of Completion ·
              January 30, 2026
            </p>

            <div className="cert-glow"></div>

            <div className="cert-open">
              View Certificate ↗
            </div>
          </a>

          <a
            className="cert-card"
            href="/certificates/Certificate%20of%20Generative%20AI%20Model_.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              AI
            </span>

            <h3>
              Generative AI Model Workshop
            </h3>

            <p>
              NxtWave · Certificate of Participation
            </p>

            <div className="cert-glow"></div>

            <div className="cert-open">
              View Certificate ↗
            </div>
          </a>

          <a
            className="cert-card"
            href="/certificates/Certificate%20of%20Leadership%20skills%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              LEADERSHIP
            </span>

            <h3>
              Leadership Skills
            </h3>

            <p>
              NxtWave · Certificate of Appreciation
            </p>

            <div className="cert-glow"></div>

            <div className="cert-open">
              View Certificate ↗
            </div>
          </a>

        </div>

      </section>

      {/* =========================
          HACKATHONS
      ========================= */}

      <section
        id="hackathons"
        className="section hackathons-section"
      >

        <div className="section-label">
          07 / HACKATHONS
        </div>

        <div className="section-grid">

          <div>
            <h2 className="section-title">
              Hackathon
              <span>
                {" "}
                journey.
              </span>
            </h2>
          </div>

          <div>
            <p className="section-text">
              Participating in competitive technology
              challenges and leading teams to build
              practical solutions for real-world problems.
            </p>
          </div>

        </div>

        <div className="cert-vault">

          <article className="cert-card">

            <span>
              HACKATHON 01
            </span>

            <h3>
              Code Rush – 24hrs Hackathon
            </h3>

            <p>
              Ignitron 2K25 · GM University,
              Davanagere
            </p>

            <div className="project-detail-section">
              <div className="modal-info">

                <div>
                  <small>
                    PROJECT
                  </small>

                  <strong>
                    Woman Safety Smart City
                  </strong>
                </div>

                <div>
                  <small>
                    ROLE
                  </small>

                  <strong>
                    Team Leader
                  </strong>
                </div>

              </div>
            </div>

            <div className="cert-glow"></div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "20px",
                position: "relative",
                zIndex: 2,
              }}
            >

              <a
                href="/hackathons/Ignithon_2025(2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-open"
              >
                View Certificate ↗
              </a>

              <a
                href="/hackathons/Ignithon_2025(2).pdf"
                download="Ignithon_2025_Certificate.pdf"
                className="cert-open"
              >
                Download Certificate ↓
              </a>

            </div>

          </article>

        </div>

      </section>

      {/* =========================
          STRENGTHS
      ========================= */}

      <section
        id="strengths"
        className="section"
      >

        <div className="section-label">
          08 / STRENGTHS
        </div>

        <h2 className="section-title">
          How I
          <span>
            {" "}
            work.
          </span>
        </h2>

        <div className="info-grid">

          <div className="glass-card">
            <div className="card-number">
              01
            </div>

            <h3>
              Problem Solving
            </h3>

            <p>
              Strong problem-solving and
              analytical thinking.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-number">
              02
            </div>

            <h3>
              Communication
            </h3>

            <p>
              Excellent communication and
              teamwork.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-number">
              03
            </div>

            <h3>
              Leadership
            </h3>

            <p>
              Leadership and adaptability to
              new technologies.
            </p>
          </div>

          <div className="glass-card">
            <div className="card-number">
              04
            </div>

            <h3>
              Time Management
            </h3>

            <p>
              Effective time management and
              organization.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          LANGUAGES
      ========================= */}

      <section
        id="languages"
        className="section"
      >

        <div className="section-label">
          09 / LANGUAGES
        </div>

        <h2 className="section-title">
          Languages I
          <span>
            {" "}
            know.
          </span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">
              EN
            </div>

            <h3>
              English
            </h3>

            <p>
              Language
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              HI
            </div>

            <h3>
              Hindi
            </h3>

            <p>
              Language
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              KN
            </div>

            <h3>
              Kannada
            </h3>

            <p>
              Language
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              MR
            </div>

            <h3>
              Marathi
            </h3>

            <p>
              Language
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-glow"></div>

        <div className="section-label">
          10 / CONTACT
        </div>

        <div className="contact-heading">

          <h2>
            Let's build
            <span>
              {" "}
              something amazing.
            </span>
          </h2>

          <p>
            Open to entry-level software
            development opportunities,
            internships, collaborations and
            interesting technology projects.
          </p>

        </div>

        <div className="contact-layout">

          {/* CONTACT FORM */}

          <form
            ref={contactFormRef}
            className="contact-form"
            onSubmit={handleContactSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project / Opportunity"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
              />

            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={contactState.submitting}
            >
              {contactState.submitting
                ? "Transmitting..."
                : "Transmit Message →"}
            </button>

            {contactState.succeeded && (
              <div className="form-message success">
                Message sent successfully.
                I'll get back to you soon.
              </div>
            )}

            {contactState.errors && (
              <div className="form-message error">
                Something went wrong.
                Please try again.
              </div>
            )}

          </form>

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <div className="contact-orb">

              <div className="contact-orb-inner"></div>

              <div className="contact-orbit one"></div>
              <div className="contact-orbit two"></div>
              <div className="contact-orbit three"></div>

            </div>

            <div className="contact-info-card">

              <span>
                DIRECT CONNECTION
              </span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kadamabhishek890@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kadamabhishek890@gmail.com
              </a>

              <a href="tel:9663711705">
                +91 9663711705
              </a>

            </div>

            <div className="contact-socials">

              <a
                href="https://www.linkedin.com/in/contactabhishekkadam"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Abhi801156"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

        <footer>
          © {new Date().getFullYear()} Abhishek V Kadam
        </footer>

      </section>

      {/* ==================================================
          PROJECT DETAIL MODAL
      ================================================== */}

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={handleProjectClose}
        >

          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >

            <button
              type="button"
              className="modal-close"
              onClick={handleProjectClose}
              aria-label="Close project details"
            >
              ×
            </button>

            <div
              style={{
                maxHeight: "82vh",
                overflowY: "auto",
                paddingRight: "8px",
              }}
            >

              {/* =========================================
                  PROJECT 01 — JARVIS AI
              ========================================= */}

              {selectedProject === "assistant" && (
                <>

                  <span className="modal-label">
                    PROJECT 01 / AI
                  </span>

                  <div className="modal-icon assistant-modal-icon">
                    ◉
                  </div>

                  <h2 id="project-modal-title">
                    Jarvis AI — Intelligent
                    Virtual Desktop Assistant
                  </h2>

                  <p>
                    Jarvis AI is a Python-based
                    virtual desktop assistant that
                    allows users to interact with
                    their computer through
                    natural-language commands.
                  </p>

                  <div className="modal-tags">
                    <span>Python</span>
                    <span>AI</span>
                    <span>Automation</span>
                    <span>PyQt5</span>
                    <span>Speech</span>
                    <span>Search</span>
                  </div>

                  <div className="modal-info">

                    <div>
                      <small>
                        PROJECT TYPE
                      </small>

                      <strong>
                        AI / Automation
                      </strong>
                    </div>

                    <div>
                      <small>
                        PRIMARY TECHNOLOGY
                      </small>

                      <strong>
                        Python
                      </strong>
                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Overview
                    </h3>

                    <p>
                      Jarvis AI combines AI-based
                      command classification,
                      chatbot responses, realtime
                      web search, desktop
                      automation, speech
                      recognition, text-to-speech,
                      image generation and
                      PowerPoint generation into
                      one assistant.
                    </p>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Problem Statement
                    </h3>

                    <p>
                      Traditional desktop
                      interaction requires users to
                      manually open applications,
                      search the web, play media,
                      create documents and perform
                      repetitive system operations.
                      Jarvis AI provides a
                      hands-free assistant that
                      accepts natural-language voice
                      commands and decides what
                      action should be performed.
                    </p>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Key Features
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        AI command classification
                      </span>

                      <span>
                        General and realtime
                        questions
                      </span>

                      <span>
                        Application and website
                        automation
                      </span>

                      <span>
                        Google and YouTube search
                      </span>

                      <span>
                        YouTube media playback
                      </span>

                      <span>
                        System controls
                      </span>

                      <span>
                        AI chatbot
                      </span>

                      <span>
                        Speech recognition
                      </span>

                      <span>
                        Multilingual translation
                      </span>

                      <span>
                        Text-to-speech
                      </span>

                      <span>
                        AI image generation
                      </span>

                      <span>
                        PowerPoint generation
                      </span>

                      <span>
                        Persistent chat history
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      How It Works
                    </h3>

                    <div className="project-flow">

                      <div>
                        <strong>
                          01
                        </strong>
                        <span>
                          User voice / text
                          interaction
                        </span>
                      </div>

                      <div>
                        <strong>
                          02
                        </strong>
                        <span>
                          Speech recognition
                        </span>
                      </div>

                      <div>
                        <strong>
                          03
                        </strong>
                        <span>
                          Decision-making model
                        </span>
                      </div>

                      <div>
                        <strong>
                          04
                        </strong>
                        <span>
                          Command classification
                        </span>
                      </div>

                      <div>
                        <strong>
                          05
                        </strong>
                        <span>
                          Chatbot / Search /
                          Automation
                        </span>
                      </div>

                      <div>
                        <strong>
                          06
                        </strong>
                        <span>
                          AI response
                        </span>
                      </div>

                      <div>
                        <strong>
                          07
                        </strong>
                        <span>
                          Voice + GUI output
                        </span>
                      </div>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Technologies Used
                    </h3>

                    <div className="modal-tags">

                      <span>Python</span>
                      <span>Cohere API</span>
                      <span>Groq API</span>
                      <span>Hugging Face</span>
                      <span>PyQt5</span>
                      <span>Selenium</span>
                      <span>Chrome WebDriver</span>
                      <span>mtranslate</span>
                      <span>Edge TTS</span>
                      <span>AppOpener</span>
                      <span>DuckDuckGo Search</span>
                      <span>pywhatkit</span>
                      <span>python-pptx</span>
                      <span>PyGame</span>
                      <span>JSON</span>
                      <span>python-dotenv</span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Key Highlights
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Complete voice-driven
                        desktop assistant
                      </span>

                      <span>
                        AI-based command routing
                      </span>

                      <span>
                        Realtime web search
                      </span>

                      <span>
                        Desktop application
                        automation
                      </span>

                      <span>
                        Voice input and output
                      </span>

                      <span>
                        Multilingual translation
                      </span>

                      <span>
                        AI image generation
                      </span>

                      <span>
                        Automated professional
                        PowerPoint creation
                      </span>

                      <span>
                        PyQt5 graphical interface
                      </span>

                      <span>
                        Persistent chat history
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Your Role
                    </h3>

                    <p>
                      <strong>
                        Python / AI Developer
                      </strong>
                    </p>

                    <p>
                      Designed and developed a
                      modular AI-powered virtual
                      desktop assistant integrating
                      conversational AI, voice
                      interaction, desktop
                      automation, realtime search,
                      multimedia operations, image
                      generation, presentation
                      generation and a custom
                      PyQt5 interface.
                    </p>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Future Improvements
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Whisper-based speech pipeline
                      </span>

                      <span>
                        Wake-word detection such as
                        "Hey Jarvis"
                      </span>

                      <span>
                        Improved conversational
                        memory
                      </span>

                      <span>
                        Stronger realtime information
                        verification
                      </span>

                      <span>
                        Email and calendar integration
                      </span>

                      <span>
                        Personalized user profiles
                      </span>

                      <span>
                        Offline / local AI support
                      </span>

                      <span>
                        Plugin architecture
                      </span>

                      <span>
                        Improved multilingual speech
                        recognition
                      </span>

                      <span>
                        Confirmation for sensitive
                        desktop actions
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-actions">

                    <button
                      type="button"
                      className="secondary-btn"
                      disabled
                    >
                      GitHub — Coming Soon
                    </button>

                    <button
                      type="button"
                      className="secondary-btn"
                      disabled
                    >
                      Live Demo — Coming Soon
                    </button>

                    <button
                      type="button"
                      className="secondary-btn"
                      disabled
                    >
                      Video Demo — Coming Soon
                    </button>

                  </div>

                </>
              )}

              {/* =========================================
                  PROJECT 02 — ONLINE QUIZ
              ========================================= */}

              {selectedProject === "quiz" && (
                <>

                  <span className="modal-label">
                    PROJECT 02 / WEB
                  </span>

                  <div className="modal-icon quiz-modal-icon">
                    ?
                  </div>

                  <h2 id="project-modal-title">
                    Online Quiz Management System
                  </h2>

                  <p>
                    A Django-based web application
                    designed to manage online
                    examinations through separate
                    Admin, Teacher and Student
                    roles.
                  </p>

                  <div className="modal-tags">
                    <span>Django</span>
                    <span>Python</span>
                    <span>SQLite</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Django Forms</span>
                  </div>

                  <div className="modal-info">

                    <div>
                      <small>
                        PROJECT TYPE
                      </small>

                      <strong>
                        Web Application
                      </strong>
                    </div>

                    <div>
                      <small>
                        PRIMARY TECHNOLOGY
                      </small>

                      <strong>
                        Django
                      </strong>
                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Overview
                    </h3>

                    <p>
                      The Online Quiz System provides
                      a centralized platform where
                      administrators and teachers can
                      manage exams, courses and
                      questions while students can
                      register, take examinations,
                      submit answers and view
                      automatically calculated
                      results.
                    </p>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Problem Statement
                    </h3>

                    <p>
                      Traditional examination
                      systems often require manual
                      question management,
                      paper-based tests, manual
                      evaluation and separate record
                      keeping.
                    </p>

                    <p>
                      This system provides a
                      centralized web platform for
                      online examinations and
                      automatic evaluation.
                    </p>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Main User Roles
                    </h3>

                    <div className="modal-info">

                      <div>
                        <small>
                          ADMIN
                        </small>

                        <strong>
                          System management,
                          approvals, students,
                          teachers, courses,
                          questions and marks
                        </strong>
                      </div>

                      <div>
                        <small>
                          TEACHER
                        </small>

                        <strong>
                          Course and question
                          management after
                          administrator approval
                        </strong>
                      </div>

                      <div>
                        <small>
                          STUDENT
                        </small>

                        <strong>
                          Registration,
                          examinations,
                          submissions and results
                        </strong>
                      </div>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Admin Features
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Admin dashboard
                      </span>

                      <span>
                        View total students
                      </span>

                      <span>
                        View total teachers
                      </span>

                      <span>
                        View total courses
                      </span>

                      <span>
                        View total questions
                      </span>

                      <span>
                        Approve or reject teachers
                      </span>

                      <span>
                        Update and delete teachers
                      </span>

                      <span>
                        Manage teacher salaries
                      </span>

                      <span>
                        Manage students
                      </span>

                      <span>
                        Manage courses
                      </span>

                      <span>
                        Manage questions
                      </span>

                      <span>
                        View student marks and results
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Teacher Features
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Teacher registration
                      </span>

                      <span>
                        Administrator approval workflow
                      </span>

                      <span>
                        Teacher login
                      </span>

                      <span>
                        Teacher dashboard
                      </span>

                      <span>
                        Add exams and courses
                      </span>

                      <span>
                        View and delete exams
                      </span>

                      <span>
                        Add and manage questions
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Student Features
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Student registration
                      </span>

                      <span>
                        Student login
                      </span>

                      <span>
                        Student dashboard
                      </span>

                      <span>
                        View available courses
                      </span>

                      <span>
                        Take MCQ examinations
                      </span>

                      <span>
                        Submit answers
                      </span>

                      <span>
                        Automatic mark calculation
                      </span>

                      <span>
                        View examination results
                      </span>

                      <span>
                        View previous marks
                      </span>

                      <span>
                        Attempt exams multiple times
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Key Features
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Role-based authentication
                      </span>

                      <span>
                        Teacher approval system
                      </span>

                      <span>
                        Course and exam management
                      </span>

                      <span>
                        MCQ question management
                      </span>

                      <span>
                        Four-option questions
                      </span>

                      <span>
                        Automatic mark calculation
                      </span>

                      <span>
                        Result history
                      </span>

                      <span>
                        Student and teacher profiles
                      </span>

                      <span>
                        Contact form with email support
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      How It Works
                    </h3>

                    <div className="project-flow">

                      <div>
                        <strong>
                          01
                        </strong>

                        <span>
                          User visits website
                        </span>
                      </div>

                      <div>
                        <strong>
                          02
                        </strong>

                        <span>
                          Login / registration
                        </span>
                      </div>

                      <div>
                        <strong>
                          03
                        </strong>

                        <span>
                          Role-based dashboard
                        </span>
                      </div>

                      <div>
                        <strong>
                          04
                        </strong>

                        <span>
                          Manage courses and questions
                        </span>
                      </div>

                      <div>
                        <strong>
                          05
                        </strong>

                        <span>
                          Student starts examination
                        </span>
                      </div>

                      <div>
                        <strong>
                          06
                        </strong>

                        <span>
                          Submit answers
                        </span>
                      </div>

                      <div>
                        <strong>
                          07
                        </strong>

                        <span>
                          System calculates marks
                        </span>
                      </div>

                      <div>
                        <strong>
                          08
                        </strong>

                        <span>
                          Results are stored and displayed
                        </span>
                      </div>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Database Structure
                    </h3>

                    <div className="modal-info">

                      <div>
                        <small>
                          COURSE
                        </small>

                        <strong>
                          Course name,
                          question number,
                          total marks
                        </strong>
                      </div>

                      <div>
                        <small>
                          QUESTION
                        </small>

                        <strong>
                          Course,
                          marks,
                          question,
                          four options,
                          correct answer
                        </strong>
                      </div>

                      <div>
                        <small>
                          RESULT
                        </small>

                        <strong>
                          Student,
                          exam/course,
                          marks,
                          date
                        </strong>
                      </div>

                      <div>
                        <small>
                          STUDENT
                        </small>

                        <strong>
                          User relationship,
                          profile picture,
                          address,
                          mobile number
                        </strong>
                      </div>

                      <div>
                        <small>
                          TEACHER
                        </small>

                        <strong>
                          User relationship,
                          profile picture,
                          address,
                          mobile number,
                          approval status,
                          salary
                        </strong>
                      </div>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Technologies Used
                    </h3>

                    <div className="modal-tags">

                      <span>Python</span>
                      <span>Django</span>
                      <span>SQLite</span>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>Django Templates</span>
                      <span>Django Authentication</span>
                      <span>Django Groups</span>
                      <span>Django Forms</span>
                      <span>ModelForms</span>
                      <span>django-widget-tweaks</span>
                      <span>Django Email Backend</span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Key Highlights
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Three-role architecture
                      </span>

                      <span>
                        Admin / Teacher / Student
                        separation
                      </span>

                      <span>
                        Teacher approval workflow
                      </span>

                      <span>
                        Course and question management
                      </span>

                      <span>
                        MCQ-based online examinations
                      </span>

                      <span>
                        Automatic mark calculation
                      </span>

                      <span>
                        Result history
                      </span>

                      <span>
                        Student, teacher and admin dashboards
                      </span>

                      <span>
                        Teacher salary management
                      </span>

                      <span>
                        Contact form with email support
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Your Role
                    </h3>

                    <p>
                      <strong>
                        Django / Full-Stack Developer
                      </strong>
                    </p>

                    <p>
                      Developed and customized a
                      role-based online examination
                      platform using Django,
                      implementing student,
                      teacher and administrator
                      workflows, course and question
                      management, online examination
                      functionality, automatic mark
                      calculation, result tracking,
                      authentication and dashboard
                      interfaces.
                    </p>

                  </div>

                  <div className="project-detail-section">

                    <h3>
                      Future Improvements
                    </h3>

                    <div className="modal-detail-list">

                      <span>
                        Exam time limits
                      </span>

                      <span>
                        Randomized questions
                      </span>

                      <span>
                        Randomized answer options
                      </span>

                      <span>
                        Negative marking
                      </span>

                      <span>
                        Exam scheduling
                      </span>

                      <span>
                        Excel / CSV question import
                      </span>

                      <span>
                        Analytics and performance charts
                      </span>

                      <span>
                        Password reset and email verification
                      </span>

                      <span>
                        REST API support
                      </span>

                      <span>
                        Improved responsive mobile UI
                      </span>

                      <span>
                        PostgreSQL / MySQL production database
                      </span>

                      <span>
                        Downloadable result reports
                      </span>

                      <span>
                        Teacher-specific course ownership
                      </span>

                    </div>

                  </div>

                  <div className="project-detail-actions">

                    <button
                      type="button"
                      className="secondary-btn"
                      disabled
                    >
                      GitHub — Coming Soon
                    </button>

                    <button
                      type="button"
                      className="secondary-btn"
                      disabled
                    >
                      Live Demo — Coming Soon
                    </button>

                    <button
                      type="button"
                      className="secondary-btn"
                      disabled
                    >
                      Video Demo — Coming Soon
                    </button>

                  </div>

                </>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;