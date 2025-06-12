import { ClientComponent } from "@/components/Playgrounds/ClientComponent";
import { HybridComponent } from "@/components/Playgrounds/HybridComponent";
import { ServerComponent } from "@/components/Playgrounds/ServerComponent";

export const ServerPage = async () => {
  console.log("🫠 I am a Server Page Component!");

  return (
    <div className="flex flex-col">
      <ServerComponent />
      <ClientComponent />
      <HybridComponent />
    </div>
  );
};
