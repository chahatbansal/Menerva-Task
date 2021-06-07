import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Main/MainComponent";
import LeftSection from "./leftSection";
import BottomSection from "./BottomSection";

const App = () => {
	return (
		<div>
			<LeftSection />
			<MainComponent />
      <BottomSection />
		</div>
	);
};

export default App;