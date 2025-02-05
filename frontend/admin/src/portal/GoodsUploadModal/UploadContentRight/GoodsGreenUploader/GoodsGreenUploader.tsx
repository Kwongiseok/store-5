import { styled } from '@src/lib/CustomStyledComponent';
import { UploaderLabel } from '@src/portal/GoodsUploadModal/UploadContentLeft/style';
import { FaCheckSquare } from '@react-icons/all-files/fa/FaCheckSquare';

import React from 'react';

interface Props {
  checkGreen: boolean;
  onHandleCheckGreen: () => void;
}

const GoodsGreenUploader: React.FC<Props> = ({ checkGreen, onHandleCheckGreen }) => {
  return (
    <>
      <UploaderLabel>친환경</UploaderLabel>
      <CheckBoxContainer onClick={onHandleCheckGreen}>
        <CheckTitle>친환경 제품입니까?</CheckTitle>
        <FaCheckSquare size='1.4em' color={checkGreen ? '#2ac1bc' : 'gray'} />
      </CheckBoxContainer>
    </>
  );
};
const CheckBoxContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  cursor: pointer;
  height: 3rem;
`;
const CheckTitle = styled('div')`
  text-align: start;
  width: 70%;
`;
export default GoodsGreenUploader;
