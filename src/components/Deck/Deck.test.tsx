import React from "react";
import { render } from "@testing-library/react";

import Deck from "./Deck";

describe("Deck", () => {
  test("renders the Deck component", () => {
    render(<Deck label="Hello world!" />);
  });
});