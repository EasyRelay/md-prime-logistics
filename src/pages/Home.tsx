import { Phone, Mail, MapPin, Truck, Package, Route, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const Home = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Freight Transportation',
      description: 'Reliable and efficient freight transportation services across the United States with real-time tracking and professional handling.'
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: 'Dispatch Services',
      description: 'Professional dispatch services to optimize routes, reduce costs, and ensure timely deliveries for your business operations.'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Logistics Solutions',
      description: 'Comprehensive logistics solutions tailored to your business needs, from warehousing to last-mile delivery coordination.'
    }
  ];

  const features = [
    'Licensed and Insured',
    'Real-time Tracking',
    '24/7 Customer Support',
    'Competitive Pricing',
    'Nationwide Coverage',
    'Professional Drivers'
  ];

  useEffect(() => {
    window.scroll(0, 0);
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Your Reliable <span className="text-cyan-400">Logistics Partner</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Professional freight transportation and logistics solutions across the United States.
              Licensed, insured, and committed to excellence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-400 hover:animate-pulse"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About MD Prime Logistics LLC</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A trusted logistics company providing reliable transportation services with a commitment to safety,
              efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-200">
                  <h3 className="font-semibold text-slate-800 mb-2">MC Number</h3>
                  <p className="text-2xl font-bold text-teal-600">1477633</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-300">
                  <h3 className="font-semibold text-slate-800 mb-2">DOT Number</h3>
                  <p className="text-2xl font-bold text-teal-600">3961635</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400">
                <h3 className="font-semibold text-slate-800 mb-2">EIN</h3>
                <p className="text-2xl font-bold text-teal-600">99-4506377</p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-slate-800">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${600 + index * 100}ms` }}>
                    <CheckCircle className="h-5 w-5 text-teal-600 animate-bounce-subtle" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section (Zig-Zag Layout) */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold text-teal-600">MD Prime Logistics LLC</span>,
                we believe logistics is more than just moving goods from one place to another —
                it’s about building trust, ensuring reliability, and delivering value to our clients.
                Our mission is to simplify transportation with innovative solutions, advanced technology,
                and a dedicated team that understands the challenges of modern supply chains.
              </p>
            </div>
            <img src="/owerview-images/who-we-are.png" alt="Who we are" className="rounded-lg shadow-lg" />
          </div>

          {/* Block 2 (reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src="/owerview-images/our-commitement.png" alt="Our commitment" className="rounded-lg shadow-lg order-1 lg:order-2" />
            <div className="order-2 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                From small businesses to large enterprises, we partner with organizations of all sizes
                to provide seamless freight management, nationwide coverage, and unmatched customer support.
                Our team of professional drivers and dispatchers work around the clock to ensure your freight
                is delivered on time, every time.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Trusted Partner</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a fully licensed and insured carrier, we are committed to maintaining the highest
                safety standards while offering competitive pricing. With MD Prime Logistics,
                you gain more than a logistics provider — you gain a trusted partner dedicated
                to helping your business grow.
              </p>
            </div>
            <img src="/owerview-images/trusted-partner.png" alt="Trusted partner" className="rounded-lg h-100 w-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions designed to meet your transportation and supply chain needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 animate-fade-in-up group"
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                <div className="text-teal-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don’t just take our word for it — here’s what our customers are saying about
              <span className="font-semibold text-teal-600"> MD Prime Logistics</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                “MD Prime Logistics has been a game-changer for our supply chain.
                Always on time, professional drivers, and fantastic communication!”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Sarah Johnson</h4>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2 animation-delay-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                “Their dispatch services have helped us cut costs and improve delivery times.
                Highly recommend them for any logistics needs.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Michael Carter</h4>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up transform hover:-translate-y-2 animation-delay-400">
              <p className="text-gray-700 mb-6 leading-relaxed">
                “Excellent customer service and real-time tracking made the whole process stress-free.
                We’ve finally found a logistics partner we can trust.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Emily Rodriguez</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to streamline your logistics? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-200">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-6 w-6 text-teal-600 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-slate-800">Address</h3>
                </div>
                <p className="text-gray-600 ml-10">
                  5960 Fairview Rd, Suite 400<br />
                  Charlotte, NC 28210
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-300">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-6 w-6 text-teal-600 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                </div>
                <a
                  href="tel:+14436251223"
                  className="text-gray-600 ml-10 hover:text-teal-600 hover:scale-105 transition-all duration-300"
                >
                  (443) 625-1223
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-6 w-6 text-teal-600 animate-bounce-subtle" />
                  <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                </div>
                <a
                  href="mailto:dispatch@mdprimelogistics.com"
                  className="text-gray-600 ml-10 hover:text-teal-600 hover:scale-105 transition-all duration-300"
                >
                  dispatch@mdprimelogistics.com
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              {/* Image */}
              <img
                src="image.png"
                alt="truck image"
                className="rounded-md opacity-95 shadow-lg"
              />

              {/* Overlay (shadow) */}
              <div className="absolute inset-0 bg-black/20 rounded-md transition-opacity duration-300 opacity-100"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
