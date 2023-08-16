import React, { useState } from "react";

function Profile() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="profile-client">
      <div className="sidenav">
        <div className="profile">
          <div className="name">Client name</div>
        </div>
        <div className="sidenav-url">
          <div className="url">
            <a href="#profile" className="active">
              Profile
            </a>
            <hr align="center" />
          </div>
          <div className="url">
            <a onClick={toggleForm}>Settings</a>
            <hr align="center" />
          </div>
        </div>
      </div>
      <div className="main">
        {!showForm ? (
          <div>
            <h2>Your Infos</h2>
            <div className="card">
              <div className="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>Name :</td>
                    </tr>+
                    <tr>
                      <td>Email :</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Address :</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="popup-content">
            <form class="form">
    
    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>last name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>email</span>
    </label> 
        
    <label>
        <input required="" type="tel" placeholder="" class="input"/>
        <span>contact number</span>
    </label>
    <label>
        <textarea required="" rows="3" placeholder="" class="input01"></textarea>
        <span>message</span>
    </label>
    
    <button class="fancy" href="#">
      <span class="top-key"></span>
      <span class="text">submit</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </button>
</form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
