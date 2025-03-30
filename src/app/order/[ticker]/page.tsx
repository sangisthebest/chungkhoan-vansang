// // // "use client";

// // // import { useRouter } from "next/navigation";
// // // import { useEffect, useState } from "react";
// // // import OrderBook from "@/app/components/OrderBook";
// // // import OrderChart from "@/app/components/OrderChart";

// // // const OrderDetail = ({ params }: { params: { ticker: string } }) => {
// // //   const { ticker } = params;
// // //   const [market, setMarket] = useState<"crypto" | "stock">("crypto");

// // //   useEffect(() => {
// // //     // Xác định mã chứng khoán là crypto hay stock
// // //     if (ticker.endsWith("USDT")) {
// // //       setMarket("crypto");
// // //     } else {
// // //       setMarket("stock");
// // //     }
// // //   }, [ticker]);

// // //   return (
// // //     <div>
// // //       <h1>Thông tin chi tiết: {ticker}</h1>
// // //       <OrderBook ticker={ticker} market={market} />
// // //       <OrderChart ticker={ticker} market={market} />
// // //     </div>
// // //   );
// // // };

// // // export default OrderDetail;
// // "use client";
// // import { useEffect, useState } from "react";
// // import OrderBook from "@/app/components/OrderBook";
// // import OrderChart from "@/app/components/OrderChart";
// // import CandleChart from "@/app/components/CandleChart"; 
// // const OrderDetail = ({ params }: { params: { ticker: string } }) => {
// //   const { ticker } = params;
// //   const [market, setMarket] = useState<"crypto" | "stock">("crypto");

// //   useEffect(() => {
// //     if (ticker.endsWith("USDT")) {
// //       setMarket("crypto");
// //     } else {
// //       setMarket("stock");
// //     }
// //   }, [ticker]);

// //   return (
// //     <div>
// //       <h1>Thông tin chi tiết: {ticker}</h1>
// //       <OrderBook ticker={ticker} market={market} />
// //       <OrderChart ticker={ticker} market={market} />
// //       <CandleChart ticker={ticker} /> 
// //     </div>
// //   );
// // };

// // export default OrderDetail;
// "use client";
// import { useEffect, useState } from "react";
// import CombinedOrderPage from "@/app/components/CombinedOrderPage";

// const OrderDetail = ({ params }: { params: { ticker: string } }) => {
//   const { ticker } = params;
//   const [market, setMarket] = useState<"crypto" | "stock">("crypto");

//   useEffect(() => {
//     if (ticker.endsWith("USDT")) {
//       setMarket("crypto");
//     } else {
//       setMarket("stock");
//     }
//   }, [ticker]);

//   return (
//     <div>
//       <h1>THÔNG TIN CHI TIẾT: {ticker}</h1>
//       <CombinedOrderPage ticker={ticker} market={market} />
//     </div>
//   );
// };

// // export default OrderDetail;
// "use client";

// import { useEffect, useState } from "react";
// import CombinedOrderPage from "@/app/components/CombinedOrderPage";

// const OrderDetail = ({ params }: { params: { ticker?: string } }) => {
//   const [ticker, setTicker] = useState<string | null>(null);
//   const [market, setMarket] = useState<"crypto" | "stock">("crypto");

//   useEffect(() => {
//     if (params?.ticker) {
//       setTicker(params.ticker);

//       if (params.ticker.endsWith("USDT")) {
//         setMarket("crypto");
//       } else {
//         setMarket("stock");
//       }
//     }
//   }, [params]);

//   if (!ticker) return <p>⏳ Đang tải dữ liệu...</p>; // Tránh lỗi khi ticker chưa có

//   return (
//     <div>
//       <h1>📈 THÔNG TIN CHI TIẾT: {ticker}</h1>
//       <CombinedOrderPage ticker={ticker} market={market} />
//     </div>
//   );
// };

// export default OrderDetail;
// "use client";

// import { useEffect, useState } from "react";
// import CombinedOrderPage from "@/app/components/CombinedOrderPage";

// const OrderDetail = ({ params }: { params: { ticker?: string } }) => {
//   const [ticker, setTicker] = useState<string>("");
//   const [market, setMarket] = useState<"crypto" | "stock">("crypto");

//   useEffect(() => {
//     if (params?.ticker) {
//       handleTickerChange(params.ticker);
//     }
//   }, [params]);

//   const handleTickerChange = (value: string) => {
//     setTicker(value.toUpperCase());

//     if (value.toUpperCase().endsWith("USDT")) {
//       setMarket("crypto");
//     } else {
//       setMarket("stock");
//     }
//   };

//   return (
//     <div className="order-detail-container">
//       <h1>📈 THÔNG TIN CHI TIẾT</h1>
   
//       <input
//         type="text"
//         value={ticker}
//         onChange={(e) => handleTickerChange(e.target.value)}
//         placeholder="Nhập mã cổ phiếu (VD: AAPL, ETHUSDT)"
//         className="search-input"
//       />

//       {ticker ? (
//         <CombinedOrderPage ticker={ticker} market={market} />
//       ) : (
//         <p>⏳ Vui lòng nhập mã cổ phiếu...</p>
//       )}
//     </div>
//   );
// };

// export default OrderDetail;
"use client";

import { use, useEffect, useState } from "react";
import CombinedOrderPage from "@/app/components/CombinedOrderPage";

const OrderDetail = ({ params }: { params: Promise<{ ticker?: string }> }) => {
  const resolvedParams = use(params); // 🛠 Unwrap Promise
  const [ticker, setTicker] = useState<string>("");
  const [market, setMarket] = useState<"crypto" | "stock">("crypto");

  useEffect(() => {
    if (resolvedParams?.ticker) {
      handleTickerChange(resolvedParams.ticker);
    }
  }, [resolvedParams]);

  const handleTickerChange = (value: string) => {
    setTicker(value.toUpperCase());

    if (value.toUpperCase().endsWith("USDT")) {
      setMarket("crypto");
    } else {
      setMarket("stock");
    }
  };

  return (
    <div className="order-detail-container">
      <h1>📈 THÔNG TIN CHI TIẾT</h1>
   
      <input
        type="text"
        value={ticker}
        onChange={(e) => handleTickerChange(e.target.value)}
        placeholder="Nhập mã cổ phiếu (VD: AAPL, ETHUSDT)"
        className="search-input"
      />

      {ticker ? (
        <CombinedOrderPage ticker={ticker} market={market} />
      ) : (
        <p>⏳ Vui lòng nhập mã cổ phiếu...</p>
      )}
    </div>
  );
};

export default OrderDetail;
