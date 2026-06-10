export default function Services() {
  const services = [
    {
      icon: '💍',
      title: 'Weddings',
      description: 'From intimate ceremonies to grand celebrations, we create your perfect wedding day.',
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional conferences, product launches, and corporate gatherings tailored to your brand.',
    },
    {
      icon: '🎉',
      title: 'Private Celebrations',
      description: 'Birthdays, anniversaries, and special milestones organized with care and creativity.',
    },
    {
      icon: '📊',
      title: 'Conferences',
      description: 'Large-scale conferences with seamless logistics, venues, and technical support.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive event planning and execution services for any occasion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
