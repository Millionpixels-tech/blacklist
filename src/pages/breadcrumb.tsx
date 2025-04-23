// src/components/Breadcrumb.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb" className="mt-3 pl-5">
      <ol className="breadcrumb bg-light rounded p-2 flex-wrap">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={index} className="breadcrumb-item active" aria-current="page">
              {name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={routeTo}>
                {name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
