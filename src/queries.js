const GET_ALL_PROJECTS_QUERY = `
{
    allProjects {
        id,
        title,
        description,
        image {
            url
        },
        thumbnail {
            url
        },
        github,
        stack
    }
}`

const GET_ALL_SKILLS_QUERY = `
{
    allSkills {
        name,
        icon {
            url
        }
    }
}`

const GET_PAGES_TEXT_CONTENT_QUERY = `
{
    page {
        about,
        skills,
        contact
    }
}`

export default { 
    GET_ALL_PROJECTS_QUERY, 
    GET_ALL_SKILLS_QUERY,
    GET_PAGES_TEXT_CONTENT_QUERY
};