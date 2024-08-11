import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useTransition } from "react";

export const Route = createLazyFileRoute("/transition")({
  component: UseTransition,
});

const data = ["apple", "banana", "cherry", "date", "elderberry"];
function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);
  const [count, setCount] = useState(0);

  //   function selectTab(nextTab) {
  //     startTransition(() => {
  //       setTab(nextTab);
  //     });
  //   }
  function handleChange(e) {
    setFilter(e.target.value);

    const newFilteredData = data.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(newFilteredData);
    // startTransition(() => {

    // });
  }

  function handleClick(e) {
    startTransition(() => {
      setCount((prevCount) => prevCount + 1);
    });
  }

  return (
    <div className="h-screen p-2">
      <input
        className="p-2 border border-sky-100 border-rounded-md"
        type={"text"}
        value={filter}
        onChange={handleChange}
      />
      <div className="my-own-class">dddddd</div>

      {isPending ? (
        <div className="text-3xl bg-red-400">Loading...</div>
      ) : (
        <ul>
          {filteredData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <button
        type={"button"}
        className="p-4 rounded-sm border-cyan-300 bg-cyan-300"
        onClick={handleClick}
      >
        Count: {count}
      </button>
    </div>
  );
}
