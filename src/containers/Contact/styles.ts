import styled from 'styled-components';

const LINK_HOVER_BG_COLOR = 'rgb(233, 233, 233)';

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
    background-color: ${LINK_HOVER_BG_COLOR};
  }
`;

export const CopyBar = styled.div`
  display: flex;
  border: 1px solid rgb(200, 200, 200);
  background-color: rgb(244, 244, 244);
  border-radius: 8px;
`;

export const Email = styled.div`
  flex: 1;
  padding: 6px 14px;
  font-size: 20px;
`;

/**
 * 复制按钮
 */
export const CopyPad = styled.div`
  position: relative;
`;

/**
 * copied 提示
 */
export const CopiedToolTip = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  padding: 6px 8px;
  border-radius: 6px;
  color: #fff;
  background-color: #000;
  font-size: 14px;
  transform: translate(-50%, -120%);
  transition: all 0.4s ease;
  opacity: 0;
  cursor: auto;
  user-select: none;

  &.copied {
    opacity: 1;
  }
`;

export const CopyBtn = styled.button`
  border: none;
  height: 100%;
  padding: 0 13px 0 11px;
  border-left: 1px solid rgb(200, 200, 200);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    background-color: rgb(233, 233, 233);
  }
`;
