import { useEffect, useState } from "react"
import About from "../components/About"
import Hero from "../components/Hero"


export default function Home() {
    const [git, setGit] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/UlissesE/repos")
        .then(res => res.json())
        .then(data => setGit(data))
    }, [])
    console.log(git)
    return (
        <main className="relative">
        <Hero/>
        <About/>
        </main>
        
    )
}