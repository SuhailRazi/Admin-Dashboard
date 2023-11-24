import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src='logo.svg' alt="" />
        <span>Admin Dashboard</span>
      </div>
      <div className="icons">
        <img src='/search.svg' alt='' className='icon' />
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className="notification">
          <img src='/notifications.svg' alt='' />
          <span>1</span>
        </div>
        <div className="user">
          <img src='https://images.pexels.com/photos/18374442/pexels-photo-18374442/free-photo-of-flag-and-street-light-over-narrow-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
          <span>username</span>
        </div>
        <img src='/settings.svg' alt='' className='icon' />
      </div>
    </div>
  )
}

export default Navbar