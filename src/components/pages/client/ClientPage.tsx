"use client"; // "use client" を宣言することで、自身とその子コンポーネントがクライアントコンポーネントとして扱われる

import { ClientComponent } from "@/components/Playgrounds/ClientComponent";
import { HybridComponent } from "@/components/Playgrounds/HybridComponent";

export const ClientPage = () => {
  console.log("🫠 I am a Client Page Component!");

  return (
    <div className="flex flex-col">
      <ClientComponent />
      {/* <ServerComponent /> Client Component で Server Component は利用できない */}
      <HybridComponent />
    </div>
  );
};
