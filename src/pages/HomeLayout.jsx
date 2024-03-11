import {Outlet, useNavigation} from "react-router-dom";
import {Header, Navbar, Footer} from "../components";
import {Loading} from "../components/index.js";

function HomeLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading"
    return (
        <>
            <Header/>
            <Navbar/>
            {isLoading ? <Loading/> :
                (<section className="align-element py-20">
                    <Outlet/>
                </section>)
            }
            <Footer/>
        </>
    );
}

export default HomeLayout;
