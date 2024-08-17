import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup=()=>{
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox onchange={(e)=>{setFirstName(e.target.value);}}
                placeholder="John" label={"First Name"}/>
                <InputBox onchange={(e)=>{setLastName(e.target.value)}}
                placeholder="Doe" label={"Last Name"}/>
                <InputBox onchange={(e)=>{setUserName(e.target.value)}}
                placeholder="samisha@gmail.com" label={"Email"}/>
                <InputBox onchange={(e)=>{setPassword(e.target.value)}} 
                placeholder="123456" label={"Password"}/>
                <div className="pt-4">
                    <Button onclick={async()=>{
                         const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstname,
                            lastname,
                            password
                        });
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                    }
                       
                    } label={"Sign up"}></Button>
                </div>
                <BottomWarning label={"Already have an account"} buttonText={"Sign in"} to={"/signin"} />
            </div>
            
        </div>
    </div>
}