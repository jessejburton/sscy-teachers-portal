// Higher Order Component (HOC) - A component (HOC) that renders another component

// ADVANTAGES OF HOC PATTERN
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract State

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && (
        <p>This information is private, please do not share!!!</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>You must be an administrator to view this information.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="There are the details." />,
  document.getElementById("app")
);
