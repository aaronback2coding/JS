import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer l8tSvBJeSMVyQQtx4oawuh-_67HJnjpG-H-1MkCB5LJeDGTPGg4SzJJGvf5A8pEMOR9Ou5kMsyJ32fAltKTmRYXiYMYAXqZCjss4VUypoLpevjIs572ccVNrf7qeXXYx'
    }
});