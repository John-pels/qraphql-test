import { useLazyQuery, useQuery } from "@apollo/client"
import { arrayLength, formatData } from "../../../utils"
import { GET_ALL_TRANSACTIONS, GLOBAL_SEARCH_QUERY } from "../../../graphql/queries"
import { Card, FilterActions, SearchInput } from "../../General"
import './style.css'
import { ChangeEvent, FormEvent, useCallback, useEffect, useId, useState } from "react"
import { IGroupedData } from "@src/@types/data"
import { store } from "../../../graphql/store"



const HomeScreen = () => {
    const [transactions, setTransactions] = useState<Array<IGroupedData>>([])
    const [searchQuery, setSearchQuery] = useState("")
    const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS)
    const [getSearchResult] = useLazyQuery(GLOBAL_SEARCH_QUERY)
    let id = useId()


    const handleFormatData = useCallback(() => {
        const formattedData = formatData(data)
        store(formattedData)
        setTransactions(store())
    }, [data])

    useEffect(() => {
        handleFormatData()
    }, [handleFormatData])

    const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)

    }
    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        getSearchResult({
            variables: { query: searchQuery },
            onCompleted(data) {
                const formattedData = formatData(data)
                setTransactions(formattedData)
            }
        })
    }



    if (loading) return <p>Loading...</p>
    if (error) return <p>Oooops!, there seems to be an error somewhere...</p>
    return (
        <section>
            <form onSubmit={handleSearch}>
                <SearchInput onChange={handleSearchQueryChange} value={searchQuery} />
            </form>
            <div className="filter_container">
                <FilterActions transactions={transactions} setTransactions={setTransactions} />
            </div>
            {
                arrayLength(transactions) ?

                    transactions?.map(({ date, transactions }, index) => {
                        return (
                            <div className="data" key={`${id}${index++}`}>
                                <span className="data__date">{new Date(date).toDateString()}</span>
                                {
                                    transactions.map(({ id, name, status }) => (
                                        <Card status={status} name={name} key={id} />
                                    ))
                                }

                            </div>
                        )
                    }) : null
            }

        </section>
    )
}

export { HomeScreen }
