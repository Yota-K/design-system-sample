import { css } from "@linaria/core";

// デフォルトで適用するCSS
const buttonResetCss = css`
  position: relative;
  line-height: 1;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  text-transform: none;
  overflow: visible;
  box-sizing: border-box;
  display: inline-block;
`;

const buttonTextCss = css`
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const buttonDisabledCss = css`
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export { buttonResetCss, buttonTextCss, buttonDisabledCss };
