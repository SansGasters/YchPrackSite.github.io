import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясная', 'Вегетарианская', 'Острая', 'Открытая'];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className='categories'>
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
