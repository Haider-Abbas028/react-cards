import Card from "./components/card.jsx";

const jobsData = [
  {
    id: 1,
    company: "Google",
    posted: "30 days ago",
    role: "Senior Software Engineer",
    type: ["Full Time", "Flexible Schedule"],
    salary: "$150 per hour",
    location: "Mountain View",
    logo: "https://th.bing.com/th/id/OIP._YRByM7l5SCayIje5TRfuwHaHj?w=146&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 2,
    company: "Amazon",
    posted: "10 days ago",
    role: "Backend Developer",
    type: ["Full Time", "Remote"],
    salary: "$120 per hour",
    location: "Seattle",
    logo: "https://th.bing.com/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?w=312&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 3,
    company: "Netflix",
    posted: "5 days ago",
    role: "Frontend Engineer",
    type: ["Full Time", "Hybrid"],
    salary: "$140 per hour",
    location: "Los Gatos",
    logo: "https://th.bing.com/th/id/OIP.eR2Nzli9sN6rbRI3DXY3TgHaHk?w=130&h=150&c=6&o=7&pid=1.7&rm=3",
  },
  {
    id: 4,
    company: "Apple",
    posted: "15 days ago",
    role: "iOS Developer",
    type: ["Full Time"],
    salary: "$160 per hour",
    location: "Cupertino",
    logo: "https://th.bing.com/th/id/OIP.af1K8dHFntsP2ZzF9V5vnQHaJF?w=161&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 5,
    company: "Meta",
    posted: "20 days ago",
    role: "React Developer",
    type: ["Full Time", "Remote"],
    salary: "$135 per hour",
    location: "Menlo Park",
    logo: "https://th.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 6,
    company: "Microsoft",
    posted: "12 days ago",
    role: "Cloud Engineer",
    type: ["Full Time"],
    salary: "$145 per hour",
    location: "Redmond",
    logo: "https://th.bing.com/th?q=Microsoft+Logo+Clear+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247",
  },
  {
    id: 7,
    company: "LinkedIn",
    posted: "8 days ago",
    role: "Data Engineer",
    type: ["Full Time", "Hybrid"],
    salary: "$130 per hour",
    location: "Sunnyvale",
    logo: "https://th.bing.com/th/id/OIP.1R2nLh9Gdbpa75yVbtTFYgHaHY?w=193&h=192&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 8,
    company: "Uber",
    posted: "3 days ago",
    role: "Mobile Engineer",
    type: ["Contract"],
    salary: "$110 per hour",
    location: "San Francisco",
    logo: "https://th.bing.com/th/id/OIP.6JQ5vMSGPD4kqPOZrt28GAHaHa?w=218&h=218&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 9,
    company: "Airbnb",
    posted: "6 days ago",
    role: "Full Stack Developer",
    type: ["Full Time", "Remote"],
    salary: "$125 per hour",
    location: "San Francisco",
    logo: "https://th.bing.com/th/id/OIP.rXvLV-J4c4lmhi87zpxizAHaIM?w=150&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 10,
    company: "Twitter (X)",
    posted: "2 days ago",
    role: "Software Engineer",
    type: ["Full Time"],
    salary: "$115 per hour",
    location: "San Francisco",
    logo: "https://th.bing.com/th/id/OIP.ZweGejPwbT5wwshQ2-8qUQHaHa?w=189&h=189&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 11,
    company: "Oracle",
    posted: "18 days ago",
    role: "Database Engineer",
    type: ["Full Time"],
    salary: "$140 per hour",
    location: "Austin",
    logo: "https://th.bing.com/th/id/OIP.lLos5sneIJP5H5uTzqmCNQHaE8?w=274&h=183&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 12,
    company: "Intel",
    posted: "25 days ago",
    role: "Hardware Engineer",
    type: ["Full Time"],
    salary: "$150 per hour",
    location: "Santa Clara",
    logo: "https://th.bing.com/th/id/OIP.eV48Ci0eAK33juQDcuOTRAHaHa?w=170&h=150&c=6&o=7&pid=1.7&rm=3",
  },
];

const App = () => {
  return (
    <div className="Parent">
      {jobsData.map(function (elem, idx) {
        return (
          <Card
            company={elem.company}
            posted={elem.posted}
            role={elem.role}
            type={elem.type}
            salary={elem.salary}
            location={elem.location}
            logo={elem.logo}
          />
        );
      })}
    </div>
  );
};

export default App;
