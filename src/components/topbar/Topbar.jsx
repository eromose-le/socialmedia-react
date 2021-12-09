import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      {/* left */}
      <div className="topbarLeft">
        <Link className="link" to="/">
          <span className="logo">BA. social</span>
        </Link>
      </div>
      {/* center */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      {/* right */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="link" to="/">
            <span className="topbarLink">Homepage</span>
          </Link>
          <Link className="link" to="/">
            <span className="topbarLink">Timeline</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <Link className="link" to="/profile">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
          </Link>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link className="link" to="/profile">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
