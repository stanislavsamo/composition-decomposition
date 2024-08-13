import React from "react";
import { nanoid } from "nanoid";
import "./WeatherCard.css";
import { Card } from "../Card";

/**
 * Компонент WeatherCard отображает информацию о погоде.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.className - Классы для стилизации компонента.
 * @param {string} props.title - Заголовок карточки.
 * @param {Array} props.text - Содержимое карточки.
 * @returns {JSX.Element} - Компонент WeatherCard.
 */

export const WeatherCard = () => (
  <Card className="weather-card" title="Погода">
    <img
      className="weather-pic"
      src="https://png.pngtree.com/png-vector/20191002/ourmid/pngtree-heavy-rain-icon-in-cartoon-style-png-image_1784630.jpg"
      alt="rainy"
      key={nanoid()}
    />
    <span className="weather-temp" key={nanoid()}>
      +17°
    </span>
    <div className="weather-text" key={nanoid()}>
      Утром +17, днём +20
    </div>
  </Card>
);
