

interface BinanceTicker {
    symbol: string;
    lastPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
  }
  
  interface CryptoData {
    ticker: string;
    price: number;
    high: number;
    low: number;
    volume: number;
  }
  
  // Hàm lấy toàn bộ dữ liệu từ Binance API
  export const fetchCryptoData = async (): Promise<CryptoData[]> => {
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr`);
      const data: BinanceTicker[] = await response.json();
  
      return data.map((crypto: BinanceTicker) => ({
        ticker: crypto.symbol,               // Mã giao dịch (VD: BTCUSDT, ETHUSDT)
        price: parseFloat(crypto.lastPrice), // Giá cuối cùng
        high: parseFloat(crypto.highPrice),  // Giá cao nhất trong 24h
        low: parseFloat(crypto.lowPrice),    // Giá thấp nhất trong 24h
        volume: parseFloat(crypto.volume),   // Khối lượng giao dịch trong 24h
      }));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu crypto:", error);
      return [];
    }
  };
  
  