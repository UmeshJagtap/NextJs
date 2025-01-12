// import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AccordPage = () => {
  const faq = [
    {
      question: 'how are you',
      answer: 'I am Good',
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-full flex-col">
        <p>AccordPage</p>
        <main className="w-[500px] p-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </main>
        {faq.map((qn) => (
          <main className="w-[500px] p-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{qn.question}</AccordionTrigger>
                <AccordionContent>{qn.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </main>
        ))}
      </div>
    </>
  );
};

export default AccordPage;
