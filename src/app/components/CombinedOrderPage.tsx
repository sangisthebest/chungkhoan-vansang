// "use client";

// import { useEffect, useState, useRef } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   TimeSeriesScale, 
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "chartjs-adapter-date-fns"; 
// import { getOrderBook } from "../services/orderBookService";

// ChartJS.register(
//   TimeSeriesScale, 
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface Order {
//   p: number; // Giá
//   s: number; // Khối lượng
// }

// interface StockData {
//   o: number;
//   l: number;
//   h: number;
//   c: number;
//   v: number;
// }

// const CombinedOrderPage = ({ ticker, market }: { ticker: string; market: "crypto" | "stock" }) => {
//   const [bids, setBids] = useState<Order[]>([]);
//   const [asks, setAsks] = useState<Order[]>([]);
//   const [stockData, setStockData] = useState<StockData | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const API_KEY = "okzgnndsGIpJxJPCA8hfl7UMa4gDr3sK";

//   useEffect(() => {
//     const fetchOrderBookData = async () => {
//       try {
//         const orderBook = await getOrderBook(ticker, market);
//         setBids(orderBook.bids);
//         setAsks(orderBook.asks);
//       } catch (error) {
//         console.error("Lỗi khi fetch dữ liệu order book:", error);
//       }
//     };

//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${API_KEY}`
//         );
//         const result = await response.json();

//         if (result.results && result.results.length > 0) {
//           setStockData(result.results[0]);
//         } else {
//           setStockData(null);
//         }
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//         setStockData(null);
//       }
//     };

//     fetchOrderBookData();
//     fetchStockData();

//     if (containerRef.current) {
//       containerRef.current.innerHTML = "";
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.textContent = JSON.stringify({
//         width: "100%",
//         height: 500,
//         symbol: ticker,
//         interval: "D",
//         timezone: "Etc/UTC",
//         theme: "dark",
//         style: "1",
//         locale: "en",
//         enable_publishing: false,
//         backgroundColor: "#222",
//         gridColor: "#444",
//         hide_side_toolbar: false,
//         allow_symbol_change: true,
//       });

//       containerRef.current.appendChild(script);
//     }
//   }, [ticker, market]);

//   const data = {
//     labels: [...bids.map((b) => b.p), ...asks.map((a) => a.p)],
//     datasets: [
//       {
//         label: "Mua chủ động",
//         data: bids.map((b) => b.s),
//         backgroundColor: "green",
//       },
//       {
//         label: "Bán chủ động",
//         data: asks.map((a) => a.s),
//         backgroundColor: "red",
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: "category", 
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="chart-container">
//       {/* Biểu đồ nến */}
//       <div className="chart-candlestick">
//         <section>
//           <h2>📊 Biểu đồ {ticker}</h2>
//           {/* {stockData ? (
//             <ul>
//               <li>📈 Giá mở cửa: {stockData.o}</li>
//               <li>📉 Giá thấp nhất: {stockData.l}</li>
//               <li>🚀 Giá cao nhất: {stockData.h}</li>
//               <li>📊 Giá đóng cửa: {stockData.c}</li>
//               <li>🔄 Khối lượng giao dịch: {stockData.v}</li>
//             </ul>
//           ) : (
//             <p>⏳ Đang tải dữ liệu hoặc không có dữ liệu.</p>
//           )} */}
//           <div ref={containerRef} />
//         </section>
//       </div>
  
//       {/* Biểu đồ khớp lệnh */}
//       {/* <div className="chart-order">
//         <section>
//           <h2>Biểu đồ khớp lệnh - {ticker}</h2>
//           <Bar data={data} options={options} />
//         </section>
//       </div> */}
  
//       {/* Biểu đồ độ sâu thị trường */}
//       <div className="chart-depth">
//         <section>
//           <h2>Độ sâu thị trường - {ticker}</h2>
//           <table className="order-table">
//             <thead>
//               <tr>
//                 <th>Khối Lượng Mua</th>
//                 <th>Giá Mua</th>
//                 <th>Giá Bán</th>
//                 <th>Khối Lượng Bán</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bids.map((bid, index) => (
//                 <tr key={index}>
//                   <td>{bid.s}</td>
//                   <td>{bid.p}</td>
//                   <td>{asks[index]?.p || "-"}</td>
//                   <td>{asks[index]?.s || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//       </div>
//       <div className="chart-order">
//         <section>
//           <h2>Biểu đồ khớp lệnh - {ticker}</h2>
//           <Bar data={data} options={options} />
//         </section>
//       </div>
//     </div>
//   );
  
// };

// export default CombinedOrderPage;
"use client";

import { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getOrderBook } from "../services/orderBookService";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Order {
  p: number;
  s: number;
}

const CombinedOrderPage = ({ ticker, market }: { ticker: string; market: "crypto" | "stock" }) => {
  const [bids, setBids] = useState<Order[]>([]);
  const [asks, setAsks] = useState<Order[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchOrderBookData = async () => {
      try {
        const orderBook = await getOrderBook(ticker, market);
        setBids(orderBook.bids);
        setAsks(orderBook.asks);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu order book:", error);
      }
    };

    fetchOrderBookData();

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.textContent = JSON.stringify({
        width: "100%",
        height: 500,
        symbol: ticker,
        interval: "D",
        theme: "dark",
        style: "1",
        locale: "en",
      });

      containerRef.current.appendChild(script);
    }
  }, [ticker, market]);

  const orderBookData = {
    labels: [...bids.map((b) => b.p), ...asks.map((a) => a.p)],
    datasets: [
      {
        label: "Mua",
        data: bids.map((b) => b.s),
        backgroundColor: "green",
      },
      {
        label: "Bán",
        data: asks.map((a) => a.s),
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="chart-container">
      {/* Biểu đồ nến */}
      <div className="chart-candlestick">
        <h2>📊 Biểu đồ {ticker}</h2>
        <div ref={containerRef} className="chart-embed" />
      </div>

      {/* Biểu đồ khớp lệnh */}
      <div className="chart-order">
        <h2>📈 Biểu đồ khớp lệnh</h2>
        <Bar data={orderBookData} />
      </div>

      {/* Biểu đồ độ sâu thị trường */}
      <div className="chart-depth">
        <h2>📉 Độ sâu thị trường</h2>
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
    </div>
  );
};

export default CombinedOrderPage;
