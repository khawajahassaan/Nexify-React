import Hero from '../components/Hero';
import Metrices from '../components/Metrices';
import Everything from '../components/Everything';
import Expertise from '../components/Expertise';
import Reviews from '../components/Reviews';
import Pricing from '../components/PricingHome';
import Subscribe from '../components/Subscribe';
import ShapeGrid from '../components/ShapeGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrices />
      <Everything />
      <Expertise />
      <Reviews />
      <Pricing />
      <Subscribe />
    </>
  );
}