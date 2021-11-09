import React from "react";
import { render, screen, act } from "@testing-library/react";
import Search from "./search";

const promise = Promise.resolve();

jest.mock("../service", () => ({
  fetchTitle: () => Promise.resolve("hallo"),
}));

describe("App component", () => {
  it("should be defined", () => {
    expect(Search).toBeDefined();
  });

  it("should display a title", async () => {
    render(<Search />);

    await act(() => promise);

    const title = screen.getByRole("heading");
    expect(title.textContent).toEqual("hallo");
  });
});
