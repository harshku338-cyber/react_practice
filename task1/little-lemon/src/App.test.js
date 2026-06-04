import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);
});

test('Renders the BookingForm heading', () => {
  render(
    <BookingForm
      availableTimes={[
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00'
      ]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const headingElement = screen.getByText(
    'Reserve a Table'
  );

  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns available times', () => {
  const result = initializeTimes();

  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);
});

test('updateTimes returns available times for selected date', () => {
  const selectedDate = '2026-06-04';

  const result = updateTimes([], selectedDate);

  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);
});