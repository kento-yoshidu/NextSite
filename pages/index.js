import { gql, GraphQLClient } from "graphql-request"

export const getStaticProps = async () => {
  const url = "https://api-ap-northeast-1.graphcms.com/v2/cktqjrx81222301xm7c7c0rpw/master"
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${process.env.API_KEY}`
    }
  });

  const query = gql`
    {
      authors {
        name
      }
    }
  ` 

  const data = await graphQLClient.request(query)

  return {
    props: {
      data: data
    }
  }
}

const Home = ({data}) => {
  const { authors } = data

  return (
    <div>
    {authors.map((author) => (
      <p key={author.name}>{author.name}</p>
    ))
}

    </div>

  )
}

export default Home