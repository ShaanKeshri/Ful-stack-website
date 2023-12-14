import './css/rightbar.css';
import comment from '../assets/comment-alt-solid.svg';
import pen from '../assets/pen-solid.svg';
import blacklogo from '../assets/blacklogo.svg';
function Widget() {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="right-sidebar-div">
        <img src={pen} alt="pen" width="18" />
        <p>
          Observability is key to the future of
          <br /> software (and your DevOps career)
        </p>
      </div>
      <div className="right-sidebar-div">
        <img src={pen} alt="pen" width="18" />
        <p>Podcast 374: How valuable is your screen name?</p>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div">
        <img src={comment} alt="pen" width="18" />
        <p>Review queue workflows - Final release....</p>
      </div>
      <div className="right-sidebar-div">
        <img src={comment} alt="pen" width="18" />
        <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
      </div>
      <div className="right-sidebar-div">
        <img src={blacklogo} alt="pen" width="18" />
        <p>
          Outdated Answers: accepted answer is now unpinned on Stack Overflow
        </p>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div">
        <p>
          38 Why was this spam flag declined, yet the question marked as spam?
        </p>
      </div>
      <div className="right-sidebar-div">
        <p>
          20 What is the best course of action when a user has high enough rep
          to...
        </p>
      </div>

      <div className="right-sidebar-div">
        <p>14 Is a link to the {'How to ask'} help page a useful comment?</p>
      </div>
    </div>
  );
}

export default Widget;
