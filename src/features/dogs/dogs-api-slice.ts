import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Dogs_Api_Key = 'aa061823-6ae1-42ba-8dfa-b8cf629569a1';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    }
}

interface Votes {
    image_id: string,
    sub_id: string,
    value: number
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-api-key', Dogs_Api_Key);
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
            fetchBreeds: builder.query<Breed[], number|void>({
                query: (limit = 10) => {
                    return `/breeds?limit=${limit}`
                }
            }),
            createVotes: builder.mutation<void, Votes>({
                query: (body) => ({
                    url: '/votes',
                    method: 'POST',
                    body,
                }),
            })
        }
    }
});

export const { useFetchBreedsQuery, useCreateVotesMutation } = apiSlice;
