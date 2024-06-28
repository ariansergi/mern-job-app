import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
const StatsContainer = ({ defaultStats }) => {
    const stats = [
        {
            title: "pending applications",
            count: defaultStats?.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: "#f59e0b",
            bcg: "#fef3c7"
        },
        {
            title: "interview scheduled",
            count: defaultStats?.interview || 0,
            icon: <FaCalendarCheck />,
            color: "#647acb",
            bcg: "#e0e8f9"
        },
        {
            title: "jobs declined",
            count: defaultStats?.pending || 0,
            icon: <FaBug />,
            color: "#d66a6a",
            bcg: "#ffeeee"
        }
    ]
    return (
        <Wrapper>
            {
                stats.map((stat, index) => (
                    <StatItem key={index} {...stat} />
                ))
            }
        </Wrapper>
    )
}

export default StatsContainer