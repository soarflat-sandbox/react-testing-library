import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Counter } from '../src/Counter';

// テスト実行後に DOM を unmount、cleanup する
afterEach(cleanup);

describe('Counter', () => {
  it('初期状態は0である', () => {
    const { getByTestId } = render(<Counter />);
    // 要素を取得する。document.body.querySelector(`[data-testid="result"]`) とほとんど等価。
    const element = getByTestId('result');
    expect(element).toHaveTextContent('0');
  });

  it('「+」ボタンを押すと１つカウントアップする', () => {
    const { getByTestId, getByText } = render(<Counter />);
    const element = getByTestId('result');
    const increseButton = getByText('+');
    fireEvent.click(increseButton);
    expect(element).toHaveTextContent('1');
  });

  it('「-」ボタンを押すと１つカウントダウンする', () => {
    const { getByTestId, getByText } = render(<Counter />);
    const element = getByTestId('result');
    const decreseButton = getByText('-');
    fireEvent.click(decreseButton);
    expect(element).toHaveTextContent('-1');
  });
});
