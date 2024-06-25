import Navbar from "../Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { PageContainer, Container, Form, InputContainer, Label, InputField, Button, TitleContainer, SignUpBtn, Link } from "./signup.style";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Signup = () => {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname
                })

                toast.success("User registered successfully", { position: "bottom-right", duration: 3000 })
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");

                navigate("/login");
            }
        } catch (error) {
            toast.error(error.message, { position: "bottom-right" })
            console.log(error.message)
        }
    }

    return (
        <>
        <Helmet>
            <title>Signup | Assignment</title>
        </Helmet>
            <Navbar />
            <PageContainer>
                <Container>
                    <TitleContainer>
                        <h2>Create an account</h2>
                        <p>Start your journey with us👋</p>
                    </TitleContainer>
                    <Form onSubmit={handleSubmit}>
                        <InputContainer>
                            <Label>First Name</Label>
                            <InputField type="text" placeholder="John" value={fname} onChange={(e) => setFirstName(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <Label>Last Name</Label>
                            <InputField type="text" placeholder="Doe" value={lname} onChange={(e) => setLastName(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <Label>Email</Label>
                            <InputField type="text" placeholder="E.g. johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <Label>Password</Label>
                            <InputField type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </InputContainer>
                        <Button>
                            Create my account
                        </Button>
                    </Form>
                    <SignUpBtn type="submit">
                        Already have an account? <Link href="/login">Signin &#8599;</Link>
                    </SignUpBtn>
                </Container>
                <Toaster />
            </PageContainer>
        </>
    )
}

export default Signup;