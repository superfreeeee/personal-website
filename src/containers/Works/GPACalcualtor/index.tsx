import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { TRANS_ALL_FAST } from '@/constant/styles';
import { getItem, LocalStorageKey, setItem } from '@/utils/localStorage';
import InputSubject from './components/InputSubject';

import { Subject } from './interface';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 14px;
`;

const Detail = styled.div`
  width: 100%;
`;

const SubjectDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  .seq {
    width: 50px;
    text-align: center;
  }

  .name {
    flex: 5;
    white-space: nowrap;
  }

  .credit {
    flex: 4;
    white-space: nowrap;
  }

  .grade {
    flex: 4;
    white-space: nowrap;
  }
`;

const DeleteButton = styled.div`
  border-radius: 6px;
  cursor: pointer;
  ${TRANS_ALL_FAST}

  &:hover {
    background: #e3e3e3;
  }
`;

const GPAView = styled.div`
  align-self: flex-end;
  padding: 6px 14px;
  font-size: 20px;
  font-weight: 600;
`;

const useSubjects = (): [
  Subject[],
  { addSubject: (subject: Subject) => void; deleteSubject: (index: number) => void }
] => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const flushSubjects = useCallback((subjects?: Subject[]) => {
    if (subjects) {
      setItem(LocalStorageKey.GPACalculatorSubject, subjects);
    } else {
      subjects = (getItem(LocalStorageKey.GPACalculatorSubject) || []) as Subject[];
    }
    return subjects;
  }, []);

  useEffect(() => {
    setSubjects(flushSubjects());
  }, []);

  const addSubject = useCallback(
    (subject: Subject) => {
      const newSubjects = [...subjects, subject];
      setSubjects(newSubjects);
      flushSubjects(newSubjects);
    },
    [subjects]
  );

  const deleteSubject = useCallback(
    (index: number) => {
      if (index < 0 || index >= subjects.length) {
        return;
      }
      const newSubjects = [...subjects.slice(0, index), ...subjects.slice(index + 1, subjects.length)];

      setSubjects(newSubjects);
      flushSubjects(newSubjects);
    },
    [subjects]
  );

  return [subjects, { addSubject, deleteSubject }];
};

const useGPA = (subjects: Subject[]) => {
  const gpa = useMemo(() => {
    let totalCredit = 0;
    let totalGrade = 0;
    subjects.forEach((subject) => {
      totalCredit += subject.credit;
      totalGrade += subject.credit * subject.grade;
    });

    const gpa = totalGrade / totalCredit / 20;

    return Math.round(gpa * 10000) / 10000;
  }, [subjects]);
  return gpa;
};

const GPACalcualtor = () => {
  const [subjects, { addSubject, deleteSubject }] = useSubjects();

  const gpa = useGPA(subjects);

  return (
    <Wrapper>
      <h3>GPA 计算器</h3>
      <InputSubject addSubject={addSubject} />
      <Detail>
        <SubjectDetail>
          <div className={'seq'}>编号</div>
          <div className={'name'}>课程名称</div>
          <div className={'credit'}>学分</div>
          <div className={'grade'}>总评</div>
          <div style={{ width: '30px' }}></div>
        </SubjectDetail>
        {subjects.map(({ name, credit, grade }, index) => (
          <SubjectDetail key={name}>
            <div className={'seq'}>{index + 1}.</div>
            <div className={'name'}>{name}</div>
            <div className={'credit'}>{credit}</div>
            <div className={'grade'}>{grade}分</div>
            <DeleteButton onClick={() => deleteSubject(index)}>
              {/* <Icon type={IconType.Trash} width={30} height={30} /> */}
            </DeleteButton>
          </SubjectDetail>
        ))}
      </Detail>
      <GPAView>Your GPA: {gpa}</GPAView>
    </Wrapper>
  );
};

export default GPACalcualtor;
