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

for(var i = 0;i < 3; i++)
{
var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
$("#header").append(formattedSkills);
}

 var education = {
           "schools" : [{"name":"University of Florida","location":"Gainesville","degree":"Masters in Computer Science","dates":"August 2010 to May 2012"},
                         {"name":"IIIT Allahabad","location":"Allahabad","degree":"B.Tech(IT)","dates":"August 2006 to May 2010"}],
           "onlineCourses" : [{"title":"Java Programming","school":"U of Michigan","dates":"July 2014 to July 2015"},{"title":"FrontEnd Nanodegree","school":"Udacity","dates":"July 2017 to December 2017"}]
           //display: function
       };

var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[0].name);
$("#education").append(formattedSchoolName);

var work = {[{
    "jobs" : [{"employer" : "AppDirect", "title" : "Senior Engineer", "dates" : "Feb 2015 to present","location" : "sunnyvale","description" : "asdsadasd asdsad asdsdsa sadsadasd"},
    { "employer" : "Citrix", "title" : "Engineer", "dates" : "July 2012 to Feb 2015", "location" : "Florida","description" : "asdsadasd asdsad asdsdsa sadsadasd"},
    {"employer" : "Sumtotal","title" : "Junior Engineer","dates" : "July 2011 to June 2012","location" : "NY","description" : "asdsadasd asdsad asdsdsa sadsadasd"}],
    "display" : "true"};



/*var bio = {
//age : 28,
degree : "masters in computer engineering",
interests : "front end",
skills : ["programming","swimming"]
};

$("#header").append(bio.age);
$("#header").append(bio.degree);
$("#header").append(bio.interests);


*/

//$.append(HTMLworkStart);
var formattedWorkStart = "January 2010 to present";

var formattedEmployer = HTMLworkEmployer.replace("%data%","AppDirect");
//$("#workExperience").append(formattedEmployer);
$(formattedEmployer).insertAfter("#workExperience");
var formattedWorkTitle = HTMLworkTitle.replace("%data%","Senior Engineer");

//var  = ' - %data%</a>';

var HTMLworkDates = '<div class="date-text">%data%</div>';

var HTMLworkLocation = '<div class="location-text">%data%</div>';

var formattedWorkDescription = HTMLworkDescription.replace("%data","asdasdsad askdjhsadjh kjashdjkashdj ksahdk sd")
$(formattedEmployer).insertAfter("workExperience");







