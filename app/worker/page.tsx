'use client'
import { Just, Maybe, IO } from "monio"
import { useState, useEffect } from 'react';
import * as wasm from "@/pkg/ma_lib_rust";

export default function Home() {
    const [firstname, setFirstname] = useState("firstname")
    const [messageWebAssembly, setMessageWebAssembly] = useState('')
    const [isWasmLoaded, setIsWasmLoaded] = useState(false);
    useEffect ( () => {
        const worker = new Worker ('./worker.js');
        console.log(worker)
        worker.postMessage({message: "ronan"})
        // Définition de la fonction de rappel pour gérer les messages du Web Worker 
        
        worker.addEventListener('message', (messageEvent)=>{
            setFirstname(messageEvent.data)
        });

        return () => {
            worker.terminate()
        }
    })

    useEffect(()=>{
        wasm.default().then(() => {
            console.log('WASM loaded:', wasm);
            setIsWasmLoaded(true);
          });
    })

    useEffect(() => {
        if (isWasmLoaded) {
          try {
            setMessageWebAssembly(()=>wasm.dire_bonjour())
            console.log(wasm.dire_bonjour());
          } catch (error) {
            console.error('Error calling wasm.dire_bonjour():', error);
          }
        }
      }, [isWasmLoaded]);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h3>Web Worker</h3>
            <p> {firstname}</p>
            <h3>Web Assembly</h3>
            <p>{messageWebAssembly}</p>
           
        </div>    
        </main>
    );
  }