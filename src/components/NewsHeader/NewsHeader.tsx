import React from "react";

import dayjs from "dayjs";
import "./NewsHeader.css";

/**
 * Компонент NewsHeader представляет собой блок с заголовком новостей.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {Array} props.newsSections - Массив объектов с информацией о разделах новостей.
 * @returns {JSX.Element} - Компонент NewsHeader.
 */
export type NewsSection = {
  text: string;
  faded: boolean;
};

type Props = {
  newsSections: NewsSection[];
};

export const NewsHeader = ({ newsSections, ...props }: Props) => {
  return (
    <div className="news-header">
      {newsSections.map((o, index) => (
        <a
          className={`h3 ${o.faded && "faded"}`}
          href={"#"}
          key={index}
        >
          {o.text}
        </a>
      ))}
      <div className="header-date">
        {dayjs().locale("ru").format("D MMMM, dddd HH:mm")}
      </div>
    </div>
  );
};

export default NewsHeader;
