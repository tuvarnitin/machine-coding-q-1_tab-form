import "./index.css";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";
import { useState } from "react";
export default function App() {
  const [activetab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Your Name",
    age: 18,
    email: "example@gamil.com",
    interests: ["music"],
    settings: "dark",
  });

  const [error, setError] = useState(false);

  const tabs = [
    {
      name: "1",
      component: Profile,
    },
    {
      name: "2",
      component: Interests,
    },
    {
      name: "3",
      component: Settings,
    },
  ];
  const ActivetabComponent = tabs[activetab].component;

  return (
    <div className="App">
      <div>
        <div className="tab-container">
          {tabs.map((tab, index) => (
            <div
              style={{
                backgroundColor: `${index <= activetab ? "#00ff00" : ""}`,
              }}
              key={index}
              className="tab"
              onClick={() =>
                !error && !data.interests.length < 1 && setActiveTab(index)
              }
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className="acitve-tab">
          <ActivetabComponent
            data={data}
            setData={setData}
            setError={setError}
          />
        </div>
        <div className="btn-container">
            <button
              onClick={() => {
                setActiveTab((prev) => prev - 1);
                setError(false);
              }}
            >
              Prev
            </button>
          {activetab < tabs.length - 1 && (
            <button
              onClick={() => {
                !error &&
                  !data.interests.length <= 1 &&
                  setActiveTab((prev) => prev + 1);
              }}
            >
              Next
            </button>
          )}
          {activetab === tabs.length - 1 && (
            <button onClick={() => !error && console.log(data)}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}
