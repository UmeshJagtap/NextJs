import { Metadata } from 'next';
import { Suspense } from 'react';

// import Pagination from '@/app/ui/invoices/pagination';
import CustomersTable from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

import { fetchFilteredCustomers } from '@/app/lib/data';
import { FormattedCustomersTable, CustomerField } from '@/app/lib/definitions';

type CustomersType = FormattedCustomersTable & CustomerField;
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchCustomerPages(query);
  const customers: CustomersType[] = await fetchFilteredCustomers(query);
  // console.log('Customers Page - customers:', customers);
  return (
    <>
      <div className="w-full">
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <CustomersTable customers={customers} />
        </Suspense>

        <div className="mt-5 flex w-full justify-center">
          {/* <Pagination totalPages={8} /> */}
        </div>
      </div>
    </>
  );
}
