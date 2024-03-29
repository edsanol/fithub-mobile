export interface FilterListRequestApi {
  numPage?: number;
  numRecordsPage?: number;
  order?: string;
  sort?: string;
  records?: number;
  numFilter?: number;
  textFilter?: string;
  stateFilter?: boolean;
  startDate?: string;
  endDate?: string;
  download?: boolean;
}
