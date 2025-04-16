
export interface ApiDefaultType<T> {
  items: T[];
  link:{
      first: string,
      last: string,
      prev: string,
      next: string
  }
  page:number;
  per_page:number;
  total:number;
  total_pages:number
}