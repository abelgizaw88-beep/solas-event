export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      text: 'Solas Event made our wedding day absolutely perfect. Every detail was handled beautifully.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO, Tech Startup',
      text: 'Our product launch was a massive success thanks to the professionalism of the Solas Event team.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Event Coordinator',
      text: 'Working with Solas Event was a pleasure. They exceeded all expectations.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Hear from our satisfied clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
