// import React from 'react'

import { Button } from '@/components/ui/button';

const ChaiPage = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <p className="font-bold"> ChaiPage :)</p>
      {/* <button className="px-6 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">
        Test button
      </button>
      <Button variant="default">Shadcn button</Button>
      <br />
      <Button variant="outline">Shadcn button</Button>
      <br />
      <Button variant="destructive" size="sm">
        Shadcn button
      </Button> */}
      <Button variant="chai" size="md">
        Shadcn button
      </Button>
      <br />
    </main>
  );
};

export default ChaiPage;
