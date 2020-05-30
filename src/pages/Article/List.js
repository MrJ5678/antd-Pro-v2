/*
 * @Author: hhhhhq
 * @Date: 2020-05-29 10:15:55
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-30 16:01:01
 * @Description: file content
 */ 
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Card } from 'antd';
import moment from 'moment'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ userArt, loading }) => ({
  userArt,
  loading: loading.models.userArt,
}))
class List extends PureComponent {
  columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: text => moment(text).fromNow()
  }];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userArt/fetch',
    });
  }

  handleChange = (page) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'userArt/fetch',
      payload: { page, pageSize: 1 }
    });
  }

  render() {
    const {
      userArt: { data : { list, pagination } },
      loading
    } = this.props
    const paginationProps = {
      defaultPageSize: 1,
      onChange: this.handleChange,
      ...pagination
    }
    return (
      <PageHeaderWrapper title="文章列表">
        <Card>
          <Table pagination={paginationProps} loading={loading} dataSource={list} columns={this.columns} rowKey="id"/>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;