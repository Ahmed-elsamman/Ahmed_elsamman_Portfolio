import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hello! I am Ahmed Elsamman,
        <br />a passionate software engineer based in{' '}
        <b className={s.purple}>Cairo, Egypt.</b>
        <br />
        <br />
        I have a Bachelor's degree in Computer Science and Information
        Systems From October 6 University ,Egypt
        <br />
        <br />
        I am a results-driven developer with a strong foundation in
        modern web technologies and a keen eye for creating elegant
        solutions to complex problems.
        <br />
        <br />
        Beyond coding, I am passionate about:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>- Playing Games</li>
        <li className={s.aboutActivity}>- Reading</li>
        <li className={s.aboutActivity}>
          - Mentoring and knowledge sharing
        </li>
        <li className={s.aboutActivity}>- Traveling</li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
