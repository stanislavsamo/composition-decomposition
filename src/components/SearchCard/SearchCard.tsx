import React, { useState } from "react";
import "./SearchCard.css";
import { SearchForm } from "../SearchForm";

/**
 * Компонент SearchForm отображает поисковую строку.
 */

type Product = {
  text: string;
  href: string;
};

type Props = {
  products: Product[];
};
export const SearchCard = ({ products }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className="search">
      <img
        className=""
        src="https://whoiswho.obs.ru-moscow-1.hc.sbercloud.ru/images/company/6116/93005E05-57F2-439D-8034-04118DDAE566.jpg"
        alt="Яндекс"
      />
      <div className="search-body">
        <div className="search-links">
          {products.map((o, index) => (
            <a
              className={`h4 ${o.text && "faded"}`}
              href={o.href || "#"}
              key={index}
            >
              {o.text}
            </a>
          ))}
        </div>
        <SearchForm
          className="form"
          onChange={(value: string) => setValue(value)}
          onSubmit={() => console.log(value)}
        />
        <div className="search-footer">
          <span>{"Найдется всё. Например, "}</span>
          <span className="faded">{"фаза луны сегодня"}</span>
        </div>
      </div>
    </div>
  );
};
