import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export function initializeTimes() {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ];
}

export function updateTimes(state, action) {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ];
}

function Main({ submitForm }) {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;