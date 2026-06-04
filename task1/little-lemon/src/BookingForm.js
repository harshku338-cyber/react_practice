import { useState } from 'react';

function BookingForm({
  availableTimes,
  dispatch,
  submitForm
}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setDate(selectedDate);

    dispatch(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      date,
      time,
      guests,
      occasion
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        maxWidth: '300px',
        gap: '20px',
        margin: '0 auto'
      }}
    >
      <h2>Reserve a Table</h2>

      <label htmlFor="res-date">
        Choose date
      </label>

      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">
        Choose time
      </label>

      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes?.map((availableTime) => (
          <option
            key={availableTime}
            value={availableTime}
          >
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Number of guests
      </label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">
        Occasion
      </label>

      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">
          Birthday
        </option>

        <option value="Anniversary">
          Anniversary
        </option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
      />
    </form>
  );
}

export default BookingForm;