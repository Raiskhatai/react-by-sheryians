import Lefthero from "./heroLeft"
import HeroRight from "./heroRight"

const mainContainer = (props) => {
  return (
    <div className="main-container bg-white-500 h-full flex">
      <Lefthero/>
      <HeroRight users={props.users}/>
    </div>
  );
};

export default mainContainer;
