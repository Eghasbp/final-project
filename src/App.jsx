import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import hamburger from './assets/hamburger.svg'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleOpenClose = () => {
    // Mengubah status showSidebar saat tombol ditekan
    setShowSidebar(!showSidebar);
  };


  return (
    <>
      <nav className='py-9 px-4'> 
        <div className='container mx-auto'>
          <div className='flex justify-between'>
            <img src={reactLogo} alt="" />
            <img src={hamburger} className='w-8' alt="" />
          </div>
        </div>
        <div className='fixed bottom-0 right-0 left-0 bg-white p-4 border'>
          <div className='flex justify-between'>
            
            <button className='flex justify-center flex-col items-center gap-1 text-blue-500'>
                <div className=''><ion-icon name="planet-outline" className="text-blue-400"></ion-icon></div>
              <span className='text-base  font-bold text-gray-400'>Home</span>
            </button>
             
            <button className='flex  justify-center flex-col items-center gap-1'>
              <div><ion-icon name="diamond-outline"></ion-icon></div>
              <span className='text-base font-bold text-gray-400'>Discover</span>
            </button>
             
            <button className='flex  justify-center flex-col items-center gap-1'>
              <div><ion-icon name="logo-gitlab"></ion-icon></div>
              <span className='text-base font-bold text-gray-400'>About</span>
            </button>
           
            <button className='flex  justify-center flex-col items-center gap-1'>
              <div><ion-icon name="people-outline"></ion-icon></div>
              <span className='text-base font-bold text-gray-400'>Contact</span>
            </button>
            
             
            <button onClick={handleOpenClose} className='flex justify-center flex-col items-center gap-1'>
            <div><ion-icon name={showSidebar ? "chevron-down-outline" : "chevron-up-outline"}></ion-icon></div>
          </button>

      {showSidebar ? (
        <div className='absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4'>
          <button className='grow bg-white px-8 py-4 font-bold text-gray-400 rounded-full text-sm'>Login</button>
          <button className='grow bg-blue-500 px-8 py-4 font-bold text-white rounded-full text-sm'>Sign Up</button>
        </div>
      ) : null}
        </div>
      </div>
      </nav>


      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    </>
  )
}

export default App
