function Starsrating({rating}) {
    const numberOfStar = [null, "one", "two", "three", "four", "five"];
    return (
        <div className={numberOfStar[rating]}>
        <i className="fa-solid fa-star"></i>
        </div>
    );
}
export default Starsrating;