import React from 'react';
import Home from "../views/Home/index"
import Buttons from '../views/Buttons/index';
import Modals from '../views/Modals/index';
import Loadings from '../views/Loadings/index';
import Notice from '../views/Notice/index';
import Messages from "../views/Messages/index"
import Tabs from '../views/Tabs/index';
import Gallery from '../views/Gallery/index';
import Carousel from '../views/Carousel/index';
import FormLogin from '../views/FormLogin/index';
import FormRegister from '../views/FormRegister/index';
import BasicTable from '../views/BasicTable/index';
import HighTable from '../views/HighTable/index';
import Rich from '../views/Rich/index';
import City from '../views/City/index';
import Order from '../views/Order/index';
import BikeMap from '../views/BikeMap/index';
import Bar from '../views/Bar/index'
import Pie from '../views/Pie/index'
import Line from '../views/Line/index'
import Permission from '../views/Permission/index'

const menuList = [
    {
        name: "/home",
        path: "/home",
        exact: true,
        render(props){
            return <Home {...props}/>
        }
    },{
        name: "/ui/buttons",
        path: "/ui/buttons",
        exact: true,
        render(props){
            return <Buttons {...props} />
        }
    },{
        name: "/ui/modals",
        path: "/ui/modals",
        exact: true,
        render(props){
            return <Modals {...props} />
        }
    },{
        name: "/ui/loadings",
        path: "/ui/loadings",
        exact: true,
        render(props){
            return <Loadings {...props} />
        }
    },{
        name: "/ui/notification",
        path: "/ui/notification",
        exact: true,
        render(props){
            return <Notice {...props} />
        }
    },
    {
        name: "/ui/messages",
        path: "/ui/messages",
        exact: true,
        render(props) {
            return <Messages {...props} />
        }
    },
    {
        name: "/ui/tabs",
        path: "/ui/tabs",
        exact: true,
        render(props) {
            return <Tabs {...props} />
        }
    }, {
        name: "/ui/gallery",
        path: "/ui/gallery",
        exact: true,
        render(props) {
            return <Gallery {...props} />
        }
    }, {
        name: "/ui/carousel",
        path: "/ui/carousel",
        exact: true,
        render(props) {
            return <Carousel {...props} />
        }
    }, {
        name: "/form/login",
        path: "/form/login",
        exact: true,
        render(props) {
            return <FormLogin {...props} />
        }
    }, {
        name: "/form/reg",
        path: "/form/reg",
        exact: true,
        render(props) {
            return <FormRegister {...props} />
        }
    }, {
        name: "/table/basic",
        path: "/table/basic",
        exact: true,
        render(props) {
            return <BasicTable {...props} />
        }
    }, {
        name: "/table/high",
        path: "/table/high",
        exact: true,
        render(props) {
            return <HighTable {...props} />
        }
    }, {
        name: "/rich",
        path: "/rich",
        exact: true,
        render(props) {
            return <Rich {...props} />
        }
    }, {
        name: "/city",
        path: "/city",
        exact: true,
        render(props) {
            return <City {...props} />
        }
    }, {
        name: "/order",
        path: "/order",
        exact: true,
        render(props) {
            return <Order {...props} />
        }
    }, {
        name: "/bikeMap",
        path: "/bikeMap",
        exact: true,
        render(props) {
            return <BikeMap {...props} />
        }
    }, {
        name: "/charts/bar",
        path: "/charts/bar",
        exact: true,
        render(props) {
            return <Bar {...props} />
        }
    }, {
        name: "/charts/pie",
        path: "/charts/pie",
        exact: true,
        render(props) {
            return <Pie {...props} />
        }
    }, {
        name: "/charts/line",
        path: "/charts/line",
        exact: true,
        render(props) {
            return <Line {...props} />
        }
    }, {
        name: "/permission",
        path: "/permission",
        exact: true,
        render(props) {
            return <Permission {...props} />
        }
    }
];
export { menuList};