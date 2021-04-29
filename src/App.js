import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Headers from "./components/Header/Header";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import UseStateDemo from "./pages/Hook/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/Hook/UseEffectDemo/UseEffectDemo";
import DemoApiClass from "./pages/DemoApi/DemoApiClass";
import DemoApiFunction from "./pages/DemoApi/DemoApiFunction";
import Detail from "./pages/Detail/Detail";
import { Fragment } from "react";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate";
import LoginTemplate from "./Template/LoginTemplate/LoginTemplate";

//Cấu Hình chuyển hướng trên Route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //Cho phép điều hướng trang
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <HomeTemplate path="/home" component={Home} />
          <HomeTemplate path="/detail/:id" component={Detail} />
          {/* Cách 1 : truyền component mặc định bên trong Component Home sẽ nhận các Props của Route mặc định như Match,History,Location */}
          {/* <Route
            path="/home"
            exact
            render={(propsRoute) => {
              return (
                <Fragment>
                  <Headers {...propsRoute} />
                  <Home {...propsRoute} />
                </Fragment>
              );
            }}
          /> */}
          {/* Cách 2 : dùng props Render để có thể thêm các thẻ tuỳ chỉnh như thẻ h1, và nhưng phải truyền thủ công propsRoute thông qua tham số hàm */}
          <LoginTemplate path="/login" exact component={Login} />
          {/* <Route
            path="/login"
            exact
            render={(propsRoute) => {
              return (
                <div className="container"> */}
          {/* {...propsRoute} là copy toàn bộ tham số PropsRoute từ router truyền thủ công vào Component Login */}
          {/* <Headers />
                  <Login {...propsRoute} />
                </div>
              );
            }}
          /> */}
          <HomeTemplate path="/register" exact component={Register} />
          <HomeTemplate path="/about" exact component={About} />
          <HomeTemplate path="/demousestate" exact component={UseStateDemo} />
          <HomeTemplate path="/demouseeffect" exact component={UseEffectDemo} />
          <HomeTemplate path="/apiclass" exact component={DemoApiClass} />
          <HomeTemplate path="/apifunction" exact component={DemoApiFunction} />
          {/* <Route
            path="/detail/:id"
            exact
            render={(propsRoute) => {
              return (
                <Fragment>
                  <Headers {...propsRoute} />
                  <Detail {...propsRoute} />
                </Fragment>
              );
            }}
          /> */}
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
