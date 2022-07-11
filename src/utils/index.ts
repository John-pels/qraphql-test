import { IData } from "@src/@types/data";

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
    const date = transaction?.date?.split("T")[0];
    if (formattedTransactions[date]) {
      formattedTransactions[date]?.push(transaction);
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
