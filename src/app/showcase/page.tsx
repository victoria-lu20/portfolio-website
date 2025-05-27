'use client';

import React, { useEffect } from 'react'
import './page.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { EmblaOptionsType } from 'embla-carousel'
import ImageCarousel from '../components/ImageCarousel';

export default function Work() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="showcaseContainer">
      <Nav />
      <div className="showcaseTitle">
        <h1>linkedin features</h1>
        <p>showcase of features I've helped built in Sales Navigator</p>
      </div>
      <ImageCarousel slides={SLIDES} />
      <div className="showcaseSubtitle">
        <p>A few of the public-facing features I’ve helped build on Sales Navigator, such as Relationship Map, Sales Assistant, and Aggregated Buyer Activities, are featured here. Each project reflects cross-functional collaboration and a focus on meaningful outcomes, from driving revenue to boosting weekly active users.</p>
      </div>
      <Footer />
    </div>
  );
}
