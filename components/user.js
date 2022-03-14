const User = ({ user }) => {
  return (
    <div>
      <h5>{user.name}</h5>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
