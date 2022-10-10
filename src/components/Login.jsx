import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'

export function LoginForm() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
  
    let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username");
  
      auth.signin(username, () => {
        navigate(from, { replace: true });
      });
    }
  
    return (
      <div>
        <p>Você deve estar logado para acessar {from}</p>
  
        <form onSubmit={handleSubmit}>
          <label>
            Usuário: <input name="username" type="text" />
          </label>{" "}
          <button style={{width:'100px', backgroundColor: 'black'}} type="submit">Login</button>
        </form>
      </div>
    );
  }