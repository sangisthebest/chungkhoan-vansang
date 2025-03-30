

// export async function getOrderBook(symbol: string, market: "crypto" | "stock") {
//     try {
//       let apiUrl = "";
  
//       if (market === "crypto") {
      
//         apiUrl = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=5`;
//       } else {
//         // Finnhub API (Stock)
//         const apiKey = "cv9d71hr01qkfpsj5eb0cv9d71hr01qkfpsj5ebg"; 
//         apiUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
//       }
  
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error(`API lỗi: ${response.status} - ${response.statusText}`);
//       }
  
//       const data = await response.json();
//       console.log("Dữ liệu API:", data);
  
//       if (market === "crypto") {
//         return {
//           bids: data.bids.map((bid: string[]) => ({ p: parseFloat(bid[0]), s: parseFloat(bid[1]) })),
//           asks: data.asks.map((ask: string[]) => ({ p: parseFloat(ask[0]), s: parseFloat(ask[1]) })),
//         };
//       } else {
//         return {
//           bids: [{ p: data.l, s: 100 }], // Giá thấp nhất
//           asks: [{ p: data.h, s: 100 }], // Giá cao nhất
//         };
//       }
//     } catch (error) {
//       console.error("Lỗi khi lấy dữ liệu Order Book:", error);
//       return { bids: [], asks: [] };
//     }
//   }
export async function getOrderBook(symbol: string, market: "crypto" | "stock") {
  try {
    let apiUrl = "";

    if (market === "crypto") {
      apiUrl = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=5`;
    } else {
      // Finnhub API (Stock)
      const apiKey = process.env.FINNHUB_API_KEY;
      if (!apiKey) {
        throw new Error("Thiếu API key cho Finnhub. Hãy kiểm tra biến môi trường FINNHUB_API_KEY.");
      }
      apiUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API lỗi: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Dữ liệu API:", data);

    if (market === "crypto") {
      return {
        bids: data.bids.map((bid: string[]) => ({ p: parseFloat(bid[0]), s: parseFloat(bid[1]) })),
        asks: data.asks.map((ask: string[]) => ({ p: parseFloat(ask[0]), s: parseFloat(ask[1]) })),
      };
    } else {
      return {
        bids: [{ p: data.l, s: 100 }], // Giá thấp nhất
        asks: [{ p: data.h, s: 100 }], // Giá cao nhất
      };
    }
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu Order Book:", error);
    return { bids: [], asks: [] };
  }
}
