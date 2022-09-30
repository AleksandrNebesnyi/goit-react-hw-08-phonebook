import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface IContacts {
    id: string;
    name: string;
    phone: string;
}

interface IContact {
  
  name: string;
  phone: string;
}


type ContactsResponse =IContacts[]



export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61fb809f87801d0017a2c527.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query<ContactsResponse, void>({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation<IContacts, number>({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation<IContacts, IContact>({
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