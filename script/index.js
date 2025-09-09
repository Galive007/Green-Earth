const categoriesPlantContainer = document.getElementById('plant-container')
const cartContainer = document.getElementById('cart-container');
let cartPlants = [];


const loadCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories)
        )

}
const allPlants = () => {
    manageSpinner(true)
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllPlants(data.plants))
}
const displayAllPlants = (plants) => {
    // console.log(plants);
    categoriesPlantContainer.innerHTML = ''
    plants.forEach(plant => {
        // console.log(plant);
        /**
         * category: "Fruit Tree"
            description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
            id: 1
            image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
            name: "Mango Tree"
            price: 500
        */
        const plantDiv = document.createElement('div')
        plantDiv.innerHTML = `
                <div class="bg-base-100 row-span-2 shadow-sm p-4">
                        <figure class="">
                            <img src="${plant.image}"
                                alt="plant" class="rounded-xl w-full h-[200px] object-cover" />
                        </figure>
                        <div class="space-y-3 p-0 mt-2">
                            <h2 class="text-[#1F2937] font-semibold text-[18px]" onclick="loadPlantModal('${plant.id}')">${plant.name}</h2>
                            <p class="text-[#1F2937] text-[16px]">${plant.description}</p>
                            <div class="flex justify-between items-center w-full">
                                <span class="px-2 text-left bg-[#DCFCE7] text-[#15803D] font-medium rounded-3xl">${plant.category}</span>
                                <h4 class="text-[#1F2937] font-semibold text-[16px]">৳ <span>${plant.price}</span></h4>
                            </div>
                            <div id="${plant.id}" class="card-actions w-full">
                                <button class="btn btnCart bg-[#15803D] rounded-3xl text-white font-medium text-xl w-full">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    `
        categoriesPlantContainer.append(plantDiv)
    })
    manageSpinner(false)
}
const loadPlantModal = async (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url)
    const data = await res.json()
    displayPlantDetails(data.plants);
}
const displayPlantDetails = (data) => {
    console.log(data.id);
    /**
    * category: "Climber"
    description: "An ornamental and medicinal climber with striking flowers. Known for attracting pollinators like bees and butterflies."
    id:27
    image: "https://i.ibb.co.com/4ZrDBFHC/passion-flower-min.jpg"
    name: "Passion Flower"
    price: 500
    */
    const plantDetailsContainer = document.getElementById('details-container');
    plantDetailsContainer.innerHTML = `
                <div class="bg-base-100  shadow-sm p-4">
                            <h2 class="text-[#1F2937] mb-3 font-semibold text-[18px]">${data.name}</h2>
                            <figure class="">
                                <img src="${data.image}"
                                    alt="Shoes" class="rounded-xl w-full h-[190px] object-cover" />
                            </figure>
                            <div class="space-y-3 p-0 mt-2">
                                <p class="text-[#1F2937] text-[16px]">${data.description}</p>
                                <div class="flex justify-between items-center w-full">
                                    <span
                                        class="px-2 text-left bg-[#DCFCE7] text-[#15803D] font-medium rounded-3xl">${data.category}</span>
                                    <h4 class="text-[#1F2937] font-semibold text-[16px]">৳<span>${data.price}</span></h4>
                                </div>
                                
                            </div>
                        </div>
    `
    document.getElementById('plant_modal').showModal();
}
const displayCategories = (categories) => {

    const categoriesContainer = document.getElementById('categories-container')
    // categoriesContainer.innerHTML=''
    categories.forEach((category) => {
        // console.log(category.category_name);
        const categoryName = category.category_name;
        const categoriesDiv = document.createElement('div');
        categoriesDiv.innerHTML = `
                <button id="category-btn-${category.id}" class="btn bg-transparent border-none hover:bg-[#15803D] w-full justify-start hover:text-white category-btn" onclick="loadCategoriesPlant(${category.id})">${categoryName}</button>
        `;
        categoriesContainer.append(categoriesDiv)

    });

}
const removeActive = () => {
    const categoryButtons = document.querySelectorAll('.category-btn')
    // console.log(categoryButtons);
    categoryButtons.forEach((btn) => btn.classList.remove('active'));

}
const manageSpinner=(status)=>{
    if(status==true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('plant-container').classList.add('hidden')
        

    }else{
        document.getElementById('plant-container').classList.remove('hidden')
        
        document.getElementById('spinner').classList.add('hidden')
    }
}
const loadCategoriesPlant = (id) => {
    // console.log(id);
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            removeActive();//remove active 
            const clickBtn = document.getElementById(`category-btn-${id}`);
            clickBtn.classList.add('active');//add active
            // console.log(clickBtn);
            displayCategoryPlants(data.plants);
        });
};

