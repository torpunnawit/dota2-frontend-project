import { Link } from "react-router-dom"


function NavBar() {

    return (
        <div className="mb-3 text-white">
            <div className="p-5 flex justify-around ">
                <Link to={"/"} ><img
                    className="w-full h-10 align-top"
                    src="https://img.icons8.com/fluent/512/dota.png"></img></Link>
                <Link to={"/hero"}>Hero</Link>
                <Link to={"/item"}>Item</Link>
                <Link to={"/teams"}>Teams</Link>
                <Link to={"/favorite"}>Favorite</Link>
            </div>
        </div>
    );
}
export default NavBar