import React from "react";
import {themeBlockStyle} from '../../../styles/index';

interface IKeywordList {
  seq: string;
  title: string;
}
interface IData {
  title: string;
  banner: string;
  keywordList: IKeywordList[];
}
interface IInfoProps {
  data: IData
}
const Info: React.FC<IInfoProps> = ({ data }) => {
  const { title, banner, keywordList } = data;
  return (
    <div className={themeBlockStyle.CThemeBlock__info}>
      <div className={themeBlockStyle.CThemeBlock__tag}>主題推薦</div>
      <h1 className={themeBlockStyle.CThemeBlock__title}>{title}</h1>
      <div className={themeBlockStyle.CThemeBlock__keywordList}>
        {keywordList &&
          keywordList.map((item: IKeywordList) => {
            return (
              <div
                key={item.seq}
                className={themeBlockStyle.CThemeBlock__keywordList_item}
              >
                {item.title}
              </div>
            );
          })}
      </div>

      <div className={themeBlockStyle.CThemeBlock__banner}>
        <img alt={title} src={banner} />
      </div>
    </div>
  );
};
export default Info;
