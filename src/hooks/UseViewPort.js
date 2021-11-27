import {useState, useEffect} from 'react'

const useViewPort =() => {
    // Declare the variable which store the state os the windows size
    const [width, setWidth] = useState(window.innerWidth);
    
    
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      // Update the size of the window when it changes 
      window.addEventListener('resize', handleWindowResize);
      // Removes the Event Listener
      return () => window.removeEventListener('resize', handleWindowResize);
    },[]);
  
    return {width}
  }
  export default useViewPort;