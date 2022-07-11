import { IData, IGroupedData } from "@src/@types/data";

export const arrayLength = (array: Array<any>) => {
  if (Array.isArray(array) && array.length > 0) {
    return true;
  }

  return false;
};

export const formatData = (data: IData) => {
  if (data?.allTransactions.length === 0) return [];
  let formattedTransactions: any = {};

  data?.allTransactions.forEach((transaction) => {
    const date = transaction.date.split("T")[0];
    if (formattedTransactions[date]) {
      formattedTransactions[date].push(transaction);
    } else {
      formattedTransactions[date] = [transaction];
    }
  });

  const groupedTrasanctions = Object.keys(formattedTransactions).map((date) => {
    return {
      date,
      transactions: formattedTransactions[date],
    };
  });

  return groupedTrasanctions;
};

export const globalSearch = (data: Array<IGroupedData>, query: string) => {
  const results = data.map(({ transactions }) =>
    transactions.filter(
      ({ name, type, status }) =>
        name.toLowerCase().includes(query.toLowerCase()) ||
        type.toLowerCase().includes(query.toLowerCase()) ||
        status.toLowerCase().includes(query.toLowerCase())
    )
  );

  if (results?.length) return results;
  return [];
};

export const filterArrayByKeyword = (
  keyword: string,
  data: Array<any>,
  key: string
) => {
  const isArrayValid = arrayLength(data);
  if (isArrayValid) {
    const results = data?.map(({ transactions }) =>
      transactions?.filter(
        (item: any) => item[key]?.toLowerCase() === keyword?.toLowerCase()
      )
    );

    if (results?.length) return results;
    return [];
  }
};
