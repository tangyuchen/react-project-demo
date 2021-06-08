import React, { Component } from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import { menuList } from "./route_list";
import App from '../App'

class IndexRoute extends Component {
	render() {
		return (
			<HashRouter>
				<Route path="/" render={() =>
					<App>
						<Switch>
							{menuList.map((item, index) => {
								return (<Route
									path={item.path}
									exact={item.exact}
									render={item.render}
									key={index}
									{...this.props}
								/>
								)
							})}
						</Switch>
					</App>
				} />
			</HashRouter>
		);
	}
}

export default IndexRoute;