import React, { useState, useEffect } from 'react';
import BookData from './data/products.json'

const PriceSearch = () => {
    const [pdData, setPdData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [fValue, setFValue] = useState([]);
    const [sortState, setSortState] = useState({
        sid: null,
        pages: null,
        price: null
    });

    useEffect(() => {
        const filtered = BookData.filter((el) => el.price >= 0);
        setPdData(filtered);
        setFilteredData(pdData);
    }, []);

    useEffect(() => {
        if (fValue === '') {
            setFilteredData(pdData);
        } else {
            const filtered = BookData.filter((el) => el.price >= parseFloat(fValue));
            setFilteredData(filtered);
        }
    }, []);

    useEffect(() => {
        const newFilteredData = pdData.filter((el) => el.price >= fValue);
        setFilteredData(newFilteredData);
    }, [fValue, pdData]);

    const handleInputChange = (e) => {
        setFValue(parseFloat(e.target.value));
    };

    const sortData = (key, ascending = true) => {
        const sortedData = [...filteredData].sort((a, b) => {
            if (ascending) {
                return a[key] - b[key];
            } else {
                return b[key] - a[key];
            }
        });
        setFilteredData(sortedData);
    };

    return (
        <div className="container">
            <div>價格搜尋</div>
            <label htmlFor="f_price">過濾價格高於: </label>
            <input type="number" id="f_price" name="f_price" value={fValue} onChange={handleInputChange} />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>
                            #
                            <span onClick={() => sortData('sid', true)}>↓</span>
                            <span onClick={() => sortData('sid', false)}>↑</span>
                        </th>
                        <th>作者</th>
                        <th>書名</th>
                        <th>
                            頁數
                            <span onClick={() => sortData('pages', true)}>↓</span>
                            <span onClick={() => sortData('pages', false)}>↑</span>
                        </th>
                        <th>
                            單價
                            <span onClick={() => sortData('price', true)}>↓</span>
                            <span onClick={() => sortData('price', false)}>↑</span>
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

export default PriceSearch;