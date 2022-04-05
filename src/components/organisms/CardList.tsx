import React, { useState } from 'react'
import styled from 'styled-components'
import store from '../../store'
import Card from '../atoms/Card'

type Category = {
    name: string;
    contents: string[];
}

const Message = styled.div`
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
`

const CardList: React.FC = () => {
    const [cards, setCards] = useState<string[]>([])

    store.subscribe(() => {
        console.log("subscribe~")
        const state: any = store.getState()
        const selected_category: string = state.selected_category
        const categories: Category[] = state.categories
        let category: Category = categories[0]
        for (let i: number = 0; i < categories.length; i = i + 1) {
            console.log(categories[i])
            if (categories[i].name === selected_category) {
                category = categories[i]
                setCards(category.contents)
                break;
            }
        }
    })

    if (cards.length === 0) {
        return (
            <Message>
                카테고리를 선택하세요!
            </Message>
        )
    }
    return (
        <div>
            {cards.map((url) => (
                <Card img={url}></Card>
            ))}
        </div>
    )
}

export default CardList