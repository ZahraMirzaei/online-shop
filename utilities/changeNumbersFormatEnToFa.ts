export const changeNumbersFormatEnToFa = (number: number | string) =>
  number.toString().replace(/\d/g, (index) => "۰۱۲۳۴۵۶۷۸۹"[index]);
