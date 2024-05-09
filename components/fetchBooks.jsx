import React from "react";
import axios from "axios";
import { categories } from "@/app/data";

export const fetchBookById = async (search) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC6vXLjqb1qYL49z7ZB4Rt4MZcDwTl15uI&maxResults=40`
    );

    // Extract relevant data from the response
    const books = response.data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title,
      categories: item.volumeInfo.categories,
      pageCount: item.volumeInfo.pageCount,
      publishedDate: item.volumeInfo.publishedDate,
      saleInfo: item.saleInfo.isEbook,
      authors: item.volumeInfo.authors || ["Unknown"],
      description: item.volumeInfo.description || "No description available",
      thumbnail:
        item.volumeInfo.imageLinks?.thumbnail ||
        "https://via.placeholder.com/128x192?text=No+Cover", // Default cover image
      // Add more fields as needed
    }));

    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return []; // Return empty array in case of error
  }
};
