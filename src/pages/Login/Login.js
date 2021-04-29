import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/NguoiDungAction";
export default function Login(props) {
  //Thư viện formik hỗ trợ để thao tác form nhanh và validation
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    //Validation empty input
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Please enter taiKhoan"),
      matKhau: Yup.string()
        .required("Please enter matKhau")
        .min(1, "matKhau should be 6 character at least")
        .max(32, "matKhau should be under 32 characters"),
    }),
    onSubmit: (values) => {
      // console.log("values", values);
      const action = dangNhapAction(values);
      // console.log(action);
      dispatch(action);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container w-50">
      <h3 className="text-center">Login</h3>
      <div className="form-group">
        <p>User Name</p>
        <input
          type="text"
          name="taiKhoan"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched && formik.errors ? (
          <p className="text-danger">{formik.errors.taiKhoan}</p>
        ) : null}
      </div>
      <div className="form-group">
        <p>matKhau</p>
        <input
          type="matKhau"
          name="matKhau"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched && formik.errors ? (
          <p className="text-danger">{formik.errors.matKhau}</p>
        ) : null}
      </div>
      <div className="form-group">
        <button className="btn-primary btn">Login</button>
      </div>
    </form>
  );
}
