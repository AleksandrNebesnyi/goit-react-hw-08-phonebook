import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {IContact,IContactBody, TContactsResponse} from '../../types/contactTypes'
// interface IContacts {
//     id: string;
//     name: string;
//     phone: string;
// }

// interface IContact {

//     name: string;
//   phone: string;
// }


// type ContactsResponse =IContacts[]



export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61fb809f87801d0017a2c527.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query<TContactsResponse, void>({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation<IContact, string>({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation<IContact, IContactBody>({
      query: ({name, phone}) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;

//  invalidatesTags: result =>
//       result ? [{ type: 'contacts', id: result.id }] : ['contacts'],
//   }),

// { id: number; data: Partial<Photo> }