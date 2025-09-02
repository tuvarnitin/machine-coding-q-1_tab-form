const Profile = ({ data, setData, setError }) => {
    const { name, age, email } = data;
    setError(false);
    const handleInputChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
            <div>
                <label>Name : </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        handleInputChange(e);
                        e.target.value.length < 3 ? setError(true) : setError(false);
                    }}
                    name="name"
                />
            </div>
            {name.length < 3 && (
                <span className="error">Age must have atleast 2 characters </span>
            )}
            <div>
                <label>Age : </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => {
                        handleInputChange(e);
                        e.target.value < 18 ? setError(true) : setError(false);
                    }}
                    name="age"
                />
            </div>
            {age < 18 && <span className="error">Age must be above 18</span>}
            <div>
                <label>Email : </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        handleInputChange(e);
                        e.target.value.length < 3 ? setError(true) : setError(false);
                    }}
                    name="email"
                />
            </div>
            {email.length < 2 && (
                <span className="error">Email must have atleast 2 charaters</span>
            )}
        </>
    );
};

export default Profile