import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.join}>
          <h1>Join our community</h1>
          <p className={classes.yellow}>30-day, hassle-free money back guarantee</p>
          <p className={classes.description}>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are
            serious about honing their skills.
          </p>
        </div>
        <div className={classes.payment}>
          <h2>Monthly Subscription</h2>
          <p className={classes.value}>$29 </p>
          <p className={classes.month}>per month</p>
          <p className={classes.access}>Full access for less than $1 a day</p>
          <p className={classes.signUp}>Sign Up</p>
        </div>
        <div className={classes.about}>
          <h3>Why Us</h3>
          <ul className={classes.aboutUs}>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
      <div className={classes.whiteSpace} />
    </div>
  );
};

export default Card;
