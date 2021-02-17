import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Pagination from "./Pagination";

let container = null;
beforeEach(() => {
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders page numbers", () => {
  act(() => {
    render(<Pagination totalPages={1} />, container);
  });

  const ul = document.querySelector("[data-testid=pageList]");
  expect(ul.children.length).toBe(1);
  expect(ul.firstElementChild.innerHTML).toBe("1");
});