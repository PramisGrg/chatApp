import "./adduser.css";

const Adduser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" />
          <span>Pramis</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default Adduser;
