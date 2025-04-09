import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status == 500) {
    message = JSON.parse(error.data.message);
  }
  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default ErrorPage;
