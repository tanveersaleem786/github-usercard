/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/tanveersaleem786')
  .then( response => {
    return response;
  })
  .then( response => {

    const cards = document.querySelector('.cards');
    
    let myCard = createCard(response.data);
    cards.appendChild(myCard);

    followersArray.forEach( user => {

      axios.get(`https://api.github.com/users/${user}`)
        .then( response => {
          let followerCard = createCard(response.data);
          cards.appendChild(followerCard);
        })
        .catch( err => {
          console.log("Error:", err);
        })
    });
  })
  .catch( err => {
    console.log("Error:", err);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
    
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

// followersArray.forEach(user => {
//   getUserInfo(`https://api.github.com/users/${user}`);
// });



/* Step 3: Create a function that accepts a single object as its only argument,
   Using DOM methods and properties, create a component that will return the following DOM element:

   
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(data) {

  let card = document.createElement('div');
  card.classList.add('card');

  let image = document.createElement('img');
  image.setAttribute('src', data.avatar_url);
  card.appendChild(image);


  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);

  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = data.name;
  cardInfo.appendChild(name);

  let userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = data.login;
  cardInfo.appendChild(userName);

  let location = document.createElement('p');
  location.textContent = `Location: ${data.location}`;
  cardInfo.appendChild(location);

  let profile = document.createElement('p');
  profile.textContent = "Profile:";
  cardInfo.appendChild(profile);

  let profileAddress = document.createElement('a');
  profileAddress.setAttribute('src', data.url);
  profileAddress.textContent = data.url;
  profile.appendChild(profileAddress);

  let follower = document.createElement('p');
  follower.textContent = `Followers: ${data.followers}`;
  cardInfo.appendChild(follower);

  let following = document.createElement('p');
  following.textContent = `Following: ${data.following}`;
  cardInfo.appendChild(following);

  let bio = document.createElement('p');
  bio.textContent = `Bio: ${data.bio}`;
  cardInfo.appendChild(bio);

  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/