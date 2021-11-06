import styled from 'styled-components';

/**
 * 外容器
 */
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

/**
 * 主标题
 */
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

/**
 * 链接列表
 */
export const ContactList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 16px 0;
`;

export const ContactItem = styled.li`
  list-style: none;
`;

export const OuterLink = styled.a.attrs({
  target: '_blank',
})`
  display: grid;
  place-content: center;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: rgb(233, 233, 233);
  }
`;

export const Email = styled.p`
  font-size: 20px;
`;
