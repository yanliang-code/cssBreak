// 让jsx支持写样式
import styled from 'styled-components';
import React, { Component } from 'react';
// import './Demo.css';

// 给div加上属性，并命名为新变量
// 支持在使用自定义样式的HTML标签时，传入属性，可定义函数，通过属性进行逻辑，返回不同样式组合
const Div = styled.div`
  color: red;
  font-size: 36px;
  ${(props) =>
    props.big &&
    `
    font-size:72px;
  `}
`;
// Div2共用Div的样式
const Div2 = styled(Div)`
  color: green;
`;

class Demo extends Component {
  render() {
    return (
      <div>
        {/* 使用带有自定义样式的HTML标签 */}
        <Div big>Hello I'm demo</Div>
        <Div2>Hello I'm demo</Div2>
      </div>
    );
  }
}

export default Demo;
