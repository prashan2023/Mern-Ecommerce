import { useRouteError } from "react-router-dom";
const Errorpage = () => {
  const Error = useRouteError();
  console.log("error",Error)
  return (
    <div className="text-white text-center">Errorpage</div>
  )
}

export default Errorpage;