const imageElement = document.querySelector('.img');
const nameElement = document.querySelector('.name');
const jobElement = document.querySelector('.job');
const reviewElement = document.querySelector('.review');
const backButton = document.querySelector('.back-button');
const forwardButton = document.querySelector('.forward-button');
const surpriseMeButton = document.querySelector('.surprise-me-button');

const susanReview = "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
const annaReview = "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
const peterReview = "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
const billReview = "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."

const people = {
  susan: {
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    review: susanReview,
    image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg" 
  },
  anna: {
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    review: annaReview,
    image: "https://www.course-api.com/images/people/person-1.jpeg"
  },
  peter: {
    name: "Peter Jones",
    job: "INTERN",
    review: peterReview,
    image: "https://www.course-api.com/images/people/person-4.jpeg"
  },
  bill: {
    name: "Bill Anderson",
    job: "THE BOSS",
    review: billReview,
    image: "https://www.course-api.com/images/people/person-3.jpeg"
  }
}

const imageUpdate = (image, name) => {
  imageElement.src = image;
  imageElement.alt = name;
}

const nameUpdate = (name) => {
  nameElement.innerText = name;
}

const jobUpdate = (job) => {
  jobElement.innerText = job;
}

const reviewUpdate = (review) => {
  reviewElement.innerText = review;
}

const updatePersonDetails = (person) => {
  switch (currentPerson) {

    case "Susan":
      imageUpdate(people.susan.image, people.susan.name);
      nameUpdate(people.susan.name);
      jobUpdate(people.susan.job);
      reviewUpdate(people.susan.review);
      break;
  
    case "Anna":
      imageUpdate(people.anna.image, people.anna.name);
      nameUpdate(people.anna.name);
      jobUpdate(people.anna.job);
      reviewUpdate(people.anna.review);
      break;
  
    case "Peter":
      imageUpdate(people.peter.image, people.peter.name);
      nameUpdate(people.peter.name);
      jobUpdate(people.peter.job);
      reviewUpdate(people.peter.review);
      break;
  
    case "Bill":
      imageUpdate(people.bill.image, people.bill.name);
      nameUpdate(people.bill.name);
      jobUpdate(people.bill.job);
      reviewUpdate(people.bill.review);
      break;
  }
} 

const peopleList = ["Susan", "Anna", "Peter", "Bill"];
let currentPerson = "Susan";
let index = 0;

updatePersonDetails(currentPerson);

backButton.addEventListener('click', (event) => {
  switch (index) {
    
    case 0:
      index = 3;
      currentPerson = peopleList[3];
      updatePersonDetails(currentPerson);
      break;
      
    case 1:
      index = 0;
      currentPerson = peopleList[0];
      updatePersonDetails(currentPerson);
      break;
        
    case 2:
        index = 1;
        currentPerson = peopleList[1];
        updatePersonDetails(currentPerson);
        break;
          
    case 3:
          index = 2;
          currentPerson = peopleList[2];
          updatePersonDetails(currentPerson);
          break;      
  }
})

forwardButton.addEventListener('click', (event) => {
  switch (index) {
    
    case 0:
      index = 1;
      currentPerson = peopleList[1];
      updatePersonDetails(currentPerson);
      break;
      
    case 1:
      index = 2;
      currentPerson = peopleList[2];
      updatePersonDetails(currentPerson);
      break;
        
    case 2:
        index = 3;
        currentPerson = peopleList[3];
        updatePersonDetails(currentPerson);
        break;
          
    case 3:
          index = 0;
          currentPerson = peopleList[0];
          updatePersonDetails(currentPerson);
          break;      
  }
})

let noRepeatIndex = 0;
surpriseMeButton.addEventListener('click', (event) => {
  let randomIndex = Math.floor(Math.random() * 4);

  while (randomIndex === noRepeatIndex) {
    randomIndex = Math.floor(Math.random() * 4);
  }

  noRepeatIndex = randomIndex;

  currentPerson = peopleList[randomIndex];
  updatePersonDetails(currentPerson);
})
