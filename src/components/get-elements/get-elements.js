import Axios from 'axios';

const GetElements = async () => {
    const url = 'https://data-base-chem.herokuapp.com/table';
    const response = await Axios.get(url);
    return response.data.elements;
}

export default GetElements;