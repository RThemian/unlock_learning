import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <h1>Math Problem Page</h1>
      {children}
    </div>
  );
};

export default Layout;
