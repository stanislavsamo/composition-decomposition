import React from "react";
import "./Banner.css";

/**
 * Компонент Banner представляет баннер с изображением и ссылкой.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.src - URL изображения.
 * @param {string} props.href - URL ссылки.
 * @param {string} props.alt - Альтернативный текст для изображения.
 * @returns {JSX.Element} - Компонент Banner.
 */

type Props = {
  src: string;
  href: string;
  alt?: string;
};

export const Banner = ({ href, src, alt }: Props) => (
  <a href={href}>
    <img src={src} alt={alt ?? ""} className="banner" />
  </a>
);
