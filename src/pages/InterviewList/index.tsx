
import { Card, Table } from 'antd';
import { random, uniqueId } from 'lodash';
import React from 'react'
import { connect } from 'umi';

interface ListProps {
    interviewList: {
        dataSource: []
    }
}

const Index: React.FC<ListProps> = (prop) => {

    const { interviewList: {dataSource} } = prop

    const column = [
        {
            title: '题目编号',
            dataIndex: 'id',
        }, {
            title: '题目描述',
            dataIndex: 'description',
        }, {
            title: '题目类型',
            dataIndex: 'type',
        }, {
            title: '题目难度',
            dataIndex: 'difficulty',
        }, {
            title: '操作',
            key: 'control',
            render: (text: any) => {
                return <></>
            }
        }
    ]

    return <>
        <Card>
            <Table 
                dataSource={dataSource}
                columns={column}
                bordered={true}
                rowKey={() => uniqueId()}
            />
        </Card>        
    </>
}

export default connect(({interviewList}: any) => ({
    interviewList: interviewList
}))(Index);