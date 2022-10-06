import React from "react";
import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    // display: flex;
    // flex-direction: coloumn;
`;

function TodoTemplate({children}){
    return(
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    );
};

export default TodoTemplate;