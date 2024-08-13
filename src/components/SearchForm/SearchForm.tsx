import React from "react";

import "./SearchForm.css";

/**
 * Компонент SearchForm отображает поисковую строку.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.value - Значение поисковой строки.
 * @param {function} props.onChange - Обработчик изменения значения поисковой строки.
 * @param {function} props.onSubmit - Обработчик отправки формы поиска.
 * @param {string} props.className - Классы для стилизации компонента.
 * @returns {JSX.Element} - Компонент SearchForm.
 */

type Props = {
  onChange: (value: string) => void;
  onSubmit: () => void;
  className?: string;
};

export const SearchForm = ({ onChange, onSubmit, className }: Props) => (
  <form className={className + " search-form"} onSubmit={onSubmit}>
    <input
      className="search-input"
      name="request"
      type="text"
      onChange={(evt) => onChange(evt.target.value)}
    ></input>
    <img
      className="search-keyboard"
      src="https://cdn-icons-png.flaticon.com/512/6329/6329376.png"
      alt="search keyboard"
    />
    <button type="submit">{"Найти"}</button>
  </form>
);
