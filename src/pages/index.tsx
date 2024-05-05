import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Button from '@/components/Button';

function Home() {
  return (
    <Layout>
      <Container className="mt-20">
        <h1 className="text-6xl font-black text-center text-slate-900 mb-6">
          Mint memories so people can own their stories
        </h1>
        <p className="text-xl text-center  text-slate-900 mb-6">
          Create a drop to share with your friends and users
        </p>
        <p className="text-center">
          <Button href="/create">
            Create new drop
          </Button>
        </p>
      </Container>
    </Layout>
  )
}

export default Home;
