import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  return window.fetchAPI(new Date(action));
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
        <Route path="/" element={<HomePage />} />

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