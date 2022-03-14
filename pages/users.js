import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <h1>
      List of Users
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </h1>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
