import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function createArray(length) {
  return [...Array(length)]
}

function Star({ selected = true, onSelectChange }) {
  return <FaStar
    color={selected ? 'red' : 'gray'}
    onClick={() => onSelectChange()} />
}

function StarRating({ totalStars = 5, initialStars = 0 }) {
  const [selectedStars, setSelectedStars] = useState(initialStars);

  return <>
    {createArray(totalStars).map((n, i) =>
      <Star key={i} selected={selectedStars > i} onSelectChange={() => setSelectedStars(i + 1)} />
    )}
    <p>Selected Stars: {selectedStars}</p>
  </>
}

function App() {
  const [checked, setChecked] = useState(true)
  return (
    <div className="App">
      <h1>React</h1>
      <StarRating totalStars={10} />
      <div>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <p>Checkbox is {checked ? 'Checked' : 'Unchecked'}</p>
      </div>
    </div>
  );
}

export default App;
