import React from 'react';

import withAuthorization from "./withAuthorization";

const AdminPage = () =>
  <div>
    {authUser =>
      <div>
        <h1>Admin</h1>
        <p>Restricted area! Only users with the admin rule are authorized.</p>
      </div>
    }
  </div>

const authCondition = (authUser) => !!authUser && authUser.role === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);