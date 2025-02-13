import React, { useEffect } from 'react'
import home2 from "./image/home2.jpg"
import { Link } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
const products = [
  {
    id: 1,
    name: 'Earthen ',
    href: '#',
    price: '',
    imageSrc: "home2.jpg",
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Major',
    href: '#',
    price: '',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Max',
    href: '#',
    price: '',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Awadh Restaurant',
    href: '#',
    price: '',
    imageSrc: '',
    imageAlt: '',
  },
]
export default function Restaurants() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div data-aos="slide-up" data-aos-delay="7000" data-aos-duration="2000" className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1  text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}
