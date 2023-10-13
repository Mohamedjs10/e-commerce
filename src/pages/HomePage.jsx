import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../Redux/store";
import { paginate } from "../utils/pagnation";
import Pagination from "@mui/material/Pagination";
export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsRedux = useSelector((state) => state.products.value);
  const [paginatedProducts, paginationCount] = paginate(
    productsRedux,
    currentPage,
    8
  );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productsRedux.length == 0) {
      setIsLoading(true);
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          // setProducts(data);
          dispatch(productsActions.update(data));
        });
    }
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "100px",
            }}
          >
            <CircularProgress size={100} />
          </Box>
        )}
        {productsRedux &&
          paginatedProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
      </Box>
      <Pagination
        sx={{ my: 5 }}
        count={paginationCount}
        onChange={(event, value) => {
          setCurrentPage(value);
        }}
        color="primary"
      />
    </Box>
  );
}
