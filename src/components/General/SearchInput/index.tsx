import { ISearcInput } from "@src/@types/filter"
import { FC } from "react"
import './style.css'



const SearchInput: FC<ISearcInput> = ({ onChange, value }) => {
    return (
        <section className="search">
            <input
                type="search"
                className="search__input"
                onChange={onChange}
                value={value}
                placeholder='Enter your keyword' />
        </section>
    )
}



export { SearchInput }
