import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import './App.css'

function Form() {
  const [form, setForm] = useState({name: '', phone: '', email: '', skills: ''})
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Submitting...')

    const data = {
      fullName: form.name,
      phone: form.phone,
      email: form.email,
      skills: form.skills
    }

    fetch('https://script.google.com/macros/s/AKfycbypwf6yTbBkmV6xQ2Al3jwjgtqDv3X9c-SdT7BurlWvBabwZmUqXCIvh_0Ic3xM7nP-/exec', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(() => {
      setMessage('Thanks! Registered successfully. We will contact you soon.')
      setForm({name: '', phone: '', email: '', skills: ''})
    })
    .catch(() => {
      setMessage('Error submitting. Please try again.')
    })
  }

  return (
    <div>
      <h1>NayePankh Volunteer Form</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <input placeholder="Skills" value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} required />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App