import { createLazyFileRoute } from "@tanstack/react-router";
import Section from "../components/context/Section";
import Element from "../components/context/Element";

export const Route = createLazyFileRoute("/context")({
  component: UseContext,
});

// Context Provider( 부모 컴포넌트 ) ---> Context Consumer ( 모든 자식 컴포넌트 )

function UseContext() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(mediaQuery.matches);
  return (
    <div className={`${mediaQuery.matches ? "dark" : "light"}`}>
      <div className="bg-white dark:bg-black dark:text-green-500">
        <Section>
          <Element />
          <Element />
          <Element />
          <Section>
            <Element />
            <Element />
            <Element />
            <Section>
              <Element />
              <Element />
              <Element />
            </Section>
          </Section>
          <Section>
            <Element />
            <Element />
            <Element />
          </Section>
        </Section>
      </div>
    </div>
  );
}
