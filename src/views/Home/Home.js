import React from 'react'
import {Route } from "react-router-dom";

const Acp = () => {
    return (
        <div>a组件</div>
    )
}

const Bcp = () => {
    return (
        <div>b组件</div>
    )
}
export default () => {
    return (
        <div>home页面
            
             <Route path="/Home/a" component={Acp} />
        </div>
    )
}