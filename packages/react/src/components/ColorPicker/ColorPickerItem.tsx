import { NoColors } from "@edifice-ui/icons";
import clsx from "clsx";

import { ColorPaletteItem } from "./ColorPalette";

export interface ColorPickerItemProps {
  /**
   * Color item to display
   */
  model: ColorPaletteItem;
  /**
   * Render as selected
   */
  selected?: boolean;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * Triggered when a color is picked
   */
  onChange?: (item: ColorPaletteItem) => void;
}

const ColorPickerItem = ({
  model,
  selected,
  className,
  onChange,
}: ColorPickerItemProps) => (
  <button
    aria-label={model.description}
    className={clsx(
      "color-picker-hue-color-item rounded-1",
      className,
      model.hue === "light" ? "light" : "dark",
      selected && "selected",
    )}
    style={{ backgroundColor: model.value }}
    onClick={() => onChange?.(model)}
  >
    {model.isReset && <NoColors style={{ color: "var(--edifice-danger)" }} />}
  </button>
);

ColorPickerItem.displayName = "ColorPickerItem";

export default ColorPickerItem;
