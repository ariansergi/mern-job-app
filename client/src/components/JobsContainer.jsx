import Wrapper from "../assets/wrappers/JobsContainer"
import { useAllJobsContext } from "../pages/AllJobs"
import { Job } from "./Job"
import PageBtnContainer from "./PageBtnContainer"



const JobsContainer = () => {
    const { data } = useAllJobsContext()
    console.log(data);
    const { jobs, totalJobs, numOfPages } = data
    if (jobs?.length === 0) return <Wrapper><h2>No jobs to display...</h2></Wrapper>
    return (
        <Wrapper>
            {totalJobs} job{totalJobs > 1 && 's'} found
            <div className="jobs">
                {jobs.map((job) => {
                    return <Job key={job._id} job={job} />
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    )
}

export default JobsContainer