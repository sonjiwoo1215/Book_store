// styled.d.ts
import "styled-components";
import type {
  ColorKey,
  HeadingSize,
  ButtonSize,
  ButtonScheme,
} from "./style/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    color: Record<ColorKey, string>;
    heading: {
      [key in HeadingSize]: {
        fontSize: string;
      };
    };
    button: {
      [key in ButtonSize]: {
        fontSize: string;
        padding: string;
      };
    };
    buttonScheme: {
      [key in ButtonScheme]: {
        color: string;
        backgroundColor: string;
      };
    };
    borderRadius: {
      default: string;
    };
    layout: {
      width: {
        [key in LayoutWidth]: string;
      };
    };
  }
}
