import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [ foods, setFoods ] = useState(items);

  const allCategories = ['all', ...new Set(items.map(item => item.category))]

  const handleFilter = (category) => {
    if(category === "all") {
      setFoods(items);
      return;
    }
    const newList = items.filter((item) => item.category === category);
    setFoods(newList);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} handleFilter={handleFilter}/>
        <div className="section-center">
            {foods.map(item => {
              return (
                <Menu key={item.id} {...item} />
              )
            })}
        </div>
      </section>
    </main>
  );
}

export default App;
