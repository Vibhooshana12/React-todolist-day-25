import React,{useState} from 'react'
import Filter from './Filter';
import Cards from './Cards';

function Form() {
    const [name, setAddName] = useState("");
    const [description,setAddDesc]  = useState("");
    const [data,setData] =useState([])
    const [filter,setFilter]=useState("All")
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd=(event) =>{
        event.preventDefault();
        if (name && description){
            setData([...data,{name, description,status: "Not Completed"}]);
            setAddName("");
            setAddDesc("");
        }   
    };

    const handleStatus = (index, status) => {
        const newData = [...data];
        newData[index].status = status;
        setData(newData);
      };
    
      const handleEdit = (index, newName,newDescription) => {
         if (editIndex === index) {
            const newData = [...data];
            newData[index] = { ...newData[index], name: newName, description: newDescription };
            setData(newData);
            setEditIndex(null);
        } else {
            setEditIndex(index);
        }
       };

      const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
      };

      const handleCancel = () => {
        setEditIndex(null);
      };

      const filterTodo = data.filter(
        todo => {
        if (filter === "All") return true;
        if (filter === "Completed") return todo.status === "Completed";
        if (filter === "Not Completed") return todo.status === "Not Completed";
        return false;
      });

  return (
    <div className="container py-3">
        <h1 className='title text-center'>React Todo Task</h1>
        <form className="todo-form row align-items-center" onSubmit={handleAdd}>
            <div className="name form-group col-lg-5 col-md-6 ">
                <input type="text" className="name form-control" placeholder="Todo Name" aria-label="textInput" aria-describedby="basic-addon1" 
                onChange = {(name)=>setAddName(name.target.value)} value ={name}/>
            </div>
            <div className="desc form-group col-lg-5 col-md-6">
                <input type="text" className="desc form-control" placeholder="Todo Description" aria-label="descInput" aria-describedby="basic-addon1"
                onChange = {(description)=>setAddDesc(description.target.value)} value ={description}/>
            </div>
            <div className="form-group col-lg-2 col-md-6">
                <button type ="submit" className="Add btn btn-dark">Add Todo</button>
            </div>
        </form>
        <Filter setFilter={setFilter}  filter={filter}/>
        <Cards 
        todos ={filterTodo } 
        onStatusChange={handleStatus}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onDelete={handleDelete}
        editIndex={editIndex}
        />
    </div>

  );
}
export default Form

