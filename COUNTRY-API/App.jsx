import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";
import SelectMenu from "./src/components/SelectMenu";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
      <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
      </main>
      
    </>
  );
};

export default App;
