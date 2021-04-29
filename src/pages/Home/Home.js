import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { layDanhSachPhimApiAction } from "../../redux/actions/PhimActions";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
export default function Home(props) {
  //Carousel
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  //End-Carousel

  //useSelector //lấy dữ liệu từ redux
  const { mangPhim } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();

  //Midleware Technique
  useEffect(async () => {
    dispatch(layDanhSachPhimApiAction("GP01")); //Quản lý các action của phim
  }, []);

  console.log("mang phim", mangPhim);
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
            <div className="card-footer">
              <Link to={`/detail/${phim.maPhim}`} className="btn btn-light">
                Detail
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      {/* Carousel */}
      <div className="mt-5">
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      {/* End-carousel */}
      <h3 className="text-center my-3">Movie's List</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
