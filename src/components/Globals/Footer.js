import React from "react"

export default function Footer() {
  return (
    <footer className="footer mt-5 py-2">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto text-yellow text-center text-capitalize">
            <h3>
              all rights reserved &copy; {new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
