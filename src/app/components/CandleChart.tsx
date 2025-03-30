// "use client";
// import { useEffect, useState, useRef } from "react";


// interface StockData {
//   o: number; 
//   l: number; 
//   h: number; 
//   c: number; 
//   v: number; 
// }

// const TradingViewWithStockData = () => {
//   const [data, setData] = useState<StockData | null>(null); 
//   const containerRef = useRef<HTMLDivElement>(null);
//   const API_KEY = "okzgnndsGIpJxJPCA8hfl7UMa4gDr3sK"; 
//   const SYMBOL = "AAPL"; 

//   useEffect(() => {
    
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.polygon.io/v2/aggs/ticker/${SYMBOL}/prev?apiKey=${API_KEY}`
//         );
//         const result = await response.json();
        
//         console.log("Dữ liệu API:", result); 
//         if (result.results && result.results.length > 0) {
//           setData(result.results[0]); 
//         } else {
//           console.warn("Không có dữ liệu chứng khoán.");
//           setData(null);
//         }
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//         setData(null);
//       }
//     };

//     fetchData();

   
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
//         symbol: "AAPL",
//         interval: "D",
//         timezone: "Etc/UTC",
//         theme: "dark",
//         style: "1",
//         locale: "en",
//         enable_publishing: false, // không cho phép xuất biểu đồ
//         backgroundColor: "#222",
//         gridColor: "#444",
//         hide_side_toolbar: false,
//         allow_symbol_change: true,
//       });

//       containerRef.current.appendChild(script);
//     }
//   }, []);

//   return (
//     <div>
//       <h2>📊 AAPL - Apple Inc.</h2>
//       {data ? (
//         <ul>
//           <li>📈 Giá mở cửa: {data.o}</li>
//           <li>📉 Giá thấp nhất: {data.l}</li>
//           <li>🚀 Giá cao nhất: {data.h}</li>
//           <li>📊 Giá đóng cửa: {data.c}</li>
//           <li>🔄 Khối lượng giao dịch: {data.v}</li>
//         </ul>
//       ) : (
//         <p>⏳ Đang tải dữ liệu hoặc không có dữ liệu.</p>
//       )}

//       {/* 🔹 Biểu đồ TradingView */}
//       <div ref={containerRef} />
//     </div>
//   );
// };

// export default TradingViewWithStockData;
"use client";
import { useEffect, useState, useRef } from "react";

interface StockData {
  o: number;
  l: number;
  h: number;
  c: number;
  v: number;
}

const CandleChart = ({ ticker }: { ticker: string }) => {
  const [data, setData] = useState<StockData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const API_KEY = "okzgnndsGIpJxJPCA8hfl7UMa4gDr3sK";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${API_KEY}`
        );
        const result = await response.json();

        console.log("Dữ liệu API:", result);
        if (result.results && result.results.length > 0) {
          setData(result.results[0]);
        } else {
          console.warn("Không có dữ liệu chứng khoán.");
          setData(null);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setData(null);
      }
    };

    fetchData();

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.textContent = JSON.stringify({
        width: "100%",
        height: 500,
        symbol: ticker, // Dùng ticker từ prop
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        backgroundColor: "#222",
        gridColor: "#444",
        hide_side_toolbar: false,
        allow_symbol_change: true,
      });

      containerRef.current.appendChild(script);
    }
  }, [ticker]); // Cập nhật khi ticker thay đổi

  return (
    <div>
      <h2>📊 Biểu đồ {ticker}</h2>
      {data ? (
        <ul>
          <li>📈 Giá mở cửa: {data.o}</li>
          <li>📉 Giá thấp nhất: {data.l}</li>
          <li>🚀 Giá cao nhất: {data.h}</li>
          <li>📊 Giá đóng cửa: {data.c}</li>
          <li>🔄 Khối lượng giao dịch: {data.v}</li>
        </ul>
      ) : (
        <p>⏳ Đang tải dữ liệu hoặc không có dữ liệu.</p>
      )}
      <div ref={containerRef} />
    </div>
  );
};

export default CandleChart;
