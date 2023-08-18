import { useState } from "react";

//import { Delete, Edit } from "@edifice-ui/icons";
import clsx from "clsx";

export interface ColorPaletteItem {
  /**
   * CSS Color Value, in the form #AABBCC
   */
  value: string;
  /**
   * Is it a dark or light color ?
   * When undefined, will be considered Dark.
   */
  hue?: "Dark" | "Light";
}

/** Variations of one color. */
export type ColorPaletteHues = Array<ColorPaletteItem>;

export interface ColorPalette {
  /**
   * Description of the color palette.
   */
  label: string;
  /**
   * Array of colors * variations.
   */
  colors: ColorPaletteHues[];
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

export const DefaultPalette: ColorPalette = {
  label: "Default palette",
  colors: [
    /* Paint It Black */
    [
      { value: "#4A4A4A" },
      { value: "#909090" },
      { value: "#C7C7C7" },
      { value: "#F2F2F2", hue: "Light" },
      { value: "#FFF", hue: "Light" },
    ],
    /* Blue Sunday */
    [
      { value: "#005A8A" },
      { value: "#2F7EA7" },
      { value: "#46AFE6" },
      { value: "#B9E3F8", hue: "Light" },
      { value: "#E5F5FF", hue: "Light" },
    ],
    /* Purple haze */
    [
      { value: "#550070" },
      { value: "#7C2C96" },
      { value: "#A348C0" },
      { value: "#E4E4E4", hue: "Light" },
      { value: "#F6ECF9", hue: "Light" },
    ],
    /* Red House */
    [
      { value: "#9E0016" },
      { value: "#C6253B" },
      { value: "#FF3A55" },
      { value: "#FFB6C0", hue: "Light" },
      { value: "#FFECEE", hue: "Light" },
    ],
    /* The Brown Album */
    [
      { value: "#9E4800" },
      { value: "#DA6A0B" },
      { value: "#FF8D2E" },
      { value: "#FFCBA0", hue: "Light" },
      { value: "#FFEFE3", hue: "Light" },
    ],
    /* Yellow Submarine */
    [
      { value: "#A89400" },
      { value: "#D1AF00" },
      { value: "#F1CA00" },
      { value: "#FAEA9C", hue: "Light" },
      { value: "#FBF4D5", hue: "Light" },
    ],
    /* Green Naugahyde */
    [
      { value: "#2E6105" },
      { value: "#4E9019" },
      { value: "#5AC235" },
      { value: "#C8E4AF", hue: "Light" },
      { value: "#EAF7E4", hue: "Light" },
    ],
  ],
};

export const AccessiblePalette: ColorPalette = {
  label: "Accessible palette",
  colors: [
    [{ value: "#4A4A4A" }],
    [{ value: "#648FFF" }],
    [{ value: "#785EF0" }],
    [{ value: "#DC267F" }],
    [{ value: "#FE6100" }],
    [{ value: "#FFB000" }],
    [{ value: "#F3EA14" }],
  ],
};

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
        <div className="color-palette container text-center">
          <div className="color-palette-label">{palette.label}</div>
          <div
            className={clsx(
              "row align-items-start",
              "row-cols-" + palette.colors.length,
              palette.className,
            )}
          >
            {palette.colors.map((hues: ColorPaletteHues) => (
              <div
                className={clsx(
                  "color-palette-hue col row align-items-start flex-column",
                  "row-cols-" + hues.length,
                )}
              >
                {hues.map((color) => (
                  <div className="color-palette-hue-color col">
                    <button
                      className={clsx(
                        "color-palette-hue-color-item btn",
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
