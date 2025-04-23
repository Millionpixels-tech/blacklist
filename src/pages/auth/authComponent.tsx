import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthComponent: React.FC = () => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

    useEffect(() => {
        if (!accessToken) {
          navigate(`${process.env.PUBLIC_URL}/login`);
        }
      }, [accessToken]);

    return (
        <></>
    );
};

export default AuthComponent;
