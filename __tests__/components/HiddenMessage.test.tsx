// Jest のカスタムマッチャー。インポートすることで以下のカスタムマッチャーを利用できる。
// https://github.com/testing-library/jest-dom#custom-matchers
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { HiddenMessage } from '@/components/HiddenMessage';

describe('HiddenMessage', () => {
  it('チェックボックスにチェックを入れたら props.children を表示する', () => {
    const testMessage = 'Test Message';
    // document.body に HiddenMessage がレンダリングされる。
    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    // document.body 上に 'testMessage' が存在しない
    // queryBy* はクエリの最初にマッチする要素を返す。マッチする要素がない場合は null を返す。
    // ByText は文字列や正規表現にマッチするテキストノードを持つ要素を検索する。
    // つまり、queryByText は、指定した文字列や正規表現に最初にマッチするテキストノードを持つ要素を返す。
    // また、screen は document.bodyに事前にバインドされているクエリを持つオブジェクト。
    // そのため、screen.queryByText を実行することで、document.body から DOM ノードを取得できる。
    expect(screen.queryByText(testMessage)).toBeNull();

    // 'show' という文字列が含まれる label をクリックする
    // getBy* はクエリの最初にマッチする要素（ノード）を返す。マッチする要素がなかったり、
    // 複数の要素がマッチした場合はエラーをスローする。
    // ByLabelText は文字列や正規表現にマッチするラベルを検索し、そのラベルに関連づけられている要素を返す。
    // つまり、getByLabelText は、指定した文字列や正規表現に最初にマッチするラベルに関連づけられた要素を返す。
    fireEvent.click(screen.getByLabelText(/show/i));

    // document.body 上に 'testMessage' が存在する
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
