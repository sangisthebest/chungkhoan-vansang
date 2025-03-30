interface StockData {
    ticker: string;
    close: number;
    high: number;
    low: number;
    volume: number;
  }
  export const fetchStockData = async (): Promise<StockData[]> => {
    try {
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2024-03-12?adjusted=true&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`
      );
  
      const data = await response.json();
      if (data.results) {
        return data.results.map((stock: Record<string, unknown>) => ({
          ticker: stock.T as string,
          close: stock.c as number,
          high: stock.h as number,
          low: stock.l as number,
          volume: stock.v as number,
        }));
      }
      return [];
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return [];
    }
  };
    