import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/infiniteScroll")({
  component: () => <div>Hello /infiniteScroll!</div>,
});
