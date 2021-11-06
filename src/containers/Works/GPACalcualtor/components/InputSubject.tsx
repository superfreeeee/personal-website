import React, { ChangeEvent, ChangeEventHandler, FC, useCallback, useState } from 'react';
import styled from 'styled-components';

import useInput from '@hooks/useInput';
import { Subject } from '../interface';

const Wrapper = styled.div``;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 6px 0;
`;

const InputBlock = styled.div`
  .label {
    width: 100%;
    height: 40px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 80px;
  padding: 4px 14px;
  border: 2px solid rgba(0, 0, 0, 16);
  border-radius: 8px;
  outline: none;
  font-size: 15px;

  &.name {
    width: 200px;
  }
`;

const Warning = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: red;
  margin-right: 16px;
`;

const AddButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 4px 16px;
  margin: 0 auto;
  border-radius: 6px;
  border: 1px solid #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.24);
  }

  &:active {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.36);
  }
`;

interface InputSubjectProps {
  addSubject: (subject: Subject) => void;
}

const InputSubject: FC<InputSubjectProps> = ({ addSubject }) => {
  const [name, onNameChange, setName] = useInput();
  const [credit, onCreditChange, setCredit] = useInput();
  const [grade, onGradeChange, setGrade] = useInput();

  const [warning, setWarning] = useState('');

  const validateInput = useCallback(() => {
    setWarning('');
    if (!name) {
      setWarning('课程名称为空');
      return false;
    }
    const creditVal = Number(credit);
    if (credit === '') {
      setWarning('学分为空');
      return false;
    } else if (creditVal < 0 || creditVal !== Math.floor(creditVal)) {
      setWarning('学分必须是正整数');
      return false;
    } else if (creditVal >= 10) {
      setWarning('学分通常小于 10');
      return false;
    }

    const gradeVal = Number(grade);
    if (grade === '') {
      setWarning('总评为空');
      return false;
    } else if (gradeVal < 0) {
      setWarning('总评必为正数');
      return false;
    } else if (gradeVal >= 100) {
      setWarning('总评不超过 100 分');
      return false;
    }

    return true;
  }, [name, credit, grade]);

  const resetInput = useCallback(() => {
    setName('');
    setCredit('');
    setGrade('');
  }, []);

  const createSubject = useCallback(() => {
    if (validateInput()) {
      const newSubject = { name, credit: Number(credit), grade: Number(grade) };
      addSubject(newSubject);
      resetInput();
    }
  }, [name, credit, grade, addSubject, resetInput, validateInput]);

  const forceNumberInput = useCallback((handler: ChangeEventHandler) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (!isNaN(value)) {
        handler(e);
      }
    };
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <InputBlock>
          <div className={'label'}>课程</div>
          <Input className={'name'} type="text" placeholder={'课程名称'} value={name} onChange={onNameChange} />
        </InputBlock>
        <InputBlock>
          <div className={'label'}>学分</div>
          <Input type="text" placeholder={'学分'} value={credit} onChange={forceNumberInput(onCreditChange)} />
        </InputBlock>
        <InputBlock>
          <div className={'label'}>总评</div>
          <Input type="text" placeholder={'总评'} value={grade} onChange={forceNumberInput(onGradeChange)} />
        </InputBlock>
      </InputWrapper>

      <div style={{ textAlign: 'right' }}>
        <Warning>{warning}</Warning>
        <AddButton onClick={createSubject}>加入课程</AddButton>
      </div>
    </Wrapper>
  );
};

export default InputSubject;
