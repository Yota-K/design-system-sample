import * as fs from 'fs';
import * as path from 'path';

/*
 *
 * iconsディレクトリのSVGから、iconComponentのmask-imageに渡すファイル名を生成する処理
 *
 **/

// iconsディレクトリにある全てのSVGの名前を取得
const getAllIconSvgName = () => {
  const dir = path.join(__dirname, '/svg');
  const fileNameList = fs.readdirSync(dir);

  console.info(fileNameList);

  return fileNameList;
};

// ファイルの書き込み処理
const writeFile = (path: string, data: string) => {
  fs.writeFile(path, data, (er) => {
    if (er) {
      console.error('予期しないエラーが発生しました', er);
      throw er;
    } else {
      console.info('SVGの型の生成に成功しました!');
    }
  });
};

// メインの処理
const mainFunc = () => {
  const filePath = path.join(__dirname, '/iconSvgType.ts');
  const file = `const svgs = ${JSON.stringify(getAllIconSvgName())} as const
export type SvgType = typeof svgs[number];
`;

  writeFile(filePath, file);
};

mainFunc();
