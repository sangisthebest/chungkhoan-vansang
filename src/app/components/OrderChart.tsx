// "use client";

// import { useEffect, useState } from "react";
// import { getOrderBook } from "../services/orderBookService";
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

// const OrderChart = ({ ticker, market }: { ticker: string; market: "crypto" | "stock" }) => {
//   const [bids, setBids] = useState<Order[]>([]);
//   const [asks, setAsks] = useState<Order[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const orderBook = await getOrderBook(ticker, market);
//         setBids(orderBook.bids);
//         setAsks(orderBook.asks);
//       } catch (error) {
//         console.error("Lỗi khi fetch dữ liệu order book:", error);
//       }
//     };

//     fetchData();
//   }, [ticker, market]);

//   const data = {
//     labels: [...bids.map((b) => b.p), ...asks.map((a) => a.p)],
//     datasets: [
//       {
//         label: "Mua chủ động",
//         data: bids.map((b) => b.s), // Khối lượng mua
//         backgroundColor: "green",
//       },
//       {
//         label: "Bán chủ động",
//         data: asks.map((a) => a.s), // Khối lượng bán
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
//     <div className="order-chart">
//       <h2>Biểu đồ khớp lệnh - {ticker}</h2>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default OrderChart;
"use client";

import { useEffect, useState } from "react";
import { getOrderBook } from "../services/orderBookService";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";
import "chartjs-adapter-date-fns"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Order {
  p: number; // Giá
  s: number; // Khối lượng
}

const OrderChart = ({ ticker, market }: { ticker: string; market: "crypto" | "stock" }) => {
  const [bids, setBids] = useState<Order[]>([]);
  const [asks, setAsks] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderBook = await getOrderBook(ticker, market);
        setBids(orderBook.bids);
        setAsks(orderBook.asks);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu order book:", error);
      }
    };

    fetchData();
  }, [ticker, market]);

  // Định dạng dữ liệu cho biểu đồ
  const data: ChartData<"bar"> = {
    labels: [...bids.map((b) => String(b.p)), ...asks.map((a) => String(a.p))], // Chuyển số thành chuỗi
    datasets: [
      {
        label: "Mua chủ động",
        data: bids.map((b) => b.s), // Khối lượng mua
        backgroundColor: "green",
      },
      {
        label: "Bán chủ động",
        data: asks.map((a) => a.s), // Khối lượng bán
        backgroundColor: "red",
      },
    ],
  };

  // Cấu hình biểu đồ
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Biểu đồ khớp lệnh - ${ticker}`,
      },
    },
    scales: {
      x: {
        type: "category" as const, // Fix lỗi type error
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="order-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default OrderChart;
