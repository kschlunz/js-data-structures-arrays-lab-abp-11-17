// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(names){
  return drivers.push("Ralph")
}

function destructivelyPrependDriver(names){
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(names){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(names){
  return drivers.shift()
}
