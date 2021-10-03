import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

const App = () => {
	const [state, setState] = useState({
		foo: 'bar',
		resumeData: {},
	});

	const getResumeData = () => {
		$.ajax({
			url: '/resumeData.json',
			dataType: 'json',
			cache: false,
			success: function (data) {
				setState({ resumeData: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(err);
				alert(err);
			},
		});
	};

	useEffect(() => {
		getResumeData();
	}, []);

	return (
		<div className='App'>
			<Header data={state.resumeData.main} />
			
			<About data={state.resumeData.main} />
			<Resume data={state.resumeData.resume} />
			<Portfolio data={state.resumeData.portfolio} />

			<Contact data={state.resumeData.main} />
			<Footer data={state.resumeData.main} />
		</div>
	);
};

export default App;
