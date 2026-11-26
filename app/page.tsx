import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectOverview from '@/components/ProjectOverview';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import FloorPlans from '@/components/FloorPlans';
import Location from '@/components/Location';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProjectOverview />
        <Amenities />
        <Gallery />
        <FloorPlans />
        <Location />
        <EnquiryForm />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
