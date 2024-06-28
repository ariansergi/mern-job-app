import { Outlet, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar, Loading } from "../components"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user")
    return data;
  } catch (error) {
    redirect("/")
  }
}

const DashboardContext = createContext()



const DashboardLayout = () => {
  const { user } = useLoaderData()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const isPageLoading = navigation.state === "loading"
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme)

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle("dark-theme", newDarkTheme)
    localStorage.setItem("darkTheme", newDarkTheme)
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const logoutUser = async () => {
    navigate("/")
    await customFetch.get("/auth/logout")
    toast.success("Logged out successfully")
  }
  return (
    <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout