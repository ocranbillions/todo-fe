import React from 'react';

const TodoForm = () => {
  return (
    <div className=''>
      <div className='mb-3 p-5'>
        <h4 className='mb-4'>Add Todo</h4>
        <form>
          <div className="form-group">
            {/* <label htmlFor="text">text</label> */}
            <input className="form-control" type="text" id="text" placeholder="Enter text"/>
          </div>
          <button className="btn btn-primary" type="submit">Add Task</button>
          </form>
      </div>
    </div>
  )
}

export default TodoForm;