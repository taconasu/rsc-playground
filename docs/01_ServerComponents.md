# Server Components

## 🔗 Refs

- [Server Components | react.dev](https://ja.react.dev/reference/rsc/server-components)
- [React v19 | Blog | react.dev](https://ja.react.dev/blog/2024/12/05/react-19)

## Memo

### 'use client' について

['use client' | react.dev](https://ja.react.dev/reference/rsc/use-client)

クライアントコードとして扱いたいコンポーネントファイルの先頭に付与するディレクティブ。
このファイルだけでなく、それらがインポートしている各モジュールもクライアントコードとして扱う。

このディレクティブはサーバーで実行するコードとクライアントで実行するコードの"**境界**"として作用する。

'use client'を宣言していないコンポーネントの場合は、どこからサーバーで実行するコードから呼び出されるか、クライアントで実行するコードから呼び出されるかで振る舞いが変化する。
例として[HybridComponent](https://github.com/taconasu/rsc-playground/blob/main/src/components/Playgrounds/HybridComponent.tsx)を用意した。

```tsx
// "use client" を宣言していないので、呼び出し元のコンポーネントによって振る舞いが変わる
// ClientPage.tsx から呼び出されるとクライアントコンポーネントとして扱われる（async function（RSC）だとエラーになる）
// ServerPage.tsx から呼び出されるとサーバーコンポーネントとして扱われる
export const HybridComponent = () => {
  console.log("🐄 I am a Hybrid Component");

  return <p>Hybrid Component</p>;
};
```

クライアントで実行するページコンポーネントである[ClientPage](https://github.com/taconasu/rsc-playground/blob/main/src/components/pages/client/ClientPage.tsx)から呼び出す場合、HybridComponent はクライアントコードとして実行される。
一方、サーバーで実行するページコンポーネントである[ServerPage](https://github.com/taconasu/rsc-playground/blob/main/src/components/pages/server/ServerPage.tsx)から呼び出す場合、HybridComponent はサーバーコードとして実行される。

### クライアントコードからサーバーコードは実行できない

'use client'が"境界"として機能するという公式の説明があるように、サーバーで実行する実装が基調としてあり、その一部をクライアントコードとして扱うための機能を果たしている。
クライアントコードではサーバーで実行させるような非同期関数コンポーネントは実行できないので注意。（仮に HybridComponent を非同期関数コンポーネントとして実装した場合、ClientPage からの呼び出しはエラーになる）
