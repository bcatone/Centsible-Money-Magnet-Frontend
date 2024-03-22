const TestimonialCard = ({ name, rating, quote }) => {
  // Function to generate star icons based on rating
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐️</span>)
    }
    return stars
  }

  return (
    <div className='testimonial-card'>
      <div className='stars'>{renderStars()}</div>
      <p className='quote'>{quote}</p>
      <p className='name'>{name}</p>
    </div>
  )
}

export default TestimonialCard
