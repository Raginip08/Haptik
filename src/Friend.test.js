import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Friend from "./Friend";

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

it("Changes Favorites class", () => {
  act(() => {
    render(<Friend friends={[{id:1, name:"", favourite:true}]} />, container);
  });

  const button = document.querySelector("[data-testid=favorite]");
  expect(button.innerHTML).toBe("");
  expect(button.className).toBe("fas fa-star");
});