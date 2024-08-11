import { createLazyFileRoute } from "@tanstack/react-router";
import Reviewss from "../components/Reviews";

export const Route = createLazyFileRoute("/review")({
  component: ReviewPage,
});

function ReviewPage() {
  return <Reviewss />;
}
