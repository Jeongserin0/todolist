import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {useTodoState} from "../TodoContext";

const TodoListBlock = styled.div`
    padding: 20px 30px;
    padding-bottom: 50px;
    overflow-y: auto;
`;

function TodoList(){
    const todos = useTodoState();
    return(
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
            {/* <TodoItem text='프로젝트 생성하기' done={false}/>
            <TodoItem text='컴포넌트 스타일링 하기' done={false}/>
            <TodoItem text='context 만들기' done={false}/>
            <TodoItem text='기능 구현하기' done={false}/> */}
        </TodoListBlock>
    );
};

export default TodoList;