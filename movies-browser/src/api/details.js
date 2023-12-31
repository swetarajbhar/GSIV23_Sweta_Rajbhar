import API_URLS from '../constants/API_URLS';
import { getAxiosInstance } from "../globals/utils/ajax";

const params = {
    api_key:'5ed97102244a2891b686b35648affdfa'
}

export const movieDetails = async(movieId)=>{
    try{
        const response = await getAxiosInstance().get(`${API_URLS.MOVIE_GET_BY_ID}/${movieId}`,{params});
        return {
            status: 200,
            data: response.data,
            errorMessage: ""
        }
    }catch(error){
        console.error();
        return{
            status: 400,
            data: [],
            errorMessage: error.message
        }
    }
}