const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
   proffyValue = {
      name: "Emilyn Pieritz",
      avatar: "https://avatars2.githubusercontent.com/u/66131506?s=400&u=51d4fc9c0541c48289d74c42d677c48fb8cfca15&v=4",
      whatsapp: "47991176772",
      bio: "I worked for about 10 years as a graphic designer until I finally found myself in web development. I work mainly with the front-end study, more specifically with HTML5, CSS3, JavaScript, TypeScript, ReactJS, Express and NodeJS technologies."
   }

   classValue = {
      subject: 1,
      cost: "20",

   }

   classScheduleValues = [{
         weekday: 1,
         time_from: 720,
         time_to: 1220
      },
      {
         weekday: 0,
         time_from: 520,
         time_to: 1220
      }
   ]

   // await createProffy(db, { proffyValue, classValue, classScheduleValues})

   const selectedProffys = await db.all("SELECT * FROM proffys")
   // console.log(selectedProffys)

   const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `)
   // console.log(selectClassesAndProffys)

   const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

   // console.log(selectClassesSchedules)
})