import { useState } from 'react'

function App() {
  const [form, setForm] = useState({name: '', phone: '', email: '', skills: ''})
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Submitting...')
    fetch('https://script.google.com/macros/s/AKfycbwVfHo0n7plZkfJzMZvAw7X5fte8a-lfH_kXAjy6hFuJ_HhDlAuW-MnAXMNLrJ5bvJgYQ/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(form),
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
    <div style={{fontFamily: 'Arial', maxWidth: '500px', margin: '50px auto', padding: '20px'}}>
      <h1 style={{color: '#1e40af', textAlign: 'center'}}>NayePankh Volunteer Registration</h1>
      <p style={{textAlign: 'center', color: '#666'}}>Join us to make a difference</p>
      
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '4px'}} required />
        <input placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '4px'}} required />
        <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '4px'}} required />
        <textarea placeholder="Your Skills: teaching, event management, etc" value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} style={{width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '4px', minHeight: '80px'}} required />
        <button type="submit" style={{width: '100%', padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px'}}>Register as Volunteer</button>
      </form>
      
      {message && <p style={{color: message.includes('Thanks') ? 'green' : 'orange', marginTop: '20px', textAlign: 'center'}}>{message}</p>}
    </div>
  )
}

export default App