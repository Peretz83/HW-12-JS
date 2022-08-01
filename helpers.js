export let changeBgColor = () => {
  let r = document.getElementById("input1").value;
  let g = document.getElementById("input2").value;
  let b = document.getElementById("input3").value;

  return `rgba(${r},${g},${b})`;
};

export let changeColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgba(${r},${g},${b})`;
};



export const myCountries = [
  {
    country: "Israel",
  },
  {
    country: "USA",
  },
  {
    country: "Spain",
  },
  {
    country: "France",
  },
  {
    country: "Germany",
  },
  {
    country: "United Kingdom",
  },
];

