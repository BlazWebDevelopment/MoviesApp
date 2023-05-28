import "./NavBar.css";

const Search = ({ searchInput, setSearchInput }: any) => {
  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          id="search"
          placeholder="search..."
          className="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button className="search-btn">
          <img src="src/img/search-icon.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
