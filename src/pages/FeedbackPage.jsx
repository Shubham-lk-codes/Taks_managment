// eslint-disable-next-line no-unused-vars
import React from 'react';
import FeedbackForm from '../components/Feedback/FeedbackForm';
import FeedbackList from '../components/Admin/GetFeedback';

const FeedbackPage = () => {
  return (
    <div className="  from-blue-500 to-green-500">
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default FeedbackPage;