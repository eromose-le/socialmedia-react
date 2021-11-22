import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import './profile.css';

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            {/* profile && cover pic */}
            <div className="profileRightTop">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
          </div>
          {/* profile info */}
          <div className="profileInfo">
            <h4 className="profileInfoName">Austine Gberaese</h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
          {/* feed && rightbar */}
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
