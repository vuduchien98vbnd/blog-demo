import './App.css';
import Header from './common/components/Header/header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage/homePage';
import AdminPage from './pages/AdminPage/adminPage';
import LoginPage from './pages/LoginPage/loginPage';
import NotFoundPage from './pages/NotFoundPage/notFoundPage';
import BlogPost from './pages/HomePage/BlogPost/blogPost';
import BlogList from './pages/HomePage/BlogList/blogList';
import BlogTable from './pages/AdminPage/BlogTable/blogTable';
import StatisticPage from './pages/AdminPage/Statistic/statisticPage';
import RegisterPage from './pages/RegisterPage/registerPage';
import FavoritePage from './pages/FavoritePage/favoritePage';
import AddArticle from './pages/AdminPage/BlogTable/AddArticle/addArticle';
import UpdateArticle from './pages/AdminPage/BlogTable/UpdateArticle/updateArticle';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children:[
        {path:"/",
          element:  <BlogList/>  
        },
        {path:"/blog-post/:id",
          element:  <BlogPost/>  
        }
      ]
      
    },
    {
      path: "/admin",
      element: <AdminPage />,
      children:[
        {path:"table",
          element:  <BlogTable/> ,
          children: [
            
            {path:"update-article",
            element:  <UpdateArticle/>  
            },
          ]
        },
        {path:"add-article",
            element:  <AddArticle/>  
            },
        {path:"statistic",
          element:  <StatisticPage/>
        }
      ]
      
    },
    {
      path: "/login",
      element: <LoginPage />,
      
    },
    {
      path: "/register",
      element: <RegisterPage />,
      
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
      
    },
    {
      path: "/*",
      element: <NotFoundPage />,
      
    },
  ]);
  return (
    <div className="App">
      <RouterProvider
    router={router}
   
  />
    </div>
  );
}

export default App;
