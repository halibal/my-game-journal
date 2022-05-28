import Navbar from './components/Navbar';
import Cards from './components/Cards';
import myData from './myData';
import './App.css';

function App() {
	const cards = myData.map(data => {
		return <Cards
			key={data.id}
			{...data}
		/>
	}

	)
	return (
		<div className="App">
			<Navbar />
			<div className='content'>
				{cards}
			</div>
		</div>
	);
}

export default App;
