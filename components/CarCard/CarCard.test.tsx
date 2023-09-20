// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { render } from '@testing-library/react';

import { mockCarDetails } from '@/mock/carMock';

import { CarCard } from './';

import { calculateCarRent } from '@/utils/calculateCarRent';

describe('Test group CarCard', () => {
  it('Should correctly render', () => {
    render(<CarCard car={mockCarDetails} />);
  });

  it('should render name Toyota Camry', () => {
    const { getByText } = render(<CarCard car={mockCarDetails} />);

    expect(getByText('Toyota Camry')).toBeInTheDocument();
  });

  it('Must return in the calculation function the result 53 and correctly render 53 in the document', () => {
    const { getByText } = render(<CarCard car={mockCarDetails} />);

    const carRent = calculateCarRent(mockCarDetails.city_mpg, mockCarDetails.year);

    expect(carRent).toBe('53');

    expect(getByText('53')).toBeInTheDocument();
  });
});
