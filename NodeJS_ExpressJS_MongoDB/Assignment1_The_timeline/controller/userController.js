
const comments = (req, res) => {
    const data = [
         {
            name: "Hermione Granger",
            createdAt: "31-10-2026",
            message: "I am a witch and I love reading books! I am also a member of the Order of the Phoenix! I like to play chess and I am a prefect for Gryffindor house!"
        },
        {
            name: "Harry Potter",
            createdAt: "01-11-2026",
            message: "I am a wizard and I love my parents and friends! I am also a member of the Order of the Phoenix! I like to play Quidditch and I am a seeker for the Gryffindor team!"
        },
        {
            name: "Albus Dumbledore",
            createdAt: "29-10-2026",
            message: "I am a wizard and I love teaching students! I am greatest wizard of all time! I am also a member of the Order of the Phoenix! I like to play chess and I am a headmaster of Hogwarts School of Witchcraft and Wizardry!   "
        },
        {
            name: "Ron Weasley",
            createdAt: "30-10-2026",
            message: "I am a wizard and I love playing chess! I love my family and friends! I am also a member of the Order of the Phoenix! I like to play Quidditch and I am a keeper for the Gryffindor team!"
        }
    ];

    //sort the comments based on createdAt date in descending order-->
    const sortedComments = data.sort((a, b) => formatDate(b.createdAt) - formatDate(a.createdAt));

    //formatting the date from dd-mm-yyyy to yyyy-mm-dd for sorting (yyyy-mm-dd is 
    //the standard format for date comparison in JavaScript)
    function formatDate(dateString) {
     const [day, month, year] = dateString.split("-").map(Number);
     return new Date(year, month - 1, day);  //month is 0-indexed in JavaScript Date object
    }
    
    res.render("index", { comments: sortedComments });
};

//export the controller to be used in routes.js
module.exports = {
    comments
};