const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  addImg();
});

// const addImg = () => {
//   button.textContent = "Cargado...";
//   button.setAttribute("disabled", true);
//   console.log("inicio");

fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => response.json())
  .then((data) => {
    img1.setAttribute("src", data[0].url);
    img2.src = data[3].url;
    console.log("fetch");
  })
  .catch((error) => {
    alert(error);
  })
  .finally(() => {
    button.textContent = "Generar aleatorio";
    button.removeAttribute("disabled");
  });

//   console.log("final");
// };

const addImg = async () => {
  try {
    button.textContent = "Cargado...";
    button.setAttribute("disabled", true);

    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10",
      {
        method: "POST",
      }
    );

    const data = await response.json();

    img1.setAttribute("src", data[0].url);
    img2.src = data[3].url;
  } catch {
    alert("error");
  } finally {
    button.textContent = "Generar aleatorio";
    button.removeAttribute("disabled");
  }
};

// async function prueba(params) {

// }

// addImg();

const products = [
  {
    name: "asd",
  },
  {
    name: "asd",
  },
  {
    name: "asd",
  },
  {
    name: "asd",
  },
];

// const promise = new Promise((resolve, reject) => {
//   resolve("algo salio bien!");
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     alert(error);
//   });

const condition = true;

const miFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve(products);
    } else {
      reject("ERROR AL OBTENER LOS PRODUCTOS");
    }
  });
};

// miFetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     alert(error);
//   });

const getProducts = async () => {
  const products = await miFetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  console.log(products);
};
// getProducts();


const saludar = () => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve("Hola Agustin");
    }, 5000);

  });
};

saludar().then((data) => alert(data));
