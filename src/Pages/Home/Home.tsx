
import AddNotes from "../../AddNote/AddNotes";
import Notes from "../../AddNote/Notes";
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
      <AddNotes></AddNotes>
      <Notes></Notes>
      <Details></Details>
      <Membership></Membership>
      <Sponsorship></Sponsorship>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
