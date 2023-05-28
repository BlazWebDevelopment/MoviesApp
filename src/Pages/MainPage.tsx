import Movies from "../components/Movies";
import useAuth from "../hooks/useAuth";

const MainPage = () => {
  const { authUser } = useAuth();

  return (
    <div>
      {authUser ? <Movies /> : <h2>You need to be logged in to see more!</h2>}
    </div>
  );
};

export default MainPage;
