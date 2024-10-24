import { render, renderHook } from "@testing-library/react";
import React, { useState } from "react";
import Modal from "../components/modal";

describe("Modal", () => {
  test("renders the Modal component", () => {
    const {result } = renderHook(() => useState(true))
    const [IsModalOpened, setIsModalOpened] =  result.current
    render(<Modal message="Hello world!" setIsModalOpened={setIsModalOpened} />);

  });
});
