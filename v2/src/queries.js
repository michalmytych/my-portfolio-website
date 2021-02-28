const getPagesContent = (lang) => (`
{
    page {
        about
        skills
        contact
    }
}`)

const getAllProjects = (lang) => (`
{
    allProjects {
        id
        title
        thumbnail {
            url
        }
        stack
    }
}`)

const getProjectInstance = (lang, id) => (`
{
	project(filter: { id: { eq: "${id}" } }) {
    id
    title
    description
    image {
      url
    }
    github
    stack
  }
}`)

const getAllSkills = `
{
    allSkills {
        name
        icon {
            url
        }
    }
}`

export { 
    getAllProjects, 
    getAllSkills,
    getPagesContent,
    getProjectInstance
}