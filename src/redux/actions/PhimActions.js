import axios from "axios";
//File này  sẽ tổng hợp tất cả các action của ứng dụng

export const layDanhSachPhimApiAction = (maNhom = "GP01") => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });
      //dispatch mang phim len redux de set lai mangPhim
      dispatch({
        type: "SET_MANG_PHIM",
        mangPhim: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
export const layThongTinPhim = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      //Sau khi gọi dispatch len reducer dữ liệu chi Tiết Phim
      dispatch({
        type: "SET_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch {}
  };
};
