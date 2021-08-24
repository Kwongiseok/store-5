import CategoryAPI from '@src/apis/categoryAPI';
import { styled } from '@src/lib/CustomStyledComponent';
import { theme } from '@src/theme/theme';
import { CategoryView } from '@src/types/Category';
import React, { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CategoryBarChart = () => {
  const [categoryViews, setCategoryViews] = useState<CategoryView[]>([]);
  useEffect(() => {
    async function fetchCategoryViews() {
      try {
        const { result } = await CategoryAPI.getCategoriesView();
        setCategoryViews(result);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategoryViews();
  }, []);
  return (
    <CategoryBarContainer>
      <BarChartTitle color={theme.greenColor}>카테고리 조회 수</BarChartTitle>
      <ResponsiveContainer width='100%' height='95%'>
        <ComposedChart
          data={categoryViews}
          margin={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' scale='band' fontSize='0.7em' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='view' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='view' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    </CategoryBarContainer>
  );
};

const CategoryBarContainer = styled('div')`
  padding: 16px;
  width: 50%;
  height: 100%;
  background-color: whitesmoke;
  border-radius: 16px;
  margin-right: 16px;
`;

const BarChartTitle = styled('div')<{ color: string }>`
  margin-bottom: 16px;
  color: ${(props) => props.color};
  font-weight: 700;
`;
export default CategoryBarChart;
