import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [number, setNumber] = useState(0);
  //Hook này thay thế cho các lifecycle của class component
  useEffect(() => {
    //Tự động kích hoạt và chạy lần đầu tiên sau khi return bên dưới đã đc render
    //Sử dụng carousel, thư viện khác...
    //Callapi
    console.log("componentDidMount");
    return () => {
      console.log("ComponentWillUnmount");
    };
  }, []);
  useEffect(() => {
    //Tự động kích hoạt và chạy sau mỗi lần render kể cả lần đầu tiên

    console.log("componentDidUpdate");
  });
  useEffect(() => {
    //Tự động kích hoạt và chạy sau mỗi lần render kể cả lần đầu tiên

    console.log("componentDidUpdate bởi 1 state nào đó");
  }, [number]);

  return (
    <div>
      Number {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
