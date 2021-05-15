import {takeLatest, put, call, debounce} from 'redux-saga/effects';
import {httpGet} from '@services';
import {INITIAL_BOOKS} from './__proto__';
import {urls} from '@constants';
import {TBook} from '@types';
import {setLoader} from './_global';

enum BooksTypes {
  GET_BOOKS = '[books] GET_BOOKS',
  SET_BOOKS = '[books] SET_BOOKS',
  SEARCH_BOOKS = '[books] SEARCH_BOOKS',
  RESET_BOOKS = '[books] RESET_BOOKS',
}

const initialstate = new INITIAL_BOOKS();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case BooksTypes.SET_BOOKS:
      return new INITIAL_BOOKS({...state, booksList: action.books});
    case BooksTypes.RESET_BOOKS:
      return initialstate;
    default:
      return state;
  }
};

export const getBooks = () => ({type: BooksTypes.GET_BOOKS});
export const setBooks = (books: TBook[]) => ({books, type: BooksTypes.SET_BOOKS});
export const searchBooks = (query: string) => ({query, type: BooksTypes.SEARCH_BOOKS});
export const resetBooks = () => ({type: BooksTypes.RESET_BOOKS});

export function* watchBooks() {
  yield takeLatest(BooksTypes.GET_BOOKS, getBooksAsync);
  yield debounce(800, BooksTypes.SEARCH_BOOKS, searchBooksAsync);
}

export function* getBooksAsync() {
  yield put(setLoader(true));
  try {
    const {data} = yield call(() => httpGet(urls.books));
    yield put(setBooks(data.books));
    yield put(setLoader(false));
  } catch (e) {
    yield put(setLoader(false));
    console.log(e, 'getBooksAsync ERROR');
  }
}

export function* searchBooksAsync(action: {query: string; type: BooksTypes}) {
  yield put(setLoader(true));
  try {
    const {data} = yield call(() => httpGet(`${urls.books}?q=${action.query}`));
    yield put(setBooks(data.books));
    yield put(setLoader(false));
  } catch (e) {
    yield put(setLoader(false));
    console.log(e, 'getBooksAsync ERROR');
  }
}
