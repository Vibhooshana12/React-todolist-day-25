import React from 'react'

function Filter({filter,setFilter}) {
  return (

    <div className="status-filter d-flex align-items-center">
      <h4>My Todo</h4>
      <div className="form-group d-flex align-items-center">
        <label className="ml-2 mr-2"><h4>Status Filter:</h4></label>
        <select className="filter-select form-control"  value={filter} onChange={(event) => setFilter(event.target.value)} style={{ width: '150px' }}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
        </select>
      </div>
    </div>
  )
}

export default Filter

