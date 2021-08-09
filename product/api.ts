import axios from "axios";
import papa from "papaparse";

import {Product} from "./types";

export default {
    list: async (): Promise<Product[]> => {
    return axios.get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTIaDn6oeqSzhctjPrgqQPgglunYTFkDcEeyLiOzbyfLyd1CGMii0MVGZYzV_1cu5EQoIt2AeOh0uLA/pub?gid=0&single=true&output=csv',
        {
         responseType: 'blob',   
        },
    )
    .then(response => {
        return new Promise<Product[]>((resolve, reject) => {
            papa.parse(response.data, {
                header: true,
                complete: (results) => {
                    const products = results.data as Product[];
                    
                    return resolve(
                        products.map((product) => ({
                            ...product,
                            price: Number(product.price),
                        })),
                    );
                },
                error: (error) => reject(error.message),
                
            });        
        });
    });
  }
};