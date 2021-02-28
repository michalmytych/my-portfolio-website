// import * as qr from './queries'

export const doQuery = async (q) => {
    try {
        return await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_DATO_CMS_API_TOKEN}`
            },
            body: JSON.stringify({ query: q })
        }).then(res => res.json());
    } catch (error) {
          console.log("Request err: ", error, " on query: ", q); throw error;
    }
}


/*
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const _doQuery = async (q) => {
    const delay = ms => new Promise(res => setTimeout(res, ms))
    await delay(getRandomInt(500, 2000))

    if (q === qr.getPagesContent("PL")) {
        return {
            about : "Cos about",
            contact : "Cos kontaktowego",
            projects : "Cos do projektow"
        }
    }

    if (q === qr.getAllProjects("PL")) {
        return [
            { id : 0, title: "Jakis projekt 1", stack: "React, Javascript, Django"},
            { id : 1, title: "Jakis projekt 2", stack: "React, Javascript, Django"},
            { id : 2, title: "Jakis projekt 3", stack: "React, Javascript, Django"},
            { id : 3, title: "Jakis projekt 4", stack: "React, Javascript, Django"},
            { id : 4, title: "Jakis projekt 5", stack: "React, Javascript, Django"},
            { id : 5, title: "Jakis projekt 6", stack: "React, Javascript, Django"},
            { id : 6, title: "Jakis projekt 7", stack: "React, Javascript, Django"},
        ]
    }

    if (q === qr.getProjectInstance('PL', 0)) {
        return ({ 
            id : 6, 
            title: "Jakis projekt 7", 
            description : "Stałe tworzymy przy użyciu funkcji define(). Stałe nie mogą zostać zmienione podczas działania skryptu. Stałymi mogą być dane typów skalarnych.",
            stack: "React, Javascript, Django"
        })
    }

    if (q === qr.getAllSkills) {
        return [
            { id : 0, name : "React"},
            { id : 1, name : "JavaScript"},
            { id : 2, name : "Django"},
            { id : 3, name : "Python"},
            { id : 4, name : "Linux"},
            { id : 5, name : "PHP"}
        ]
    }
}
*/