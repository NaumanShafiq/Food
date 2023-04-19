let getRecipe;
let data;
let ingredient = [];
const recipes = async () => {
 try {
    getRecipe = await fetch("https://api.spoonacular.com/recipes/random?apiKey=c8a8340c9b9d4f29a5f2c350de365310&number=10");
	
    getRecipe = await getRecipe.json();
  
    getRecipe = getRecipe.recipes

    const result = JSON.stringify(getRecipe);

    if (localStorage) {
      localStorage.setItem("Recipe", result);
     console.log("Data saved to localStorage:", result);
    } else {
      console.error("localStorage not supported");
    }
  } catch (error) {
    console.error(error);
  }

   data = JSON.parse(localStorage.getItem("Recipe"));
console.log(data[0]);
console.log("Local storage",data);
if(data){
    let display = data.map((x,i)=>{
		
        return `
		
      <div class="product" data-name="p-${i}">
         <img class="imag" src="${x.image}" alt="">
         <h3>${x.title}</h3>
		 <h3>Ingredients</h3>
         <div class="price">
		 ${x.extendedIngredients.map(ingredient => ingredient.name + " ").join('')}
		 </div>
      </div>
	  
	  `;
	  
    }).join("");
    console.log(display);
    document.getElementById("products-container").innerHTML = display;


    let disp = data.map((x,i)=>{
        return `<div class="preview" data-target="p-${i}">
      <i class="fas fa-times"></i>
      <img class="imag" src="${x.image}" alt="">
      <h3>${x.title}</h3>
	  <h3>Instructions</h3>
		 <h4>${x.instructions}</h4>
	  </div>
	  `;
    }).join("");
	//console.log(disp);
    document.getElementById("products-preview").innerHTML = disp;
}
  else if(getRecipe)
  {
	  let display = data.map((x,i)=>{
		
        return `
		
      <div class="product" data-name="p-${i}">
         <img class="imag" src="${x.image}" alt="">
         <h3>${x.title}</h3>
         <h3>Ingredients</h3>
		 <div class="price">
		 ${x.extendedIngredients.map(ingredient => ingredient.name + " ").join('')}
		 </div>
      </div>
	  
	  `;
	  
    }).join("");
    //console.log(display);
    document.getElementById("products-container").innerHTML = display;


    let disp = data.map((x,i)=>{
        return `<div class="preview" data-target="p-${i}">
      <i class="fas fa-times"></i>
      <img class="imag" src="${x.image}" alt="">
      <h3>${x.title}</h3>
      <h3>Instructions</h3>
      <h4>${x.instructions}</h4>
	  </div>
	  `;
    }).join("");
	//console.log(disp);
    document.getElementById("products-preview").innerHTML = disp;
}
  else
  {
	  alert("no data is present in local storage and unable to fetch api")
  }
};
recipes();



document.getElementById("Filter").addEventListener("keyup", ()=>{
    let val = document.getElementById("Filter").value.toLowerCase();
	console.log(val.length);
    let card = data.filter((x)=>{
        return x.title.toLowerCase().includes(val);
    });
	if(val.length>0)
	{
    let display = card.map((x,i)=>{
		
        return `
		
      <div class="product" data-name="p-${i}">
         <img class="imag" src="${x.image}" alt="">
         <h3>${x.title}</h3>
		 <h3>Ingredients</h3>
         <div class="price">
		 ${x.extendedIngredients.map(ingredient => ingredient.name + " ").join('')}
		 </div>
      </div>
	  
	  `;
	  
    }).join("");
    //console.log(display);
    document.getElementById("products-container").innerHTML = display;


    let disp = card.map((x,i)=>{
        return `<div class="preview" data-target="p-${i}">
      <i class="fas fa-times"></i>
      <img class="imag" src="${x.image}" alt="">
      <h3>${x.title}</h3>
      <h3>Instructions</h3>
	  <h4>${x.instructions}</h4>
	  </div>
	  `;
    }).join("");
	//console.log(disp);
    document.getElementById("products-preview").innerHTML = disp;
prev();
	}
	else
	{
		
		let display = data.map((x,i)=>{
		
        return `
		
      <div class="product" data-name="p-${i}">
         <img class="imag" src="${x.image}" alt="">
         <h3>${x.title}</h3>
		 <h3>Ingredients</h3>
         <div class="price">
		 ${x.extendedIngredients.map(ingredient => ingredient.name + " ").join('')}
		 </div>
      </div>
	  
	  `;
	  
    }).join("");
    //console.log(display);
    document.getElementById("products-container").innerHTML = display;


    let disp = data.map((x,i)=>{
        return `<div class="preview" data-target="p-${i}">
      <i class="fas fa-times"></i>
      <img class="imag" src="${x.image}" alt="">
      <h3>${x.title}</h3>
      <h3>Instructions</h3>
	  <h4>${x.instructions}</h4>
	  </div>
	  `;
    }).join("");
	//console.log(disp);
    document.getElementById("products-preview").innerHTML = disp;
prev();
	}
	
});

         const menuBtn = document.querySelector(".menu-icon span");
         const searchBtn = document.querySelector(".search-icon");
         const cancelBtn = document.querySelector(".cancel-icon");
         const items = document.querySelector(".nav-items");
         const form = document.querySelector("form");
         menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }
         cancelBtn.onclick = ()=>{
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           searchBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           form.classList.remove("active");
           cancelBtn.style.color = "#ff3d00";
         }
         searchBtn.onclick = ()=>{
           form.classList.add("active");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }

const prev = ()=>{

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  
  product.onclick = () => {
	  
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active'); // Added to remove 'active' class from other preview boxes
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

}
prev();