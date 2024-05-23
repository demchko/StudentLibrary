import axios from 'axios';

interface Book {
  title: string;
  author?: string;
  description: string;
  photo: string;
  file: string;
  genre?: string;
}

class BookService {
  private static instance: BookService;

  private constructor() {}

  public static getInstance(): BookService {
    if (!BookService.instance) {
      BookService.instance = new BookService();
    }
    return BookService.instance;
  }

  public async getBook(bookId: string): Promise<Book> {
    try {
      const response = await axios.get(`http://localhost:1488/library/${bookId}`, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.error('Error fetching book data:', error);
      throw error;
    }
  }

  public async getBooks(type?: string): Promise<Book[]> {
    try {
      let url = 'http://localhost:1488/library';
      if (type) {
        url += `?type=${type}`;
      }
      const response = await axios.get(url, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.error('Error fetching books data:', error);
      throw error;
    }
  }

  public async getBooksByGenre(genre?:string): Promise<Book[]>{
    try {
      let url = 'http://localhost:1488/library';
      if (genre) {
        url += `?genre=${genre}`;
      }
      const response = await axios.get(url, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.error('Error fetching books data:', error);
      throw error;
    }
  }

  public async getBooksByYear(year?:string): Promise<Book[]>{
    try {
      let url = 'http://localhost:1488/library';
      if (year) {
        url += `?year=${year}`;
      }
      const response = await axios.get(url, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.error('Error fetching books data:', error);
      throw error;
    }
  }
}

export default BookService;