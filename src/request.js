import queries from "./queries";

const doQuery = async (q, v) => {
  try {
    return await fetch("https://graphql.datocms.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_DATO_API_TOKEN}`
      },
      body: JSON.stringify({ query: q, variables: v })
    }).then(res => res.json());
  } catch (error) {
    console.log("QUERY ERROR", error, "on query", q);
    throw error;
  }
};

export default { doQuery, queries };
