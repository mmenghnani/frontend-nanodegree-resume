/*
This is empty on purpose! Your code to build the resume will go here.
 */

console.log("first step");



var formattedRole = HTMLheaderRole.replace("%data%","Front End Engineer");
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%","Mohit Menghnani");
$("#header").prepend(formattedName);

//var formattedContact = HTMLcontactGeneric.replace("%data%","352-226-2150");
//$("#header").append(formattedContact);

var formattedMobile = HTMLmobile.replace("%data%","352-226-2150");
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%","m.menghnani@gmail.com");
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);


var formattedTwitter = HTMLtwitter.replace("%data%","theproductguy89");
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%","San Francisco");
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);


var formattedGithub = HTMLgithub.replace("%data%","johndoe");
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);


var formattedBioPic = HTMLbioPic.replace("%data%","https://goo.gl/eDsbmR");
$("#header").append(formattedBioPic);

var formattedMsg = HTMLwelcomeMsg.replace("%data%","I am the best front end Engineer");
$("#header").append(formattedMsg);

$("main").append(HTMLskillsStart);

var skills = ["swimming","lawn tennis","clubbing" ];

var formattedSkills = HTMLskills.replace("%data","rock");
$("header").append(formattedSkills);

var bio = {
//age : 28,
degree : "masters in computer engineering",
interests : "front end",
skills : ["programming","swimming"]
};

$("#header").append(bio.age);
$("#header").append(bio.degree);
$("#header").append(bio.interests);

/*var val;
var work = [{
    employer : "AppDirect",
    jobposition : "Senior Engineer",
    years : 5,
    city : "sunnyvale"
},
{
    employer : "Citrix",
    jobposition : " Engineer",
    years : 3,
    city : "Florida"
},
{
    employer : "Sumtotal",
    jobposition : "Junior Engineer",
    years : 2,
    city : "NY"
}];
*/

$(div.work-entry).append(HTMLworkStart);
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





var education = {
    college : "University of Florida",
    duration : "2010-2012"
};
$("#main").append(education.college);


