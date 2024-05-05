import Container from '@/components/Container';

const Footer = () => {
  return (
    <footer className="mt-20">
      <Container className="p-6">
        <p className="text-center text-slate-500">
          Memo © 2024 <a className="underline font-medium text-inherit" href="https://twitter.com/sorcelco">Build web3 with no-code</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;