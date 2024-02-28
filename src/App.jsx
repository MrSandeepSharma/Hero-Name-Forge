import { useState } from 'react'
import gsap, { Expo, Back } from 'gsap';

import './App.css'

function App() {

  const suffixes = [
    "Man",
    "Woman",
    "Girl",
    "Boy",
    "Knight",
    "Warrior",
    "Guardian",
    "Defender",
    "Avenger",
    "Champion",
    "Sentinel",
    "Hunter",
    "Master",
    "Lord",
    "Princess",
    "Prince",
    "Agent",
    "Hero",
    "Star",
    "Spark",
    "Blaze",
    "Bolt",
    "Edge",
    "Strike",
    "Flame",
    "Blade",
    "Fang",
    "Claw",
    "Fist",
    "Surge",
    "Wave",
    "Storm",
    "Surge",
    "Burst",
    "Surge",
    "Blast",
    "Wave",
    "Blaze",
    "Bolt",
    "Strike",
    "Shield",
    "Armor",
    "Knight",
    "Dragon",
    "Tiger",
    "Panther",
    "Lion",
    "Wolf",
    "Bear",
    "Eagle",
    "Hawk",
    "Falcon",
    "Phoenix",
    "Gryphon",
    "Griffin",
    "Serpent",
    "Viper",
    "Cobra",
    "Tiger",
    "Lynx",
    "Jaguar",
    "Shark",
    "Whale",
    "Dolphin",
    "Orca",
    "Rhino",
    "Hippo",
    "Elephant",
    "Gorilla",
    "Monkey",
    "Chimpanzee",
    "Ape",
    "Panda",
    "Koala",
    "Sloth",
    "Armadillo",
    "Porcupine",
    "Hedgehog",
    "Raccoon",
    "Fox",
    "Squirrel",
    "Chipmunk",
    "Beaver",
    "Otter",
    "Mole",
    "Rat",
    "Mouse",
    "Hamster",
    "Guinea pig",
    "Rabbit",
    "Bunny",
    "Hare",
    "Ferret",
    "Weasel",
    "Stoat",
    "Wolverine",
    "Badger",
    "Tasmanian Devil",
    "Opossum",
    "Platypus",
  ]

  const prefixes = [
    "Power",
    "Captain",
    "Super",
    "Mighty",
    "Cosmic",
    "Atomic",
    "Lightning",
    "Star",
    "Shadow",
    "Thunder",
    "Blaze",
    "Iron",
    "Frost",
    "Nova",
    "Phoenix",
    "Specter",
    "Solar",
    "Lunar",
    "Titan",
    "Neon",
    "Radiant",
    "Cyber",
    "Quantum",
    "Venom",
    "Echo",
    "Omega",
    "Guardian",
    "Aero",
    "Inferno",
    "Turbo",
    "Steel",
    "Crystal",
    "Vanguard",
    "Hyper",
    "Terra",
    "Zenith",
    "Velocity",
    "Frostbite",
    "Storm",
    "Blaze",
    "Galaxy",
    "Falcon",
    "Vector",
    "Comet",
    "Paladin",
    "Arrow",
    "Surge",
    "Oracle",
    "Prism",
    "Celestial",
    "Nebula",
    "Eclipse",
    "Draco",
    "Mirage",
    "Ignite",
    "Tempest",
    "Vortex",
    "Havoc",
    "Apex",
    "Helix",
    "Blaze",
    "Valkyrie",
    "Hyperion",
    "Dynamo",
    "Echo",
    "Nexus",
    "Havoc",
    "Quantum",
    "Vanguard",
    "Photon",
    "Arcane",
    "Dynamo",
    "Blitz",
    "Nova",
    "Pulse",
    "Catalyst",
    "Phoenix",
    "Warp",
    "Element",
    "Blitz",
    "Fury",
    "Infinity",
    "Prowler",
    "Enigma",
    "Omega",
    "Infinity",
    "Zephyr",
    "Dynamo",
    "Avalanche",
    "Fusion",
    "Cyclone",
    "Apex",
    "Nova",
    "Enigma",
    "Infinity",
    "Omega",
    "Dynamo",
    "Tempest",
    "Eclipse"
];

  const [superName, setSuperName] = useState("")
  const [inputText, setInputText] = useState("")
  const [addSuffix, setAddSuffix] = useState(false)
  const [addPrefix, setAddPrefix] = useState(false)

  function handleInputText(e) {
    setInputText(e.target.value)
  }

  function togglePrefix() {
    setAddPrefix(!addPrefix)
  }

  function toggleSuffix() {
    setAddSuffix(!addSuffix)
  }

  function GenerateName(e) {
    e.preventDefault()
    if (inputText && !addPrefix && !addSuffix) {
      showName(`${prefixes[getRandomNumber()]} ${inputText}`)
    } else if (inputText) {
      showName(inputText)
    } else if (!addPrefix && !addSuffix) {
      showName(prefixes[getRandomNumber()])
    } else {
      showName()
    }

    // animation
    addAnimation()
  }

  function showName(name="") {
    const prefix = addPrefix ? prefixes[getRandomNumber()] : ""
    const suffix = addSuffix ? suffixes[getRandomNumber()] : ""
    setSuperName(`${prefix} ${name} ${suffix}`)
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 100)
  }

  function addAnimation() {
    gsap.to(".btn", {
      scaleY: 1.6,
      duration: 0.8,
      ease: Expo.easeOut
    })
    gsap.to(".btn", {
      scaleX: 1.6,
      scaleY: 1,
      duration: 0.8,
      delay: 0.1,
      ease: Back.easeOut,
    })
    gsap.to(".btn", {
      scaleX: 1,
      scaleY: 1,
      duration: .8,
      delay: 0.3,
      ease: Back.easeOut,
    })
  }

  return (
    <main className='flex flex-col justify-center items-center min-h-screen w-full sm:max-w-xl'>
      <h1 className='font-bangers text-yellow-400 text-5xl sm:text-7xl font-bold uppercase'>Hero Name Forge</h1>
      <p className='mb-8 text-white sm:text-2xl'>Create your own Super hero name</p>
      <div className='font-bangers text-white text-4xl mb-6 h-10 sm:text-5xl font-bold uppercase'>
        {superName}
      </div>
      <form onSubmit={GenerateName} className='p-2 w-9/12' >
        <input 
          className="w-full p-2 mb-4 rounded focus:outline-none focus:ring focus:ring-black-300 sm:text-1xl" 
          type="text" 
          placeholder='Enter Your Name Here ......' 
          value={inputText} 
          onChange={handleInputText}
        />
        <div className='flex'>
          <div className='mr-6'>
            <input className='mr-3' id='prefix' type="checkbox" checked={addPrefix} onChange={togglePrefix} />
            <label htmlFor="prefix" className='text-white font-medium'>Add Prefix</label>
          </div>
          <div>
            <input className='mr-3' id='suffix' type="checkbox" checked={addSuffix} onChange={toggleSuffix} />
            <label htmlFor="suffix" className='text-white font-medium'>Add Suffix</label>
          </div>
        </div>
        <button className='btn block bg-red-700 text-white px-3 py-2 mx-auto rounded mt-6 hover:bg-red-500 relative after:content-[""] after:absolute after:w-6/12 after:h-2 after:bg-red-400 after:left-1/2 after:-translate-x-1/2 after:-bottom-4 after:opacity-25 after:rounded-full'>
          Generate Now
        </button>
      </form>
    </main>
  )
}

export default App
