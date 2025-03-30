
// import "./globals.css";
// import OrderChart from "./components/OrderChart";
// import StockTable from "./components/StockTable";
// import OrderBook from "./components/OrderBook";
// import CryptoTable from "./components/CryptoTable";

//    import CandleChart from "./components/CandleChart";

// export default function Home() {
//   return (
//     <main>
//       <h1>Stock Dashboard</h1>
//       <StockTable />
//  <OrderBook ticker="BTCUSDT" market="crypto" />
//       <OrderChart ticker="BTCUSDT" market="crypto" />
//       <OrderBook ticker="AAPL" market="stock" />
//       <OrderChart ticker="AAPL" market="stock" />
 
//       <CandleChart />
//       <CryptoTable />
//     </main>
//   );
// }
import "./globals.css";
// import StockTable from "./components/StockTable";
import CryptoTable from "./components/CryptoTable";
// import CandleChart from "./components/CandleChart";

export default function Home() {
  return (
    <main>
      
      {/* <StockTable /> */}
      <CryptoTable />
      {/* <CandleChart /> */}
    </main>
  );
}
