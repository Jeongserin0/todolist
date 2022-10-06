import React, { createContext, useContext, useReducer, useRef } from "react";

const initalTodos = [
    {
        id: 1,
        text: '프론트엔드 프로젝트 만들기',
        done: false
    },
    {
        id: 2,
        text: '과제하기',
        done: true
    },
    {
        id: 3,
        text: '운동하기',
        done: false
    },
    {
        id: 4,
        text: '일기쓰기',
        done: false
    }
];

// component의 상태를 관리하는 함수
function todoReducer(state, action){
    switch(action.type){
        case 'CREATE' :
           return state.concat(action.todo);

        case 'TOGGLE' :
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo);

        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);

        default :
            throw new Error(`${action.type}이 잘못 전달 됨`);
    }
}

// 상태값의 범위를 설정하는 component
const TodoStateContext = createContext();
// 업데이트가 발생하는 component를 설정하는 component
const TodoDispatchContext = createContext();
// 업데이트가 발생하는 component 중에 추가를 설정하는 component
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initalTodos);
    const nextId = useRef(5); // 추가 될 객체 index 값

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}