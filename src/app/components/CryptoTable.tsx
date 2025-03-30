// // // // "use client";

// // // // import React, { useEffect, useState } from "react";
// // // // import { fetchCryptoData } from "../services/cryptoService";

// // // // interface CryptoData {
// // // //   ticker: string;
// // // //   price: number;
// // // //   high: number;
// // // //   low: number;
// // // //   volume: number;
// // // // }

// // // // const CryptoTable: React.FC = () => {
// // // //   const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
// // // //   const [search, setSearch] = useState(""); // Trạng thái tìm kiếm

// // // //   useEffect(() => {
// // // //     const getCryptoData = async () => {
// // // //       try {
// // // //         const data = await fetchCryptoData();
// // // //         setCryptoList(data);
// // // //       } catch (error) {
// // // //         console.error("Lỗi khi lấy dữ liệu crypto:", error);
// // // //       }
// // // //     };
// // // //     getCryptoData();
// // // //   }, []);

// // // //   // Lọc danh sách coin theo ô tìm kiếm
// // // //   const filteredCrypto = cryptoList.filter((crypto) =>
// // // //     crypto.ticker.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <div>
// // // //       <h2>Crypto Market Data</h2>
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Tìm kiếm coin..."
// // // //         value={search}
// // // //         onChange={(e) => setSearch(e.target.value)}
// // // //       />
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //           <th>Mã chứng khoán </th>
// // // //             <th>Giá đóng cửa</th>
// // // //             <th>Giá cao nhất</th>
// // // //             <th>Giá thấp nhất</th>
// // // //             <th>Khối lượng giao dịch</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {filteredCrypto.map((crypto) => (
// // // //             <tr key={crypto.ticker}>
// // // //               <td>{crypto.ticker}</td>
// // // //               <td>{crypto.price}</td>
// // // //               <td>{crypto.high}</td>
// // // //               <td>{crypto.low}</td>
// // // //               <td>{crypto.volume}</td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CryptoTable;
// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { fetchCryptoData } from "../services/cryptoService";
// // // import { useRouter } from "next/navigation"; // Import useRouter

// // // interface CryptoData {
// // //   ticker: string;
// // //   price: number;
// // //   high: number;
// // //   low: number;
// // //   volume: number;
// // // }

// // // const CryptoTable: React.FC = () => {
// // //   const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
// // //   const [search, setSearch] = useState(""); 
// // //   const router = useRouter(); // Khai báo useRouter để điều hướng

// // //   useEffect(() => {
// // //     const getCryptoData = async () => {
// // //       try {
// // //         const data = await fetchCryptoData();
// // //         setCryptoList(data);
// // //       } catch (error) {
// // //         console.error("Lỗi khi lấy dữ liệu crypto:", error);
// // //       }
// // //     };
// // //     getCryptoData();
// // //   }, []);

// // //   const filteredCrypto = cryptoList.filter((crypto) =>
// // //     crypto.ticker.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   return (
// // //     <div>
// // //       <h2>Crypto Market Data</h2>
// // //       <input
// // //         type="text"
// // //         placeholder="Tìm kiếm coin..."
// // //         value={search}
// // //         onChange={(e) => setSearch(e.target.value)}
// // //       />
// // //       <table>
// // //         <thead>
// // //           <tr>
// // //             <th>Mã chứng khoán</th>
// // //             <th>Giá đóng cửa</th>
// // //             <th>Giá cao nhất</th>
// // //             <th>Giá thấp nhất</th>
// // //             <th>Khối lượng giao dịch</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {filteredCrypto.map((crypto) => (
// // //             <tr key={crypto.ticker} onClick={() => router.push(`/order/${crypto.ticker}`)} style={{ cursor: "pointer" }}>
// // //               <td>{crypto.ticker}</td>
// // //               <td>{crypto.price}</td>
// // //               <td>{crypto.high}</td>
// // //               <td>{crypto.low}</td>
// // //               <td>{crypto.volume}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default CryptoTable;
// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { fetchCryptoData } from "../services/cryptoService";
// // import { useRouter } from "next/navigation";

// // interface CryptoData {
// //   ticker: string;
// //   price: number;
// //   high: number;
// //   low: number;
// //   volume: number;
// // }

// // const CryptoTable: React.FC = () => {
// //   const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
// //   const [search, setSearch] = useState(""); 
// //   const router = useRouter();

// //   useEffect(() => {
// //     const getCryptoData = async () => {
// //       try {
// //         const data = await fetchCryptoData();
// //         setCryptoList(data);
// //       } catch (error) {
// //         console.error("Lỗi khi lấy dữ liệu crypto:", error);
// //       }
// //     };
// //     getCryptoData();
// //   }, []);

// //   const filteredCrypto = cryptoList.filter((crypto) =>
// //     crypto.ticker.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div>
// //       {/* Header */}
// //       <div className="header">
// //         <div className="header-left">
// //           <img src="/logo.png" alt="DNSE Logo" className="logo" />
// //           <nav>
// //             <a href="#" className="active">Bảng giá</a>
// //             <a href="#">Đặt lệnh</a>
// //             <a href="#">Giao dịch tiền</a>
// //             <a href="#">Phân tích</a>
// //             <a href="#">Tài sản</a>
// //             <a href="#">Tiện ích</a>
// //           </nav>
// //         </div>
// //         <div className="header-right">
// //           <span className="time">12:15:13 29/03/2025</span>
// //           <button className="login">Đăng nhập</button>
// //           <button className="register">Mở tài khoản</button>
// //         </div>
// //       </div>

