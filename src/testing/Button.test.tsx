import { render,fireEvent } from "@testing-library/react";
import Button from "../components/ui/Button"

test('renders button with text', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Hello</Button>);
  expect(getByText('Hello')).toBeInTheDocument();
});

test('calls onClick handler', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});