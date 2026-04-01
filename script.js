const defaultBuses = [
  { time: "18:15 PM", route: "Sawantwadi → Aajara", type: "Non-Ac" },
    { time: "15:30 PM", route: "Sawantwadi → Borivali", type: "Ac" },
    { time: "19:00 PM", route: "Sawantwadi → Borivali", type: "Sleeper" },
    { time: "09:00 AM", route: "Sawantwadi → Tuljapur", type: "Non-Ac" },
    { time: "12:30 PM", route: "Sawantwadi → Ichalkaranji", type: "Non-Ac" },
    { time: "13:45 PM", route: "Sawantwadi → Narsobawadi", type: "Non-Ac" },
    { time: "04:00 PM", route: "Sawantwadi → Gadhinglaj", type: "Local" },
    { time: "08:00 AM", route: "Sawantwadi → Dapoli", type: "Ac" },
    { time: "12:30 PM", route: "Sawantwadi → Devrukh", type: "Non-Ac" },
    { time: "07:15 AM", route: "Sawantwadi → Pune", type: "Non-Ac" },
    { time: "09:30 AM", route: "Sawantwadi → Pune", type: "Non-Ac" },
    { time: "09:05 AM", route: "Sawantwadi → Pune", type: "Ac" }, 
    { time: "11:30 AM", route: "Sawantwadi → Pune", type: "Non-Ac" }, 
    { time: "08:30 AM", route: "Sawantwadi → Pune", type: "Ac" }, 
    { time: "18:45 PM", route: "Sawantwadi → Pune", type: "Non-Ac" },
    { time: "18:45 PM", route: "Sawantwadi → Pune", type: "Ac" },
    { time: "19:45 PM", route: "Sawantwadi → Pune", type: "Non-Ac" },
    { time: "18:30 PM", route: "Sawantwadi → Pune", type: "Sleeper" }, 
    { time: "22:30 PM", route: "Sawantwadi → Pune", type: "Non-Ac" },
    { time: "06:00 PM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "08:00 PM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "08:30 AM", route: "Sawantwadi → Kolhapur → Solhapur", type: "Non-Ac" },
    { time: "08:30 AM", route: "Sawantwadi → Kolhapur → Mahabaleshwar", type: "Non-Ac" },
    { time: "10:30 AM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "11:00 AM", route: "Sawantwadi → kolhapur", type: "Ac" },
    { time: "11:30 AM", route: "Sawantwadi → kolhapur", type: "Non-Ac" }, 
    { time: "10:30 PM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "14:45 PM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "15:00 PM", route: "Sawantwadi → kolhapur", type: "Ac" },
    { time: "17:15 PM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "19:45 PM", route: "Sawantwadi → kolhapur", type: "Non-Ac" },
    { time: "15:15 PM", route: "Sawantwadi → kolhapur", type: "sleeper"},
    { time: "07:30 PM", route: "Sawantwadi → Ratnagiri", type: "Non-Ac" },
    { time: "10:00 PM", route: "Sawantwadi → Ratnagiri", type: "Non-Ac" },
    { time: "12:45 PM", route: "Sawantwadi → Ratnagiri", type: "Non-Ac" },
    { time: "14:30 PM", route: "Sawantwadi → Ratnagiri", type: "Non-Ac" },
    { time: "08:30 PM", route: "Sawantwadi → Devgad", type: "Non-Ac" },  
    { time: "09:15 PM", route: "Sawantwadi → Devgad", type: "Non-Ac" },  
    { time: "11:15 PM", route: "Sawantwadi → Devgad", type: "Non-Ac" },  
    { time: "13:15 PM", route: "Sawantwadi → Devgad", type: "Non-Ac" },  
    { time: "16:30 PM", route: "Sawantwadi → Devgad", type: "Non-Ac" },  
    { time: "17:30 PM", route: "Sawantwadi → Kharepaten", type: "Non-Ac" },  
    { time: "14:00 PM", route: "Sawantwadi → Vijaydurg", type: "Non-Ac" },  
    { time: "15:50 PM", route: "Sawantwadi → Vijaydurg", type: "Non-Ac" },  
    { time: "06:45 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "08:00 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "08:30 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "09:30 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "10:45 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "11:15 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "13:00 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "15:30 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "16:00 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "16:45 PM", route: "Sawantwadi → Belagaon", type: "Non-Ac" },  
    { time: "02:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "04:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "05:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "06:15 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "06:20 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "07:10 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "07:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "07:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "06:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "08:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "09:10 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "09:40 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "10:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "10:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "10:20 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "11:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "12:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "13:15 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "14:15 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "14:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "14:45 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "12:45 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "14:45 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "16:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "16:30 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "17:15 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "17:45 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "19:00 PM", route: "Sawantwadi → Panaji", type: "Non-Ac" }, 
    { time: "06:30 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "08:00 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "09:30 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "10:00 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "10:30 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "10:45 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "11:30 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "12:00 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "13:10 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "13:45 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "15:00 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "15:45 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "16:00 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "17:00 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "18:10 PM", route: "Sawantwadi → kankavli", type: "Non-Ac" }, 
    { time: "06:30 PM", route: "Sawantwadi → Malvan", type: "Non-Ac" }, 
    { time: "09:45 PM", route: "Sawantwadi → Malvan", type: "Non-Ac" },
    { time: "10:30 PM", route: "Sawantwadi → Malvan", type: "Non-Ac" },
    { time: "14:45 PM", route: "Sawantwadi → Malvan", type: "Non-Ac" },
    { time: "15:00 PM", route: "Sawantwadi → Malvan", type: "Non-Ac" },
    { time: "15:45 PM", route: "Sawantwadi → Kunkeshwar", type: "Non-Ac" },
    { time: "09:10 PM", route: "Sawantwadi → Oros", type: "Non-Ac" },
    { time: "16:20 PM", route: "Sawantwadi → Oros", type: "Non-Ac" },
    { time: "13:20 PM", route: "Sawantwadi → Kudal", type: "Non-Ac" },
    { time: "15:15 PM", route: "Sawantwadi → Kudal", type: "Non-Ac" },
    { time: "19:00 PM", route: "Sawantwadi → Kudal", type: "Non-Ac" },
    { time: "19:45 PM", route: "Sawantwadi → Kudal", type: "Non-Ac" },
    { time: "21:15 PM", route: "Sawantwadi → Kudal", type: "Non-Ac" },
    { time: "05:45 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "06:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "07:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "07:25 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "08:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "09:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "09:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "09:15 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "09:50 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "10:30 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "11:15 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "12:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "12:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "13:10 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "14:10 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "14:45 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "15:10 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "15:50 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "16:25 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "16:30 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "17:15 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "17:45 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "18:30 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "19:00 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "19:30 PM", route: "Sawantwadi → Vengurla", type: "Non-Ac" },
    { time: "07:15 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "08:00 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "08:30 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "10:15 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "10:00 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "11:00 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "12:00 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "14:30 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "15:00 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "18:00 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "19:30 PM", route: "Sawantwadi → Dodamarg", type: "Non-Ac" },
    { time: "06:00 PM", route: "Sawantwadi → Kherwadi", type: "Local" },  
    { time: "11:45 PM", route: "Sawantwadi → Kherwadi", type: "Local" },  
    { time: "07:00 PM", route: "Sawantwadi → shiroda", type: "Local" },
    { time: "07:30 PM", route: "Sawantwadi → shiroda", type: "Local" },
    { time: "08:00 PM", route: "Sawantwadi → shiroda", type: "Local" },
    { time: "09:00 PM", route: "Sawantwadi → shiroda", type: "Local" },
    { time: "09:45 PM", route: "Sawantwadi → shiroda", type: "Local" },
    { time: "10:30 PM", route: "Sawantwadi → shiroda", type: "Local" },
    { time: "11:30 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "12:00 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "12:45 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "13:30 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "14:30 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "15:00 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "16:10 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "17:20 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" },
    { time: "20:00 PM", route: "Sawantwadi → shiroda", type: "Non-Ac" }, 
    { time: "06:30 AM", route: "Sawantwadi → Redi", type: "Non-AC" },
    { time: "12:30 PM", route: "Sawantwadi → Redi", type: "Non-AC" },
    { time: "15:45 PM", route: "Sawantwadi → Redi", type: "Local" },
    { time: "18:30 PM", route: "Sawantwadi → Redi", type: "Non-AC" },
    { time: "09:30 AM", route: "Sawantwadi → Aronda", type: "Non-AC" },
    { time: "10:15 AM", route: "Sawantwadi → Aronda", type: "Non-AC" },
    { time: "12:00 AM", route: "Sawantwadi → Aronda", type: "Local" },
    { time: "16:30 PM", route: "Sawantwadi → Aronda", type: "Non-AC" },
    { time: "18:00 PM", route: "Sawantwadi → Aronda", type: "Local" },
    { time: "09:10 PM", route: "Sawantwadi → Bhatpavni", type: "Non-AC" },
    { time: "07:40 AM", route: "Sawantwadi → Satarda Kinle", type: "Non-AC" },
    { time: "12:00 PM", route: "Sawantwadi → Satarda Kinle", type: "Non-AC" },
    { time: "06:15 PM", route: "Sawantwadi → Satarda Kinle", type: "Non-AC" },
    { time: "16:15 PM", route: "Sawantwadi → Satarda Kinle", type: "Non-AC" },
    { time: "18:45 PM", route: "Sawantwadi → Satarda Kinle", type: "Local" },
    { time: "09:30 PM", route: "Sawantwadi → Satose", type: "Non-AC" },
    { time: "12:30 PM", route: "Sawantwadi → Satose", type: "Non-AC" },  
    { time: "06:15 PM", route: "Sawantwadi → Sonurli", type: "Non-AC" },
    { time: "09:15 PM", route: "Sawantwadi → Sonurli", type: "Non-AC" },
    { time: "11:40 PM", route: "Sawantwadi → Sonurli", type: "Local" },
    { time: "14:15 PM", route: "Sawantwadi → Sonurli", type: "Non-AC" },
    { time: "17:15 PM", route: "Sawantwadi → Sonurli", type: "Non-AC" },
    { time: "06:15 PM", route: "Sawantwadi → Nemale", type: "Non-AC" }, 
    { time: "07:25 PM", route: "Sawantwadi → Nemale", type: "Non-AC" },
    { time: "12:00 PM", route: "Sawantwadi → Nemale", type: "Non-AC" },
    { time: "08:00 AM", route: "Sawantwadi → Shirshinge", type: "Non-AC" },
    { time: "08:30 AM", route: "Sawantwadi → Shirshinge", type: "Non-AC" },
    { time: "10:30 AM", route: "Sawantwadi → Shirshinge", type: "Non-AC" },
    { time: "12:00 PM", route: "Sawantwadi → Shirshinge", type: "Non-AC" },
    { time: "13:00 PM", route: "Sawantwadi → Shirshinge", type: "Local" },
    { time: "16:00 PM", route: "Sawantwadi → Shirshinge", type: "Local" },
    { time: "19:00 PM", route: "Sawantwadi → Shirshinge", type: "Local" }, 
    { time: "07:20 AM", route: "Sawantwadi → Verle", type: "Non-AC" },
    { time: "09:00 AM", route: "Sawantwadi → Verle", type: "Non-AC" },
    { time: "10:00 AM", route: "Sawantwadi → Verle", type: "Non-AC" },
    { time: "11:30 AM", route: "Sawantwadi → Verle", type: "Non-AC" },
    { time: "12:30 PM", route: "Sawantwadi → Verle", type: "Local" },
    { time: "14:15 PM", route: "Sawantwadi → Verle", type: "Local" },
    { time: "16:10 PM", route: "Sawantwadi → Verle", type: "Non-AC" },
    { time: "18:50 PM", route: "Sawantwadi → Verle", type: "Non-AC" },
    { time: "07:30 AM", route: "Sawantwadi → Parpoli", type: "Non-AC" },
    { time: "09:30 AM", route: "Sawantwadi → Parpoli", type: "Local" },
    { time: "12:00 PM", route: "Sawantwadi → Parpoli", type: "Non-AC" },
    { time: "14:30 PM", route: "Sawantwadi → Parpoli", type: "Non-AC" },
    { time: "19:15 PM", route: "Sawantwadi → Parpoli", type: "Non-AC" }, 
     { time: "06:00 PM", route: "Sawantwadi → Kesari", type: "Non-AC" }, 
     { time: "09:00 PM", route: "Sawantwadi → Kesari", type: "Non-AC" },  
     { time: "13:00 PM", route: "Sawantwadi → Kesari", type: "Non-AC" }, 
     { time: "18:00 PM", route: "Sawantwadi → Kesari", type: "Non-AC" }, 
     { time: "06:15 PM", route: "Sawantwadi → Bavlat", type: "Non-AC" }, 
     { time: "09:20 PM", route: "Sawantwadi → Bavlat", type: "Non-AC" }, 
     { time: "06:00 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "07:20 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "09:00 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "10:10 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "12:00 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "13:30 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "18:10 PM", route: "Sawantwadi → Kalikamandir", type: "Non-AC" }, 
     { time: "13:30 PM", route: "Sawantwadi → chaukul", type: "Non-AC" }, 
     { time: "09:30 PM", route: "Sawantwadi → Shivapur", type: "Non-AC" }, 
     { time: "13:30 PM", route: "Sawantwadi → Shivapur", type: "Non-AC" }, 
     { time: "17:40 PM", route: "Sawantwadi → Shivapur", type: "Non-AC" }, 
     { time: "08:00 PM", route: "Sawantwadi → Upavade", type: "Non-AC" }, 
     { time: "12:15 PM", route: "Sawantwadi → Upavade", type: "Non-AC" }, 
     { time: "18:10 PM", route: "Sawantwadi → Upavade", type: "Non-AC" }, 
     { time: "11:00 PM", route: "Sawantwadi → Dukanwad", type: "Non-AC" }, 
     { time: "07:00 PM", route: "Sawantwadi → footbrij", type: "Non-AC" }, 
     { time: "15:00 PM", route: "Sawantwadi → footbrij", type: "Non-AC" },   
     { time: "07:40 PM", route: "Sawantwadi → Nivaje", type: "Non-AC" }, 
     { time: "09:40 PM", route: "Sawantwadi → Nivaje", type: "Non-AC" }, 
     { time: "11:45 PM", route: "Sawantwadi → Nivaje", type: "Non-AC" }, 
     { time: "17:10 PM", route: "Sawantwadi → Nivaje", type: "Non-AC" }, 
     { time: "08:30 PM", route: "Sawantwadi → Hirlok", type: "Non-AC" }, 
     { time: "11:30 PM", route: "Sawantwadi → Hirlok", type: "Non-AC" }, 
     { time: "07:00 PM", route: "Sawantwadi → babarwadi", type: "Non-AC" }, 
     { time: "09:15 PM", route: "Sawantwadi → babarwadi(via kudase)", type: "Non-AC" }, 
     { time: "11:30 PM", route: "Sawantwadi → Mulas-hewale", type: "Non-AC" }, 
     { time: "16:30 PM", route: "Sawantwadi → Mulas-hewale", type: "Non-AC" }, 
     { time: "14:00 PM", route: "Sawantwadi → Palye", type: "Non-AC" }, 
     { time: "17:15 PM", route: "Sawantwadi → Palye", type: "Non-AC" }, 
     { time: "10:30 PM", route: "Sawantwadi → ker-bhekurli", type: "Non-AC" }, 
     { time: "16:00 PM", route: "Sawantwadi → ker-bhekurli(via kudase)", type: "Non-AC" }, 
     { time: "13:30 PM", route: "Sawantwadi → Usap", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → usap", type: "Non-AC" }, 
     { time: "06:30 PM", route: "Sawantwadi → Pagawadi", type: "Non-AC" }, 
     { time: "08:45 PM", route: "Sawantwadi → Pagawadi", type: "Non-AC" }, 
     { time: "12:00 PM", route: "Sawantwadi → Pagawadi", type: "Non-AC" }, 
     { time: "06:00 PM", route: "Sawantwadi → Othavane", type: "Non-AC" }, 
     { time: "09:00 PM", route: "Sawantwadi → Othavane", type: "Non-AC" }, 
     { time: "12:00 PM", route: "Sawantwadi → Othavane", type: "Non-AC" }, 
     { time: "08:30 PM", route: "Sawantwadi → Bharpal", type: "Non-AC" }, 
     { time: "12:15 PM", route: "Sawantwadi → Bharpal", type: "Non-AC" }, 
     { time: "12:00 PM", route: "Sawantwadi → Kas", type: "Non-AC" }, 
     { time: "19:00 PM", route: "Sawantwadi → kunbharal", type: "Non-AC" }, 
     { time: "11:00 PM", route: "Sawantwadi → banda", type: "Non-AC" }, 
     { time: "12:30 PM", route: "Sawantwadi → Netarde", type: "Non-AC" }, 
     {time: "20:00 PM", route: "Sawantwadi → Konsi", type: "Non-AC" }, 
     { time: "12:30 PM", route: "Sawantwadi → Asaniye", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
     { time: "15:30 PM", route: "Sawantwadi → Aambegaon", type: "Non-AC" }, 
];

// TICKER LOAD
function loadTicker() {
  const ticker = localStorage.getItem("tickerText") || 
    "🚌 Welcome to Sawantwadi Bus Stand | All buses running on time";

  document.getElementById("tickerText").innerText = ticker;
}

/* STORAGE */
let storedBuses = JSON.parse(localStorage.getItem("buses")) || [];
let buses = [...defaultBuses, ...storedBuses];

/* DISPLAY */
function displayBuses(filteredBuses) {
  const busList = document.getElementById("busList");
  busList.innerHTML = "";

  if (filteredBuses.length === 0) {
    busList.innerHTML = "<p>No buses found</p>";
    return;
  }

  filteredBuses.forEach(bus => {
    busList.innerHTML += `
      <div class="bus-card">
        <div class="bus-title">${bus.route}</div>
        <div class="bus-details">
          🕒 ${bus.time} <br>
          🚌 ${bus.type}
        </div>
      </div>
    `;
  });
}

/* SEARCH */
function searchBus() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const busType = document.getElementById("busTypeFilter").value.toLowerCase();

  const filtered = buses.filter(bus => {
    return (
      bus.route.toLowerCase().includes(searchValue) &&
      (busType === "" || bus.type.toLowerCase() === busType)
    );
  });

  displayBuses(filtered);
  loadTicker();
}

/* LOAD */
displayBuses(buses);

// SECRET KEY COMBINATION (CTRL + SHIFT + A)
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
    window.location.href = "admin.html";
  }
});
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close menu when clicking outside
document.addEventListener("click", function(e) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".profile-icon");

  if (!icon.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Login / Logout
function handleLogin() {
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  if (isLoggedIn === "true") {
    localStorage.removeItem("userLoggedIn");
    alert("Logged out successfully");
  } else {
    localStorage.setItem("userLoggedIn", "true");
    alert("Logged in successfully");
  }
}

// Exit function
function exitApp() {
  if (confirm("Do you want to exit?")) {
    window.close(); // works only in some browsers
  }
}
