// import module.css here;
import styles from './userDetails.module.css'

const UserDetails = ({avatar,first_name,last_name,address,karma,followers,posts,is_following}) => {
  return (
    <>
      <div data-testid="user-container">
        {/* user image */}
        <img src={avatar} alt="userImage" />
        <div>
          <div>
            <h3 data-testid="user-fname">{first_name}</h3>
            <h3 data-testid="user-lname">{last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{posts}</h3>
        </div>
        {is_following ? <button data-testid="follow-btn">follow</button> : <button data-testid="follow-btn">unfollow</button>}
      </div>
    </>
  );
};
export default UserDetails;
