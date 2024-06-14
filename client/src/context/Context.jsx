import { useContext } from "react"
import { UserDataContext } from "./App"
import "./App.css";

function HeadderUserName() {
  const context = useContext(UserDataContext);
  return (
    <div>
			<h1>{context.user.name}</h1>
		</div>
  )

}
export default HeadderUserName;