const displayCategoryPlants = (plants) => {
    // console.log(plants);
    const categoriesPlantContainer = document.getElementById('plant-container')
    categoriesPlantContainer.innerHTML = ''

    plants.forEach(plant => {
        // console.log(plant);
        /**
         * category: "Fruit Tree"
            description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
            id: 1
            image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
            name: "Mango Tree"
            price: 500
        */
        //    console.log(plant.price);

        const plantDiv = document.createElement('div')
        plantDiv.innerHTML = `
                <div class="bg-base-100 row-span-2 rounded-lg shadow-sm p-4">
                        <figure class="">
                            <img src="${plant.image}"
                                alt="plant" class="rounded-xl w-full h-[200px] object-cover" />
                        </figure>
                        <div class="space-y-3 p-0 mt-2">
                            <h2 class="text-[#1F2937] font-semibold text-[18px]" onclick="loadPlantModal('${plant.id}')">${plant.name}</h2>
                            <p class="text-[#1F2937] text-[16px]">${plant.description}</p>
                            <div class="flex justify-between items-center w-full">
                                <span class="px-2 text-left bg-[#DCFCE7] text-[#15803D] font-medium rounded-3xl">${plant.category}</span>
                                <div class="text-[#1F2937] font-semibold text-[16px]">৳<span>${plant.price}</span></div>
                            </div>
                            <div id="${plant.id}" class="card-actions w-full">
                                <button class="btn btnCart bg-[#15803D] rounded-3xl text-white font-medium text-xl w-full">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    `
        categoriesPlantContainer.append(plantDiv)
    })
    manageSpinner(false);
}

categoriesPlantContainer.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
    let quantity = 0
    if (e.target.innerText === "Add to Cart") {
        handleCarts(e);
    }
})
const handleCarts = (e) => {
    const plantName = (e.target.parentNode.parentNode.childNodes[1].innerText);
    const plantPrice = e.target.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1].innerText;

    const plantId = e.target.parentNode.id
    // console.log(plantId);

    const plantPriceInt = Number(plantPrice)
    // console.log(plantPriceInt);
    // check if plant exist
    let existingPlant = cartPlants.find(p => p.plantId === plantId);
    
    if(existingPlant){
        //increase quantity
        existingPlant.quantity += 1;
    }else{
       cartPlants.push({
        plantName: plantName,
        plantId: plantId,
        plantPrice: plantPriceInt,
        quantity: 1
    }) 
    }
    // console.log(cartPlants);
    displayCart(cartPlants)
}

const displayCart = (cartPlants) => {
    // console.log(cartPlants);
    // {plantName: 'Mango Tree', plantId: '1', plantPrice: 500
    let totalPrice = 0
    cartContainer.innerHTML = ''
    cartPlants.forEach(cartPlant => {
        totalPrice += cartPlant.plantPrice * cartPlant.quantity;

        cartContainer.innerHTML += `
        <div class="bg-[#F0FDF4] p-3 rounded-lg flex justify-between items-center mb-4">
            <div>
                <h3 class="text-[#1f2937] font-semibold">${cartPlant.plantName}</h3>
                <p class="text-[#1f293782]">৳<span>${cartPlant.plantPrice} x ${cartPlant.quantity}</span></p>
            </div>
            <i onclick="handleDeleteCart('${cartPlant.plantId}')" class="fa-solid fa-xmark"></i>
        </div>
        `
    })
    document.getElementById('cart-total').innerText=totalPrice;
}

let handleDeleteCart = (cartId) => {
    let plant=cartPlants.find(p=>p.plantId===cartId)

    if(plant){
        if(plant.quantity>1){
            plant.quantity -= 1;
        }else{
            cartPlants = cartPlants.filter(p=>p.plantId !==cartId)
        }
    }
    displayCart(cartPlants)
}
loadCategories()
allPlants()
