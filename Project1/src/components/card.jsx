import { Bookmark } from "lucide-react";

const card = (props) => {
  return (
    <div className="card-st">
      <div>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>
            Save <Bookmark size={20} />
          </button>
        </div>
        <div className="center">
          <div>
            <p>{props.company}</p>
            <span> {props.posted} </span>
          </div>
          <div>
            <h2>{props.role}</h2>
          </div>
          <div>
            {props.type.map((t, i) => (
              <span className="spn" key={i}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bottom">
          <div className="content">
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <div className="btmbtn">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
