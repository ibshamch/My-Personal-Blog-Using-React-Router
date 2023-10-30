import Name from "./Components/name/name.component";
import Contact from "./Components/contact-number/contact.component";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Routes/navigation/navigation.component";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            path="name"
            element={<Name name="Ibsham" NameComponent="Name" />}
          />
          <Route path="number" element={<Contact contact="03224064806" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
