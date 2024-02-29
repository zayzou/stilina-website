import {FormInput, SubmitBtn} from "../components/index.js";
import {Form} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <section className="h-screen grid place-items-center">
                <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                    <h4 className="text-center text-3xl font-bold">Login</h4>
                    <FormInput label="Adresse e-mail" name="email" type="email" defaultValue="abcd@email.com"/>
                    <FormInput label="Mot de passe" name="password" type="password" defaultValue="**********"/>
                    <SubmitBtn style="btn-primary" text="Se connecter"/>
                </Form>
            </section>

        </div>
    )
}

export default Login;