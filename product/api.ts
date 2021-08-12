import { INFORMATION } from "../app/constants";
import axios from "axios";
import papa from "papaparse";

import { Product } from "./types";

export default {
  list: async (): Promise<Product[]> => {
    return axios
      .get(INFORMATION.sheet, {
        responseType: "blob",
      })
      .then((response) => {
        return new Promise<Product[]>((resolve, reject) => {
          papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const products = results.data as Product[];

              return resolve(
                products.map((product) => ({
                  ...product,
                  price: Number(product.price),
                }))
              );
            },
            error: (error) => reject(error.message),
          });
        });
      });
  },
};
