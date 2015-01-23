// header start
var bio = {
	"info" : {
		"name" : "Blake Wang",
		"role" : "World Dictator",
		"pic" : "images/resume_pic_2.jpg"
	}
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.info.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.info.name);
	var formattedPic = HTMLbioPic.replace("%data%", bio.info.pic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedPic);
}
// header end

// skills start
var skills = {
	"skills" : {
		"s1" : "Raditude",
		"s2" : "Extremity",
		"s3" : "Awesome-Sauciness"
	}
};

skills.display = function() {
	$("#header").append(HTMLskillsStart);

	for (s in skills.skills) {
		var formattedSkill = HTMLskills.replace("%data%", skills.skills[s]);
		$("#skills").append(formattedSkill);
	}
}
// skills end

// workExperience start


var work = {
	"jobs" : {
		"j0" : {
			"employer" : "DDSTUDIO",
			"title" : "Design Engineer",
			"dates" : "October 2012 - present",
			"location" : "Carlsbad, CA",
		},
		"j1" : {
			"employer" : "InTouch Health",
			"title" : "Mechanical Engineering Intern",
			"dates" : "October 2011 - October 2012",
			"location" : "Goleta, CA",
		},
		"j2" : {
			"employer": "Vector Marketing",
			"title": "Field Sales Manager",
			"dates" : "September 2008 - October 2011",
			"location" : "Goleta, CA",
		}
	}
};

work.jobs.j0.description = [
"- Currently work alongside industrial design and project management to generate solutions that are cost effective, functional, beautiful, and maintain design intent",
"- Work on products across many industries such as consumer electronics including wearables, medical, defense, video gaming, and more",
"- Communicate regularly with clients and vendors (including vendors in China)",
"- Well versed in SolidWorks",
"t- Solid modeling",
"t- Complex surfacing",
"t- Large assemblies",
"t- Generating technical drawings",
"t- Parametrically associative referencing methods",
"t- Finite element analysis (FEA)",
"t- SolidWorks PDM",
"t- PhotoView 360",
"- Experience with Pro/Engineer",
"- Strong understanding of design for manufacturing/prototyping processes such as injection molding, thermoforming, CNC machining, SLA, casting, sheet metal fabrication, ultrasonic welding, and more",
"- Extensive experience at many levels of prototyping",
"t- Functional models and test fixtures",
"t- Visual models for aesthetic and ergonomic validation",
"t- Fit check assemblies",
"t- Proof of scale models",
"t- Much experience 3D printing",
"t- 2D model making using laser etching"
];

work.jobs.j1.description = [
"- Worked with the mechanical engineering team designing parts, assemblies, and test fixtures for remote presence robots",
"- Ran FEA and motion analysis to system optimization",
"- Collaborated with Essential Designs, an external ID firm on visual aspects of user-facing components"
]

work.jobs.j2.description = [
"- Interviewed, trained, and managed team of sales people"
]

work.display = function() {
	for(job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedJob = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		$(".work-entry:last").append(formattedJob);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);

		$(".work-entry:last").append('<br>');

		for (d in work.jobs[job].description) {
			if (work.jobs[job].description[d].charAt(0) === 't') {
				var formattedLine = HTMLworkIndentedBullets.replace("%data%", work.jobs[job].description[d].substring(1));
			}
			else {
				var formattedLine = HTMLworkBullets.replace("%data%", work.jobs[job].description[d]);
			}
			$(".work-entry:last").append(formattedLine);
		}
	}
}
// workExperience end

// projects start
var projects = {
	"projects" : {
		"p1" : {
			"title" : "ROVA",
			"dates" : "January 2013 - October 2013",
			"description" : "Bad-ass walker"
		},
		"p2" : {
			"title" : "AccuVax",
			"dates" : "April 2012 - January 2013",
			"description" : "Bad-ass vaccine management system"
		},
		"p3" : {
			"title" : "VGT",
			"dates" : "April 2012 - January 2013",
			"description" : "Bad-ass video gaming system"
		}
	}
};

projects.display = function() {
	for(p in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
	}
}
// projects end

// education start
var education = {
	"schools": {
		"s1" : {
			"name" : "UCSB",
			"location" : "Goleta, CA",
			"degree" : "BA",
			"major" : "Physics",
			"dates" : "2008 - 2012"
		},
		"s2" : {
			"name" : "SDCCD",
			"location" : "San Diego, CA",
			"degree" : "",
			"major" : "Computer Science",
			"dates" : "2014"
		}
	}
};

education.display = function() {
	for (s in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[s].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[s].major);
		
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);

		if (education.schools[s].degree.length != 0) {
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
			$(".education-entry:last").append(formattedDegree);
		}

	}
}
// education end

// map start
displayMap = function() {
	$("#mapDiv").append(googleMap);
}
// map end

// letsConnect start
var letsConnect = {
	'contactInfo' : {
		'mobile' : '(805) 252-2785',
		'email' : 'blakecwang@gmail.com',
		'location' : 'San Diego, CA'
	}
}

letsConnect.display = function() {
	var formattedMobile = HTMLmobile.replace('%data%', letsConnect.contactInfo.mobile);
	var formattedEmail = HTMLemail.replace('%data%', letsConnect.contactInfo.email);
	var formattedAddress1 = HTMLlocation.replace('%data%', letsConnect.contactInfo.location);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedAddress1);
}
// letsConnect end

// display controls
bio.display();
skills.display();
work.display();
projects.display();
education.display();
displayMap();
letsConnect.display();


// function inName(inputName) {

// 	var nameArray = inputName.trim().split(" ");

// 	return nameArray[0].charAt(0).toUpperCase() +
// 		nameArray[0].substring(1).toLowerCase() + ' ' +
// 		nameArray[1].toUpperCase();
// }
// $("#main").append(internationalizeButton);
