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
  {seq:"1",title:'MSI Creator Z16 Hiroshi Fujiwara A11UE-225TW(i7-11800H/16G/RTX3060-6G/1T SSD/Win10/2K/16)',price: 999,src:'https://picsum.photos/id/1033/200/200'},
  {seq:"2",title:'【iPaper】一年一曆 2018 9月- 2019 8月',price: 959,src:'https://picsum.photos/id/119/200/200'},
  {seq:"3",title:'我是商品3',price: 979,src:'https://picsum.photos/id/829/200/200'},
  {seq:"4",title:'Clever聰明濾杯(S)+專用濾紙組(S)-透明咖啡色',price: 969,src:'https://picsum.photos/id/835/200/200'},
  {seq:"5",title:'專用濾紙組',price: 939,src:'https://picsum.photos/id/1060/200/200'},
  {seq:"6",title:'我是商品6',price: 929,src:'https://picsum.photos/id/1080/200/200'},
  {seq:"7",title:'不鏽鋼保溫罐約300ml【MUJI 無印良品】',price: 819,src:'https://fakeimg.pl/200x200/'},
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
