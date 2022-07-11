import { IFilter } from '@src/@types/filter'
import { GET_ALL_TRANSACTIONS, STATUS_FILTER_QUERY, TYPE_FILTER_QUERY } from '../../../../src/graphql/queries'
import { formatData } from '../../../utils'
import { useState, useId, FC } from 'react'
import './style.css'
import { useLazyQuery } from '@apollo/client'


const FilterActions: FC<IFilter> = ({ setTransactions }) => {
    const [selected, setSelected] = useState(-1)
    const [getAllData] = useLazyQuery(GET_ALL_TRANSACTIONS);
    const [getStatusFilteredData] = useLazyQuery(STATUS_FILTER_QUERY);
    const [getTypeFilteredData] = useLazyQuery(TYPE_FILTER_QUERY);
    const id = useId()

    const handleStatusFilter = (status: string) => {
        getStatusFilteredData({
            variables: { query: status },
            onCompleted(data) {
                const formattedData = formatData(data)
                setTransactions(formattedData)
            }
        })
    }

    const handleTypeFilter = (type: string) => {
        getTypeFilteredData({
            variables: { query: type },
            onCompleted(data) {
                const formattedData = formatData(data)
                setTransactions(formattedData)
            }
        })
    }


    const filterActions = [
        {
            text: 'All',
            onClick: (index: number) => {
                setSelected(index)
                getAllData({
                    onCompleted(data) {
                        const formattedData = formatData(data)
                        setTransactions(formattedData)
                    }
                })
            }
        },
        {
            text: 'paid',
            onClick: (index: number) => {
                setSelected(index)
                handleStatusFilter("paid")
            }
        },
        {
            text: 'unpaid',
            onClick: (index: number) => {
                setSelected(index)
                handleStatusFilter("unpaid")
            }
        },
        {
            text: 'pending',
            onClick: (index: number) => {
                setSelected(index)
                handleStatusFilter("pending")
            }
        },
        {
            text: 'paystack',
            onClick: (index: number) => {
                setSelected(index)
                handleTypeFilter("paystack")
            }
        },
        {
            text: 'remita',
            onClick: (index: number) => {
                setSelected(index)
                handleTypeFilter("remita")
            }
        },
        {
            text: 'flutterwave',
            onClick: (index: number) => {
                setSelected(index)
                handleTypeFilter("flutterwave")
            }
        }
    ]
    return (
        <section className='filter'>
            {
                filterActions.map(({ text, onClick }, index) => {
                    const isSelected = selected === index
                    const classNames = isSelected ? 'filter__action selected' : 'filter__action'
                    return (

                        <div
                            className={classNames}
                            onClick={() => onClick(index)}
                            key={`${id}${index}`}>{text}
                        </div>
                    )
                }

                )
            }

        </section>
    )
}

export { FilterActions }
