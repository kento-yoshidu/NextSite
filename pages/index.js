import { gql, GraphQLClient } from "graphql-request"
import { Component } from "react";

export const getStaticProps = async () => {
  const url = "https://api-ap-northeast-1.graphcms.com/v2/cktqjrx81222301xm7c7c0rpw/master"
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": "Bearer ここにアクセストークン入れる"
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

const Home = (data) => {
  console.log(data)
  return (
    <div>Heloo</div>
  )
}

export default Home