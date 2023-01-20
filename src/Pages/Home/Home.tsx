
import ScheduleInfo from "../Schedule/ScheduleInfo/ScheduleInfo";

import AddNote from "../../AddNote/AddNote";

import Details from "./Details/Details";
import Header from "./Header/Header";
import Membership from "./Membership/Membership";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import Sponsorship from "./Sponsorship/Sponsorship";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Details></Details>
      <Membership></Membership>
      <Sponsorship></Sponsorship>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
