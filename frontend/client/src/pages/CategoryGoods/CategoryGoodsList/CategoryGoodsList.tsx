import { getGoodsByCategory } from '@src/apis/goodsAPI';
import GoodsSection from '@src/components/GoodsSection/GoodsSection';
import Paginator from '@src/pages/CategoryGoods/CategoryGoodsList/Paginator';
import { ThumbnailGoods } from '@src/types/Goods';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  category: string;
}

const CategoryGoodsList: React.FC<Props> = ({ category }) => {
  const [goodsList, setGoodsList] = useState<ThumbnailGoods[]>([]);

  const fetchGoodsList = async (categoryName: string) => {
    const data = await getGoodsByCategory(categoryName);
    setGoodsList(data.result.goods);
  };

  useEffect(() => {

    fetchGoodsList(category);
  }, []);

  return (
    <CategoryGoodsListContainer>
      {/* <CategoryFlag> */}
      <GoodsSection goodsList={goodsList} itemBoxSize='middle' />
      <Paginator totalPage={10} currentPage={2} locationSearch={location.search}/>
    </CategoryGoodsListContainer>
  );
};

const CategoryGoodsListContainer = styled.div`
  width: 100%;
`;

export default CategoryGoodsList;
