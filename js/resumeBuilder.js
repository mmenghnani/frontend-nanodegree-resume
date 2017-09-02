/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Bio Section
var bio = {
      "name" : "Mohit Menghnani",
      "role" : "Front End Engineer",
      "contacts" : {"mobile" : "352-226-2150", "email" : "m.menghnani@gmail.com", "github" : "mmenghnani89", "twitter" : "theproductguy89", "location" : "San Francisco"},
      "welcomeMessage" : "I am the best front end Engineer",
      "skills" : ["swimming","lawn tennis","clubbing" ],
      "biopic" : "https://goo.gl/eDsbmR"
      // "display" :

};

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedBioPic);

var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);
$("#header").append(HTMLskillsStart);

for(var i = 0;i < 3; i++) //Print skills
{
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
    $("#header").append(formattedSkills);
}


var work = {
    "jobs" : [{"employer" : "AppDirect", "title" : "Senior Engineer", "dates" : "Feb 2015 to present","location" : "Sunnyvale, CA","description" : "asdsadasd asdsad asdsdsa sadsadasd"},
    { "employer" : "Citrix", "title" : "Engineer", "dates" : "July 2012 to Feb 2015", "location" : "Fort Lauderdale,FL","description" : "asdsadasd asdsad asdsdsa sadsadasd"},
    {"employer" : "Sumtotal","title" : "Junior Engineer","dates" : "July 2011 to June 2012","location" : "Syracuse, NY","description" : "asdsadasd asdsad asdsdsa sadsadasd"}]
  //  "display" : "true"
    };

/*var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';acl
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>'; */

$("#workExperience").append(HTMLworkStart);

for(var i = 0; i<3 ;i ++){
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    $(".work-entry").append(formattedworkEmployer);

    var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    $(".work-entry").append(formattedworkTitle);

    var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
    $(".work-entry").append(formattedworkDates);

    var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
    $(".work-entry").append(formattedworkLocation);

    var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
    $(".work-entry").append(formattedworkDescription);
}

var projects = {

    "project" : [
                {"title" : "Library Management system","dates" : "July 2012 to Feb 2015", "description" : "asdasdasd asdasd adsasdad",
                "images" : ["https://goo.gl/a2yj7s","https://goo.gl/a2yj7s","https://goo.gl/a2yj7s"]},
                {"title" : "File Transactions in the cloud","dates" : "Feb 2015 to present", "description" : "asdasd asdasd asdasdasdasd",
                "images" : ["https://goo.gl/a2yj7s","https://goo.gl/a2yj7s","https://goo.gl/a2yj7s","https://goo.gl/a2yj7s"]}]

};

$("#projects").append(HTMLprojectStart);

for(var i = 0; i < 2; i++){

var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
    $(".project-entry").append(formattedProjectTitle);

var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
    $(".project-entry").append(formattedProjectDates);

var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
    $(".project-entry").append(formattedProjectDescription);

var j = 0;
while(projects.project[i].images[j])
{
    var formattedProjectImages =  HTMLprojectImage.replace("%data%",projects.project[i].images[j]);
    $(".project-entry").append(formattedProjectImages);
    j++; }
}

 var education = {
           "schools" : [{"name":"University of Florida","location":"Gainesville","degree":"Masters in Computer Science","dates":"August 2010 to May 2012"},
                         {"name":"IIIT Allahabad","location":"Allahabad","degree":"B.Tech(IT)","dates":"August 2006 to May 2010"}],
           "onlineCourses" : [{"title":"Java Programming","school":"U of Michigan","dates":"July 2014 to July 2015","URL":"https://www.umichigan.edu"},
           {"title":"FrontEnd Nanodegree","school":"Udacity","dates":"July 2017 to December 2017","URL":"https://www.udacity.com"}]
           //"display": true
       };

$("#education").append(HTMLschoolStart);

for(var i = 0; i<2; i++){
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
    $(".education-entry").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
    $(".education-entry").append(formattedSchoolLocation);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree)
    $(".education-entry").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates)
    $(".education-entry").append(formattedSchoolDates);
}

$(".education-entry").append(HTMLonlineClasses);

for(var i=0; i<2; i++){

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
    $(".education-entry").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
    $(".education-entry").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
    $(".education-entry").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].URL)
    $(".education-entry").append(formattedOnlineURL);
}











