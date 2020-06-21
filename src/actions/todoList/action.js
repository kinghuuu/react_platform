import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from '../../constants/todoList/actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://wthrcdn.etouch.cn/weather_mini?city=南京')
            .then((res) => {
                // console.log('res:', res.data.data.forecast)
                let arr = []
                res.data.data.forecast.forEach(item => {
                    arr.push(item.date + ' / ' + item.high + ' / ' + item.low + ' / ' + item.type)
                })
                const action = getListAction(arr)
                dispatch(action)
            })
            .catch((err) => {
                console.log('err:', err)
            })
    }
}


