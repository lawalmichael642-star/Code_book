import { useMemo } from "react";
import { useCallback, useState } from "react";

export const useFilter= () => {{
    const[productlist, setProductList] = useState ([]);
    const[onlyInStock, setOnlyInStock] =useState(false);
    const[bestSellerOnly, setBestSellerOnly] = useState(false);
    const[sortBy, setSortBy] = useState(null);
    const[ratings, setRatings] = useState(null);

    const filteredProducts = useMemo (() =>{
        let filtered =[...productlist];
        if(bestSellerOnly){
            filtered = filtered.filter(p=>p.best_seller ===true)
        }
        if(onlyInStock){
               filtered = filtered.filter(p=>p.in_stock ===true)
        }
        if(ratings){
            const ratingValue = parseInt(ratings.replace("STARSABOVE", ""))
            filtered = filtered.filter(p=>p.rating >=ratingValue);
        }
        
        if(sortBy === "lowtohigh"){
            filtered.sort((a,b) => Number(a.price) -Number(b.price));
        }else if (sortBy=== "highto low"){
            filtered.sort ((a,b) => Number (b.price)-Number(a.price));
        }

        return filtered;
    }, [onlyInStock, bestSellerOnly, sortBy, ratings, productlist]);

    const clearFilters= useCallback (() => {
        setOnlyInStock (false);
        setBestSellerOnly(false);
        setSortBy (null);
        setRatings(null)
    }, []);

    return{
        productlist,
        setProductList,
        filteredProducts,
        onlyInStock,
        setOnlyInStock,
        bestSellerOnly,
        setBestSellerOnly,
        sortBy,
        setSortBy,
        ratings,
        setRatings,
        clearFilters
    }

}
}