import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { PageContainer, Container, Form, InputContainer, Label, InputField, Button, TitleContainer, SignUpBtn, Link } from "./login.style";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { useSetRecoilState } from "recoil";
import authAtom from "../../store/atoms/authAtom";

import { Helmet } from "react-helmet";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setLoggedIn = useSetRecoilState(authAtom);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully");
            setLoggedIn(true);
            navigate("/dashboard")
        } catch (error) {
            toast.error(error.message, {
                position: "bottom-right",
                duration: 3000
            })

            console.log(error)
        }
    }

    return (
        <>
        <Helmet>
            <title>Login | Assignment</title>
        </Helmet>
            <Navbar />
            <PageContainer>
                <Container>
                    <TitleContainer>
                        <h2>Login</h2>
                        <p>Hi, Welcome Back 👋</p>
                    </TitleContainer>
                    <Form onSubmit={handleSubmit}>
                        <InputContainer>
                            <Label>Email</Label>
                            <InputField type="text" placeholder="E.g. johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <Label>Password</Label>
                            <InputField type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </InputContainer>
                        <Button type="submit">
                            Login
                        </Button>
                    </Form>
                    <SignUpBtn>
                        Not registered yet? <Link href="/signup">Create an account &#8599;</Link>
                    </SignUpBtn>
                </Container>
                <Toaster />
            </PageContainer>
        </>
    )
}

export default Login;