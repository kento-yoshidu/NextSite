const SSGPage = (props) => {
  return <h1>{props.message}</h1>
}

export const getStaticProps = async () => {
  return {
    props: {
      message: "Hello World"
    }
  }
}

export default SSGPage;