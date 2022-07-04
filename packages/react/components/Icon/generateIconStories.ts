import * as fs from 'fs';
import * as path from 'path';

/*
 *
 * iconsディレクトリにあるsvgコンポーネントからstorybook用のファイルを自動生成する処理
 *
 **/

// iconsディレクトリにある全てのアイコンコンポーネントの名前を取得
const getAllIconName = () => {
  const dir = path.join(__dirname, '/icons');
  const fileNameList = fs.readdirSync(dir);
  const allIconComponentName = fileNameList.filter((fileName) => fileName !== 'index.ts');

  console.info(allIconComponentName);

  return allIconComponentName;
};

// storybookにアイコンを表示するためのファイルを生成
const generateStory = () => {
  const allIconName = getAllIconName();

  const importIconComponentStr = allIconName.join(', ').replace(/\.tsx/g, '');
  const iconsList = allIconName.map((icon) => {
    const componentName = icon.replace(/\.tsx/g, '');
    return `<div className={iconDiv}><span>${componentName}</span><${componentName} {...props} /></div>`;
  });

  return `import { SVGProps } from 'react';
import { Story } from '@storybook/react';
import { ${importIconComponentStr} } from './icons/index';
import { iconsWrap, iconDiv } from './storyStyle';

export default {
  title: 'Icons',
  args: {
    color: 'red',
    width: '16px',
    height: '16px',
  },
};

const allIcons = (props: SVGProps<SVGSVGElement>) => {
  return [${iconsList}];
};

export const AllIcons: Story<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <div className={iconsWrap}>
      {allIcons(props).map((icon, i) => (
        <div key={i}> 
          {icon}
        </div>
      ))}
    </div>
  );
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
  const filePath = path.join(__dirname, '/icons.stories.tsx');
  writeFile(filePath, generateStory());
};

mainFunc();
