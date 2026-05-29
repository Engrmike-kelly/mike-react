  import JobCard from "./jobCard";

type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
};


const JobList = () => {
    const jobs: Job[] = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Genesys Tech Hub",
            location: "Remote",
            salary: "$10,000",
        },

        {
            id: 2,
            title: "Backend Engineer",
            company: "Oxil TechHub",
            location: "Remote",
            salary: "$10,000",
        },

        {
            id: 3,
            title: "UI/UX",
            company: "Michael Tech Hub",
            location: "Enugu",
            salary: "$1,000",
        },

        {
            id: 4,
            title: "Full Stack Developer",
            company: "Code Master",
            location: "Remote",
            salary: "$10,000",
        },

        {
            id: 5,
            title: "Devops",
            company: "CloudNet",
            location: "Onsite",
            salary: "$20,000",
        },

        {
            id: 6,
            title: "Mobile Developement",
            company: "SecureTy",
            location: "Remote",
            salary: "$10,000",
        },

        {
            id: 7,
            title: "Network Engineer",
            company: "Maxtech",
            location: "Remote",
            salary: "$10,000",
        },

        {
            id: 8,
            title: "Cloud Engineer",
            company: "Tinubu APC",
            location: "Remote",
            salary: "$11",
        },
        {
            id: 9,
            title: "Branch Manager",
            company: "Wema Bank plc.",
            location: "Remote",
            salary: "$11",
        },
        {
            id: 10,
            title: "Electrical Engineer",
            company: "Dangote Company",
            location: "Remote",
            salary: "$11000",
        },



    ];

    return(
      <div>
      <h1>Job Listings</h1>

      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
          />
        ))
      ) : (
                <p>No jobs at the moment. </p>
            )}
        </div>
    );
};


export default JobList;