// novaPostService.ts
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = 'f38b5efe10ab2201e749ac0c3bc35ca3';

export interface Settlement {
    Ref: string;
    Area: string;
    AreaDescription: string;
    Description: string;
    RegionsDescription: string;
    // Add other properties of the 'Settlement' type here
}

export interface Warehouse {
    Ref: string;
    ShortAddress: string;
    Number: string;
    // Add other properties of the 'Settlement' type here
}

interface ApiResponse {
    success: boolean;
    data: ApiResponseData;
    errors: any[];
    warnings: any[];
}

export type ApiResponseData = Settlement[] | Warehouse[];

interface MethodProperties {
    AreaRef: string;
    Ref: string;
    RegionRef: string;
    Page: string;
    Warehouse: string;
    FindByString: string;
    Limit: string;
}

export const getSettlements = async (
    searchText: string
): Promise<Settlement[]> => {
    try {
        const requestData = {
            apiKey: API_KEY,
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
        };

        const response: AxiosResponse<ApiResponse> = await axios.post(
            API_BASE_URL,
            requestData,
            { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.data.success) {
            //@ts-ignore
            return response.data.data;
        } else {
            throw new Error('An error occurred while fetching settlements.');
        }
    } catch (error) {
        //@ts-ignore
        throw new Error('An error occurred during API call: ' + error.message);
    }
};

export const getWarehouses = async (
    searchText: string,
    cityName: string
): Promise<Warehouse[]> => {
    try {
        console.log('city' + cityName)
        console.log('warehouse' + searchText)
        const requestData = {
            apiKey: API_KEY,
            modelName: 'Address',
            calledMethod: 'getWarehouses',
            methodProperties: {
                CityName: cityName,
                Language: "UA",
                WarehouseId : searchText.toString()
            },
        };

        const response: AxiosResponse<ApiResponse> = await axios.post(
            API_BASE_URL,
            requestData,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(response.data.data)
        if (response.data.success) {
            //@ts-ignore
            return response.data.data;
        } else {
            throw new Error('An error occurred while fetching settlements.');
        }
    } catch (error) {
        //@ts-ignore
        throw new Error('An error occurred during API call: ' + error.message);
    }
};
