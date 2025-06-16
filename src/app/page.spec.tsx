import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe('HomePage', () => {
  it('should render the home page', () => {
    render(<HomePage />);
  });

  it('should render product list', () => {
    render(<HomePage />);
    expect(screen.getByRole('list')).toBeVisible();
  });
});