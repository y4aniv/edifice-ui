import { useState } from "react";

//import { Delete, Edit } from "@edifice-ui/icons";
import clsx from "clsx";

import {
  AccessiblePalette,
  ColorPalette,
  ColorPaletteHues,
  DefaultPalette,
} from "./ColorPalette";

export interface ColorPickerProps {
  /**
   * Palettes of pickable colors
   */
  palettes: ColorPalette[];

  /**
   * Current picked color
   */
  model?: string;

  /**
   * Triggered when a color is picked
   */
  onChange?: (model: string) => void;
}

const ColorPicker = ({
  palettes = [DefaultPalette, AccessiblePalette],
  model = "#4A4A4A",
  onChange,
}: ColorPickerProps) => {
  const [localModel, setLocalModel] = useState(model);

  const handleClick = (color: string) => {
    setLocalModel(color);
    onChange?.(color);
  };

  return (
    <>
      {palettes.map((palette: ColorPalette) => (
        <div className={clsx("color-picker", palette.className)}>
          <div className="color-picker-label mt-4 mb-8">{palette.label}</div>
          <div className="color-picker-palette d-flex justify-content-between">
            {palette.colors.map((hues: ColorPaletteHues) => (
              <div
                className={clsx(
                  "color-picker-hue d-flex justify-content-between flex-column ",
                )}
              >
                {hues.map((color) => (
                  <div className="color-picker-hue-color">
                    <button
                      className={clsx(
                        "color-picker-hue-color-item",
                        color.hue === "Light" && "light",
                        localModel === color.value && "selected",
                      )}
                      style={{ backgroundColor: color.value }}
                      onClick={() => handleClick(color.value)}
                    ></button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
