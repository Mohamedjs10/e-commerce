import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions, favoriteActions } from "../Redux/store";
import StarIcon from "@mui/icons-material/Star";
import "../styles/ProductCard.css";
export default function ({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isIncludedInCart = useSelector((state) => state.cart.value).includes(
    String(String(item.id))
  );
  const isIncludedInFavorite = useSelector(
    (state) => state.favorite.value
  ).includes(String(item.id));

  return (
    <div
      className="product-card"
      onClick={() => {
        navigate(`/product/${item.id}`);
      }}
    >
      {item.rating.rate > 4 && <div className="badge">Bestseller</div>}

      <div className="product-tumb">
        <img src={item.image} />
      </div>
      <div className="product-details">
        <h4>{item.title.substring(0, 20)}</h4>
        <p>{item.description.substring(0, 30)} ...</p>
        <div className="product-bottom-details">
          <Box sx={{ display: "flex", justifyContent: "spaceBetween" }}>
            <Box>
              <div className="product-price">${item.price}</div>
              <Rating
                emptyIcon={
                  <StarIcon style={{ color: "white" }} fontSize="inherit" />
                }
                name="read-only"
                value={item.rating.rate}
                precision={0.5}
                readOnly
              />
            </Box>
            <Box sx={{ textAlign: "right" }}>
              {isIncludedInCart == true ? (
                <ShoppingCartIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(cartActions.remove({ id: String(item.id) }));
                  }}
                  sx={{ fontSize: 30, color: "#faaf00", mr: "5px" }}
                />
              ) : (
                <ShoppingCartOutlinedIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(cartActions.add({ id: String(item.id) }));
                  }}
                  sx={{ fontSize: 30, color: "white", mr: "5px" }}
                />
              )}
              {isIncludedInFavorite == true ? (
                <FavoriteIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(favoriteActions.remove({ id: String(item.id) }));
                  }}
                  sx={{
                    fontSize: 30,
                    color: "red",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              ) : (
                <FavoriteIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(favoriteActions.add({ id: String(item.id) }));
                  }}
                  sx={{
                    fontSize: 30,
                    color: "white",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              )}
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
