/* @jsx createElement */
import { createElement, render } from './react'

// const vdom = createElement('p', {},
//     createElement('h1', {}, "React 만들기"),
//     createElement('ul', {},
//         createElement('li', {style: "color:red"}, "첫번째 아이템"),
//         createElement('li', {style: "color:blue"}, "두번째 아이템"),
//         createElement('li', {style: "color:green"}, "세번째 아이템"),
//     )
// );

function Title(props) {
    return <h1>{props.children}</h1>;
}

function Item(props) {
    return <li style={`color:${props.color}`}>{props.children}</li>;
}

const App = () => <p>
    <Title>React 만들기</Title>
    <ul>
        <Item color="red">첫번째 아이템</Item>
        <Item color="blue">두번째 아이템</Item>
        <Item color="green">세번째 아이템</Item>
    </ul>
</p>

// console.log(vdom);

render(<App />, document.querySelector('#root'));
