import logo from "./Assets/logo-removebg-preview.png"

const Wrapper = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <img className="max-w-sm my-4" src={logo} alt="logo"/>
        {children}
    </div>
  )
}

export default Wrapper