import React from "react";
import SectionCard from "./SectionCard";
import styles from "./RecentProjectsSection.module.css";

interface ProjectItem {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
}

const RecentProjectsSection: React.FC = () => {
  const projectItems: ProjectItem[] = [
    {
      imageSrc:
        "https://fabrikuk.com/wp-content/uploads/2023/05/Goodmans-7-10x7.jpg",
      title: "Goodman's Fields",
      subtitle: "Aldgate, London",
      link: "/portfolio/goodmans-fields",
    },
    {
      imageSrc:
        "https://fabrikuk.com/wp-content/uploads/2024/02/Image-1-10x6.jpg",
      title: "Whitehill and Bordon",
      subtitle: "Bordon, Hampshire",
      link: "/portfolio/whitehill-and-bordon",
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent projects</h2>
          <a href="/places" className={styles.viewAllLink}>
            view all places →
          </a>
        </div>

        <div className={styles.projectsGrid}>
          {projectItems.map((item, index) => (
            <div key={index} className={styles.projectItem}>
              <SectionCard
                imageSrc={item.imageSrc}
                title={item.title}
                subtitle={item.subtitle}
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
