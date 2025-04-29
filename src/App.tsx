// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminLogin from "./app/dashboard/admin-login";
import AdminPanel from "./app/dashboard/AdminPanel";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* Admin login route */}
        <Route path="/admin-login" component={AdminLogin} />

        {/* Admin panel route (only accessible after login) */}
        <Route path="/admin" component={AdminPanel} />

        {/* Your other routes here */}
      </Switch>
    </Router>
  );
};

export default App;
