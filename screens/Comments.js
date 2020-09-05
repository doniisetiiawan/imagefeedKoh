import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, ViewPropTypes } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

function Comments({
  style,
  comments,
  onClose,
  onSubmitComment,
}) {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={onSubmitComment}
      />
      <CommentList items={comments} />
    </SafeAreaView>
  );
}

export default Comments;

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

Comments.defaultProps = {
  style: null,
};
