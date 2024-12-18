// eslint-disable-next-line no-unused-vars
import React from 'react';
import SubmitIdea from '../components/Ideas/SubmitIdea';
import IdeaList from '../components/Ideas/IdeaList';

const IdeasPage = () => {
  return (
    <div className="p-10">
      <SubmitIdea />
      <IdeaList />
    </div>
  );
};

export default IdeasPage;