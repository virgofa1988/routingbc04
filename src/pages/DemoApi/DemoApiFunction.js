import React, { useState, useEffect } from "react";
import axios from "axios";
export default function DemoApiFunction() {
  const [mangPhim, setMangPhim] = useState([]);

  useEffect(async () => {
    //Hàm chạy sau khi render lần đầu
    try {
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      //SetState
      setMangPhim(result.data);
    } catch (errors) {
      console.log(errors);
    }
  }, []);

  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card bg-dark text-light my-2">
            <img
              style={{ height: "300px", width: "100% " }}
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.biDanh}
            />
            <div className="card-body" style={{ height: "150px" }}>
              <h4 className="card-title">Title : {phim.tenPhim}</h4>
              <p className="card-text">
                Description:
                {phim.moTa.length > 50
                  ? phim.moTa.substring(0, 50) + "..."
                  : phim.moTa}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Movie's List</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
