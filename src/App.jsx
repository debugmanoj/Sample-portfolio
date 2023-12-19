import React from 'react'

function App() {
  let a=[{
    title:"Project One",
    description:"Hi",

  },
{
  title:"Project Two",
    description:"Hello",
},
{
  title:"Project Three",
    description:"Sample",
}]
  return <>
    <div className="container">

{/*<!-- Page Heading -->*/}
<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
</h1>

<div className="row">
  {
    a.map((e,i)=>{
      return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{e.title}</a>
          </h4>
          <p className="card-text">{e.description}</p>
        </div>
      </div>
      </div>
    })
  }
  
  

</div>
{/*<!-- /.row -->*/}

{/*<!-- Pagination -->*/}
{/* <ul className="pagination justify-content-center">
  <li className="page-item">
    <a className="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      <span className="sr-only">Previous</span>
    </a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">1</a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">2</a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">3</a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      <span className="sr-only">Next</span>
    </a>
  </li>
</ul> */}

</div>
    </>
}


export default App