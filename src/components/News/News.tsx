import React from "react";

import "./News.css";
import { InlineCard } from "../InlineCard";
import { NewsHeader, NewsSection } from "../NewsHeader";

/**
 * Компонент News представляет блок с новостями.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {Array} props.newsSections - Массив объектов с информацией о разделах новостей.
 * @param {Array} props.news - Массив объектов с информацией о новостях.
 * @param {Array} props.currencies - Массив объектов с информацией о курсах валют.
 * @returns {JSX.Element} - Компонент News.
 */

type News = {
  img: string;
  text: string;
};

type Currency = {
  title: string;
  textSecondery: string;
};

type Props = {
  newsSections: NewsSection[];
  news: News[];
  currencies: Currency[];
};

export const NewsBlock = ({ newsSections, news, currencies, ...rest }: Props) => (
  <div className="news">
    <NewsHeader newsSections={newsSections} />
    <div className="news-body">
      {news.map((o, index) => (
        <InlineCard {...o} key={index} {...rest} />
      ))}
    </div>
    <div className="news-footer">
      {currencies.map((o, index) => (
        <InlineCard {...o} key={index} {...rest} />
      ))}
    </div>
  </div>
);
