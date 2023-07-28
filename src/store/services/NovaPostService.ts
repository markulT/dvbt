
const API_BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';

interface Settlement {
    Ref: string;
    // Add other properties of the 'Settlement' type here
}

interface ApiResponse {
    success: boolean;
    data: Settlement[];
    errors: any[]; // Adjust the type of errors if needed
    warnings: any[]; // Adjust the type of warnings if needed
}

export const getSettlements = async (
    searchText: string
): Promise<ApiResponse> => {
    console.log('Nova Post');
    console.log(searchText);
    const apiKey = 'f38b5efe10ab2201e749ac0c3bc35ca3';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
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

    const response: Response = await fetch(API_BASE_URL, requestOptions);
    console.log(response);
    console.log(response.body);
    return response.json();
};
