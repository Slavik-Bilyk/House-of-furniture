import { useState } from "react";
import { Category } from './Categories.styled';

export default function Categories({ choseCategory }) {

    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'chair',
            name: 'Крісла'
        },
        {
            key: 'table',
            name: 'Столи'
        },
        {
            key: 'sofa',
            name: 'Дивани'
        },
        {
            key: 'light',
            name: 'Світло'
        }
    ]);

    return (
        <div>
            {categories.map(el => (
                <Category key={el.key} onClick={() => choseCategory(el.key)}>{el.name}</Category>
            ))}
        </div>
    );
}
