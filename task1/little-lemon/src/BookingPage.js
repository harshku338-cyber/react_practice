import BookingForm from './BookingForm';

function BookingPage({
  availableTimes,
  dispatch,
  submitForm
}) {
  return (
    <main>
      <section>
        <h1>Reserve a Table</h1>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingPage;