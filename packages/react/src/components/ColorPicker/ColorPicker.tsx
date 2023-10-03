import { InfoCircle } from "@edifice-ui/icons";
import clsx from "clsx";

import {
  AccessiblePalette,
  ColorPalette,
  ColorPaletteHues,
  ColorPaletteItem,
  DefaultPalette,
} from "./ColorPalette";
import ColorPickerItem from "./ColorPickerItem";
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
  onChange?: (item: ColorPaletteItem) => void;
}

const ColorPicker = ({
  palettes = [DefaultPalette, AccessiblePalette],
  model = "#4A4A4A",
  ...props
}: ColorPickerProps) => {
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

          {
            // Show/hide the reset option
            palette.reset && (
              <div className="color-picker-reset small fw-normal my-8">
                <label className="small d-flex">
                  <ColorPickerItem
                    {...props}
                    model={palette.reset}
                    className="me-4"
                  />
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
                    <ColorPickerItem
                      {...props}
                      model={color}
                      selected={model === color.value}
                    />
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
