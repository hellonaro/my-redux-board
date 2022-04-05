import React, { useState } from 'react';
import styled from 'styled-components'
import store from '../../store'

type CategoryProps = {
    name: string;
    count: number;
}

const RoundTag = styled.span<{ selected: string }>`
    background-color: ${props => (props.selected === "true" ? "gold" : "lightgrey")};
    margin: 5px;
    padding: 2px 10px 2px 10px;
    border-radius: 12px;
    &:hover{
        background-color: orange;
    }
`

const handleCategoryClick = (name: string) => {
    console.log(name)
    store.dispatch({ type: 'SELECT', selected_category: name })
}

const Category: React.FC<CategoryProps> = (props) => {
    const { name, count } = props;

    const [selected, setSelected] = useState<string>("");

    store.subscribe(() => {
        const state: any = store.getState();
        const selected_name: string = state.selected_category;
        console.log("selected_name", selected_name);
        setSelected((selected_name === name) ? "true" : "false");
    })

    return (
        <RoundTag selected={selected} onClick={() => handleCategoryClick(name)}>
            {name} {count}
        </RoundTag>
    )
}


export default Category;