import UserContext from './context/Usercontext';
import UserContextProvider from './context/UsercontextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
function App() {
  return (
    <>
    <UserContextProvider>
      <h1>Context Api Explnation</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
