import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./ProfileIcon.css";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    // console.log(this.state.dropdownOpen);
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleSignOut() {
    const token = window.sessionStorage.getItem("token");
    fetch("http://localhost:3000/signout", {
      method: "post",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        token: token
      })
    });
  }

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 pa1 ba b--black-10 h3 w3"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5 dropdown-menu-right"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255,255,255,0.5)"
            }}
          >
            <DropdownItem onClick={this.props.toggleModal}>
              View Profile
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.handleSignOut();
                this.props.onRouteChange("signout");
              }}
            >
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
