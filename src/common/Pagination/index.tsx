import React from "react";
import { Pagination as AntdPagination } from "antd";
import { IPaginationProps } from "../type";
import { setCurrentPageNumber } from "../../components/CharactersPage/slice";
import { useDispatch } from "react-redux";

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
