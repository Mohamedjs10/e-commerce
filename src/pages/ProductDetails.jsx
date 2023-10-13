import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "../styles/ProductDetails.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Redux/store";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;

  const [currentProduct, setCurrentProduct] = useState(
    useSelector((state) => state.products.value).filter(
      (item) => item.id == id
    )[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const isIncludedInCart = useSelector((state) => state.cart.value).includes(
    id
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentProduct?.title) {
      setIsLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setCurrentProduct(data);
        });
    }
  }, []);
  return (
    <>
      {currentProduct?.title && (
        <div className="parent-container">
          <div className="image-container">
            <img
              className="img-fluid"
              src={currentProduct.image}
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="details-container">
            <div className="section">
              <p className="title">Category:</p>
              <p className="body">{currentProduct.category}</p>
            </div>
            <div className="section">
              <p className="title">Item:</p>
              <p className="body">{currentProduct.title}</p>
            </div>
            <div className="section">
              <p className="title">Price</p>
              <p className="body">${currentProduct.price}</p>
            </div>
            <div className="section">
              <p className="title">Rating</p>
              <Rating
                name="read-only"
                value={currentProduct.rating.rate}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="section">
              <p className="title">Description</p>
              <p className="body">{currentProduct.description}</p>
            </div>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "auto",
              }}
            >
              {isIncludedInCart == true ? (
                <Button
                  onClick={() => {
                    dispatch(cartActions.remove({ id }));
                  }}
                  color="error"
                  style={{
                    width: "200px",

                    borderRadius: "20px",
                  }}
                  variant="contained"
                  endIcon={<RemoveShoppingCartOutlinedIcon />}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(cartActions.add({ id }));
                  }}
                  style={{
                    width: "200px",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                  endIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              )}
            </Box>
          </div>
        </div>
      )}
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
    </>
  );
}
