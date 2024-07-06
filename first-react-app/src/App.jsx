
import Form from "./components/form"
import Card from "./components/card"
import Product from "./components/product"
import InfoBox from "./components/infoBox"
import UserImage from "./components/UserImage"
import Footer from "./components/Footer/Footer"
import Prove from "./components/proveComponent"
import Prove2 from "./components/Prove2"
import Button1 from "./components/Button"


function App() {


  return (
    
    <>

    <div className = "w-[90vw] h-[100%] bg-[blue] flex flex-col gap-[1rem] items-center p-[5%]">

      <Form/>
      
      <Card/>
      
      <Product/>
      
      <InfoBox/>
      
      <UserImage/>
      
      <Footer/>
      
      <Prove name = "julio" age = {19} id = {Math.random(1,1000)} />
      
      <Prove2 loggedIn = {false}/>
      
      <Prove2 loggedIn = {true}/>

      <Button1/>

    </div>
      
    </>
    
  )

}

export default App
