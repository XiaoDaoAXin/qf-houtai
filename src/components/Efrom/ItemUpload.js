import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default class ItemUpload extends Component {

    constructor() {
        super()
        this.state = {

        }
    };

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', fontSize: '25px', borderBottom: '1px dashed #ccc', paddingBottom: '15px' }}>学员项目上传</h1>
                <div style={{ width: '100%', border: '1px solid #eee', padding: '20px 30px', lineHeight: '45px' }}>
                    <span style={{ color: 'red' }}>项目文件:</span>
                    <div style={{ display: 'inline-block' }}>
                        <Upload {...props} style={{ display: 'inline-block', marginLeft: '20px' }}>
                            <Button>
                                <Icon type="upload" /> 选择文件
                        </Button>
                        </Upload>
                    </div>
                    <span style={{ marginLeft: '10px' }}>为选择任何文件</span>
                    <span style={{ marginLeft: '50px', color: 'red' }}>注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</span>
                    <Button type="primary">下载</Button>
                    <div style={{ width: '30%', margin: 'auto', marginTop: '30px' }}>
                        <Button type="primary" icon="check">提交</Button>
                        <Button type="primary" icon="undo" style={{ marginLeft: '50px' }}>返回</Button>
                    </div>
                </div>
            </div >
        )
    }
}