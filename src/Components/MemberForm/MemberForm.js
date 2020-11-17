import React, { useContext } from 'react';
import { UserContext } from '../../App';

const MemberForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container text-center">
            <h1>Membership page is under construction</h1>
            <h1>Name: {loggedInUser.name}</h1>
            <img src={loggedInUser.image} alt=""/>
        </div>
    );
};

export default MemberForm;