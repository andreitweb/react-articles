import React from 'react';
import PropTypes from 'prop-types';

export const ArticleDetail = ({date, title, text}) => {
  
  return (
    <div>
      <div>{date}</div>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};

ArticleDetail.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};