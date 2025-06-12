// "use client" を宣言していないので、呼び出し元のコンポーネントによって振る舞いが変わる
// ClientPage.tsx から呼び出されるとクライアントコンポーネントとして扱われる（async function（RSC）だとエラーになる）
// ServerPage.tsx から呼び出されるとサーバーコンポーネントとして扱われる
export const HybridComponent = () => {
  console.log("🐄 I am a Hybrid Component");

  return <p>Hybrid Component</p>;
};
