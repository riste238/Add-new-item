import React, { useState } from 'react';
import { save } from './locationSlice'; // destructing of props
 
import { useDispatch, useSelector } from 'react-redux';

export default function App() {

  const [locationName, setLocationName] = useState('');
  const dispatch = useDispatch();
  const { location } = useSelector(state => state);

  const handleData = (e) => {
    setLocationName(e.target.value);
  }
  const handleSave = () => {
    const ifPrestent = location.includes(locationName);
    if (locationName !== undefined && !ifPrestent) {
      dispatch(save(locationName));
      setLocationName('')
    } else {
      setLocationName('')
    }
  }
  return (
      <div>
        <div>
          <input type="text" value={locationName} onChange={handleData} />
          <button onClick={handleSave}>Add</button>
        </div>

        <div>
        <h3> List of locations </h3>
    
        </div>
        <div>
        {location.map((item) => <li>{item}</li>)}
        </div>
      </div>

  
  );
}
