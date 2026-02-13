import './userForm.css'





export default function UserForm( { onSubmit, onCancel } ) {


  return (
    <form className="editForm">
      <div className="editFormInput">
        <div className='labelinput'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            //value={""}
            //onChange={""}
            placeholder={""}
            id='username'
            readOnly
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            placeholder={""}
            id='firstname'
            readOnly
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            placeholder={""}
            id='lastname'
            readOnly
          />
        </div>
      </div>
      <div className="editFormbutton">
        <button type="submit">Save</button>
        <button type="cancel">Cancel</button>
      </div>
    </form>
  );
}