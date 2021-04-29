import { USER_LOGIN } from "../../util/setting";

let tenDN = "";
if (localStorage.getItem(USER_LOGIN)) {
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  tenDN = userLogin.taiKhoan;
}

const stateDefault = {
  tenDangNhap: tenDN,
};

export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_DANG_NHAP_THANH_CONG": {
      state.tenDangNhap = action.tenDangNhap;
      return { ...state };
    }
  }
  return { ...state };
};
