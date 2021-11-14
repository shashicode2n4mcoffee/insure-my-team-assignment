import React, { useState } from 'react';
import Items from './Items';
import Paginate from './Paginate';
import './ItemList.css';

const ItemList = ({ itemList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const handleNext = () => {
    if (currentPage*4 < itemList.length) {
      setCurrentPage((preState) => preState + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((preState) => preState - 1);
    }
  };

  console.log('Current Page :', currentPage);

  return (
    <div className='itemlist'>
      <div className='wrap'>
        {itemList.map((item, index) => {
          return (
            index > (currentPage - 1) * 4 &&
            index <= (currentPage - 1) * 4 + 4 && (
              <Items key={item.id} singleItem={item} />
            )
          );
        })}
      </div>
      <Paginate
        itemList={itemList}
        handleCurrentPage={handleCurrentPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ItemList;
