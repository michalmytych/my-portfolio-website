const formatISODateToLang = (isoString, language) => {
    var dt = new Date(isoString);
    var monthNames = [
        "stycznia", "lutego",
        "marca", "kwietnia",
        "maja", "czerwca",
        "lipca", "sierpnia",
        "września", "października",
        "listopada", "grudnia"
    ]
    if (language==="ENG") { 
        monthNames = [
            "of January", "of February",
            "of March", "of April",
            "of May", "of June",
            "of July", "of August",
            "of September", "of October",
            "of November", "of December"
        ]
    }
    return dt.getDate() + " " + monthNames[dt.getMonth()] + " " + dt.getFullYear();
}


const extractSkills = (projects) => {
    /**
     * Dla wszystkich projektów:
     *      1. Wydziel tablicę skills jeśli istnieje
     *      2. Dla każdego skilla z tablicy dodaj go do tablicy skills
     *          jeśli go w niej jeszcze nie ma (jako np:
     *          {name: "React", img: "url...", count: 1} lub jeśli jest, 
     *          to zwiększ jego atrybut count 
     *      3. zwróć skills
     */     
    
    let i = 0;
    if (!projects || !projects.length) return []    

    let _skills = []    
    for (i=0; i<projects.length; i++) {                        
        if (!projects[i].stack) continue
        _skills = _skills.concat(projects[i].stack)       
    }    


    const skillsMap = _skills.reduce((acc, e) => {
        return acc.set(e.name, (acc.get(e.name) || 0) + 1);
    }, new Map());

    let skillsObjs = [...skillsMap.keys()]
    let skillsOccurences = [...skillsMap.values()]

    _skills = []
    for (i=0; i<skillsObjs.length; i++) {
        _skills[i] = {name: skillsObjs[i], count: skillsOccurences[i]}
    }

    return _skills
}

export { formatISODateToLang, extractSkills }


/*

const PROJS = [
    {
        skills: [
            {name: "React",img: "src_urlsasdasdas"},        // 3
            {name: "Python",img: "src_urlsasdasdas"},       // 1
            {name: "React",img: "src_urlsasdasdas"},
            {name: "Java",img: "src_urlsasdasdas"},         // 2
            {name: "React",img: "src_urlsasdasdas"},
            {name: "Java",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"},          // 4
            {name: "C++",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"}
        ]
    },
    {
        skills: [
            {name: "React",img: "src_urlsasdasdas"},
            {name: "Java",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"},          // 4
            {name: "C++",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"}
        ]
    },
    {
        skills: [
            {name: "React",img: "src_urlsasdasdas"},        // 3
            {name: "Python",img: "src_urlsasdasdas"},       // 1
            {name: "React",img: "src_urlsasdasdas"},
            {name: "Java",img: "src_urlsasdasdas"},         // 2
            {name: "C++",img: "src_urlsasdasdas"},
            {name: "C++",img: "src_urlsasdasdas"}
        ]
    }

]
*/

