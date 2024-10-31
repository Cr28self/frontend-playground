import { TData } from "@/components/table/query/columns";
import { apiClient } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getTodos = async (): Promise<TData[]> => {
  const { data } = await apiClient.get("/todos");
  return data;
};

export const getTodosQueryOptions = () => {
  return queryOptions({
    queryKey: ["getTodos"],
    queryFn: getTodos,
  });
};

type UseTodos = { queryConfig?: QueryConfig<typeof getTodosQueryOptions> };

export const useTodos = ({ queryConfig }: UseTodos = {}) => {
  return useQuery({
    ...getTodosQueryOptions(),
    ...queryConfig,
  });
};
