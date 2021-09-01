import { palette } from "./palette";

export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  transparent: "rgba(0, 0, 0, 0)",

  background: palette.white,

  //The main tinting color.
  primary: palette.primary,

  // The main tinting color, but darker.
  primaryDarker: palette.orangeDarker,

  // A subtle color used for borders and lines.
  line: palette.offWhite,

  // The default color of text in many components.
  text: palette.greyishBrown,

  // Secondary information.
  dim: palette.lightGrey,

  // Error messages and icons.
  error: palette.angry,
};
