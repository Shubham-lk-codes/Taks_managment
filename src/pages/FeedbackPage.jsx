// eslint-disable-next-line no-unused-vars
import React from 'react';
import FeedbackForm from '../components/Feedback/FeedbackForm';
import FeedbackList from '../components/Feedback/FeedbackList';

const FeedbackPage = () => {
  return (
    <div className="p-10">
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default FeedbackPage;