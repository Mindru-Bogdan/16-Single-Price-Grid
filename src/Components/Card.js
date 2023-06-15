import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <div>
        <h1>Join our community</h1>
        <p>30-day, hassle-free money back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are
          serious about honing their skills.
        </p>
      </div>
      <div>
        <h2>Monthly Subscription</h2>
        <p> $ 29 </p>
        <p>per month</p>
        <p>Full access for less than $ 1 a day</p>
        <button>Sign Up</button>
      </div>
      <div>
        <h3>Why Us</h3>
        <p>
          Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum
          Flashcard decks New videos every week
        </p>
      </div>
    </div>
  );
};

export default Card;
