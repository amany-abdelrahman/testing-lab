import React from 'react';
import { render } from '@testing-library/react';
import ConditionalComponent from './ConditionalComponent';

describe('ConditionalComponent', () => {
  it('renders "Welcome, User!" when isLoggedIn is true', () => {
    const { getByText } = render(<ConditionalComponent isLoggedIn={true} />);
    const welcomeMessage = getByText('Welcome, User!');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders "Please log in to continue." when isLoggedIn is false', () => {
    const { getByText } = render(<ConditionalComponent isLoggedIn={false} />);
    const loginMessage = getByText('Please log in to continue.');
    expect(loginMessage).toBeInTheDocument();
  });
});