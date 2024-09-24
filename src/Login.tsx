import { useState } from 'react'
import Input from './Input';

type LoginProps = {
    testFunc: (arg: string) => void;
}

const Login: React.FC<LoginProps>= (props) => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        console.log(props.testFunc("test"));
    }

    const loginValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value)
    }

    return (
        <>
            <div>
                <Input onChange={loginValueChange} type='email' placeholder='enter email'/><br/>
                <Input onChange={loginValueChange} type="password" placeholder='enter password'/><br/>
                <button type="submit" onClick={handleSubmit}>Submit form</button>
            </div>
        </>
    )
}

export default Login;