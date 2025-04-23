import React, { useEffect } from 'react'
import { Link } from 'react-router'
import home2 from "./image/home2.jpg"
import home3 from "./image/home3.jpg"
import home4 from "./image/home4.jpg"
import home5 from "./image/home5.jpg"
import home6 from "./image/home6.jpg"
import home7 from "./image/home7.jpg"
import home8 from "./image/home8.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Restaurants() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl rotate-1 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home2} alt='Haveli Restaurants'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Haveli Restaurants</h2>
            <h5>Foods starting price:- 120/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Pickle</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl -rotate-2 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home3} alt='Rasota'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Rasota</h2>
            <h5>Foods starting price:- 135/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Pickle</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl rotate-3 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home4} alt='Ghar Jaisa 2.0'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Ghar Jaisa 2.0</h2>
            <h5>Foods starting price:- 140/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Pickle</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl rotate-3 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home5} alt='Awadh Restaurants'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Awadh Restaurants</h2>
            <h5>Foods starting price:- 200/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Pickle</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl -rotate-2 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home6} alt='Gurudev Restaurants'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Gurudev Restaurants</h2>
            <h5>Foods starting price:- 100/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Pickle</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl rotate-1 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home7} alt='Ram Rasoi'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Ram Rasoi</h2>
            <h5>Foods starting price:- 150/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
              <li>& some more</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        <div data-aos="fade-right" data-aos-duration="7000" data-aos-delay="1000" className='grid grid-rows-2 p-4 shadow-2xl rotate-1 border-2 hover:shadow-blue-300  items-center'>
          <div className=''>
            <img src={home8} alt='Vaishnavi Restaurants'></img>
          </div>
          <div className='mb-2'>
            <h2 className='text-center'>Vaishnavi Restaurants</h2>
            <h5>Foods starting price:- 110/-only</h5>
            <ul>
              <li><h6>Food Items:-</h6></li>
              <li>5 chapatis</li>
              <li>2 Cup Rice</li>
              <li>2 Cups Millets</li>
              <li>Salads</li>
              <li>2 Vegetables</li>
              <li>Desert</li>
            </ul>
            <div className='rounded-lg'>
            <button className='bg-slate-900 p-1 text-blue-50 rounded-lg'>Direction</button>
          </div></div>
        </div>
        
      </div>
    </div>

  )
}
