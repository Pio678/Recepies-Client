import profileImg from "../../assets/icons/blankUserIcon.png";

const ProfilePage = () => {
  return (
    <div className="profile_page">
      <div>
        <img src={profileImg} />
        <p>Profile Name</p>
      </div>
    </div>
  );
};

export default ProfilePage;
