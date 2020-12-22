const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({secret: 'fnAD9qepDxACAczmL-fxJOSxam-FVj6qZTLY3uU_'})

const getFaunaposts = async () => {
    try{
        const {data} = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection('posts'))),
                q.Lambda(x => q.Select(['data'], q.Get(x)))
            )
        )
        return data
    } catch(e){
        console.log(e)
    }
}

// faunaposts
export default getFaunaposts;
