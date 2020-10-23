import React from 'react';
import styles from './styles.module.css';

export default function Todo(props){
  const { onDelete, onDone, item=null } = props;
  return(
    <div className={`card ${styles['wrapper-todo']}`}>
      <div className="card-body ">
        {item!==null ?
        <div className="row">
          <div className="col-8">
            <h4>{item.done ? <s>{ item.name }</s> : item.name}</h4>
          </div>
          <div className="col-4 d-flex flex-row justify-content-between">
            <button className={`btn ${item.done? 'btn-warning':'btn-success'}`}
              onClick={onDone}><i className={`fa ${item.done ? 'fa-edit' :'fa-check-circle'}`}></i></button>
            <button className="btn btn-danger" onClick={onDelete}><i className="fa fa-trash"></i></button>
          </div>
        </div> : 'Empty Todo'}
      </div>
    </div>
  )
}