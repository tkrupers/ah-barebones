import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./app";

const promise = Promise.resolve();

jest.mock("./service", () => ({
  fetchTitle: () => Promise.resolve("hallo"),
}));

describe("App component", () => {
  it("should be defined", () => {
    expect(App).toBeDefined();
  });

  it("should display a title", async () => {
    render(<App />);

    await act(() => promise);

    const title = screen.getByRole("heading");
    expect(title.textContent).toEqual("hallo");
  });
});
