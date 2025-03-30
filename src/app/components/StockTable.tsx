
"use client";  
import React, { useEffect, useState } from "react";
import { fetchStockData } from "../services/stockService";

interface StockData {
  ticker: string;
  close: number;
  high: number;
  low: number;
  volume: number;
}

const StockTable: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await fetchStockData();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
    getStockData();
  }, []);

  return (
    <div>
      <h2>Stock Market Data</h2>
      <table>
        <thead>
          <tr>
          <th>Mã chứng khoán </th>
            <th>Giá đóng cửa</th>
            <th>Giá cao nhất</th>
            <th>Giá thấp nhất</th>
            <th>Khối lượng giao dịch</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.ticker}>
              <td>{stock.ticker}</td>
              <td>{stock.close}</td>
              <td>{stock.high}</td>
              <td>{stock.low}</td>
              <td>{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
