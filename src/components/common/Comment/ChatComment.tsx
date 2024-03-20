import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import GlobalSprite from '../../../assets/sprite/GlobalSprite';
import {
  Section,
  Upload,
  Label,
  Form,
  Input,
  Button,
} from './ChatCommentStyle';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const isDarkMode = useRecoilValue(isDarkModeState);
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <Section>
      <Upload name='' id='upload-profile' />
      <Label for='upload-profile'>
        <GlobalSprite id={isDarkMode ? 'img-btn-dark' : 'img-btn'} size={36} />
      </Label>
      <Form>
        <Input value={comment} onChange={handleInputChange} />
        <Button
          className={comment ? 'active' : ''}
          isActive={comment}
          isDarkMode={isDarkMode}
        >
          전송
        </Button>
      </Form>
    </Section>
  );
};

export default CommentSection;
