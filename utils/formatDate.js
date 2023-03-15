export default function formatDate(date) {
  let arr = date.split("-");
  if (!date) return "";
  return `${arr[1]}/${arr[0]}`;
}
