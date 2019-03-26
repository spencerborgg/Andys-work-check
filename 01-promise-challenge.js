// The following code is very inefficient. You can try to determing a better way -- hint
// changing the backend to take more than a single argument. Or you can simply get it to pass
// the way it is written. 

function callBackend(userId) {

  let users = [
    { id: 1, name: 'John', salary: 93000 },
    { id: 2, name: 'Sarah', salary: 122000 },
  ]

  let user = users.filter(function (u) {u.id === userId})

  return //You need to create the promise with two paramaeters and wrap the following code
    setTimeout(() => {
      if (user.length > 0) {
        //Do the happy path here and return [{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }]
      } else {
        //Do the unhappy path here and return a messgae
      }
    }, Math.floor(Math.random()*3 +1))
}

function main () {
  let userIds = [2, 1]
  let userPromises = []

  for(let i = 0; i < users.length; i++) {
    userPromises.push(callBackend(userIds))
  }
  
  //Use the returned promise to get the happy path
  userPromises[0].
  //Use the catch case for the unhappy path
  
  //Use the returned promise to get the happy path
  userPromises[1].
  //Use the catch case for the unhappy path
}

main()
