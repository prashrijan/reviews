const userReviews = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s",
        name: "Alice Johnson",
        review: "Great service and friendly staff. Highly recommend! The entire experience from start to finish was seamless and enjoyable. I was particularly impressed with the attention to detail and customer-centric approach."
    },
    {
        img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        name: "Bob Smith",
        review: "A wonderful experience from start to finish. Will come again! The staff went above and beyond to ensure I had everything I needed. The atmosphere was welcoming and the service was impeccable."
    },
    {
        img: "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-Zoom.jpg",
        name: "Charlie Davis",
        review: "Affordable prices and high-quality products. Very satisfied! I was pleasantly surprised by the range and quality of the products available. The team was knowledgeable and helped me find exactly what I needed."
    },
    {
        img: "https://www.elitesingles.com.au/wp-content/uploads/sites/77/2020/06/profileprotectionsnap-350x264.jpg",
        name: "Ethan Brown ",
        review: "Customer service was exceptional. I will definitely return! The staff made me feel valued and attended to my needs with professionalism and care. The whole experience was nothing short of excellent."
    },
    {
        img: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944",
        name: "Diana Lee",
        review: "A delightful experience with top-notch services. Highly recommended! The quality of service exceeded my expectations. Every detail was taken care of, making my experience truly enjoyable and memorable."
    }
];


const container = document.querySelector("#container")
const buttons = document.querySelectorAll("#buttons button")

let currIndex = 0

function updateReview(){
    const {img, name, review} = userReviews[currIndex]
    container.querySelector(".image").src = img
    container.querySelector(".name").textContent = name 
    container.querySelector(".review").textContent = review 
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id === "prev"){
            currIndex = (currIndex === 0) ? userReviews.length - 1 : currIndex - 1
        } else if(e.target.id === "next"){
            currIndex = (currIndex === userReviews.length - 1) ? 0 : currIndex + 1
        }
        updateReview()
    })
})

updateReview()