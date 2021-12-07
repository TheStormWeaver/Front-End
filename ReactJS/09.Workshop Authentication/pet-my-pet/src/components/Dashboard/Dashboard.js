import { Routes, Route, Link } from "react-router-dom";

import PetList from "../PetList/PetList"

const Dashboard = () => {
  return (
    <section id="dashboard-page" className="dashboard">
      <h1>Dashboard</h1>

      <nav>
        <Link to="types">Types</Link>
      </nav>

      <section>
      <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/types" element={<p>These are the types ...</p>} />
        </Routes>
      </section>

    </section>
  );
};

export default Dashboard;
