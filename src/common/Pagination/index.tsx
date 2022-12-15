import React from "react";
import { Pagination as AntdPagination } from "antd";
import { useDispatch } from "react-redux";

import { IPaginationProps } from "../type";
import { setCurrentPageNumber } from "../../components/CharactersPage/duck/slice";

const Pagination: React.FC<IPaginationProps> = ({ total, currentPageNumber }) => {
  const dispatch = useDispatch();
  const onPageChange = (page: number) => {
    dispatch(setCurrentPageNumber(page));
  }
  return (
    <AntdPagination
      current={currentPageNumber}	
      defaultPageSize={20}
      showSizeChanger={false}
      defaultCurrent={1}
      total={total}
      onChange={onPageChange}
    />
  );
};

export default Pagination;
