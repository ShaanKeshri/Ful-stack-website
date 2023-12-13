import '../App.css';
import Leftbar from '../components/sidebar/Leftbar';
import Rightbar from '../components/sidebar/Rightbar';
import Homemainbar from '../components/sidebar/Homemainbar';
const Home = () => {
  return (
    <div className="home-container-1">
      <Leftbar />
      <div className="home-container-2">
        <Homemainbar />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
