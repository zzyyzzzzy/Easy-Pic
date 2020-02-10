export function getClass(i) {
  if (i % 5 === 0 && i <= 22) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  } else {
    return "wide";
  }
}
