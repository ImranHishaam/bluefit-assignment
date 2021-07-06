import axios from 'axios';
import { 
    fetchSearchAction, 
    fetchSearchSuccessAction, 
    fetchSearchErrorAction,
    searchEndAction
 } from "./search.action";
import { BASE_URL, HEADLINE, API_KEY } from './search.constants';

export const fetchSearchApi = (searchText = 'us') => {
    return async (dispatch: any) => {
        try {
            dispatch(fetchSearchAction(searchText))
            const data = await axios.get(
                `${BASE_URL}${HEADLINE}?country=${searchText}&apiKey=${API_KEY}`
            );
            if (data.data.end !== undefined) {
                dispatch(searchEndAction());
            } else {
                dispatch(fetchSearchSuccessAction(data.data.articles));
            } 
        } catch (error) {
            if (error.response === undefined) {
                dispatch(fetchSearchErrorAction({ success: false, error: { message: error.message } }));
            } else {
                dispatch(fetchSearchErrorAction(error.response.data));
            }
        }
    }
}