import * as fs from 'fs';
import * as path from 'path';

// iconsディレクトリにある全てのSVGの名前を取得
const getAllIconSvgName = () => {
  const dir = path.join(__dirname, '/svg');
  const fileNameList = fs.readdirSync(dir);

  console.info(fileNameList);

  return fileNameList;
};

// 取得した全てのSVGファイルの拡張子を除去する
const AllIconSvgremoveExtension = () => {
  return getAllIconSvgName().map((icon) => icon.replace(/\.svg$/, ''));
};

// SVGをimportする記述をSVGディレクトリに存在するSVGから生成
const svgImport = (iconName: string) => {
  console.log(`import ${iconName} from './svg/${iconName}'`);
  return `import ${iconName} from './svg/${iconName}.svg';`;
};

// 取得した全てのSVGからアイコンコンポーネントの型を生成
const svgType = () => {
  const icons = AllIconSvgremoveExtension();
  return `const svgs = ${JSON.stringify(icons)} as const
export type SvgType = typeof svgs[number];
`;
};

// switch文の中のcase文を自動で生成
const svgSwitchCase = (iconName: string) => {
  return `case '${iconName}':
    return ${iconName};`;
};

// SVGアイコンのパスとアイコンの型を生成
const generateSwitchIconPathLogic = () => {
  const importStatement = AllIconSvgremoveExtension()
    .map((icon) => {
      return svgImport(icon);
    })
    .join('');

  const iconType = svgType();

  const caseStatement = AllIconSvgremoveExtension()
    .map((icon) => {
      return svgSwitchCase(icon);
    })
    .join('');

  // `や$はバックスラッシュを使って文字列として扱えるようにする
  return `${importStatement}

${iconType}

export const getSvgIconPath = (iconName: SvgType) => {
  const changeIconSvg = (iconName: SvgType) => {
    switch (iconName) {
      ${caseStatement}
      default:
        throw new Error('Passed Invalid Svg');
    }
  };

  return \`url('\${changeIconSvg(iconName)}')\`;
};
`;
};

// ファイルの書き込み処理
const writeFile = (path: string, data: string) => {
  fs.writeFile(path, data, (er) => {
    if (er) {
      console.error('予期しないエラーが発生しました', er);
      throw er;
    } else {
      console.info('storyの生成に成功しました!');
    }
  });
};

// メインの処理
const mainFunc = () => {
  const filePath = path.join(__dirname, '/svgIconPath.ts');
  writeFile(filePath, generateSwitchIconPathLogic());
};

mainFunc();
