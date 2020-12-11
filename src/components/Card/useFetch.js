import {useReducer , useEffect} from 'react'
import axios from 'axios'


const initialState = {
    jobs :[] ,
    loading:true
};

function reducer(state, action) {
    switch (action.type) {
        case "make_request":
            return { loading: true, jobs: [] };
        case "get_data":
            return { ...state, loading: false, jobs: action.payload.jobs };
        case "error":
            return { ...state, loading: false, error: action.payload.error, jobs: [] };
        // case "update_more":
        //     return { ...state, more: action.payload.more };
        default:
            return state
    }
}
export default  function useFetch(params){
    const [state, dispatch] = useReducer(reducer,initialState );

    useEffect(()=>{
        const cancelToken= axios.CancelToken.source()
        dispatch({type:"make_request"})
        axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json', {
            cancelToken: cancelToken.token,
            params:{markdown:true ,...params }
            }).then(res=>{
                dispatch({type:"get_data" , payload:{jobs:res.data} })
            console.log(res.data)
        }) .catch(e => {
            if(axios.isCancel(e))return
            dispatch({type:"error", payload: {error: e} })
        })
	    //cleanup
        return () =>{
            cancelToken.cancel()
        }
    } , [params]);
    return state
}