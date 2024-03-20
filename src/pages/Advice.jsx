import { useState } from 'react'

function Advice() {
  // Temporary React chatbot
  const [messages, setMessages] = useState([])
  const [formData, setFormData] = useState({
    text: '',
    type: 'sent',
  })

  const handleChange = (event) => {
    event.preventDefault(event)
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setMessages([...messages, formData])
      const response = await fetch('/insert-backend-url-here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setMessages([...messages, response.json()])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='user-page'>
      {messages.map((message, index) => (
        <div key={index}>{message.text}</div>
      ))}
      <form className='form-background'>
        <input
          type='text'
          name='text'
          value={formData.text}
          placeholder={'Enter your question here...'}
          onChange={handleChange}
        />
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Advice