const subjects = [
   "High school",
   "Computer Architecture",
   "Software Engineering",
   "Object Oriented Programming",
   "Database",
   "Big Data",
   "Web Development",
   "UX/UI design",
   "Game Development",
   "Mobile Development"
];

const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];

function getSubjects(subjectNumber) {
   const position = +subjectNumber - 1
   return subjects[position]
}

function convertHoursToMinutes(time) {
   const [hour, minutes] = time.split(":")
   return Number((hour * 60) + minutes)
}

module.exports = {
   subjects,
   weekdays,
   getSubjects,
   convertHoursToMinutes
}