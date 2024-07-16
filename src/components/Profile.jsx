import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";

const Profile = ({ children }) => {
  return (
    <div>
      {/* Passing jsx as a chidren */}
      <Card>
        <div >{children}</div>
        <Avatar person={{ name: "test", imageId: "YfeOqp2" }} size={80} />
        <Avatar person={{ name: "Rohit", imageId: "OKS67lh" }} size={60} />
        <Avatar person={{ name: "Ram", imageId: "1bX5QH6" }} size={40} />
      </Card>
    </div>
  );
};

export default Profile;
