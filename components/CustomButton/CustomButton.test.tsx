import { render, screen, fireEvent } from '@testing-library/react';

import { CustomButton } from './';

describe('Test group CustomButton', () => {
  it('Should correctly render', () => {
    render(<CustomButton />);
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
});
