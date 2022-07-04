const svgs = [
  'Add.svg',
  'Back.svg',
  'Book.svg',
  'Check.svg',
  'Info.svg',
  'Like.svg',
  'More.svg',
  'Pencil.svg',
] as const;
export type SvgType = typeof svgs[number];
