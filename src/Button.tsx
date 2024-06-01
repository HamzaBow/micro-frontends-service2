import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-fuchsia-700"
      onClick={() => setCount((count) => count + 1)}
    >
      Button (service 2) {count}
    </button>
  );
}
