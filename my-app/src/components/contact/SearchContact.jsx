import {ROS} from "../../helpers/Colors"
const SearchContact = () => {
    return (
        <div>
            <form className="d-flex" >
                <input className="form-control w-50 me-2 border-2" type="search" placeholder="جستوجو کنید" aria-label="Search" />
                    <button style={{backgroundColor:ROS}} className="btn me-2" type="submit">
                        <i className="fas fa-search text-white"/>
                    </button>
            </form>
        </div>
    )
}
export default SearchContact