"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

/* ---------- DATA  ---------- */
const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is the process of working with Viterra?",
        answer:
          "Our process begins with an initial consultation to discuss your vision and requirements. We then move to the design phase, where we create detailed plans and 3D visualizations. Once the design is approved, our team begins construction and planting. We finish with a final walkthrough to ensure your complete satisfaction.",
      },
      {
        question: "How do I get started with a landscape project?",
        answer:
          "Simply contact us for a free consultation. We'll discuss your ideas, assess your space, and provide initial recommendations. We'll then create a detailed proposal with design concepts and pricing.",
      },
      {
        question: "Do you offer free consultations?",
        answer:
          "Yes, we offer complimentary initial consultations where we discuss your project, assess your space, and provide preliminary recommendations and estimates.",
      },
    ],
  },
  {
    category: "Pricing & Timeline",
    questions: [
      {
        question: "How much does a landscape project typically cost?",
        answer:
          "Project costs vary based on size, complexity, and materials. Small garden designs start from £2,000, while large-scale transformations can range from £10,000-£50,000+. We provide detailed quotes after the initial consultation and design phase.",
      },
      {
        question: "How long does a project typically take?",
        answer:
          "Timelines depend on project scope: small gardens take 1-2 weeks, medium projects 3-4 weeks, and large transformations 6-12 weeks. We'll provide a projected timeline with our proposal.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options. Typically, we require 30% deposit to begin, with progress payments throughout the project and final payment upon completion.",
      },
    ],
  },
  {
    category: "Services & Maintenance",
    questions: [
      {
        question: "What maintenance services do you offer?",
        answer:
          "We provide comprehensive maintenance including lawn care, pruning, fertilization, seasonal planting, irrigation system maintenance, and garden health checks. We offer weekly, bi-weekly, or monthly service plans.",
      },
      {
        question: "Do you provide ongoing garden care?",
        answer:
          "Absolutely! We offer maintenance packages tailored to your garden's needs, from basic lawn care to full garden management. This ensures your investment continues to thrive year after year.",
      },
      {
        question: "Can you work with existing gardens?",
        answer:
          "Yes, we specialize in garden renovations and improvements. We can refresh existing spaces, add new elements, or completely transform your current garden while preserving any features you love.",
      },
    ],
  },
  {
    category: "Design & Plants",
    questions: [
      {
        question: "Do you provide plant recommendations?",
        answer:
          "Yes, we provide expert plant selection based on your soil, climate, and preferences. We choose plants that will thrive in your specific conditions and create beautiful, sustainable gardens.",
      },
      {
        question: "Can you help with sustainable gardening?",
        answer:
          "Sustainability is at the heart of our approach. We use drought-tolerant plants, efficient irrigation, organic practices, and eco-friendly materials to create environmentally responsible gardens.",
      },
      {
        question: "Do you offer 3D garden visualizations?",
        answer:
          "Yes, we provide detailed 3D visualizations so you can see exactly how your garden will look before we begin construction. This helps ensure the final result matches your vision perfectly.",
      },
    ],
  },
];

/* ---------- COMPONENT  ---------- */
const FaqSection: React.FC = () => {
  /* Accordion state */
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [closingQuestions, setClosingQuestions] = useState<string[]>([]);

  const DURATION = 400; // ms – must match CSS transition time

  /* Category toggle */
  const toggleCategory = (category: string) =>
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );

  /* Question toggle with delayed icon reset */
  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) => {
      const isOpen = prev.includes(question);

      if (isOpen) {
        // Begin closing: keep icon minus until animation ends
        setClosingQuestions((closing) => [...closing, question]);
        // Remove after animation completes
        setTimeout(() => {
          setClosingQuestions((closing) =>
            closing.filter((q) => q !== question)
          );
        }, DURATION);

        return prev.filter((q) => q !== question);
      }
      // Opening – normal add
      return [...prev, question];
    });
  };

  /* Render */
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Find answers to common questions about our landscape design and garden
          services
        </p>
      </header>

      <div className={styles.faqContainer}>
        {faqs.map(({ category, questions }) => {
          const categoryOpen = openCategories.includes(category);

          return (
            <div key={category} className={styles.categorySection}>
              <button
                className={styles.categoryHeader}
                onClick={() => toggleCategory(category)}
                aria-expanded={categoryOpen}
              >
                <h3 className={styles.categoryTitle}>{category}</h3>
                <span
                  className={`${styles.symbol} ${
                    categoryOpen ? styles.symbolOpen : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`${styles.categoryContent} ${
                  categoryOpen ? styles.open : ""
                }`}
              >
                {questions.map(({ question, answer }) => {
                  const questionOpen = openQuestions.includes(question);
                  const iconShouldBeMinus =
                    questionOpen || closingQuestions.includes(question);

                  return (
                    <div key={question} className={styles.faqItem}>
                      <button
                        className={styles.questionButton}
                        onClick={() => toggleQuestion(question)}
                        aria-expanded={questionOpen}
                      >
                        <h4 className={styles.question}>{question}</h4>
                        <span
                          className={`${styles.symbol} ${
                            iconShouldBeMinus ? styles.symbolOpen : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        className={`${styles.answer} ${
                          questionOpen ? styles.open : ""
                        }`}
                      >
                        <p>{answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
