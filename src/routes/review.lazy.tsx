import { createLazyFileRoute } from "@tanstack/react-router";
import Reviews from "../components/Reviews";

export const Route = createLazyFileRoute("/review")({
  component: ReviewPage,
});

function ReviewPage() {
  return <Reviews />;
}
