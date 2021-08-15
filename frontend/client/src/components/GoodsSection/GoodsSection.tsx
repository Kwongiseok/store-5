import React from 'react';
import GoodsItemList from '@src/components/GoodsItemList/GoodsItemList';
import { ThumbnailGoods } from '@src/types/Goods';
import styled from 'styled-components';
import { GoodsItemSize } from '@src/components/GoodsItem/GoodsItem';

interface Props {
  sectionTitle?: string;
  goodsList: ThumbnailGoods[];
  itemBoxSize?: GoodsItemSize;
}

const GoodsSection: React.FC<Props> = ({ sectionTitle, goodsList, itemBoxSize = 'big' }) => {
  return (
    <GoodsSectionContainer>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      <GoodsItemList goodsList={goodsList} itemBoxSize={itemBoxSize} />
    </GoodsSectionContainer>
  );
};

const GoodsSectionContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;

const SectionTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export default GoodsSection;
