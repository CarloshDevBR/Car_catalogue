// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react';

import { CustomButton } from './';

describe('Test group CustomButton', () => {
  it('Should correctly render', () => {
    render(<CustomButton />);
  });

  it('Should render button with title', () => {
    const { getByText } = render(<CustomButton title="Click-me!" />);

    const button = getByText('Click-me!');

    expect(button).toBeInTheDocument('Click-me!');
  });

  it('Should clicked button correctly', () => {
    const handleClick = jest.fn();

    render(<CustomButton handleClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalled();
  });

  it('Should disabled button currently', () => {
    render(<CustomButton isDisabled={true} />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Should enabled button currently', () => {
    render(<CustomButton isDisabled={false} />);

    const button = screen.getByRole('button');

    expect(button).toBeEnabled();
  });

  it('Sets the default button type to "button"', () => {
    render(<CustomButton />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('Should render button with textStyles', () => {
    const { getByRole } = render(<CustomButton textStyles="text-sm" />);

    const button = getByRole('button');

    expect(button).toHaveStyle({
      fontSize: 'text-sm',
    });
  });

  it('Should render button with containerStyles', () => {
    const { getByRole } = render(<CustomButton containerStyles="bg-white" />);

    const button = getByRole('button');

    expect(button).toHaveStyle({
      backgroundColor: 'bg-white',
    });
  });

  it('Should render currently image icon', () => {
    const rightIconSrc = '/caminho/para/sua/imagem.png';

    const { getByRole } = render(<CustomButton rightIcon={rightIconSrc} />);

    const img = getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/_next/image?url=%2Fcaminho%2Fpara%2Fsua%2Fimagem.png&w=3840&q=75');
  });
});
