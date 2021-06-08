import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu;
class NavLeft extends React.Component {
	state = {
		currentKey: ''
	}
	// 菜单点击
	handleClick = ({ item, key }) => {
		if (key === this.state.currentKey) {
			return false;
		}
		this.setState({
			currentKey: key
		});
	};

	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig);

		this.setState({
			menuTreeNode
		})
	}
	// 菜单渲染
	renderMenu = (data) => {
		const result = data.map((item) => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{ this.renderMenu(item.children)}
					</SubMenu>
				)
			}
			return <Menu.Item title={item.title} key={item.key}>
				<NavLink to={item.key}>{item.title}</NavLink>
			</Menu.Item>
		})
		console.log(result)
		return result
	}

	render() {
		return (
			<div>
				<Menu
					mode="inline"
					theme="dark"
				>
					{this.state.menuTreeNode}
				</Menu>
			</div>
		);
	}
}
export default NavLeft