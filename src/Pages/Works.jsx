import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import ListWork from '../components/Work/ListWork'
import Work from '../components/Work/Work'
import worksWeb from '../data/worksWeb'
import worksUI from '../data/worksUI'
import worksForm from '../data/worksForm'
import worksOther from '../data/worksOther'
import FadeInSection from '../components/FadeInSection';

const Works = () => {
  const { id } = useParams(); // check kung may id sa URL

  // pagsamasamahin lahat ng works para madaling hanapin
  const allWorks = [
    ...worksWeb,
    ...worksUI,
    ...worksForm,
    ...worksOther
  ];

  if (id) {
    const work = allWorks.find(item => item.id === id);
    if (!work) return <h2>Work not found</h2>;

    return (
      <Work
        name={work.name}
        description={work.description}
        bannerImage={work.bannerImage}
        imageLocation={work.imageLocation}
        count={work.count}
        tags={work.tags}
      />
    );
  }

  // default page → listahan ng lahat
  return (
    <>
      <FadeInSection>
        <ListWork />
      </FadeInSection>
    </>
  );
};

export default Works;
