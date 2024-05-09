import BookCards from "./bookCards";
import { LastReadProvider } from "./lastReadContext";
import LastReadForm from "./lastReadForm";
import MainForm from "./mainForm";
import { useState } from "react";

const Home = () => {
    return (
        <LastReadProvider>
            <div className="container row mx-auto">
                <div className="d-inline col-sm-10 col-md-4 col-lg-3 col-xxl-3" style={{ background: "white", borderRadius: "20px", height: "fit-content"}}>
                    <MainForm />
                </div>
                <div className="col-8 d-flex flex-column align-items-around">
                    <BookCards />
                </div>
            </div>
        </LastReadProvider>
    );
}
export default Home;
