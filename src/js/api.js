import axios from 'axios';


export async function getReviews() {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const url = `${BASE_URL}/reviews`; 

    try {
        const apiReviewsData = await axios.get(url);
        return apiReviewsData.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;  
    }
}

export async function postRequest(req) {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const url = `${BASE_URL}/requests`;  
    try {
        const apiRequestData= await axios.post(url, req);
        return apiRequestData.data;
    } catch (error) {
        console.error('Error posting request:', error);
        throw error;  
    }
}