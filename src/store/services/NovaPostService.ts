import {json} from "stream/consumers";

const API_BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';

export const getSettlements = async (searchText) => {
    console.log("Nova Post")
    console.log(searchText)
    const apiKey = 'f38b5efe10ab2201e749ac0c3bc35ca3';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors'
        },
        body: JSON.stringify({
            apiKey: apiKey,
            modelName: 'Address',
            calledMethod: 'getSettlements',
            methodProperties: {
                AreaRef: '',
                Ref: '',
                RegionRef: '',
                Page: '1',
                Warehouse: '1',
                FindByString: searchText,
                Limit: '',
            },
        }),
    };

    const response = await fetch(API_BASE_URL, requestOptions);
    console.log(response)
    console.log(response.body)
    return response.json();
};
