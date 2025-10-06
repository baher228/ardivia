import React from "react";
import SectionCard from "./SectionCard";
import styles from "./RecentProjectsSection.module.css";

interface ProjectItem {
  imageSrc: string;
  title: string;
  location: string;
  link: string;
}

const RecentProjectsSection: React.FC = () => {
  const projectItems: ProjectItem[] = [
    {
      imageSrc: "/photos/projects/novorizhskyResidence/1.jpg",
      title: "Novorizhsky Residence Garden",
      location: "Moscow",
      link: "/place/novorizhsky-residence",
    },
    {
      imageSrc: "/photos/projects/westfieldContemporary/1.jpg",
      title: "Westfield Contemporary Outdoor Living",
      location: "Indiana",
      link: "/place/westfield-contemporary",
    },
  ];

  return (
    <section
      className={styles.projectsSection}
      aria-labelledby="recent-projects-heading"
      role="region"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="recent-projects-heading" className={styles.title}>
            Recent projects
          </h2>
          <a href="/projects" className={styles.viewAllLink}>
            <span className={styles.viewAllText}>View all places</span>
            <span aria-hidden="true" className={styles.viewAllArrow}>
              →
            </span>
          </a>
        </div>

        <div className={styles.projectsGrid}>
          {projectItems.map((item, index) => (
            <div
              key={`${item.link}-${index}`}
              className={styles.projectItem}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={styles.itemInner}>
                <SectionCard
                  imageSrc={item.imageSrc}
                  title={item.title}
                  subtitle={item.location}
                  link={item.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
