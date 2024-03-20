import React from 'react';
import Container from './HeaderContainer';
import Button from './BackButton.t/sx';
import { Form, Input } from './TopSearchNavHeaderStyle';

const TopSearchNavHeader = ({ value, setValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <Container>
      <Button />
      <Form>
        <Input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='계정 검색'
        />
      </Form>
    </Container>
  );
};

export default TopSearchNavHeader;
