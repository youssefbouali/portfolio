import { useMemo } from "react";
import { parse, differenceInMonths } from "date-fns";

import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  MapPin,
  Phone,
  Download,
} from "lucide-react";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="container mx-auto py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-card/50">
      {children}
    </span>
  );
}

function ProjectCard({
  title,
  stack,
  description,
  href,
}: {
  title: string;
  stack?: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="group rounded-lg border p-5 bg-card/50 hover:shadow-sm transition-shadow min-w-0">
      <div className="flex items-start justify-between gap-4 min-w-0">
        <div className="min-w-0">
          <h3 className="font-semibold text-lg break-words">{title}</h3>
          {stack ? (
            <p className="text-xs text-muted-foreground mt-1">{stack}</p>
          ) : null}
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-primary inline-flex items-center gap-1 text-sm shrink-0 break-words"
          >
            Visit <ExternalLink className="h-4 w-4" />
          </a>
        ) : null}
      </div>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TimelineItem({
  period,
  title,
  place,
  children,
  showDuration,
}: {
  period: string;
  title: string;
  place?: string;
  children?: React.ReactNode;
  showDuration?: boolean;
}) {
  const calcDuration = (p: string) => {
    try {
      const parts = p.split(/\s*[-–—]\s*/).map((s) => s.trim());
      if (parts.length !== 2) return "";
      const parseDate = (s: string) => {
        let d = parse(s, "MMM yyyy", new Date());
        if (isNaN(d.getTime())) {
          d = parse(s, "yyyy", new Date());
        }
        return d;
      };
      const start = parseDate(parts[0]);
      const end = parseDate(parts[1]);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) return "";
      let months = differenceInMonths(end, start) + 1;
      if (months <= 0) months = 0;
      const years = Math.floor(months / 12);
      const remMonths = months % 12;
      const partsOut: string[] = [];
      if (years > 0) partsOut.push(`${years} yr${years > 1 ? "s" : ""}`);
      if (remMonths > 0)
        partsOut.push(`${remMonths} mo${remMonths > 1 ? "s" : ""}`);
      return partsOut.join(" ");
    } catch {
      return "";
    }
  };

  const duration = showDuration ? calcDuration(period) : "";

  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary" />
      <div className="grid md:grid-cols-[240px_1fr] gap-2 md:gap-6">
        <div className="text-xs md:text-sm text-muted-foreground">
          <div>{period}</div>
          {duration ? (
            <div className="text-xs text-muted-foreground mt-1">{duration}</div>
          ) : null}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          {place ? (
            <p className="text-sm text-muted-foreground">{place}</p>
          ) : null}
          {children ? (
            <div className="mt-2 text-sm text-muted-foreground">{children}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const skills = useMemo(
    () => [
      {
        title: "Languages & Core",
        items: ["Python", "Java", "PHP", "JavaScript", "HTML5", "CSS3"],
      },
      {
        title: "Web Frameworks & Libraries",
        items: [
          "React.js",
          "React Icons",
          "Vite",
          "Node.js",
          "NPM",
          "Express.js",
          "PugJS",
          "jQuery",
          "Django",
          "Flask",
          "Laravel",
          "CodeIgniter",
        ],
      },
      {
        title: "Java / Jakarta Ecosystem",
        items: [
          "Jakarta EE",
          "Servlets",
          "JSP (JavaServer Pages)",
          "JDBC",
          "Apache Tomcat",
          "Maven",
          "Hibernate",
          "Swagger",
        ],
      },
      {
        title: "Databases & Data",
        items: [
          "Oracle Database",
          "MySQL",
          "PostgreSQL",
          "SQLServer",
          "MongoDB",
          "NoSQL",
          "SQL",
          "Apache Hadoop",
          "HBase",
        ],
      },
      {
        title: "APIs, Testing & PWA",
        items: [
          "REST API",
          "Postman",
          "JSON Web Token (JWT)",
          "Progressive Web Application",
          "Selenium",
          "PHPUnit",
        ],
      },
      {
        title: "Data Science & BI",
        items: [
          "Numpy",
          "Pandas",
          "Matplotlib",
          "Machine Learning",
          "Data Analysis",
          "Talend",
          "Business Intelligence (BI)",
        ],
      },
      {
        title: "DevOps & Cloud",
        items: [
          "Docker",
          "Kubernetes",
          "Cloud Computing",
          "Microsoft Azure",
          "Amazon AWS",
          "CI/CD",
          "Jenkins",
          "GitHub Actions",
        ],
      },
      {
        title: "Systems, Virtualization & Networking",
        items: [
          "Linux",
          "Apache",
          "Nginx",
          "Proxmox",
          "VMware",
          "VirtualBox",
          "Packet Tracer",
          "GNS3",
          "TCP/IP",
          "Wireshark",
          "Network Administration",
        ],
      },
      {
        title: "Security & Operations",
        items: [
          "Firewalls",
          "Snort",
          "Nagios",
          "Nmap",
          "Iptables",
          "OpenLDAP",
          "Squid Proxy",
          "OpenVPN",
          "Samba",
          "Cryptography",
        ],
      },
      {
        title: "Developer Tools & Workflow",
        items: [
          "Git",
          "GitHub",
          "GitLab",
          "Composer",
          "NPM",
          "Postman",
          "VS Code",
          "Font Awesome",
        ],
      },
      {
        title: "Analytics & Visualization",
        items: ["Chart.js", "Matplotlib", "GanttProject"],
      },
      {
        title: "Soft Skills",
        items: [
          "Project Management",
          "Agile Methodologies",
          "Problem Solving",
          "Team Work",
        ],
      },
    ],
    [],
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container mx-auto pt-14 md:pt-20 pb-14 md:pb-24 grid gap-8 md:gap-12">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground bg-card/70">
                <span className="h-2 w-2 rounded-full bg-primary" /> Open for
                internships & projects
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                Youssef BOUALI
                <span className="block text-xl font-medium text-muted-foreground mt-2">
                  Software and DevOps Engineer
                </span>
              </h1>
              <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                I design, build, and maintain reliable web platforms, APIs, and
                resilient infrastructure. Passionate about automation,
                observability, and scalable systems.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> Contact
                </a>

                <a
                  href="/Youssef_Bouali_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>

                <a
                  href="https://github.com/youssefbouali"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>

                <a
                  href="https://linkedin.com/in/youssef1bouali"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
                >
                  <Linkedin className="h-4 w-4" /> Linkedin
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Erraounak Essaouira, Morocco
                </span>
                <a
                  href="tel:+212691067361"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4" /> +212 691067361
                </a>
                <a
                  href="mailto:mr.boualiyoussef@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> mr.boualiyoussef@gmail.com
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {[
                  "Web Development",
                  "Databases",
                  "DevOps",
                  "Server Administration",
                  "Linux",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-card/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/30 to-transparent p-1 overflow-visible">
                <img
                  src="/Youssef_Bouali_Photo.jpg"
                  alt="Youssef Bouali"
                  className="w-40 h-40 md:w-56 md:h-56 rounded-xl object-cover block bg-muted"
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-full px-4 py-1 text-xs shadow whitespace-nowrap">
                  Software and DevOps Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <p className="text-muted-foreground leading-relaxed">
            I am a Master’s student in Software Engineering at Ibn Zohr
            University (Agadir) with a Bachelor's degree in Computer Science
            from ESIAG (UPM Marrakech) and an Associate's degree in Digital
            Infrastructure, Systems and Networks from the Specialized Institute
            of Applied Technology, Essaouira. I enjoy solving real problems
            through clean code, solid architectures, and robust infrastructure,
            with hands-on experience in backend, web, networking, and security.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Software Engineering",
              "Backend APIs",
              "DevOps & Linux",
              "Database Design",
              "Networking",
              "Security",
            ].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-lg border p-5 bg-card/50">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <ProjectCard
            title="Morist – Moroccan Tourist Platform"
            stack="Laravel · Firebase · React"
            href="https://github.com/youssefbouali/Morist"
            description="End‑to‑end platform connecting travelers with Moroccan destinations and experiences."
          />
          <ProjectCard
            title="Hotel Management"
            stack="Java · Oracle Database"
            href="https://github.com/youssefbouali/Gestion-Hoteliere-Project"
            description="Property and booking management with dashboards and role‑based access."
          />
          <ProjectCard
            title="Todo App (Express + JWT API)"
            stack="Express · JWT · MongoDB"
            href="https://github.com/youssefbouali/todoApp_jwtAPI"
            description="Token‑secured REST API with CRUD operations and user authentication."
          />
          <ProjectCard
            title="Library App (JEE)"
            stack="Java EE"
            href="https://github.com/youssefbouali/Biblio_App"
            description="Catalog, members, and borrowing workflows for libraries."
          />
          <ProjectCard
            title="DGS OS — Linux Deployment & Supervision"
            href="https://sourceforge.net/projects/wsoumos-dgs/files/"
            description="Design and implementation of a system for deploying, managing, and supervising Linux infrastructures."
          />
          <ProjectCard
            title="Debian‑based Distributions"
            description="Custom distributions focused on Home · Pro · Security · Server."
            href="https://sourceforge.net/projects/wsoumos/"
          />
          <ProjectCard
            title="Tumidia — Social Network"
            href="https://tumidia.wsoum.eu.org"
            description="A social network experiment with user profiles and feeds."
          />
          <ProjectCard
            title="Bawaab — Search Engine"
            href="https://bawaab.wsoum.eu.org"
            description="Web scraping and full‑text search with SphinxSearch."
          />
          <ProjectCard
            title="Mbiaa — Classifieds"
            href="https://mbiaa.wsoum.eu.org"
            description="Buy and sell listings with categories and filters."
          />

          <ProjectCard
            title="GreenerTech — Greenhouse Monitoring"
            description="Real-time tomato greenhouse monitoring with an autonomous robot, Jetson Nano integration, Arduino-based control, multi-sensors, Flask backend API, and a React.js web interface for disease detection and environmental optimization."
          />

          <ProjectCard
            title="AeroMaint — Airport Equipment Maintenance"
            href="https://github.com/youssefbouali/AeroMaint"
            description="Airport Equipment Maintenance Management Platform."
          />

          <ProjectCard
            title="EMS — Exams Management System"
            stack="CodeIgniter · Bootstrap · MySQL"
            href="https://github.com/youssefbouali/EMS"
            description="Exams management platform for schools and institutions."
          />

          <ProjectCard
            title="DataAnalysis_Electromenagers"
            href="https://github.com/youssefbouali/DataAnalysis_Project"
            description="Web scraping, data cleaning with Pandas, and visualizations with Matplotlib to analyze prices and promotions of home appliances."
          />

          <ProjectCard
            title="BusinessIntelligence_Project"
            href="https://github.com/youssefbouali/BusinessIntelligence_Project"
            description="Data warehouse implementation and sales visualization using Talend (ComptoirDB case study)."
          />

          <ProjectCard
            title="Wsoum Shop — WooCommerce Store"
            href="https://shop.wsoum.eu.org/"
            description="E‑commerce store built with WooCommerce on WordPress."
          />

          <ProjectCard
            title="Rabet — URL Shortener"
            href="https://rabet.wsoum.eu.org/"
            description="Link shortening service with analytics."
          />

          <ProjectCard
            title="Wsoum Maps"
            href="https://maps.wsoum.eu.org/"
            description="Service for browsing maps, routes and locations."
          />
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6 border-l pl-6">
          <TimelineItem
            showDuration={true}
            period="Jul 2025 — Aug 2025"
            title="PFA Intern — Orange Digital Center, Agadir"
          >
            Backend development for a real‑time surveillance system using AI and
            an autonomous robot with sensors and camera.
          </TimelineItem>
          <TimelineItem
            showDuration={true}
            period="Jul 2024 — Aug 2024"
            title="Final‑year Bachelor Intern — National Office of Airports, Essaouira"
          >
            Built a maintenance management platform for airport equipment.
          </TimelineItem>
          <TimelineItem
            showDuration={true}
            period="Nov 2023 — Jun 2024"
            title="Member — UPM IT Club"
          >
            Actively participated in workshops and projects focused on emerging
            technologies, coding challenges, and collaborative software
            development, enhancing technical skills and teamwork experience.
          </TimelineItem>
          <TimelineItem
            showDuration={true}
            period="Nov 2023 — Jun 2024"
            title="Member — UPM Enactus"
          >
            Contributed to social entrepreneurship initiatives and community
            development projects, applying problem-solving and project
            management skills to create sustainable impact.
          </TimelineItem>
          <TimelineItem
            showDuration={true}
            period="Jun 2023 — Jul 2023"
            title="End‑of‑training Intern — Consamar"
          >
            Installation and configuration of machines and a supervision system.
          </TimelineItem>

          <TimelineItem
            showDuration={true}
            period="Sep 2019 — Aug 2023"
            title="Founder — Wsoum"
          >
            Wsoum is a digital platform providing a wide ecosystem of web
            applications and digital services in areas like social networking,
            search engines, operating systems, solutions, and classifieds,
            structured as an informal organization.
          </TimelineItem>

          <TimelineItem
            showDuration={true}
            period="Sep 2019 — Dec 2020"
            title="Founder Member — OBBHgroup"
          >
            OBBHgroup is a dynamic initiative founded by a group of ambitious
            young entrepreneurs, focused on web development services and the
            sale of traditional products, combining modern technology with
            cultural heritage.
          </TimelineItem>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="space-y-6 border-l pl-6">
          <TimelineItem
            period="2024 — 2026"
            title="Master's degree . Path of Excellence — Software Engineering"
            place="Faculty of Sciences, Ibn Zohr University, Agadir"
          />
          <TimelineItem
            period="2023 — 2024"
            title="Bachelor's degree — Computer Science"
            place="ESIAG, UPM Marrakech"
          />
          <TimelineItem
            period="2021 — 2023"
            title="Associate's degree — Digital Infrastructure, Systems and Networks"
            place="Specialized Institute of Applied Technology, Essaouira"
          />
          <TimelineItem
            period="2020 — 2021"
            title="First Year — Physical Sciences"
            place="Faculty of Sciences, Ibn Zohr University, Agadir"
          />
          <TimelineItem
            period="2019 — 2020"
            title="Baccalaureate — Physical Sciences"
            place="Sidi Mohammed Ben Abdellah High School, Essaouira"
          />
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications">
        <ul className="grid md:grid-cols-2 gap-3 text-sm">
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://drive.google.com/file/d/1d0BOfDEo6nwtVYuzlfd61fztGIFdCptB/view"
              target="_blank"
              rel="noreferrer"
            >
              PCAP: Programming Essentials in Python — Python Institute
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://openclassrooms.com/fr/course-certificates/7834506844"
              target="_blank"
              rel="noreferrer"
            >
              Learn Programming With Python — OpenClassrooms
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://www.credly.com/badges/36c31346-0208-496b-b339-ed6b327a819e/"
              target="_blank"
              rel="noreferrer"
            >
              Networking Essentials — Cisco
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://www.credly.com/badges/16f0eb5d-2270-4eb4-8a4f-e3b8d673bbce/"
              target="_blank"
              rel="noreferrer"
            >
              Cybersecurity Essentials — Cisco
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://www.credly.com/badges/362e9ea2-7e01-4987-8123-5a86e08dcc1b/linked_in_profile"
              target="_blank"
              rel="noreferrer"
            >
              Ethical Hacker — Cisco
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://openclassrooms.com/en/course-certificates/1360352425"
              target="_blank"
              rel="noreferrer"
            >
              Manage Code with Git & GitHub — OpenClassrooms
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://openclassrooms.com/fr/course-certificates/7031717366"
              target="_blank"
              rel="noreferrer"
            >
              Learn the Command Line — OpenClassrooms
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://openclassrooms.com/fr/course-certificates/6681011864"
              target="_blank"
              rel="noreferrer"
            >
              Learn Programming With JavaScript — OpenClassrooms
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://openclassrooms.com/fr/course-certificates/1605078780"
              target="_blank"
              rel="noreferrer"
            >
              Set Up TCP/IP Networks — OpenClassrooms
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://openclassrooms.com/fr/course-certificates/4952792557"
              target="_blank"
              rel="noreferrer"
            >
              Secure Your Data with Cryptography — OpenClassrooms
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://coursera.org/verify/PZZSTXQM323Y"
              target="_blank"
              rel="noreferrer"
            >
              Foundations of User Experience (UX) Design — Coursera (Google
              Certificate)
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://learndigital.withgoogle.com/link/1qsdpcedm9s"
              target="_blank"
              rel="noreferrer"
            >
              Fundamentals of Digital Marketing — Google Digital Garage (ID
              I890Z68E4)
            </a>
          </li>
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-lg border p-5 bg-card/50">
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href="mailto:mr.boualiyoussef@gmail.com"
              className="mt-1 inline-flex items-center gap-2 font-medium hover:text-primary break-all"
            >
              <Mail className="h-4 w-4" /> mr.boualiyoussef@gmail.com
            </a>
          </div>
          <div className="rounded-lg border p-5 bg-card/50">
            <p className="text-sm text-muted-foreground">Phone</p>
            <a
              href="tel:+212691067361"
              className="mt-1 inline-flex items-center gap-2 font-medium hover:text-primary break-all"
            >
              <Phone className="h-4 w-4" /> +212 691067361
            </a>
          </div>
          <div className="rounded-lg border p-5 bg-card/50">
            <p className="text-sm text-muted-foreground">GitHub</p>
            <a
              href="https://github.com/youssefbouali"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 font-medium hover:text-primary break-all"
            >
              <Github className="h-4 w-4" /> github.com/youssefbouali
            </a>
          </div>
          <div className="rounded-lg border p-5 bg-card/50">
            <p className="text-sm text-muted-foreground">Linkedin</p>
            <a
              href="https://linkedin.com/in/youssef1bouali"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 font-medium hover:text-primary break-all"
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/youssef1bouali
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
