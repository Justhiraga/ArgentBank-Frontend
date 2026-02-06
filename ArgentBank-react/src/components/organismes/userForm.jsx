import './userForm.css'





export default function UserForm() {
  return (
    <form className="editForm">
      <div className="editFormInput">
        <div className='labelinput'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            //value={"1"}
            // onChange={""}
            placeholder={""}
            id='username'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="firstname">First Name:</label>
          <input
             type="text"
              //value={"2"}
              //onChange={""}
              placeholder={""}
              id='firstname'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="lastname">Last Name:</label>
          <input
             type="text"
              //value={"3"}
              //onChange={""}
              placeholder={""}
              id='lastname'
          />
        </div>
      </div>
      <div className="editFormbutton">
        <button type="submit" >Save</button>
        <button type="cancel" >Cancel</button>
      </div>
    </form>
  );
}