// //       {/* Nội dung bảng crypto */}
// //       <div className="container">
// //         <h2 className="title">Crypto Market Data</h2>
// //         <input
// //           type="text"
// //           className="search-box"
// //           placeholder="Tìm kiếm coin..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />
// //         <table className="crypto-table">
// //           <thead>
// //             <tr>
// //               <th>Mã chứng khoán</th>
// //               <th>Giá đóng cửa</th>
// //               <th>Giá cao nhất</th>
// //               <th>Giá thấp nhất</th>
// //               <th>Khối lượng giao dịch</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filteredCrypto.map((crypto) => (
// //               <tr key={crypto.ticker} onClick={() => router.push(`/order/${crypto.ticker}`)}>
// //                 <td>{crypto.ticker}</td>
// //                 <td className="price">{crypto.price}</td>
// //                 <td className="high">{crypto.high}</td>
// //                 <td className="low">{crypto.low}</td>
// //                 <td className="volume">{crypto.volume}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CryptoTable;
// "use client";

// import React, { useEffect, useState } from "react";
// import { fetchCryptoData } from "../services/cryptoService";
// import { useRouter } from "next/navigation";

// interface CryptoData {
//   ticker: string;
//   price: number;
//   high: number;
//   low: number;
//   volume: number;
// }

// const CryptoTable: React.FC = () => {
//   const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
//   const [search, setSearch] = useState(""); 
//   const [currentTime, setCurrentTime] = useState<string>(""); // Thêm state lưu giờ
//   const router = useRouter();

//   useEffect(() => {
//     // Cập nhật dữ liệu crypto
//     const getCryptoData = async () => {
//       try {
//         const data = await fetchCryptoData();
//         setCryptoList(data);
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu crypto:", error);
//       }
//     };
//     getCryptoData();
//   }, []);

//   useEffect(() => {
//     // Hàm cập nhật giờ
//     const updateTime = () => {
//       const now = new Date();
//       now.setUTCHours(now.getUTCHours() + 7); // Chuyển sang múi giờ Việt Nam (GMT+7)
//       const timeString = now.toLocaleTimeString("vi-VN", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       });
//       const dateString = now.toLocaleDateString("vi-VN");
//       setCurrentTime(`${timeString} ${dateString}`);
//     };

//     updateTime(); // Cập nhật ngay khi load trang
//     const interval = setInterval(updateTime, 1000); // Cập nhật mỗi giây

//     return () => clearInterval(interval); // Cleanup khi unmount
//   }, []);

//   const filteredCrypto = cryptoList.filter((crypto) =>
//     crypto.ticker.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Header */}
//       <div className="header">
//         <div className="header-left">
//           <img src="/logo.png" alt="DNSE Logo" className="logo" />
//           <nav>
//             <a href="#" className="active">Bảng giá</a>
//             <a href="#">Đặt lệnh</a>
//             <a href="#">Giao dịch tiền</a>
//             <a href="#">Phân tích</a>
//             <a href="#">Tài sản</a>
//             <a href="#">Tiện ích</a>
//           </nav>
//         </div>
//         <div className="header-right">
//           <span className="time">{currentTime}</span> {/* Hiển thị giờ thực */}
//           <button className="login">Đăng nhập</button>
//           <button className="register">Mở tài khoản</button>
//         </div>
//       </div>

//       {/* Nội dung bảng crypto */}
//       <div className="container">
//         <h2 className="title">Crypto Market Data</h2>
//         <input
//           type="text"
//           className="search-box"
//           placeholder="Tìm kiếm coin..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <table className="crypto-table">
//           <thead>
//             <tr>
//               <th>Mã chứng khoán</th>
//               <th>Giá đóng cửa</th>
//               <th>Giá cao nhất</th>
//               <th>Giá thấp nhất</th>
//               <th>Khối lượng giao dịch</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCrypto.map((crypto) => (
//               <tr key={crypto.ticker} onClick={() => router.push(`/order/${crypto.ticker}`)}>
//                 <td>{crypto.ticker}</td>
//                 <td className="price">{crypto.price}</td>
//                 <td className="high">{crypto.high}</td>
//                 <td className="low">{crypto.low}</td>
//                 <td className="volume">{crypto.volume}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CryptoTable;
"use client";

import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "../services/cryptoService";
import { useRouter } from "next/navigation";
import Header from "../components/Header"; 

interface CryptoData {
  ticker: string;
  price: number;
  high: number;
  low: number;
  volume: number;
}

const CryptoTable: React.FC = () => {
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
  const [search, setSearch] = useState(""); 
  const router = useRouter();

  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const data = await fetchCryptoData();
        setCryptoList(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu crypto:", error);
      }
    };
    getCryptoData();
  }, []);

  const filteredCrypto = cryptoList.filter((crypto) =>
    crypto.ticker.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* <Header /> Sử dụng Header */}

      <div className="container">
        <h2 className="title">Crypto Market Data</h2>
        <input
          type="text"
          className="search-box"
          placeholder="Tìm kiếm coin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Mã chứng khoán</th>
              <th>Giá đóng cửa</th>
              <th>Giá cao nhất</th>
              <th>Giá thấp nhất</th>
              <th>Khối lượng giao dịch</th>
            </tr>
          </thead>
          <tbody>
            {filteredCrypto.map((crypto) => (
              <tr key={crypto.ticker} onClick={() => router.push(`/order/${crypto.ticker}`)}>
                <td>{crypto.ticker}</td>
                <td className="price">{crypto.price}</td>
                <td className="high">{crypto.high}</td>
                <td className="low">{crypto.low}</td>
                <td className="volume">{crypto.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
