import queries from "./queries";

/*
    Dato CMS GraphQL API request. 
*/

const doQuery = async (q) => {
  try {
    return await fetch(`${process.env.API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.DATO_CMS_API_TOKEN}`
        },
        body: JSON.stringify({ query: q })
    }).then(res => res.json());
    } catch (error) {
        console.log("GraphQL QUERY ERROR: ", error, " on query: ", q);
        throw error;
    }
};

export default { doQuery, queries };