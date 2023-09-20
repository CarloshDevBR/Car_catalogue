// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { render } from '@testing-library/react';

import { Footer } from './';

describe('Test group Footer', () => {
  it('Should render correctly', () => {
    render(<Footer />);
  });

  it('Should render image correctly', () => {
    const { getByAltText } = render(<Footer />);

    const logoImage = getByAltText('logo');

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/logo.svg');
    expect(logoImage).toHaveAttribute('width', '118');
    expect(logoImage).toHaveAttribute('height', '18');
  });

  it('Should renders and tests footer links', () => {
    const { getByText } = render(<Footer />);

    const privacyPolicyLink = getByText('Privacy Policy');
    const termsOfUseLink = getByText('Terms of Use');

    expect(privacyPolicyLink).toHaveAttribute('href', '/privacy-policy');
    expect(termsOfUseLink).toHaveAttribute('href', '/terms-of-use');
  });
});
