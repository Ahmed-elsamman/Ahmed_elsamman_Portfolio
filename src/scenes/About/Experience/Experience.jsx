import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Ayen, Remote, Riyadh',
      period: 'Nov 2024 – present',
      achievements: [
        'Built and optimized modular Angular 15+ UI components achieving 100% mobile-first compliance.',
        'Improved page-load speed by 40% using lazy loading, code splitting, and image optimization techniques.',
        'Integrated RESTful APIs, reducing response latency by 30% while ensuring robust error handling.',
        'Collaborated in Agile sprints with backend and UX teams via Jira and Slack, delivering features on schedule.',
        'Conducted code reviews and enforced ESLint/Prettier standards, decreasing bugs by 20% and improving code quality.',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'Information Technology Institute (ITI), Qena',
      period: 'Jan 2025 – present',
      achievements: [
        'Delivered technical sessions on Angular, React, TypeScript, and JavaScript (ES6+) for MEARN Stack trainees.',
        'Mentored over 30 students through hands-on projects, emphasizing component architecture and API integration.',
        'Evaluated and refactored student code for scalability and performance, boosting project success rate by 35%.',
        'Introduced Agile Scrum practices and Git workflows, enhancing team collaboration and delivery efficiency.',
        'Provided continuous feedback on UI/UX implementation, ensuring alignment with design specifications.',
      ],
    },
    {
      title: 'Full Stack JavaScript Developer',
      company: 'Freelancer',
      period: 'Nov 2024 – present',
      achievements: [
        'Delivered full-stack web application reducing manual data entry time by 60%',
        'Decreased page load time by 40% through code optimization and caching',
        'Developed responsive interfaces increasing mobile user engagement by 30%',
        'Implemented automated testing reducing bug detection time by 35%',
      ],
    },
    {
      title: 'Odoo Developer',
      company: 'Sys Gates',
      period: 'Sep 2023 – May 2024',
      achievements: [
        'Extended and optimized ERP modules using Python (Odoo Framework), increasing operational efficiency by 25%.',
        'Refactored legacy OOP modules to improve maintainability and reduce errors by 15%.',
        'Collaborated with cross-functional teams to deliver customized business solutions within project timelines.',
        'Implemented automated testing scripts, enhancing reliability of critical business processes.',
        'Provided technical documentation and training for end-users, facilitating smoother adoption.',
      ],
    },
    {
      title: 'Senior Cosmetics Specialist',
      company: 'Misr Pharmacies - 6th of October',
      period: 'Jan 2018 – Dec 2022',
      achievements: [
        'Led and mentored a team of 5 cosmetics specialists',
        'Increased sales by 40% through effective team coordination and customer service',
        'Implemented new training programs improving team performance by 25%',
        'Managed inventory and supply chain operations reducing stock outs by 60%',
        'Developed strong interpersonal and leadership skills through daily team management',
      ],
    },
  ];

  return (
    <section className={styles.experience}>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.header}>
              <h3>{exp.title}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.period}>{exp.period}</p>
            </div>
            {exp.description && (
              <p className={styles.description}>{exp.description}</p>
            )}
            <ul className={styles.achievements}>
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
