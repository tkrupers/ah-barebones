import React, { useEffect, useState } from "react";
import { Title } from "./components/title/title";
import * as service from "./service";
import "./app.css";

const App: React.FC = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    service.fetchTitle().then((title) => setTitle(title));
  }, []);

  return (
    <div className="app">
      <Title title={title} />
    </div>
  );
};

export default App;
