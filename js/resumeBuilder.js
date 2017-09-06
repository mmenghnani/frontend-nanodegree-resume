/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Bio Section starts here
var bio = {
    "name": "Mohit Menghnani",
    "role": "Front End Engineer",
    "contacts": {
        "mobile": "352-226-2150",
        "email": "m.menghnani@gmail.com",
        "github": "mmenghnani89",
        "twitter": "theproductguy89",
        "location": "San Francisco"
    },
    "welcomeMessage": "I am the best front end Engineer",
    "skills": ["swimming", "lawn tennis", "clubbing"],
    "biopic": "https://goo.gl/eDsbmR",
    "displayBio": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);
        $("#header").append(HTMLskillsStart);

        //Print skills
        var i = 0;
        while (bio.skills[i]) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkills);
            i++;
        }
    }

};



//Work Experience section starts here
var work = {
    "jobs": [{
            "employer": "AppDirect",
            "title": "Senior Engineer",
            "dates": "Feb 2015 to present",
            "location": "Sunnyvale, CA",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ornare quam. Nunc eros nunc, convallis tempor eros at, facilisis finibus magna. Curabitur finibus elementum leo, in vulputate libero efficitur ut. Ut in lacus metus. Aliquam vitae justo id est aliquam vehicula. Nam rhoncus ornare nisl in dapibus. Vivamus eget commodo quam. Ut non turpis ante. Cras dictum ex et risus scelerisque tempus. Ut dapibus eros sit amet mi commodo, id tristique nulla dignissim."
        },
        {
            "employer": "Citrix",
            "title": "Engineer",
            "dates": "July 2012 to Feb 2015",
            "location": "Fort Lauderdale,FL",
            "description": "Donec in nisl eu mi interdum aliquam. Suspendisse justo tellus, lobortis eget nulla vel, varius dapibus nisi. Maecenas imperdiet elit molestie nulla luctus efficitur. Proin id quam eget enim tempus lobortis. Nulla faucibus, diam quis ultricies lacinia, sapien odio malesuada lorem, ut mattis magna odio nec justo. "
        },
        {
            "employer": "Sumtotal",
            "title": "Junior Engineer",
            "dates": "July 2011 to June 2012",
            "location": "Syracuse, NY",
            "description": "Nullam sed est finibus, tincidunt nibh id, molestie magna. Etiam tempus fermentum nulla non tincidunt. Aenean iaculis eros placerat nulla ultricies, ut dapibus tellus imperdiet. Mauris sed feugiat diam. Nullam nulla arcu, fermentum at rutrum nec, ultricies sed orci. Cras sed ligula eros."
        }
    ],
    "displayWork": function() {
        $("#workExperience").append(HTMLworkStart);
        var i = 0;
        while (work.jobs[i]) {
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var substring = formattedworkEmployer + formattedworkTitle; //Joining employer name and title in one string before displaying them so that they are added within the same element
            $(".work-entry").append(substring);

            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry").append(formattedworkDates);

            var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry").append(formattedworkLocation);

            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(formattedworkDescription); //Work
            i++;
        }
    }
};


//Projects Section Starts here
var projects = {
    "project": [{
            "title": "Library Management System",
            "dates": "Feb 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac ornare quam. Nunc eros nunc, convallis tempor eros at, facilisis finibus magna. Curabitur finibus elementum leo, in vulputate libero efficitur ut. Ut in lacus metus.",
            "images": ["https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s"]
        },
        {
            "title": "File Transactions in the Cloud",
            "dates": "Present",
            "description": "Nullam sed est finibus, tincidunt nibh id, molestie magna. Etiam tempus fermentum nulla non tincidunt. Aenean iaculis eros placerat nulla ultricies, ut dapibus tellus imperdiet. Mauris sed feugiat diam. Nullam nulla arcu, fermentum at rutrum nec, ultricies sed orci.",
            "images": ["https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s", "https://goo.gl/a2yj7s"]
        }
    ],
    "displayProjects": function() {
        $("#projects").append(HTMLprojectStart);
        var i = 0;
        while (projects.project[i]) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
            $(".project-entry").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
            $(".project-entry").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
            $(".project-entry").append(formattedProjectDescription);

            var j = 0;
            while (projects.project[i].images[j]) {
                var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[i].images[j]);
                $(".project-entry").append(formattedProjectImages);
                j++;
            }
            i++;
        }
    }
};


//Education Section Starts here
var education = {
    "schools": [{
            "name": "University of Florida",
            "location": "Gainesville",
            "degree": "Masters in Computer Science",
            "majors": ["Computer Science", "Electronics"],
            "dates": "May 2012"
        },
        {
            "name": "IIIT Allahabad",
            "location": "Allahabad",
            "majors": ["Information Technology", "Management"],
            "degree": "Bachelors in Information Technology",
            "dates": "August 2006 to May 2010"
        }
    ],
    "onlineCourses": [{
            "title": "Java Programming",
            "school": "University of Michigan",
            "dates": "July 2015",
            "URL": "https://www.umichigan.edu"
        },
        {
            "title": "FrontEnd Nanodegree",
            "school": "Udacity",
            "dates": "December 2017",
            "URL": "https://www.udacity.com"
        }
    ],
    "displayEducation": function() {
        $("#education").append(HTMLschoolStart);
        var i = 0;
        while (education.schools[i]) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var substring = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry").append(substring);


            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry").append(formattedSchoolLocation);


            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry").append(formattedSchoolDates); //Education - Including colleges

            var k = 0;
            while (education.schools[i].majors[k]) {
                var formattedMajorName = HTMLschoolMajor.replace("%data%", education.schools[i].majors[k]);
                $(".education-entry").append(formattedMajorName);
                k++;
            }
            i++;
        }

        //Online Classes Section Starts here
        $(".education-entry").append(HTMLonlineClasses);
        var j = 0;
        while (education.schools[j]) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var substring = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry").append(substring);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            $(".education-entry").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].URL)
            $(".education-entry").append(formattedOnlineURL); //Education - Online Classes

            j++;
        }
    }

};
bio.displayBio();
education.displayEducation();
projects.displayProjects();
work.displayWork();


//Adding Maps
$("#mapDiv").append(googleMap);