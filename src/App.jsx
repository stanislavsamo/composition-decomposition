import "./App.css";
import { Banner, Card, NewsBlock, SearchCard, WeatherCard } from "./components";
import { GermanyMap, banner, currencies, news, newsSections, products, topRightCard } from "./data";

/**
 * Главное приложение
 * @returns {JSX.Element} Элемент главного приложения
 */

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <NewsBlock newsSections={newsSections} news={news} currencies={currencies} />
        <Card {...topRightCard} style={{ width: "15rem" }} />
      </div>

      <SearchCard products={products} />

      <Banner {...banner} />

      <div className="footer">
        <WeatherCard />
        <Card {...GermanyMap} />
        {/* Прочие специфичные карточки, содержащие InlineCard*/}
      </div>
    </div>
  );
};

export default App;