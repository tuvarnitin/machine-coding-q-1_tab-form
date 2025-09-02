export default function Settings ({ data, setData }) {
    const { settings } = data;
    const handleClick = (e) => {
        setData((prev) => ({
            ...prev,
            settings: e.target.name,
        }));
    };
    return (
        <>
            <div>
                <label>Dark</label>
                <input
                    type="radio"
                    name="dark"
                    onChange={handleClick}
                    checked={settings === "dark" ? true : false}
                />
            </div>
            <div>
                <label>Light</label>
                <input
                    type="radio"
                    name="light"
                    checked={settings === "light" ? true : false}
                    onChange={handleClick}
                />
            </div>
        </>
    );
};
