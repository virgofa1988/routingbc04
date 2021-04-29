import React, { Fragment } from "react";
import { Route } from "react-router";
import Headers from "../../components/Header/Header";
export default function LoginTemplate(props) {
  //object,arr,string,number,function,component

  const { component, path } = props;
  return (
    <Fragment>
      {/* <Route path={path} exact component={component} /> */}
      <Route
        path={path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="https://picsum.photos/1000"
                      alt="UserImage"
                      style={{ height: "100vh", width: "100%" }}
                    />
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-center align-item-center">
                    <Headers />
                    <props.component {...propsRoute} />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
