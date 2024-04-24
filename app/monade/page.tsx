'use client'
import { Just, Maybe, IO } from "monio"
import { useState } from 'react';

var helloWorld = Just("Hello World");


helloWorld._inspect();
console.log(helloWorld._inspect())
export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            Les monades
        </div>    
        </main>
    );
  }