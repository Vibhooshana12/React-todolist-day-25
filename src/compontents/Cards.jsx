import React,{useState} from 'react'

function Cards({ todos, editIndex,onStatusChange,onEdit,onDelete,onCancel}) {
  const [newName, setEditName] = useState('');
  const [newDescription, setEditDesc] = useState('');

  const handleSave = (index) => {
    onEdit(index, newName, newDescription);
    setEditName('');
    setEditDesc('');
  };

  return (
      <div className="container py-4">
        <div className='row'>
        {todos.map((todo,index)=>(
          <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
            {editIndex === index ? (
              <div className="card todo-card text-white bg-secondary mb-3">
                <div  className="card-header" key={index}>Edit Task</div>
                <div className="card-body">
                  <input type="text" className="form-control mb-2"
                  placeholder="New Name" value={newName}
                  onChange={(event)=> setEditName(event.target.value)}
                  />
                  <input type="text" className="form-control mb-2"
                  placeholder="New Description" value={newDescription}
                  onChange={(event)=> setEditDesc(event.target.value)}
                  />
                  <button onClick={() => handleSave(index)} className="btn btn-success mr-2">Save</button>
                  <button onClick={onCancel} className="btn btn-danger mr-2">Cancel</button>
                </div>
              </div>
            ):(
              <div className="card todo-card text-white mb-3">
              <div  className="card-header" key={index}>{todo.name}</div>
              <div className="display card-body">
                <h5 className="card-title">Name: {todo.name}</h5>
                <p className="card-text">Description: {todo.description}</p>
                <div>
                <p className="card-text">Status: {todo.status}</p>
                <select className={`form-control col-lg-6 
                ${todo.status === "Not Completed" ? "Not-Completed": "Completed"}`} value={todo.status}
                onChange={(event)=>onStatusChange(index,event.target.value,console.log(todo.status))} >
                    <option value="Not Completed" className="bg-danger">Not Completed</option>
                    <option value="Completed" className="bg-success">Completed</option>
                </select>
                </div>
                <div>
                <button className="edit btn btn-add bg-success text-white mt-4 mr-2" onClick ={()=> onEdit(index)}> Edit </button>
                <button className="delete btn btn-add bg-danger text-white mt-4 mr-2" onClick ={()=> onDelete(index)}> Delete </button>
                </div>
              </div>
            </div>
            )}
          </div>
         ))}
         </div>
      </div>
   );
}
export default Cards
