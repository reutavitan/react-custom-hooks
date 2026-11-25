
// Exercise 9 - useDocumentTitle Demo

import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocumentTitleDemo() {
  const [title, setTitle] = useState("Hello React");

  useDocumentTitle(title);

  return (
    <div>
      <h2>useDocumentTitle</h2>

      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <p>Current title: {title}</p>
    </div>
  );
}

export default DocumentTitleDemo;
