import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinPhim } from "../../redux/actions/PhimActions";
export default function Detail(props) {
  //props.history,props.match,props.location (Khi Component load ra tu the Route)
  console.log(props);
  //Lấy state từ reducer
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  //Khai báo dispatcher
  const dispatch = useDispatch();
  //Lấy params từ URL về
  const id = props.match.params.id;
  //Gọi API cho chi tiết phim ở componentDidMount
  useEffect(() => {
    dispatch(layThongTinPhim(id));
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.tenPhim}
          />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
