import Axios from 'axios';

async function GetElements() {
    const url = 'https://data-base-chem.herokuapp.com/table';
    try {
        const response = await Axios.get(url);
        return response.data.elements;
    } catch (error) {
        return null;
    }
}

export default GetElements;