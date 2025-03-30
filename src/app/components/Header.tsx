"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      now.setUTCHours(now.getUTCHours() + 7); 
      const timeString = now.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const dateString = now.toLocaleDateString("vi-VN");
      setCurrentTime(`${timeString} ${dateString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <img src="/img/sang.jpg" alt="DNSE Logo" className="logo" />
        <nav>
          {/* <Link href="#"><a className="active">Bảng giá</a></Link>
          <Link href="#"><a>Đặt lệnh</a></Link>
          <Link href="#"><a>Giao dịch tiền</a></Link>
          <Link href="#"><a>Phân tích</a></Link>
          <Link href="#"><a>Tài sản</a></Link>
          <Link href="#"><a>Tiện ích</a></Link> */}
           <Link href="#" className="active">Bảng giá</Link>
  <Link href="#">Đặt lệnh</Link>
  <Link href="#">Giao dịch tiền</Link>
  <Link href="#">Phân tích</Link>
  <Link href="#">Tài sản</Link>
  <Link href="#">Tiện ích</Link>
        </nav>
      </div>
      <div className="header-right">
        <span className="time">{currentTime}</span> {/* Hiển thị giờ thực */}
        <button className="login">Đăng nhập</button>
        <button className="register">Mở tài khoản</button>
      </div>
    </div>
  );
};

export default Header;
