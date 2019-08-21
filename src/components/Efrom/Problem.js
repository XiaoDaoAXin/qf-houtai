import React, { Component } from 'react';
import { Input, Button, Table } from 'antd';
import request from '../../utils/request'
import './css/Problem.css';
const { TextArea } = Input;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '10%',
        render: text => <a>{text}</a>,
    },
    {
        title: '问题内容',
        className: 'problem',
        width: '50%',
        dataIndex: 'problem',

    },
    {
        title: '创建时间',
        width: '20%',
        dataIndex: 'time',
    },
    {
        title: '回复',
        width: '20%',
        dataIndex: 'apply',
    }
];


export default class ProblemPage extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            problem: '',
            openKeys: ['sub1'],
            //表格数据
            data: [],
        }
    };
    //页面初始化数据挂载
    async componentDidMount() {
        let table = await request('http://localhost:3000/qf/table', {
            method: 'get',
        })
        // console.log(table.data)
        this.setState({
            data: table.data
        })
    }

    //监听输入框变化实现数据双向流动
    userChange(e) {
        this.setState({
            user: e.target.value
        })
    };
    problemChange(e) {
        this.setState({
            problem: e.target.value
        })
    };
    //清除输入框内容
    clearInput = () => {
        this.setState({
            user: '',
            problem: '',
        })
    }

    //时间戳转化
    addZero(m) { return m < 10 ? '0' + m : m };
    format(shijianchuo) {
        //shijianchuo是整数，否则要parseInt转换
        var time = new Date(shijianchuo);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        return y + '-' + this.addZero(m) + '-' + this.addZero(d) + ' ';
    }

    //新增插入问题
    insertProblem = async () => {
        // console.log(this.state.user, this.state.problem)
        let shijianchuo = (new Date()).getTime();
        let apply = '回复（0）'
        let time = this.format(shijianchuo)
        if (this.state.name && this.state.problem) {
            let body = `key=${shijianchuo}&name=${this.state.user}&problem=${this.state.problem}&time=${time}&apply=${apply}`
            let data = await request('http://localhost:3000/qf/insertProblem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body
            })
            // console.log(data.data)
            this.setState({
                data: data.data
            })
        } else {
            alert('请完善内容')
        }
    };

    render() {
        return (
            <div>
                <div className="box-content" style={{ width: '100%', border: '1px solid #ccc', margin: 'auto', padding: '16px 12px' }}>
                    <div>
                        <span style={{ color: 'red' }}>学员姓名:</span>
                        <Input onChange={this.userChange.bind(this)} placeholder="" value={this.state.user} style={{ width: '200px', display: 'inline-block', marginLeft: '10px' }} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <span style={{ color: 'red', display: 'inline-block', verticalAlign: 'top' }}>问题内容:</span>
                        <TextArea onChange={this.problemChange.bind(this)} rows={4} value={this.state.problem} style={{ width: '590px', display: 'inline-block', verticalAlign: 'top', marginLeft: '10px' }} />
                    </div>
                    <div style={{ margin: "30px auto", width: '40%', marginTop: '30px' }}>
                        <Button onClick={this.insertProblem} type="primary" icon="search">提问</Button>
                        <Button onClick={this.clearInput} type="primary" icon="undo" style={{ marginLeft: '50px' }}>返回</Button>
                    </div>
                </div>

                {/* 问题渲染表格 */}
                <div style={{ marginTop: '20px' }}>
                    <Table
                        columns={columns}
                        dataSource={this.state.data}
                        bordered
                    />
                </div>

            </div >
        )
    }


}


