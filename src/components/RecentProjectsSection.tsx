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
      imageSrc:
        "/photos/projects/NovorizhskyResidence/1.jpg",
      title: "Novorizhsky Residence Garden",
      location: "Moscow",
      link: "/place/novorizhsky-residence",
    },
    {
      imageSrc:
        "/photos/projects/westfieldContemporary/1.jpg",
      title: "Westfield Contemporary Outdoor Living",
      location: "Indiana",
      link: "/place/westfield-contemporary",
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent projects</h2>
          <a href="/projects" className={styles.viewAllLink}>
            view all places →
          </a>
        </div>

        <div className={styles.projectsGrid}>
          {projectItems.map((item, index) => (
            <div key={index} className={styles.projectItem}>
              <SectionCard
                imageSrc={item.imageSrc}
                title={item.title}
                subtitle={item.location}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
