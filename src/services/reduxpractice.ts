import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { uploadProduct } from '@/Types/ProductTypes';
import { addReviews, getReviews, updateReviews } from '@/Types/ReviewTypes';
import { UserDataTypes } from '@/Types/userTypes';

import { supabase } from '../utils/supabaseClient';

export interface Post {
  id: string;
  name: string;
}

type PostsResponse = Post[];

export const api = createApi({
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fakeBaseQuery(),
  tagTypes: ['products', 'reviews', 'profiledata'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase
          .from(`Products`)
          .select()
          .not(`Images`, `eq`, null);
        return { data, error };
      },
      providesTags: ['products'],
    }),

    uploadProduct: builder.mutation<any, uploadProduct>({
      queryFn: async ({
        SellerID,
        SellerEmail,
        Images,
        Name,
        ShortDesc,
        Description,
        country,
        price,
        website,
        stock,
        extrainformation,
        salePrice,
        isOnSale,
      }) => {
        const { data, error } = await supabase.from('Products').insert([
          {
            SellerID,
            SellerEmail,
            Images,
            Name,
            'Short description': ShortDesc,
            Description,
            country: country,
            'Regular price': price,
            sellerWebsite: website,
            Stock: stock,
            extraInformation: extrainformation,
            'Sale price': salePrice,
            isOnSale,
          },
        ]);
        return { data, error };
      },
      invalidatesTags: ['products'],

    }),

    getReviews: builder.query<getReviews, string>({
      queryFn: async (id) => {
        const { data, error } = await supabase
          .from('productReviews')
          .select('*', { count: 'exact' })
          .eq('productID', id);
        return { data, error };
      },
      providesTags: ['reviews'],
    }),

    addReview: builder.mutation<addReviews, addReviews>({
      queryFn: async ({
        productID,
        reviewText,
        userID,
        stars,
        pros,
        cons,
        wouldRecommend,
        email,
      }) => {
        const { data, error } = await supabase.from('productReviews').insert([
          {
            productID,
            reviewText,
            userID,
            stars,
            pros,
            cons,
            wouldRecommend,
            email,
          },
        ]);
        return { data, error };
      },
      invalidatesTags: ['reviews'],
    }),

    updateReviews: builder.mutation<
      Omit<updateReviews, 'uniqueReviewId'>,
      updateReviews
    >({
      queryFn: async ({
        productID,
        reviewText,
        userID,
        stars,
        pros,
        cons,
        wouldRecommend,
        email,
        uniqueReviewId,
      }) => {
        const { data, error } = await supabase
          .from('productReviews')
          .update([
            {
              productID,
              reviewText,
              userID,
              stars,
              pros,
              cons,
              wouldRecommend,
              email,
            },
          ])
          .eq('id', uniqueReviewId);
        console.log(error);
        return { data, error };
      },
      invalidatesTags: ['reviews'],
    }),

    deleteReviews: builder.mutation<number, any>({
      queryFn: async (id) => {
        const { data, error } = await supabase
          .from('productReviews')
          .delete()
          .eq('id', id);

        return { data, error };
      },
      invalidatesTags: ['reviews'],
    }),

    getUser: builder.query<UserDataTypes, string>({
      queryFn: async (userid) => {
        const { data, error } = await supabase
          .from(`users`)
          .select()
          .eq('userID', userid);
        return { data, error };
      },
      providesTags: ['profiledata'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetReviewsQuery,
  useAddReviewMutation,
  useUpdateReviewsMutation,
  useDeleteReviewsMutation,
  useGetUserQuery,
  useUploadProductMutation,
} = api;
