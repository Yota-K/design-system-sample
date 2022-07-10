import * as fs from 'fs';
import * as path from 'path';

/**
 * svgディレクトリ内のSVGから以下の処理を生成する処理
 *
 * 1, Iconコンポーネントのmask-imageに渡すパス
 * 2, Iconコンポーネントのnameの型
 *
 */

/**
 * iconsディレクトリにある全てのSVGファイルの名前を配列で取得
 */
const getAllIconSvgName = () => {
  const dir = path.join(__dirname, '/svg');
  const fileNameList = fs.readdirSync(dir);

  console.info(fileNameList);

  return fileNameList;
};

/**
 * 取得した全てのSVGファイルの拡張子(.svg)を除去する
 */
const allIconSvgRemoveExtension = () => {
  return getAllIconSvgName().map((icon) => icon.replace(/\.svg$/, ''));
};

/**
 * SVGをimportする記述をSVGディレクトリに存在するSVGから生成
 *
 * @param {string} iconName - アイコンの名前 (例: Add, Arrow)
 */
const generateSvgImportStatement = (iconName: string) => {
  console.info(`import ${iconName} from './svg/${iconName}'`);

  return `import ${iconName} from './svg/${iconName}.svg';`;
};

/**
 * 取得した全てのSVGからIconのnameに渡すことができる型を生成
 */
const generateSvgNameType = () => {
  const icons = allIconSvgRemoveExtension();
  return `export const svgs = ${JSON.stringify(icons)} as const
export type SvgType = typeof svgs[number];
`;
};

/**
 * SVGの名前からSVGのkey, valueの組み合わせを生成
 *
 * @param {string} iconName - アイコンの名前 (例: Add, Arrow)
 */
const svgKeyValue = (iconName: string) => {
  return `${iconName}: ${iconName}, `;
};

/**
 * svgIconPath.tsに書き出す内容を生成
 */
const generateSwitchIconPathLogic = () => {
  const svgImportStatement = allIconSvgRemoveExtension()
    .map((icon) => {
      return generateSvgImportStatement(icon);
    })
    .join('');

  const svgNameType = generateSvgNameType();

  const svgObj = allIconSvgRemoveExtension()
    .map((icon) => {
      return svgKeyValue(icon);
    })
    .join('');

  // `や$はバックスラッシュを使って文字列として扱えるようにする
  return `${svgImportStatement}

${svgNameType}

const svgObj = {${svgObj}};

export const getSvgIconPath = (iconName: SvgType) => {
  const iconSvg = (iconName: SvgType) => {
    if (iconName) {
      return svgObj[iconName];
    }
    throw new Error('Passed Invalid Svg');
  };

  return \`url('\${iconSvg(iconName)}')\`;
};
`;
};

// ファイルの書き込み処理
const writeFile = () => {
  const filePath = path.join(__dirname, '/svgIconPath.ts');
  fs.writeFile(filePath, generateSwitchIconPathLogic(), (er) => {
    if (er) {
      console.error('予期しないエラーが発生しました', er);
      throw er;
    } else {
      console.info('SVGのパスを生成する処理の生成に成功しました!');
    }
  });
};

writeFile();
