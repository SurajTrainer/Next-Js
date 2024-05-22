'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
        <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><Link href="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Features</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Pricing</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">FAQs</Link></li>
        <li class="nav-item"><Link href="/about" class="nav-link">About</Link></li>
      </ul>
    </header>
  </div>
   </>
  )
}

export default Navbar
