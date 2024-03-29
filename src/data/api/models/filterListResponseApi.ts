export interface FilterListResponseApi<T = any> {
  totalRecords: number;
  items: T[];
}
