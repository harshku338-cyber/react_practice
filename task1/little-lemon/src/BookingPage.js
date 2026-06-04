import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section>
      <h1>Reserve a Table</h1>

      <p>
        Complete the form below to reserve your table at
        Little Lemon.
      </p>

      <BookingForm />
    </section>
  );
}

export default BookingPage;