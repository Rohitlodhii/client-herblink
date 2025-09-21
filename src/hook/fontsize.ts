import { useState } from "react";

const FONT_SIZES = [12, 14, 16, 18, 20]; // px
const DEFAULT_SIZE_INDEX = 2; // 16px default

export function useFontSize() {
  const [sizeIndex, setSizeIndex] = useState(DEFAULT_SIZE_INDEX);

  const increaseFont = () => {
    setSizeIndex((prev) => Math.min(prev + 1, FONT_SIZES.length - 1));
  };

  const decreaseFont = () => {
    setSizeIndex((prev) => Math.max(prev - 1, 0));
  };

  const resetFont = () => {
    setSizeIndex(DEFAULT_SIZE_INDEX);
  };

  return {
    fontSize: FONT_SIZES[sizeIndex],
    increaseFont,
    decreaseFont,
    resetFont,
  };
}
