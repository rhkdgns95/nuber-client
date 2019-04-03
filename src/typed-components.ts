// my-theme.ts
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  blueColor: string
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  createGlobalStyle
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export {css, injectGlobal, keyframes, ThemeProvider, createGlobalStyle};
export default styled;