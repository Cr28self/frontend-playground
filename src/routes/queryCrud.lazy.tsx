import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/queryCrud")({
  component: QueryPage,
});

function QueryPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      QueryPage
    </div>
  );
}
