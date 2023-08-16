"use client";
import React from "react";

function Profile() {
  return (
    <div className="profile-client">
    <div class="sidenav">
      <div class="profile">
        <div class="name">Client name</div>
      </div>
      <div class="sidenav-url">
        <div class="url">
          <a href="#profile" class="active">
            Profile
          </a>
          <hr align="center" />
        </div>
        <div class="url">
          <a href="#settings">Settings</a>
          <hr align="center" />
        </div>
      </div>
    </div>
    <div class="main">
        <h2>IDENTITY</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>imdezcode@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                           
                        </tr>
                        <tr>
                            <td>Hobbies</td>
                           
                        </tr>
                        <tr>
                            <td>Job</td>
                          
                        </tr>
                        <tr>
                            <td>Skill</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </div>
  );
}

export default Profile;
