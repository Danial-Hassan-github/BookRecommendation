import { useEffect, useRef, useState } from "react";
import FilterForm from "./filterForm";
import LastReadForm from "./lastReadForm";
import { useLastReadContext } from "./lastReadContext";

const MainForm = () => {
    const lastReadButton = useRef(null);
    const filterButton = useRef(null);
    const [isLastRead, setIsLastRead] = useState(true);
    // const {lastReadBooks, setLastReadBooks } = useLastReadContext();
    // const { book1, book2, book3 } = lastReadBooks || {};

    // useEffect(()=>{
    //     alert(book1)
    // },[lastReadBooks])

    function onLastReadClick() {
        setIsLastRead(true)
        filterButton.current.style.backgroundColor = "";
        lastReadButton.current.style.backgroundColor = "white";
    }

    function onFilterClick() {
        setIsLastRead(false)
        filterButton.current.style.backgroundColor = "white";
        lastReadButton.current.style.backgroundColor = "";
    }

    return (
        <div className="row mt-4">
            <div className="col-12 p-2" style={{ backgroundColor: "#adb5bd", borderRadius: "8px" }}>
                <button className="btn col-6" ref={lastReadButton} onClick={onLastReadClick} style={{backgroundColor:"white"}}>By last read</button>
                <button className="btn col-6" ref={filterButton} onClick={onFilterClick}>By filter</button>
            </div>
            <div>
                {isLastRead ? <LastReadForm /> : <FilterForm />}
            </div>
        </div>
    );
}
export default MainForm;
