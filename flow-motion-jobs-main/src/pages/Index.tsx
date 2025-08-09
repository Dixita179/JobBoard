import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedJobs from '@/components/FeaturedJobs';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <Hero />
      <FeaturedJobs />
    </div>
  );
};

export default Index;
