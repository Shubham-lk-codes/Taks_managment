// eslint-disable-next-line no-unused-vars
import React from 'react';
import SubmitIdea from '../components/Ideas/SubmitIdea';
import IdeaList from '../components/Ideas/IdeaList';
import Navbar from '../components/Navbar';

const IdeasPage = () => {
  return (
    <div className=" bg-gradient-to-r from-green-300 to-blue-500 text-white">
      <Navbar />
      <SubmitIdea />
      <IdeaList />
    </div>
  );
};

export default IdeasPage;