import Axios from 'axios';

async function GetElements() {
    const url = 'https://data-base-chem.herokuapp.com/table';
    const response = await Axios.get(url);
    return response.data.elements;
}

export default GetElements;