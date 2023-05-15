export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errorHandler = (error: any): string => {
  const  message = error?.response?.data?.message;
  return message ? typeof message === 'string' ? message : message[0] : 'Something went wrong';
};
