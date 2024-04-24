'use client'
import { useState, useEffect } from 'react';

const dataset = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dolor nec lorem rhoncus rhoncus ac nec est. 45 Etiam sed efficitur tellus, id semper lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. rper eros. Duis malesuada, nulla a placerat sagit4tis, augue mauris viverra augue, egestas l6aoreet justoc ante ipsum primis in faucibus. Duis sapien dolor, congue non elit ac, viv1erra sodales dui. Nunc bibendu7m nisi vitae odio"

function* findNumber(dataset: String){
    for (const item of dataset){
        if(parseInt(item)) yield item  
    }
}
// const resfilter = dataset.split(" ").filter(item => parseInt(item))
// console.log(resfilter)

const gen = findNumber(dataset)
// console.log([...gen])
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


function mostgrand(data: Array<number>){
  return data.reduce((acc: number, item: number) => item > acc ? acc = item : acc)
}

const arraychiffre1:Array<number> = [1,2,9,4,6]
const arraychiffre2:Array<number> = [5,15,4,6,15,47]
const resfilterUnique = arraychiffre2.filter((item, key, array)=>{
  if(key == array.findIndex(itemi=>itemi == item)) return true
})

const zip1 = ['a','b','c']
const zip2 = [1,2,3]
const array3 = [ [1,2], [3,4], [5,6], [7,8], [9,10] ]

function zip(array1, array2){
  array1 = [...array1]
  array2 = [...array2]
  const zipArray = []

  while(array1.length > 0 && array2.length > 0){
    zipArray.push([array1.shift(), array2.shift()])
  }
  return zipArray
}

function merge(array1, array2){
  const mostgrand = array1.length > array2.length ? array1.length : array2.length
  let n = 0
  let mergeArray = []
  while(n < mostgrand ){

    mergeArray.push(array1[n])
    mergeArray.push(array2[n])
    n++
  }
  return mergeArray
}

function flatten(array3){

  const flatArray = array3.reduce((acc, item) => {
    console.log(acc)
    acc.push(...item)
    return acc
  },[])
  
  return flatArray
}
// console.log(zip(zip1, zip2))
// console.log(merge(zip1, zip2))
// console.log(flatten(array3))

function* source(){
  yield "source1"
  yield "source2"
  yield "source3"
  yield "source4"
}
function* it(data){
  yield data
  yield "suivant"
  yield* source()
  yield "itfinish"
}

const ite = it("ok")
// console.log([...ite]) //['ok', 'suivant', 'source1', 'source2', 'source3', 'source4', 'itfinish']

const takeData = [1,2,3,4,5,6,8,9,10]

function* taken(n, takeData){
  for (let i = 0; i < n; i++) {
    yield takeData[i]
  }
}
const takeg = taken(3,takeData)
console.log([...takeg])

const objef = {
  name: "ronan",
  lastname: "lozahic",
  [Symbol.iterator]: function*() {
    for (let key in this) {
        yield this[key];  // Yield une paire clé-valeur
    }
  }
}

function* nowd(){
  while(true){
    yield Date.now()

  }
}
console.log(nowd().next().value)

function* bankAccount(){
  let solde = 0
  while (solde >= 0){
    solde += yield 'le solde est de : ' + solde
  }
  return "c'est la banqueroute !"
}

const brancAccountIte = bankAccount()
console.log(brancAccountIte.next())
console.log(brancAccountIte.next(45))
console.log(brancAccountIte.next(5))
console.log(brancAccountIte.next(-14))
console.log(brancAccountIte.next(-100))
console.log("après la banqueroute")

function *testgenerator(){
  yield "1er yield"
  yield "2er yield"
  yield "3er yield"
}

const testgeneratorIte = testgenerator()
console.log([...testgenerator()])

// console.log([...objef])

// objef[Symbol.iterator] = function*() {
//   console.log(this)
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       yield this[key];  // Yield une paire clé-valeur
//     }
//   }
// };

// console.log([...objef])

// console.log(objef)
// console.log(ite)
// console.log(["ronan", "lozahic"])


export default function Home() {

  const [lol, setLol] = useState("lol")
  
  function handleClick(){
    setLol(()=>{
      return lol == "lol" ? "mdr" : "lol"
    })
  }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1>Les fonctions générator f*</h1>
            <h3>Les fonction async générator</h3>
            <p>{lol}</p>
            <button onClick={handleClick} className="transition duration-100 ease active:bg-purple-900 hover:bg-green-500 bg-red-100 border-double border-4 border-indigo-600"> click me</button>
        </div>    
        </main>
    );
  }