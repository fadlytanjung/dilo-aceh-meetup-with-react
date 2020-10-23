import React, { useState } from 'react';
import Card from './components/Card';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data,setData] = useState([{ id:1, name:'Todo 1', done: false }]);
  const [value,setValue] = useState('');
  const [error, setError] = useState(false);

  const handleDone = (e) =>{
    const newData = data;
    newData[e].done = !data[e].done;
    setData([...newData]);
  };
  const handleDelete = (e) =>{
    const newData = data.filter(el=>el.id !== e);
    setData([...newData]);
  };
  const handleChange = (e) =>{
    setValue(e.target.value);
  };
  const handleSubmit = () =>{
    if(checkExist(data,value)) {
      setError(true);
    }else{
      setData([...data,{ 
        id:data.length > 0 ? _highValue(data).id+1 : 1,
        name:value,
        done:false 
      }]);
      setError(false);
      setValue('');
    }
  };
  
  const checkExist = (data,value) => {
    return data.some(function (el) {
      return el.name === value;
    }); 
  };

  const _highValue = (obj) =>{
    return obj.reduce((a, b) => obj[a] > obj[b] ? a : b);
  };

  return (
    <section className="wrapper d-flex flex-column justify-content-center align-items-center">
      <Card title="Todo App" error={error} onChange={handleChange} onSubmit={handleSubmit} value={value}/>
      <div className="todo-list">
        {
          data.length > 0 ?
            data.map((item,id) => <Todo key={item.id} item={item} onDone={()=>handleDone(id)} onDelete={()=>handleDelete(item.id)}/>) :
          <Todo item={null} />
        }
      </div>
    </section>
  );
}

export default App;
