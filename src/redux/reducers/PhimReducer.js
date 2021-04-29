const stateDefault = {
  mangPhim: [
    {
      maPhim: 1314,
      tenPhim: "Gà Trống Nuôi Vợ",
      biDanh: "ga-trong-nuoi-vo",
      trailer: "https://youtu.be/IY7ktRwopPw",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png",
      moTa: "ghntfhfghfghfghfghfg",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-09T11:38:17.29",
      danhGia: 10,
    },
    {
      maPhim: 1329,
      tenPhim: "Bố Già",
      biDanh: "bo-gia",
      trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
      moTa: "Tui Chưa Coi Nên Chưa Biết",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-03T20:30:24.247",
      danhGia: 10,
    },
  ],
  chiTietPhim: {},
};
export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SET_MANG_PHIM": {
      console.log(action.mangPhim);
      return { ...state, mangPhim: action.mangPhim };
    }
    case "SET_CHI_TIET_PHIM": {
      state.chiTietPhim = action.chiTietPhim;
    }
  }
  return { ...state };
};
