import React, { useState, useEffect } from 'react';
import productsData from './data/products.json';

const BookList = () => {
  const [pdData, setPdData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [fValue, setFValue] = useState('');
  const [sortState, setSortState] = useState({
    sid: null,
    pages: null,
    price: null
  });

  useEffect(() => {
    const filtered = productsData.filter((el) => el.price >= 0);
    setPdData(filtered);
    setFilteredData(filtered);
  }, []);

  useEffect(() => {
    if (fValue === '') {
      setFilteredData(pdData);
    } else {
      const newFilteredData = pdData.filter((el) => el.price >= parseFloat(fValue));
      setFilteredData(newFilteredData);
    }
  }, [fValue, pdData]);

  const handleInputChange = (e) => {
    setFValue(e.target.value);
  };

  const sortData = (key) => {
    const isAsc = sortState[key] !== true;
    const sortedData = [...filteredData].sort((a, b) => {
      if (isAsc) {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
    setFilteredData(sortedData);
    setSortState({ ...sortState, [key]: isAsc });
  };

  const getSortIcon = (key) => {
    if (sortState[key] === null) return '';
    return sortState[key] ? '↓' : '↑';
  };

  return (
    <div className="container">
      <div>價格搜尋</div>
      <label htmlFor="f_price">過濾價格高於: </label>
      <input 
        type="number" 
        id="f_price" 
        name="f_price" 
        value={fValue} 
        onChange={handleInputChange} 
        placeholder="輸入價格以過濾"
      />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th onClick={() => sortData('sid')}>
              #{getSortIcon('sid')}
            </th>
            <th>作者</th>
            <th>書名</th>
            <th onClick={() => sortData('pages')}>
              頁數{getSortIcon('pages')}
            </th>
            <th onClick={() => sortData('price')}>
              單價{getSortIcon('price')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((el) => (
            <tr key={el.sid}>
              <td>{el.sid}</td>
              <td>{el.author}</td>
              <td>{el.bookname}</td>
              <td>{el.pages}</td>
              <td>{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;