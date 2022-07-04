import { css } from '@linaria/core';

const iconsWrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 350px;
`;

const iconDiv = css`
  display: inline-flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;

export { iconsWrap, iconDiv };
