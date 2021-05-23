const SSGDataFetch = (props) => {
  return <h1>{props.message}</h1>
}

export const getStaticProps = async () => { 
  const res = await fetch('https://api.github.com/zen')
  const text = await res.text();

  return {
    props: {
      message: text
    }
  }
}

export default SSGDataFetch