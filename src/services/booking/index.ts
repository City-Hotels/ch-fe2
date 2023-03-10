import { getRequest, postRequest } from "../../utils/api/calls";
import type { IBooking } from "./payload";

const getBookings = () => {
  return getRequest({
    url: "/bookings"
  });
};

const createBooking = (data: IBooking) => {
  return postRequest({
    url: "/bookings",
    data
  });
};

export { getBookings, createBooking };
