
function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-item">
            <h1>Logo</h1>
        </div>
        <div className="nav-item">
            <ul className="navlink">
                <li  id="navaa">Home</li>
                <li  id="navaa">Service</li>
                <li  id="navaa">About Us</li>
                <li  id="navaa">Contact Us</li>
            </ul>
        </div>
        <div className="nav-item">
            <button className="middleText-btn">Username</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
