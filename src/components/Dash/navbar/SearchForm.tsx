import React from 'react';
import "../../../assets/style/navBar.css"


const SearchForm: React.FC = () => {
  return (
    <form className="form w-[400px] bg-slate-100">
      <button>
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input className="input-search" placeholder="Type your text" required type="text" />
      <button className="reset" type="reset">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
