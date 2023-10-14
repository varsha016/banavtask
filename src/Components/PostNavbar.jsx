import React from 'react'

const PostNavbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg bg navbar-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand underline" href="#">All Posted (32)</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">Artical</a>
            <a className="nav-link" href="#">Event</a>
            <a className="nav-link" href="#">Education</a>
            <a className="nav-link" href="#">Job</a>
          </div>
          <div className="ms-auto d-flex gap-4">
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                Write a post
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary"><i className="bi bi-people-fill"></i> Join Group</button>
          </div>
        </div>
      </div>
    </nav>
  </>
}

export default PostNavbar