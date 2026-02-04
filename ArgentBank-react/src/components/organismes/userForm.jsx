import './userForm.css'

export default function UserForm() {
    return (
        <>
            <h2>Edit Name</h2>
            <form className="editForm">
              <div className="editFormInput">
              <label htmlFor="userName">User Name:</label>
              <input type="username" id="userName" />
              <label htmlFor="firstname">First Name:</label>
              <input type="firstname" id="firstName" />
              <label htmlFor="lastname">Last Name:</label>
              <input type="lastname" id="lastName" />
              </div>  
              <div className="editFormbutton">
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
              </div>
            </form>
        </>    
    );
}