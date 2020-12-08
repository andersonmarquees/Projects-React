import React from 'react';

const Categories = ({ categories, handleFilter }) => {

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
