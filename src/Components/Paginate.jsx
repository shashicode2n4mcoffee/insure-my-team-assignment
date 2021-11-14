import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Paginate.css';

const Paginate = ({
  itemList,
  handleCurrentPage,
  handleNext,
  handlePrev,
  currentPage,
}) => {
  const [pages, setPages] = useState([]);

  const handleClick = (v) => {
    console.log('Value : ', v);
    handleCurrentPage(v);
  };

  const createPage = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    setPages(arr);
  };

  console.log('Array :', pages);

  useEffect(() => {
    createPage(Math.ceil(itemList.length / 4));
  }, [itemList]);
  return (
    <div className='paginate'>
      <Pagination size="lg">
        <Pagination.Prev onClick={handlePrev} />
        {pages.map((page) => {
          return (
            currentPage > page - 4 &&
            currentPage < page + 4 && (
              <Pagination.Item onClick={() => handleClick(page)} key={page}>
                {page}
              </Pagination.Item>
            )
          );
        })}
        <Pagination.Next onClick={handleNext} />
      </Pagination>
      {/* <button onClick={handlePrev} className='paginate-btn'>
        Prev
      </button>
      <div className='paginate-wrap'>
        {pages.map((page) => {
          return (
            <button
              onClick={() => handleClick(page)}
              key={page}
              className='paginate-btn'
            >
              {page}
            </button>
          );
        })}
      </div>
      <button onClick={handleNext} className='paginate-btn'>
        Next
      </button> */}
    </div>
  );
};

export default Paginate;
