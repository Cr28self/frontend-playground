import Button from "@/components/Button";
import { columns } from "@/components/table/query/columns";
import { DataTable } from "@/components/table/query/data-table";
import { useTodos } from "@/hooks/api/get-todos";
import { useQueryClient } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/queryCrud")({
  component: QueryPage,
});

function QueryPage() {
  // normal fetch
  const queryClient = useQueryClient();
  const fallbackData = queryClient.getQueryData(["getData"]) || [];

  const { data: todos, isLoading, refetch } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  console.log(todos);
  console.log(queryClient.getQueryData(["getTodos"]));
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Button
        onClick={() =>
          queryClient.invalidateQueries({ queryKey: ["getTodos"] })
        }
      >
        Invalidate
      </Button>
      <Button onClick={() => refetch()}>Refetch</Button>

      {todos && <DataTable columns={columns} data={todos} className="h-96" />}
    </div>
  );
}
