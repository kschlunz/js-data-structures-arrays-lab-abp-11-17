// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(names){
  return drivers.push("Ralph")
}

function destructivelyPrependDriver(names){
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDrive(names){
  return drivers.pop()
}
