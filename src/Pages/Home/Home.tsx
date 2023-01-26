import Profile from "../Profile/Profile";
import AddNotes from "../../AddNote/AddNotes";
import Notes from "../../AddNote/Notes";

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
    <div className="max-w-[1400px] mx-auto">
      <Header></Header>
      <Services></Services>
      <AddNotes></AddNotes>
      <Notes></Notes>
      <Details></Details>
      <Membership></Membership>
      <Sponsorship></Sponsorship>
      <Reviews></Reviews>

      <Profile />
    </div>
  );
};

export default Home;
