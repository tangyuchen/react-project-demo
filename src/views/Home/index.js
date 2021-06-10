import { Button } from 'antd';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addTodoList} from '../../store/action/home'
class Home extends Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render() {
    const { handleClick,store_home_inputValue} = this.props;
    return (
      <div>
        Home   {store_home_inputValue}
        <Button type="primary" onClick={handleClick}>点击我</Button>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    ...state.store_home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick:() => {
      const action = addTodoList('3')
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
