import React from 'react'
// import { withRouter } from "react-router-dom";

const HOC = (Comp) => {
    let state = {
        name: 'yao'
    }
    return class HOCTest extends React.Component {
        render() {
            return (
                <Comp name={state.name} plus={(a, b) => {
                    return a + b
                }} skill="ps" />
            )
        }
    }
}
// 多了一些props属性
class Test extends React.Component {
    // this.props.plus
    render() {
        return (
            <React.Fragment>
                <div ref="test">Test</div>
                <div>Test1</div>
                <div>Test1</div>
                <div>Test1</div>
            </React.Fragment>
        )
    }
    componentDidMount() {
        this.refs.test.style.color = 'red'
        console.log(this.refs.test)
    }
}
// 高阶组件
// export default Test
export default HOC(Test)