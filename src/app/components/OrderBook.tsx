

"use client";

import { useEffect, useState } from "react";
import { getOrderBook } from "../services/orderBookService";

interface Order {
  p: number; // Giá
  s: number; // Khối lượng
}

const OrderBook = ({ ticker, market }: { ticker: string; market: "crypto" | "stock" }) => {
  const [bids, setBids] = useState<Order[]>([]);// lệnh mua 
  const [asks, setAsks] = useState<Order[]>([]);// lệnh bán

  useEffect(() => {
    const fetchData = async () => {
      const orderBook = await getOrderBook(ticker, market);
      setBids(orderBook.bids);
      setAsks(orderBook.asks);
    };

    fetchData();
  }, [ticker, market]);

  return (
    <div className="order-book">
      <h2>Độ sâu thị trường - {ticker}</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Khối Lượng Mua</th>
            <th>Giá Mua</th>
            <th>Giá Bán</th>
            <th>Khối Lượng Bán</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <tr key={index}>
              <td>{bid.s}</td>
              <td>{bid.p}</td>
              <td>{asks[index]?.p || "-"}</td>
              <td>{asks[index]?.s || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
