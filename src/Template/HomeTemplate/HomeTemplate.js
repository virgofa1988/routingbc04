import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import Headers from "../../components/Header/Header";
export default function HomeTemplate(props) {
  //object,arr,string,number,function,component
  // const { component, path } = props;

  //Lấy loading Reducer
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "HIDE_LOADING" });
    }, 2000);
    return () => {
      //Trang Hiện Tại mở Loading
      dispatch({ type: "DISPLAY_LOADING" });
    };
  }, []);
  const renderLoading = () => {
    if (isLoading) {
      return (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="d-flex flex-column align-item-center justify-content-center w-100 h-100 text-">
            Loading...
          </div>
        </div>
      );
    }
  };
  return (
    <Fragment>
      {/* <Route path={path} exact component={component} /> */}
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              {renderLoading()}
              <Headers {...propsRoute} />
              <props.component {...propsRoute} />
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
