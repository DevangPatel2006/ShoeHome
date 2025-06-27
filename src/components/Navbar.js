
const Navbar=()=>{
    return (
        <div>
      <nav className="container">
        <div className="logo">
          
          <img src="/logo.png" alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="btn btn-danger">Login</button>
      </nav>
    </div>
    );
};

export default Navbar;