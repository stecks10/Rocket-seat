const url="http://localhost:5500/api"

function getUsers() {
  fetch(url)
  .then(response => response.json())
  .then((data => renderApiResult.textContent = JSON.stringify(data)))
  .catch(error => console.error(error))
}


function getUser(){
  fetch(`${url}/2`)
    .then(response => response.json())
    .then(data => {
     userName.textContent = data.name
     userCity.textContent = data.city
     userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updateUser){
  fetch(`${url}/`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}

const newUser = {
  name: 'Olivia Zars',
  avatar: 'https://picsum.photos/200/300',
  city: 'Rio do SUl'
}

const updateUser = {
  name: 'Marcelos clovis',
  avatar: 'https://picsum.photos/200/300',
  city: 'Recife'
}

updateUser(updateUser)

addUser(newUser)

getUsers()
getUser()