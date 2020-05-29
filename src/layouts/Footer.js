/*
 * @Author: hhhhhq
 * @Date: 2020-05-28 16:32:53
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-28 23:27:09
 * @Description: file content
 */

import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Pro 首页',
          title: 'Pro 首页',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2020 哈尔滨建中网络技术部出品
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
