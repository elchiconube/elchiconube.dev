import NewsSection from '../components/NewsSection';
import GetInTouch from '../components/GetInTouch';
import Container from '../components/Container';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Container>
      <Hero />
      <NewsSection />
      <GetInTouch />
    </Container>
  );
}
