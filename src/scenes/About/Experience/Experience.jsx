import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = [
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
      title: 'MEARN Stack Web Development',
      company: 'ITI',
      period: 'May 2024 – Nov 2024',
      description:
        'ITI scholarship provided by Ministry of Communications and Information Technology.',
      achievements: [
        'Engineered full-stack applications utilizing MongoDB, Express.js, node.js, Nest, React, Angular and Next.js',
        'Collaborated with 5-member team using Agile methodologies',
        'Created RESTful APIs serving 1000+ requests per minute',
        'Developed responsive interfaces increasing mobile user engagement by 30%',
        'Maintained version control standards using Git and GitHub',
      ],
    },
    {
      title: 'Odoo Developer',
      company: 'Sys Gates',
      period: 'Sep 2023 – May 2024',
      achievements: [
        'Engineered custom Odoo modules enhancing business process automation',
        'Optimized existing modules improving system performance by 30%',
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
