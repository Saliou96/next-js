import Head from 'next/head'
import Image from 'next/image'
import Navbar from './layout/Navbar'

export default function Home() {
  return (
    <div>
      <head>
        <title>First App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css" />
        <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
      </head>

      <body>
        <Navbar/>


        <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
      </body>

    </div>
  )
}
