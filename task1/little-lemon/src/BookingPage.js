import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section>
      <h1>Reserve a Table</h1>

      <p>
        Complete the form below to reserve your table.
      </p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </section>
  );
}

export default BookingPage;