import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="page">
      <header>
        <h1>Future Me</h1>
        <nav>
          <Link to="/profile">Profile</Link> | <Link to="/projects">Projects</Link> | <Link to="/vision">Vision</Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome</h2>
          <p>An AI-powered portfolio that helps you envision your future self.</p>
        </section>
      </main>
    </div>
  )
}

