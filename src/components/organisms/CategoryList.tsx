import React from 'react'
import Category from '../atoms/Category'
import store from '../../store'

type Category = {
    name: string;
    contents: string[];
}

const CategoryList: React.FC = () => {
    const state: any = store.getState()
    const categories: Category[] = state.categories

    return (
        <div>
            {categories.map((category) => (
                <Category name={category.name} count={category.contents.length} />
            ))}
        </div>
    )
}

export default CategoryList