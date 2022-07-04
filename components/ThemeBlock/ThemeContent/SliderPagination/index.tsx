import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { sliderStyle } from "../../../../styles";

interface ISliderPaginationProps {
  total: number;
  current: number;
  handleCurrentClick: Function;
}

const SliderPagination: React.FC<ISliderPaginationProps> = ({
  total,
  current,
  handleCurrentClick,
}) => {
  return (
    <div className={sliderStyle.CSlider__pagination}>
      {total > 1 && current > 1 && (
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          className={sliderStyle.CSlider__pagination_arrow}
          onClick={()=>{handleCurrentClick('prev')}}
        />
      )}

      <div>
        {current} / {total}
      </div>
      {total > 1 && current >= 1 && (
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          className={sliderStyle.CSlider__pagination_arrow}
          onClick={()=>{handleCurrentClick('next')}}
        />
      )}
    </div>
  );
};
export default SliderPagination;
