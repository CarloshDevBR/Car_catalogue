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

  it('Should correctly render', () => {
    render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);
  });

  it('Should open when click card', () => {
    const { getByRole } = render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);

    const openButton = getByRole('button');

    expect(openButton).toBeDefined();
  });

  it('Should close the modal when the close button is clicked', () => {
    const { getByRole, queryByText } = render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);

    const closeButton = getByRole('button');

    fireEvent.click(closeButton);

    expect(queryByText('car model')).toBeNull();
  });

  it('Should render details car', () => {
    const { getByText } = render(<CarDetails isOpen={true} car={mockCarDetails} closeModal={() => {}} />);

    expect(getByText('25')).toBeInTheDocument();
    expect(getByText('Sedan')).toBeInTheDocument();
    expect(getByText('30')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('2000')).toBeInTheDocument();
    expect(getByText('Front-wheel drive')).toBeInTheDocument();
    expect(getByText('Gasoline')).toBeInTheDocument();
    expect(getByText('35')).toBeInTheDocument();
    expect(getByText('Toyota')).toBeInTheDocument();
    expect(getByText('Camry')).toBeInTheDocument();
    expect(getByText('Automatic')).toBeInTheDocument();
    expect(getByText('2022')).toBeInTheDocument();
  });
});
