import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/Header.css'
import AdminContext from "../../utils/contexts/admin-context";

export default function Header() {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  // const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    // setLoggingOut(true);
    // setIsAdmin(false);
  }

  // useEffect(() => {
  //   if (loggingOut) {
  //     navigate('/admin/login');
  //   }
  // }, [loggingOut])

  return (
    <div className="header-container">
      {/* {isAdmin === 'true' &&
        <div>Logged in</div>
      } */}
      <ul className="header-list">
        <li><Link to={`/`}>Home</Link></li>
        <div className="right-menu">

          <li>
            <div className="right-menu-posts" >
              <Link to={`/blogposts`}>Posts</Link>
            </div>
          </li>
          {/* {isAdmin &&
            <>
              <li>
                <div className="right-menu-posts" >
                  <Link to={`/admin/new-blogpost`}>New Post</Link>
                </div>
              </li>
              <li>
                <div className="right-menu-posts" onClick={handleLogout} >
                  Logout
                </div>
              </li>
            </>
          } */}

        </div>

      </ul>
    </div>
  )
}