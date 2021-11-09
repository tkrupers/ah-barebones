import React from "react";
import "./title.css";

type Props = {
  title?: string;
};

export const Title: React.FC<Props> = ({ title = "Welcome" }) => (
  <h1 className="title">{title}</h1>
);
