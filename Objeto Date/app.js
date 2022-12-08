const date = new Date();

// console.log(date)

// metodos / methods

// console.log(date.getDay())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
console.log(date.getDate());

const formatDate = () =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// console.log(formatDate());

const formatDatePro = (simbolo = "/") => {
  const arrayDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

  console.log(simbolo);

  return arrayDate.join(simbolo);
};

console.log(formatDatePro("/"));
console.log(formatDatePro("-"));
console.log(formatDatePro());
