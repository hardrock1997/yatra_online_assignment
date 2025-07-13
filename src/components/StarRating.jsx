import Rating from '@mui/material/Rating';

export default function StarRating({ rating }) {
  const safeRating = rating ?? 0;
  const isDecimal = !Number.isInteger(safeRating);
  const name = isDecimal ? "half-rating-read" : "read-only";

  return (
    <Rating
      name={name}
      value={safeRating}
      precision={isDecimal ? 0.1 : 1}
      readOnly
    />
  );
}