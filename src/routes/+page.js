export async function load({ fetch, params }) {
    const res = await fetch(`/src/api/results.json`)
    const results = await res.json() 
    return {results}
}