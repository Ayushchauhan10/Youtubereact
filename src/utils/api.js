import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
        '00448abb94mshf15c4c7f6661863p1c0ae2jsnf20579c026ed' ,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
}

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
