export type Transactions = {
  date: string;
  id: string;
  imageUrl: string;
  isVerified: boolean;
  name: string;
  reference: string;
  status: "pending" | "paid" | "unpaid";
  type: "paystack" | "flutterwave" | "remita";
};

export interface IData {
  allTransactions: Array<Transactions>;
}

type TrimData = Omit<Transactions, "date">;

export interface IGroupedData {
  date: string;
  transactions: Array<TrimData>;
}
