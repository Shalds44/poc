
import Image from "next/image";
import { useState } from 'react';

var BinaryTree = (value:String, parent?:any, left?:any, right?:any)=>({value, parent, left, right})

var banana = BinaryTree("banana")
var apple = banana.left = BinaryTree("apple", banana)
var cherry = banana.right = BinaryTree("cherry", banana)
var cantaloupe = cherry.left = BinaryTree("cantaloupe", cherry)
var cucumber = cherry.right = BinaryTree("cucumber", cherry)
var grape = cucumber.right = BinaryTree("grape", cucumber)
var apricot = apple.right = BinaryTree("apricot", apple)
var avocado = apricot.right = BinaryTree("avocado", apricot)

//parcourir un bst
const nodeValue:Array<String> = []

function parcourBst(node:any, visitFn: Function){
  if(node){
    if(node.left){
      parcourBst(node.left, visitFn) 
    }
    visitFn(node)
    if(node.right){
      parcourBst(node.right, visitFn)
    }
  }
  return 
}

const listNodeValue:Array<String> = []
const addNodeValue = (node: any) => listNodeValue.push(node.value)
parcourBst(banana, addNodeValue)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {listNodeValue.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>    
      </main>
  );
}
