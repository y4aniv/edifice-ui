import { InfoCircle } from "@edifice-ui/icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import {
  AccessiblePalette,
  ColorPalette,
  ColorPaletteHues,
  DefaultPalette,
} from "./ColorPalette";
import { Tooltip } from "../Tooltip";

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
  const { t } = useTranslation();

  const handleClick = (color: string) => {
    onChange?.(color);
  };

  return (
    <>
      {palettes.map((palette: ColorPalette, paletteIdx) => (
        <div
          key={paletteIdx}
          className={clsx("color-picker mx-8", palette.className)}
        >
          <div className="color-picker-label small mt-4 mb-8">
            {palette.label}
            {palette.tooltip && (
              <Tooltip message="" placement="auto" {...palette.tooltip}>
                <InfoCircle
                  width={18}
                  height={18}
                  className="mx-4 position-relative"
                  style={{ top: "4px" }}
                />
              </Tooltip>
            )}
          </div>
          <div className="color-picker-palette d-flex gap-2 justify-content-between">
            {palette.colors.map((hues: ColorPaletteHues, hueIndex) => (
              <div
                key={hueIndex}
                className={clsx(
                  "color-picker-hue d-flex gap-2 justify-content-between flex-column ",
                )}
              >
                {hues.map((color) => (
                  <div key={color.value} className="color-picker-hue-color">
                    <button
                      aria-label={t(color.description)}
                      className={clsx(
                        "color-picker-hue-color-item rounded-1",
                        color.hue === "light" ? "light" : "dark",
                        model === color.value && "selected",
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
