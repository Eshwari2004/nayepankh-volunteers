import { useEffect, useState } from 'react';

function Admin() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbypwf6yTbBkmV6xQ2Al3jwjgtqDv3X9c-SdT7BurlWvBabwZmUqXCIvh_0Ic3xM7nP-/exec')
      .then(res => res.json())
      .then(data => {
        setVolunteers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{padding: '20px'}}>Loading volunteers...</h2>;

  return (
    <div style={{padding: '20px', fontFamily: 'Arial'}}>
      <h1>NayePankh Volunteers Admin</h1>
      <p><strong>Total Signups: {volunteers.length}</strong></p>
      
      <table border="1" cellPadding="8" style={{borderCollapse: 'collapse', width: '100%', marginTop: '20px'}}>
        <thead style={{background: '#f5f5f5'}}>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((v, i) => (
            <tr key={i}>
              <td>{new Date(v.timestamp).toLocaleDateString()}</td>
              <td>{v.fullName}</td>
              <td>{v.phone}</td>
              <td>{v.email}</td>
              <td>{v.skills}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;