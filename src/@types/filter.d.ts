import { ChangeEvent } from "react";

export interface IFilter {
  setTransactions: (data: Array<any>) => void;
  transactions: Array<any>;
}
export type ISearcInput = {
  onChange: (e: HTMLInputElement<ChangeEvent>) => void;
  value: string;
};
