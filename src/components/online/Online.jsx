import './online.css';

const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="righbarProfileContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
};

export default Online;
