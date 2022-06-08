import React, {useState} from 'react';
import './App.css';
import MyEditor from './components/Editor'
import EditorPreview from './components/EditorPreview'

function App() {
  const [value, setValue] = useState('');
  
  return (
    <div className="App">
      <div className="container">
        <MyEditor onChange={(value) => {
          setValue(value)
          console.log(value)
        }}/>
        <EditorPreview 
          data={value}
        />
      </div>
    </div>
  );
}

export default App;
