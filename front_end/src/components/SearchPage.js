import SearchQuery from "./SearchQuery"
import SearchResults from "./SearchResults"

import "../styles/SearchPage.css";

export default function SearchPage() {
  return (
    <div className="search-page">
      <SearchQuery/>
      <SearchResults/>
    </div>
  );
}
