import {TBook} from '@types';

export class INITIAL_GLOBAL {
  constructor(data: any = {}) {
    this.loader = data.loader || false;
  }
  loader: boolean;
}

export class INITIAL_USER {
  constructor(data: any = {}) {
    this.id = data.id || '';
    this.username = data.username || '';
    this.token = data.token || '';
  }
  id: string;
  username: string;
  token: string;
}

export class INITIAL_BOOKS {
  constructor(data: any = {}) {
    this.booksList = data.booksList || [];
  }
  booksList: TBook[];
}
