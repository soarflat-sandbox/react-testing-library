import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { HiddenMessage } from '../src/HiddenMessage';

describe('HiddenMessage', () => {
  it('shows the children when the checkbox is checked', () => {
    const testMessage = 'Test Message';
    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    // testMessage が存在しなければ OK
    expect(screen.queryByText(testMessage)).toBeNull();

    // 「show」という文字列が含まれる label をクリックする
    fireEvent.click(screen.getByLabelText(/show/i));

    // testMessage が document 上に存在すれば OK
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
