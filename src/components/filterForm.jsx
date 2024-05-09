
const FilterForm = () => {
    return (
        <>
            <form className="form-group mb-3">
                <label className="mark mt-2 mb-2">Enter at least one last read book</label>
                <div className="row pb-3">
                    <div className="col-6">
                        <label>Genere</label>
                        <select className="form-select">
                            <option selected>Any</option>
                            <option value="1">History</option>
                            <option value="2">Fiction</option>
                            <option value="3">Self development</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label>Book Length</label>
                        <select className="form-select">
                            <option selected>Any</option>
                            <option value="1">Short</option>
                            <option value="2">Medium</option>
                            <option value="3">Long</option>
                        </select>
                    </div>
                </div>

                <div className="form-floating pb-3">
                    <input className="form-control" id="Author" placeholder="Author" />
                    <label for="Author">Enter Author</label>
                </div>
                <div className="form-floating pb-3">
                    <input className="form-control" id="Publication" placeholder="Publication" />
                    <label for="Publication">Enter Publication</label>
                </div>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-primary d-flex flex-row-reverse" type="button">Search</button>
                </div>
            </form>
        </>
    );
}
export default FilterForm;