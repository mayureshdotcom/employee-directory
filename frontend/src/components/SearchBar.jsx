function SearchBar({ search, setSearch }) {

    return (
        <input
            type="text"
            placeholder="Search by name or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
        />
    );
}

export default SearchBar;