// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { fireEvent, render } from '@testing-library/react';

import { CarDetails } from './';

import { mockCarDetails } from '@/mock/carMock';

describe('Test group CarDetails', () => {
  beforeAll(() => {
    window.ResizeObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterAll(() => {
    window.ResizeObserver.mockRestore();
  });

  it('renders correctly', () => {
    render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);
  });

  it('opens when clicked', () => {
    const { getByRole } = render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);

    const openButton = getByRole('button');

    fireEvent.click(openButton);

    expect(openButton).toBeDefined();
  });

  it('closes when close button is clicked', () => {
    const { getByRole, queryByText } = render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);

    const closeButton = getByRole('button');

    fireEvent.click(closeButton);

    expect(queryByText('car model')).toBeNull();
  });

  it('renders car details', () => {
    const { getByText } = render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);

    expect(getByText(mockCarDetails.city_mpg.toString())).toBeInTheDocument();
    expect(getByText(mockCarDetails.class)).toBeInTheDocument();
    expect(getByText(mockCarDetails.combination_mpg.toString())).toBeInTheDocument();
    expect(getByText(mockCarDetails.cylinders.toString())).toBeInTheDocument();
    expect(getByText(mockCarDetails.displacement.toString())).toBeInTheDocument();
    expect(getByText(mockCarDetails.drive)).toBeInTheDocument();
    expect(getByText(mockCarDetails.fuel_type)).toBeInTheDocument();
    expect(getByText(mockCarDetails.highway_mpg.toString())).toBeInTheDocument();
    expect(getByText(mockCarDetails.make)).toBeInTheDocument();
    expect(getByText(mockCarDetails.model)).toBeInTheDocument();
    expect(getByText(mockCarDetails.transmission)).toBeInTheDocument();
    expect(getByText(mockCarDetails.year.toString())).toBeInTheDocument();
  });
});
