import React from 'react';

export default function Card(props){
  const { title, onSubmit, onChange, value, error } = props;
  return(
    <div className="card">
       <div className="card-body">
          <h3>{title}</h3>
          <div className="form-row">
            <div className="row">
              <div className="col-8">
                <input type="text" className="form-control" name="todo" onChange={onChange} placeholder="Type todo .." value={value} />
                {error&&<span className="text-danger">Todo has been exist!</span>}
              </div>
              <div className="col-4">
                <button className="btn btn-primary" onClick={onSubmit}>Add Todo</button>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}