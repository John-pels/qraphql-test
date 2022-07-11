import { makeVar } from "@apollo/client";
import { IGroupedData } from "@src/@types/data";

export const store = makeVar<Array<IGroupedData>>([]);
