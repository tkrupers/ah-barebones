import React, { useEffect, useState } from "react";
import { Title } from "@components/title/title";
import * as service from "../service";
import "./search.css";

const Search: React.FC = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    service.fetchTitle().then((title) => setTitle(title));
  }, []);

  return (
    <div className="search">
      <Title title={title} />
    </div>
  );
};

export default Search;
