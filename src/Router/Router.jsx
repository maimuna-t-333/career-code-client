import {
  createBrowserRouter,

} from "react-router";
import RootLayout from "../Pages/Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRouter from "../Routes/PrivateRouter";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/jobs/:id',
            Component:JobDetails,
            loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path:'/jobApply/:id',
            element:<PrivateRouter><JobApply></JobApply></PrivateRouter>
        },
        {
            path:'myapplications',
            element: <PrivateRouter><MyApplications></MyApplications></PrivateRouter>
        },
        {
            path:'addJob',
            element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
        },
        {
            path:'application/:job_id',
            element:<PrivateRouter><ViewApplication></ViewApplication></PrivateRouter>,
            loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
        },
        {
            path:'/myPostedJobs',
            element: <PrivateRouter><MyPostedJob></MyPostedJob></PrivateRouter>
        },
        {
            path:'register',
            Component: Register
        },
        {
            path:'signin',
            Component: SignIn
        }
    ]
  },
]);

export default router;