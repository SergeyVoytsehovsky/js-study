'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ua', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
			ruby: '15%'
        },
        exp: '1 month'
    },
	showAgeAndLangs: function(plan) {
        const {languages} = plan['skills'],
			  {age} = plan;
		let strLang = languages.join(' ');
		let str = `Мені ${age} і я володію мовами: ${strLang.toUpperCase()}`;
		console.log(str);
		return str;
    }
};

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

function showProgrammingLangs(plan) {
	const {programmingLangs} = plan.skills;
	let str = '';

	for (let key in programmingLangs) {
		str += `Мова ${key} вивчена на ${programmingLangs[key]}\n`
	}
	console.log(str);
	return str;
}
showProgrammingLangs(personalPlanPeter);
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

