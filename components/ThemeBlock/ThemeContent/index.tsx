import React, { useState } from "react";
import { sliderStyle, themeBlockStyle } from "../../../styles/index";
import SliderPagination from "./SliderPagination";

interface IData {
  seq: string;
  title: string;
  price: number;
  src: string;
}
interface IThemeBlockContentProps {
  data: IData[];
}

const ThemeContent: React.FC<IThemeBlockContentProps> = ({ data }) => {
  let perPage = 6; // 每頁顯示幾筆
  const totalPage = data.length > 0 ? Math.ceil(data.length / perPage): 1;
  const [current, setCurrent] = useState<number>(1);
  
  const handleCurrentClick = (status:string):void => {
    status === 'next' ? setCurrent(current+1) : setCurrent(current-1);
  }

  return (
    <div className={themeBlockStyle.CThemeBlock__content}>
      <div className={sliderStyle.CSlider__table}>
        {data &&
          data.slice((perPage*current)-perPage,(perPage*current)).map((item) => {
            return (
              <div key={item.seq} className={sliderStyle.CSlider__card}>
                <div className={sliderStyle.CSlider__card_img}>
                  <img alt={item.title} src={item.src} />
                </div>
                <div className={sliderStyle.CSlider__card_title}>
                  {item.title}
                </div>
                <div className={sliderStyle.CSlider__card_price}>
                  ${item.price}
                </div>
              </div>
            );
          })}
      </div>
      <SliderPagination total={totalPage} current={current} handleCurrentClick={handleCurrentClick} />
    </div>
  );
};
export default ThemeContent;
