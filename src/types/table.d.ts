type Row = {
  title: string;
  startDate: string;
  endDate: string;
  link: string;
  analysisLink: string;
  status: string;
};

type RowsApiResponse = Array<{
  id: string;
  name: string;
  status: 1 | 2 | 3 | 4;
  start_date: string;
  end_date: string;
}>;
