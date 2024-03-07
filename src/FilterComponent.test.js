import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterComponent from './FilterComponent';

describe('FilterComponent', () => {
  it('renders filter input and data list', () => {
    const testData = ['Apple', 'Banana', 'Orange'];
    const { getByPlaceholderText, getByText } = render(
      <FilterComponent data={testData} />
    );

    const filterInput = getByPlaceholderText('Filter data...');
    expect(filterInput).toBeInTheDocument();

    testData.forEach(item => {
      const listItem = getByText(item);
      expect(listItem).toBeInTheDocument();
    });
  });

  it('filters data based on input', () => {
    const testData = ['Apple', 'Banana', 'Orange'];
    const { getByPlaceholderText, getByText, queryByText } = render(
      <FilterComponent data={testData} />
    );

    const filterInput = getByPlaceholderText('Filter data...');
    fireEvent.change(filterInput, { target: { value: 'apple' } });

    expect(getByText('Apple')).toBeInTheDocument();
    expect(queryByText('Banana')).not.toBeInTheDocument();
    expect(queryByText('Orange')).not.toBeInTheDocument();
  });
});