import React from "react";
import useBook from "../hooks/book";

const HomePage = () => {
  const { books } = useBook();

  return (
    <div>
      <h2>This is homepage</h2>
    </div>
  );
};

export default HomePage;
