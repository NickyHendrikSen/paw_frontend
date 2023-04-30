import { BoldText, TitleText } from "@/styles/Typography";
import Container from "../Template/Container";
import OrderHistoryDisplay from "./OrderHistoryDisplay";
import { OrderAPI } from "@/api/apis/OrderAPI";
import { useAsync } from "@/utils/useAsync";
import { useEffect, useState } from "react";
import { Modal, Pagination } from "@mui/material";
import { format } from "date-fns";
import FormInputDate from "../Form/FormInputDate";
import Loading from "../Loading/Loading";
import usePrevious from "@/utils/usePrevious";

import {
  OrderModal,
  DetailText,
  OrderIdText,
  OrderDateText,
  ShippingInformation,
  OrderFilterWrapper,
  DateFilterWrapper,
  FilterText
} from "./Styles"

type ProductsType = {
  _id: string,
  price: number,
  quantity: number,
  _product: {
    _id: string,
    _category: string,
    description: string,
    imageUrl: string,
    name: string,
    price: number,
    stock: number,
  },
}

export type OrderState = {
  _id: string,
  products: Array<ProductsType>,
  shipping: number,
  stripe_total: number,
  subtotal: number,
  total: number,
  checkout_session: any,
  createdAt: Date,
}

export type PaginationState = {
  pageCount: number,
  count: number,
  skip: number
}

const OrderHistory: React.FC = () => {
  const { execute, error, status, value } = useAsync(OrderAPI.getOrders)
  const [ orders, setOrders ] = useState<Array<OrderState>>();
  const [ order, setOrder ] = useState<OrderState | undefined>();
  const [ minDate, setMinDate ] = useState<string | undefined>();
  const [ maxDate, setMaxDate ] = useState<string | undefined>();
  const [ pagination, setPagination ] = useState<PaginationState>();
  const [ currentPage, setCurrentPage ] = useState<number>(1);

  const prevAmount = usePrevious({minDate, maxDate});

  const showOrderDetailModal = (id: string) => {
    const order = orders?.find(order => order._id === id);
    if(order) {
      setOrder(order);
    }
  }

  const closeOrderDetailModal = () => {
    setOrder(undefined);
  }

  const handleMinDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinDate(e.target.value);
  }

  const handleMaxDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxDate(e.target.value);
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    if(value) {
      setCurrentPage(value);
    }
  }

  useEffect(() => {
    if((prevAmount?.maxDate !== maxDate || prevAmount?.minDate !== minDate) && currentPage !== 1) {
      setCurrentPage(1);
    }
    else {
      execute({
        ...(minDate && {minDate: minDate}), 
        ...(maxDate && {maxDate: maxDate}), 
        ...(currentPage && {page: currentPage})}) 
    }
  }, [currentPage, minDate, maxDate])

  useEffect(() => {
    if(status === "success") {
      setOrders(value?.data?.orders);
      setPagination(value?.data?.pagination);
    }
  }, [status])

  return (
    <Container paddingTop='50px' paddingBottom='50px'>
      <Modal open={!!order} onClose={closeOrderDetailModal}>
        <OrderModal>
          {/* <DetailText>Order Detail</DetailText> */}
          <OrderIdText><BoldText>Order ID</BoldText> {order?._id}</OrderIdText>
          <OrderDateText><BoldText>Order Date</BoldText> {order && order?.createdAt && format(new Date(order?.createdAt), 'dd MMM yyyy')}</OrderDateText>
          <ShippingInformation>
            <div className="title">Shipping Details</div>
            <div className="text">{order?.checkout_session?.shipping?.name}</div>
            <div className="text">{order?.checkout_session?.shipping?.address?.line1}</div>
            <div className="text">{order?.checkout_session?.shipping?.address?.line2}</div>
            <div className="text">{order?.checkout_session?.shipping?.address?.city}, {order?.checkout_session?.shipping?.address?.state} {order?.checkout_session?.shipping?.address?.postal_code}</div>
            <div className="text">{order?.checkout_session?.customer_details?.email}</div>
          </ShippingInformation>
        </OrderModal>
      </Modal>
      <TitleText>Order History</TitleText>

      <OrderFilterWrapper>
        <DateFilterWrapper>
          <FormInputDate width="fit-content" isDark={true} value={minDate} onChange={handleMinDateChange}/>
          &#8211;
          <FormInputDate width="fit-content" isDark={true} value={maxDate} onChange={handleMaxDateChange}/>
        </DateFilterWrapper>          
      </OrderFilterWrapper>

      <FilterText>
        Showing {((currentPage-1)*(pagination?.skip ?? 0))+1} - {((currentPage-1)*(pagination?.skip ?? 0))+(orders?.length ?? 0)} of {pagination?.count}
      </FilterText>
      {status === "pending" ?
        <Loading />
      : orders?.map((order) => (
        <OrderHistoryDisplay key={order._id} order={order} showOrderDetail={showOrderDetailModal}/>
      ))}
      <Pagination count={pagination?.pageCount ?? 0} onChange={handlePageChange} page={currentPage ?? 1}/>

    </Container>
  )
}

export default OrderHistory;