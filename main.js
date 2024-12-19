let tab = document.querySelectorAll(".tab")
let link = document.querySelectorAll(".link")

tab.forEach((values, index) => {

	values.addEventListener("click", (e) => {
		console.log(index)
		e.preventDefault()
		tab.forEach(value => value.classList.remove("active"))
		values.classList.add("active")
		link.forEach(ind => ind.classList.remove("active"))
		link[index].classList.add("active")
	})
})
let down = document.querySelector(".down")
let up = document.querySelector(".up")
up.addEventListener("click", () => {
	document.querySelector(".up").style.display = "none"
	document.querySelector(".all-item").style.display = "none"
	document.querySelector(".down").style.display = "block"
})
down.addEventListener("click", () => {
	document.querySelector(".up").style.display = "block"
	document.querySelector(".all-item").style.display = "block"
	document.querySelector(".down").style.display = "none"

})

let click = document.querySelectorAll(".click")
click.forEach((value1, index) => {
	value1.addEventListener("click", () => {
		click.forEach((value2) => {
			value2.classList.remove("citem")
		})
		value1.classList.add("citem")
	})
})

let parent = [
	{
		img: "image/thumbnail (7).webp",
		heading: "Dior J'adore",
		rate: "$73.48$89",
		about: "J'adore by Dior is a luxurious and flora ..."
	},
	{
		img: "image/thumbnail (8).webp",
		heading: "Essence Mascara Lash Princess",
		rate: "$8.35$9",
		about: "The Essence Mascara Lash Princess is a p ..."
	},
	{
		img: "image/thumbnail (9).webp",
		heading: "Knoll Saarinen Executive Conference Chair",
		rate: "$423.00$499",
		about: "The Knoll Saarinen Executive Conference ..."
	},
	{
		img: "image/thumbnail (10).webp",
		heading: "Beef Steak",
		rate: "$9.84$12",
		about: "High-quality beef steak, great for grill .."
	},


	{
		img: "image/thumbnail (11).webp",
		heading: "Cat Food",
		rate: "$7.23$8",
		about: "Nutritious cat food formulated to meet t ..."
	},
	{
		img: "image/thumbnail (12).webp",
		heading: "",
		rate: "$73.48$89",
		about: "Nutritious cat food formulated to meet t ..."
	},
	{
		img: "image/thumbnail (13).webp",
		heading: "Green Bell Pepper",
		rate: "$0.84	$1",
		about: "Fresh and vibrant green bell pepper, per ..."
	},
	{
		img: "image/thumbnail (4).webp",
		heading: "Protein Powder",
		rate: "$18.70$19",
		about: "Nutrient-packed protein powder, ideal fo ..."
	}
]

let found_va = document.querySelector(".found")
function thumbnail() {
	parent.map((single_values) => {
		let divElement = document.createElement("div")
		divElement.classList.add("found-item")
		divElement.innerHTML = ` <img src="${single_values.img}" />
          <h2>${single_values.heading}</h2>
          <p>${single_values.rate}</p>
          <div class="cart">
            <button class="add">add a cart</button>
			<button class="like"><i class="fa-solid fa-heart"></i></button>
          </div>`

		found_va.appendChild(divElement)
	})
}




