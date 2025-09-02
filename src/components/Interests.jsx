const Interests = ({ data, setData, setError }) => {
    const { interests } = data;
    const handleChange = (e) => {
        setData((prev) => ({
            ...prev,
            interests: interests.includes(e.target.name)
                ? interests.filter((i) => i !== e.target.name)
                : [...interests, e.target.name],
        }));
        setError(false);
    };
    interests.length < 1 ? setError(true) : setError(false);
    return (
        <>
            <div>
                <label> Coding</label>
                <input
                    type="checkbox"
                    name="coding"
                    checked={interests.includes("coding")}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label> Music</label>
                <input
                    onChange={handleChange}
                    type="checkbox"
                    name="music"
                    checked={interests.includes("music")}
                />
            </div>
            <div>
                <label> Javascript</label>
                <input
                    type="checkbox"
                    name="javascript"
                    checked={interests.includes("javascript")}
                    onChange={handleChange}
                />
            </div>
            {interests.length < 1 && (
                <span className="error">Atleast select one</span>
            )}
        </>
    );
};
export default Interests;