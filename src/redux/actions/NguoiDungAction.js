import axios from "axios";
import { history } from "../../App";
import { ACCESSTOKEN, USER_LOGIN } from "../../util/setting";
export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });
      console.log(result.data);
      dispatch({
        type: "XU_LY_DANG_NHAP_THANH_CONG",
        tenDangNhap: result.data.taiKhoan,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data);
      alert("Đăng Nhập Thành Công");
      history.push("/");
    } catch (errors) {
      console.log("errors", errors.response?.data); // Toán tử của JS, nếu response tồn tại mới cho truy suất đến data.
    }
  };
};

export const datVe = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: thongTinDatVe,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      console.log(result.data);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
