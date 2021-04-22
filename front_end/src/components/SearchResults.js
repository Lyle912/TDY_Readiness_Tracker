import React, { useState, useEffect } from "react";

import SearchResultItem from "./SearchResultItem";

export default function SearchResults() {
  var url = window.location.pathname.slice(8);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/members?${url}`, { method: "GET" })
      .then((res) => res.json())
      .then((jsonRes) => setMembers(jsonRes));
  }, [url]);

  return (
    <div>
      {members.map((member) => (
        <div key={member.id}>
          <SearchResultItem member={member}/>
        </div>
      ))}
    </div>
  );
}
