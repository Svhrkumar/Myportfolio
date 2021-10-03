import React, { useState, useEffect } from 'react';
import aditya from '../images/aditya.png';
const Resume = (props) => {
	const [months, setMonths] = useState();
	const [years, setYears] = useState();
	// const date = new Date();
	const date = new Date(); // 2009-11-10
	const month = date.toLocaleString('default', { month: 'long' });
	const year = date.getFullYear();

	useEffect(() => {
		setMonths(month);
		setYears(year);
	}, [month, year]);
	if (props.data) {
		var skillmessage = props.data.skillmessage;
		var education = props.data.education.map(function (education) {
			return (
				<div key={education.school}>
					<h3>{education.school}</h3>
					<p className='info'>
						{education.degree} <span>&bull;</span>
						<em className='date'>{education.graduated}</em>
					</p>
					<p>{education.description}</p>
				</div>
			);
		});
		var work = props.data.work.map(function (work) {
			return (
				<div key={work.company}>
					<h3>{work.company}</h3>
					<p className='info'>
						{work.title}
						<span>&bull;</span>{' '}
						<em className='date'>
							{months} {years}
						</em>
					</p>
					<p>{work.description}</p>
				</div>
			);
		});
		var skills = props.data.skills.map(function (skills) {
			var className = 'bar-expand ' + skills.name.toLowerCase();
			return (
				<li key={skills.name}>
					<span style={{ width: skills.level }} className={className}></span>
					<em>{skills.name}</em>
				</li>
			);
		});
	}

	return (
		<section id='resume'>
			<div className='row education'>
				<div className='three columns header-col'>
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<div className='row item' style={{ display: 'flex' }}>
						<div className='twelve columns'>{education}</div>
					</div>
				</div>
			</div>

			<div className='row work'>
				<div className='three columns header-col'>
					<h1>
						<span>Work</span>
					</h1>
				</div>

				<div className='nine columns main-col'>{work}</div>
			</div>

			<div className='row skill'>
				<div className='three columns header-col'>
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className='nine columns main-col'>
					<p>{skillmessage}</p>

					<div className='bars'>
						<ul className='skills'>{skills}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
