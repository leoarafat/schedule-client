
import React from "react";
import Header from "./Header/Header";
import Membership from "./Membership/Membership";

import Services from "./Services/Services";

import Sponsorship from "./Sponsorship/Sponsorship";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Membership></Membership>
      <Sponsorship></Sponsorship>
    </div>
  );
};

export default Home;
