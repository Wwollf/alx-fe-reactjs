import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

return (
  <QueryClientProvider client={queryClient}>
    <PostsComponent />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);


