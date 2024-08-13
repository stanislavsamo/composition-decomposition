
import React, { ReactNode } from "react";
import "./InlineCard.css";
import { Card } from "../Card";

/**
 * Компонент InlineCard представляет карточку в виде строки.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @returns {JSX.Element} - Компонент InlineCard.
 */

type Props = {
  img?: string;
  title?: string;
  children?: ReactNode;
  textSecondery?: string;
  href?: string;
  className?: string;
};
export const InlineCard = ({ ...props }: Props) => (
  <Card {...props} className="inline-card" />
);
