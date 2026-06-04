import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

const defaultProps = {
  availableTimes: [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ],
  dispatch: jest.fn(),
  submitForm: jest.fn()
};

test('Renders the BookingForm heading', () => {
  render(<BookingForm {...defaultProps} />);

  expect(
    screen.getByText('Reserve a Table')
  ).toBeInTheDocument();
});

test('initializeTimes returns available booking times', () => {
  const result = initializeTimes();

  expect(window.fetchAPI).toHaveBeenCalled();
  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);
});

test('updateTimes returns available times for selected date', () => {
  const result = updateTimes([], '2026-06-04');

  expect(window.fetchAPI).toHaveBeenCalled();
  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);
});

test('date input is required', () => {
  render(<BookingForm {...defaultProps} />);

  expect(
    screen.getByLabelText(/choose date/i)
  ).toBeRequired();
});

test('guests input has minimum value of 1', () => {
  render(<BookingForm {...defaultProps} />);

  expect(
    screen.getByLabelText(/number of guests/i)
  ).toHaveAttribute('min', '1');
});

test('guests input has maximum value of 10', () => {
  render(<BookingForm {...defaultProps} />);

  expect(
    screen.getByLabelText(/number of guests/i)
  ).toHaveAttribute('max', '10');
});

test('submit button is disabled when form is invalid', () => {
  render(<BookingForm {...defaultProps} />);

  expect(
    screen.getByDisplayValue(
      /make your reservation/i
    )
  ).toBeDisabled();
});

test('submit button becomes enabled when form is valid', async () => {
  render(<BookingForm {...defaultProps} />);

  const dateInput =
    screen.getByLabelText(/choose date/i);

  await userEvent.type(
    dateInput,
    '2026-06-10'
  );

  expect(
    screen.getByDisplayValue(
      /make your reservation/i
    )
  ).not.toBeDisabled();
});