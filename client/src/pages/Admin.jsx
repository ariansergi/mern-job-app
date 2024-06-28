import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components';


export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats')
    return response.data
  } catch (error) {
    toast.error("You are not authorized to view this page")
    return redirect("/dashboard")
  }
}

const Admin = () => {
  const { users, jobs } = useLoaderData()
  return (
    <Wrapper>
      <StatItem count={users} title="Current Users" icon={<FaSuitcaseRolling />} color="#f1c40f" bcg="#f9e79f" />
      <StatItem count={jobs} title="Total Jobs" icon={<FaCalendarCheck />} color="#e74c3c" bcg="#f5b7b1" />
    </Wrapper>
  )
}

export default Admin