import { useFontSize } from "../../hook/fontsize";
import { useFontSizeContext } from "../context/FontSizeContext";

export default function FontSizeButtons() {
  const {increaseFont, decreaseFont, resetFont } = useFontSizeContext();
  return (
    <div className="flex gap-2 items-center ">
      <button onClick={decreaseFont} className="cursor-pointer text-neutral-400 dark:text-neutral-600 hover:text-background">A-</button>
      <button onClick={resetFont} className="cursor-pointer text-neutral-400 dark:text-neutral-600 hover:text-background">A</button>
      <button onClick={increaseFont} className="cursor-pointer text-neutral-400 dark:text-neutral-600 hover:text-background">A+</button>
    </div>
  );
}
