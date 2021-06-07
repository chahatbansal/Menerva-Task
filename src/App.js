import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Main/MainComponent";
import LeftSection from "./leftSection";
import BottomSection from "./BottomSection";
import Button from 'react-bootstrap/Button';
const App = () => {
	return (
		<div>
			<LeftSection />
			<MainComponent />
		        <hr />
			<Button variant="primary" className="section3__button">+ Schedule Activity</Button>
                        <BottomSection />
		</div>
	);
};

export default App;
