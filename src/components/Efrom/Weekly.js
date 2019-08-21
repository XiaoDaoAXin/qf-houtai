import React, { Component } from 'react';
import { Input, Button, Table } from 'antd';
import request from '../../utils/request'
const { TextArea } = Input;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '10%',
        render: text => <a>{text}</a>,
    },
    {
        title: '标题名称',
        className: 'title',
        width: '15%',
        dataIndex: 'title',

    },
    {
        title: '内容',
        className: 'content',
        width: '50%',
        dataIndex: 'content',

    },
    {
        title: '周报状态',
        width: '10%',
        dataIndex: 'type',
    },
    {
        title: '创建时间',
        width: '15%',
        dataIndex: 'time',
    }
];


export default class ProblemPage extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            content: '',
            openKeys: ['sub1'],
            title: '',
            //表格数据
            data: [],
        }
    };
    //页面初始化数据挂载
    async componentDidMount() {
        let table = await request('http://localhost:3000/qf/chaXunWeekly', {
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
    titleChange(e) {
        this.setState({
            title: e.target.value
        })
    };
    contentChange(e) {
        this.setState({
            content: e.target.value
        })
    };

    //清除输入框内容
    clearInput = () => {
        this.setState({
            user: '',
            content: '',
            title: '',
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
    insertWeekly = async () => {
        // console.log(this.state.user, this.state.problem)
        let shijianchuo = (new Date()).getTime();
        let type = '未查看'
        let time = this.format(shijianchuo)
        if (this.state.name && this.state.title && this.state.content) {
            let body = `key=${shijianchuo}&name=${this.state.user}&title=${this.state.title}&content=${this.state.content}&time=${time}&type=${type}`
            let data = await request('http://localhost:3000/qf/insertWeekly', {
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
                        <span style={{ color: 'red', display: 'inline-block', width: '15%', textAlign: 'right' }}>学员姓名:</span>
                        <Input onChange={this.userChange.bind(this)} placeholder="" value={this.state.user} style={{ width: '200px', display: 'inline-block', marginLeft: '10px' }} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <span style={{ color: 'red', display: 'inline-block', width: '15%', textAlign: 'right' }}>周报标题</span>
                        <Input onChange={this.titleChange.bind(this)} placeholder="" value={this.state.title} style={{ width: '200px', display: 'inline-block', marginLeft: '10px' }} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <span style={{ color: 'red', display: 'inline-block', verticalAlign: 'top', width: '15%', textAlign: 'right' }}>周报内容:</span>
                        <TextArea onChange={this.contentChange.bind(this)} rows={4} value={this.state.content} style={{ width: '590px', display: 'inline-block', verticalAlign: 'top', marginLeft: '10px' }} />
                    </div>
                    <div style={{ margin: "30px auto", width: '40%', marginTop: '30px' }}>
                        <Button onClick={this.insertWeekly} type="primary" icon="check">添加</Button>
                        <Button onClick={this.clearInput} icon="undo" style={{ marginLeft: '50px', backgroundColor: '#eee', }}>返回</Button>
                    </div>
                </div>

                {/* 周报记录渲染表格 */}
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


