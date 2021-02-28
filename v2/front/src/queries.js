const getPagesContent = (lang) => (`
{
    page(filter: {language: {eq: "${lang}"}}) {
        projects { value }
        about { value }
        contact { value } 
    }
}`)

const getAllProjects = (lang) => (`
{
    allProjects {
        id
        title
        stack      	
      	thumbnail { url, alt }
    }
}`)

const getProjectInstance = (lang, id) => {
    let descriptionName = "descriptionPl"
    if (lang === "ENG") { descriptionName = "descriptionEng" }

    return (
        `{
            project(filter: {id: {eq: ${id}}}) {
                id
                title
                description : ${descriptionName} { value }
                stack
                createdAt
                image { url, alt }
            }
        }`
    )
}

export { 
    getAllProjects, 
    getPagesContent,
    getProjectInstance
}