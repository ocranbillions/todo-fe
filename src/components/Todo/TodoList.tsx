import React from 'react';

const TodoList = () => {
  return (
  <div className=''>
    <div className='mb-3 px-5'>
    <h4 className='mb-4'>List of Tasks</h4>
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Complete Understanding TypeScript Course</td>
          <td>Icon</td>
          <td>Icon</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Go shopping at Lekki</td>
          <td>Icon</td>
          <td>Icon</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Check on David</td>
          <td>icon</td>
          <td>Icon</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default TodoList;