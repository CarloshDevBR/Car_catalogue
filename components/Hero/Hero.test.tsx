// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { render } from '@testing-library/react';

import { Hero } from './';

describe('Test group Hero', () => {
  it('Should render correctly', () => {
    render(<Hero />);
  });

  it('Should render image', () => {
    const { getByAltText } = render(<Hero />);

    const imageHero = getByAltText('hero');

    expect(imageHero).toBeInTheDocument();
    expect(imageHero).toHaveAttribute('src', '/_next/image?url=%2Fhero.png&w=3840&q=75');
  });
});
