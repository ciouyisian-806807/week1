import React from "react";
import Info from './Info';
import Content from './ThemeContent';
import { themeBlockStyle } from '../../styles';

const fakeKeywordData = {
  title:'3C電競年終戰',
  banner:'https://fakeimg.pl/720x1192/',
  keywordList:[
    { seq: "1", title: "曜越電競椅" },
    { seq: "2", title: "羅技滑鼠下殺9折" },
    { seq: "3", title: "HP電競筆電" },
    { seq: "4", title: "Acer主機+電競耳麥優惠組" },
    { seq: "5", title: "2022喇叭推薦指南" },
  ]
};
const fakeContentData = [
  {seq:"1",title:'我是商品1我是商品1我是商品1我是商品1我是商品1',price: 999,src:'https://picsum.photos/id/1033/200/200'},
  {seq:"2",title:'我是商品2',price: 959,src:'https://picsum.photos/id/119/200/200'},
  {seq:"3",title:'我是商品3',price: 979,src:'https://picsum.photos/id/829/200/200'},
  {seq:"4",title:'我是商品4',price: 969,src:'https://picsum.photos/id/835/200/200'},
  {seq:"5",title:'我是商品5',price: 939,src:'https://picsum.photos/id/1060/200/200'},
  {seq:"6",title:'我是商品6',price: 929,src:'https://picsum.photos/id/1080/200/200'},
  {seq:"7",title:'我是商品7',price: 819,src:'https://fakeimg.pl/200x200/'},
  {seq:"8",title:'我是商品8',price: 779,src:'https://fakeimg.pl/200x200/'},
]

const ThemeBlock: React.FC = () => {
  return (
    <div className={themeBlockStyle.CThemeBlock}>
      <Info data={fakeKeywordData} />
      <Content  data={fakeContentData} />
    </div>
  );
};
export default ThemeBlock;
