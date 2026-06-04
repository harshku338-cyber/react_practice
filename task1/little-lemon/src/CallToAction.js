import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <h1>Little Lemon</h1>

      <h2>Chicago</h2>

      <p>
        We are a family-owned Mediterranean restaurant
        focused on traditional recipes served with a modern
        twist.
      </p>

      <Link to="/booking">
        <button aria-label="On Click">
          Reserve a Table
        </button>
      </Link>
    </section>
  );
}

export default CallToAction;