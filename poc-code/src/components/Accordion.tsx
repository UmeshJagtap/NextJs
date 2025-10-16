'use client';

import React, { useState, useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import './Accordion.scss';

const items = [
  {
    id: '1',
    title: 'Section 1',
    content: 'Content for section 1',
  },
  {
    id: '2',
    title: 'Section 2',
    content: 'Content for section 2',
  },
  {
    id: '3',
    title: 'Section 3',
    content: 'Content for section 3',
  },
];

type AccordionProps = {
  // params: ComponentParams;
  fields: {
    DisplayFAQs: FAQItem[];
    Title: string;
    TopTitle: string;
  };
};

interface FAQItem {
  id: string;
  url: string;
  name: string;
  content: string;
}

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    // if (activeIndex.includes(index)) {
    //   setActiveIndex(activeIndex.filter((i) => i !== index));
    // } else {
    //   setActiveIndex([...activeIndex, index]);
    // }
  };

  return (
    <>
      <section className="accordionContainer">
        {/* <header>__ + __</header> */}
        <div>Accordion</div>
        {items.map((item, index) => {
          const isOpen = activeIndex.includes(index);
          return (
            <div
              key={item?.id}
              className={`accordionWrapper ${isOpen ? 'open' : 'closed'}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === '') {
                  e.preventDefault();
                  toggleAccordion(index);
                }
              }}
            >
              <header
                id={`accordion-header-${item?.id}`}
                className={`accordionHeader ${isOpen ? 'open' : 'closed'}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`accordionContent-${item?.id}`}
                role="button"
                tabIndex={0}
              >
                <span className="accordionIcon" aria-hidden="true">
                  {isOpen ? <RemoveIcon /> : <AddIcon />}

                  <div className="accordionTitle">{item.title}</div>
                </span>
              </header>

              <section
                className="accordionContent"
                id={`accordiom-content-${item?.id}`}
                role="region"
                aria-labelledby={`accordion-header-${item?.id}`}
                inert={!isOpen}
                ref={(el) =>
                  (contentRefs.current[index] = el as HTMLDivElement | null)
                }
                style={
                  isOpen
                    ? {
                        maxHeight: isOpen
                          ? `${
                              (contentRefs.current[index]?.scrollHeight ?? 0) +
                              2
                            }px`
                          : '0px',
                      }
                    : { maxHeight: '0px' }
                }
              >
                <div className="accordionInner">{item.content}</div>
              </section>
            </div>

            // <div key={index} className="accordion-item">
            //   <button className="accordion-header">{item.title}</button>
            //   <div className="accordion-content">{item.content}</div>
            // </div>
          );
        })}
      </section>
    </>
  );
};

export default Accordion;
