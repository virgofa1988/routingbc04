import React, { Component } from "react";
import axios from "axios";

export default class DemoApiClass extends Component {
  state = {
    mangPhim: [],
  };
  loadPhim = async () => {
    // Cách 1: sử dụng promise
    // //Hàm gọi API lấy dữ liệu từ backend trả về
    // const promise = axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // });
    // //Hàm Xử Lý Thành Công
    // promise.then((result) => {
    //   //   console.log(result.data);
    //   this.setState(
    //     {
    //       mangPhim: result.data,
    //     },
    //     console.log(this.state.mangPhim)
    //   );
    // });
    // //Hàm Xử Lý Thất Bại
    // promise.catch((errors) => {
    //   console.log(errors);
    // });

    //cách 2: dùng async await
    try {
      // Try/catch dùng để bắt các lỗi xảy ra trong trình fetch api về kể cả lỗi logic
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });

      this.setState({
        mangPhim: result.data,
      });
    } catch (errors) {
      console.log("error", errors.response.data);
    }
  };
  renderMangPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card bg-dark text-light my-2">
            <img
              style={{ height: "300px", width: "100% " }}
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.biDanh}
            />
            <div className="card-body" style={{ height: "200px" }}>
              <h4 className="card-title">Title : {phim.tenPhim}</h4>
              <p className="card-text">
                Description:{" "}
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
  render() {
    return (
      <div className="container">
        {/* <button className="btn btn-info" onClick={() => this.loadPhim()}>
          Load Movie's List
        </button> */}
        <h3 className="text-center">Danh Sách Phim</h3>
        <div className="row">{this.renderMangPhim()}</div>
      </div>
    );
  }
  componentDidMount() {
    this.loadPhim();
  }
}
