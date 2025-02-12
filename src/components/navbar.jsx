
export default function Navbar(props) {
  
  

  return (
    <>
        <nav className={`navbar bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="light"?"light":"dark"}`}>
        <div className="container">
            <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href=" ">
            <strong>IR-</strong> <span className='text-danger'><strong>CODER</strong></span>
            </a>
            <h2 className={`position-absolute top-50 start-50 translate-middle text-${props.mode==="light"?"dark":"light"}`}>Calculator</h2>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggle} type="checkbox"  id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`}  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
        </nav>
    </>
  )
}
