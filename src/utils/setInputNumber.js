import { useState, useEffect, useMemo } from "react";

const setInputNumber = (input, setInput) => {
  setInput(input.replace(/[^0-9]/g, ""));
  return;
};

export default setInputNumber;
