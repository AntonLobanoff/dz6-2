
const btn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");

// btn.addEventListener("click", () => {
//   const request = new XMLHttpRequest(); // создание запроса
//   request.open("GET", "data.json"); //объявлеие метода запроса и его пути
//   //   request.setRequestHeader("Content-Type", "application/json"); //добавление "заголовки(ключь-значение)"
//   request.setRequestHeader("Content-Type", "application/json");
//   request.send(); //отправка запроса


  
//   request.addEventListener("load", () => {
//     const data = JSON.parse(request.response);

//     // console.log(data);
//     data.data.map((item) => {
//       console.log(item.age, item.model);
//       const block = document.createElement("div");
//       block.className = "cars";
//       const blockImage = document.createElement("div");
//       blockImage.className = "carsImg";
//       const image = document.createElement("img");
//       const model = document.createElement("p");
//       const age = document.createElement("p");
//       const price = document.createElement("p");
//       model.textContent = `Model: ${item.model}`;
//       age.textContent = `Age: ${item.age} eyars`;
//       price.textContent = `Price: ${item.price} usd`;

//       block.style.height = "150px";
//       block.style.width = "150px";
//       block.style.border = "1px solid";
//       block.style.borderRadius = "10px";
//       block.style.marginTop = "10px";

//       image.style.borderRadius = "8px";

//       image.src = item.img;

//       image.style.width = "140px";
//       image.style.height = "80px";
//       block.append(blockImage);
//       blockImage.append(image);
//       block.append(model);
//       block.append(age);
//       block.append(price);

//       wrapper.append(block);
//     });
//   });
// });

// DZ 6-2



 const myFunc = async () => {
    const resp = await fetch("data.json")
    const data = await resp.json()
    
   data.data.map((item) => {
      // console.log(item.age, item.model);
      const block = document.createElement("div");
      block.className = "cars";
      const blockImage = document.createElement("div");
      blockImage.className = "carsImg";
      const image = document.createElement("img");
      const model = document.createElement("p");
      const age = document.createElement("p");
      const price = document.createElement("p");
      model.textContent = `Model: ${item.model}`;
      age.textContent = `Age: ${item.age} eyars`;
      price.textContent = `Price: ${item.price} usd`;

      block.style.height = "150px";
      block.style.width = "150px";
      block.style.border = "1px solid";
      block.style.borderRadius = "10px";
      block.style.marginTop = "10px";

      image.style.borderRadius = "8px";

      image.src = item.img;

      image.style.width = "140px";
      image.style.height = "80px";
      block.append(blockImage);
      blockImage.append(image);
      block.append(model);
      block.append(age);
      block.append(price);

      wrapper.append(block);
    });
      
 }

