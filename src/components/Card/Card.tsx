import React, { ReactNode } from "react";
import "./Card.css";

/**
 * Компонент Card представляет карточку с картинкой, заголовком,
 * текстом, дополнительным текстом и ссылкой.
 */

type Props = {
  img?: string;
  title?: string;
  children?: ReactNode;
  textSecondery?: string;
  text? : string;
  href?: string;
  className?: string;
};
export const Card = ({
  img,
  title,
  children,
  textSecondery,
  text,
  href,
  className,
  ...rest
}: Props) => (
  <div {...rest} className={`card ${className || ""}`}>
    <a href={href || "#"}>
      {img && <img className="card-image" src={img} alt="" />}
      {title && <div className="card-title">{title}</div>}
      {children && <div className="card-text-main">{children}</div>}
      {text && <div className="card-text-main">{text}</div>}
      {textSecondery && (
        <div className="card-text-secondery">{textSecondery}</div>
      )}
    </a>
  </div>
);
