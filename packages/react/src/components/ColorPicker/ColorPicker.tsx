import { forwardRef } from "react";
import { Ref } from "react";
import { ComponentPropsWithRef } from "react";

import { InfoCircle, NoColors } from "@edifice-ui/icons";
import clsx from "clsx";

import {
  AccessiblePalette,
  ColorPalette,
  ColorPaletteHues,
  DefaultPalette,
} from "./ColorPalette";
import { Tooltip } from "../Tooltip";

export interface ColorPickerProps extends ComponentPropsWithRef<"div"> {
  /**
   * Palettes of pickable colors
   */
  palettes?: ColorPalette[];

  /**
   * Current picked color
   */
  model?: string;

  /**
   * Triggered when a color is picked
   */
  onSuccess?: (model: string) => void;
}

const ColorPicker = forwardRef(
  (
    {
      palettes = [DefaultPalette, AccessiblePalette],
      model = "#4A4A4A",
      onSuccess,
      ...restProps
    }: any,
    ref: Ref<HTMLDivElement>,
  ) => {
    const handleClick = (color: string) => {
      onSuccess?.(color);
    };

    return (
      <div ref={ref} {...restProps}>
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

            {
              // Show/hide the reset option
              palette.reset && (
                <div className="color-picker-reset small fw-normal my-8">
                  <label className="small d-flex">
                    <button
                      className="color-picker-hue-color-item me-4 border-0"
                      style={{
                        backgroundColor: palette.reset?.value || "transparent",
                      }}
                      onClick={() => handleClick(palette.reset?.value || "")}
                    >
                      <NoColors></NoColors>
                    </button>
                    {palette.reset.description}
                  </label>
                </div>
              )
            }

            <div className="color-picker-palette d-flex gap-2 justify-content-between">
              {palette.colors.map((hues: ColorPaletteHues, hueIndex) => (
                <div
                  key={hueIndex}
                  className="color-picker-hue d-flex gap-2 justify-content-between flex-column "
                >
                  {hues.map((color) => (
                    <div key={color.value} className="color-picker-hue-color">
                      <button
                        aria-label={color.description}
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
      </div>
    );
  },
);

ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
