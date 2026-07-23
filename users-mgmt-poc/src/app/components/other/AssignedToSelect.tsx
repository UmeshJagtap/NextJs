import { useEffect, useRef, useState } from 'react';
// import { ChevronDown, Check } from 'lucide-react';

interface Employee {
  id: number;
  name: string;
}

interface AssignedToSelectProps {
  employees: Employee[];
  value: Employee | null;
  onChange: (employee: Employee) => void;
}

export default function AssignedToSelect({
  employees,
  value,
  onChange,
}: AssignedToSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-[430px]" ref={dropdownRef}>
      <label className="mb-2 block text-sm font-semibold text-white">
        Assigned to
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-left text-white hover:border-slate-600"
      >
        <span>{value?.name ?? 'Select Employee'}</span>
        {/* <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        /> */}
        v
      </button>

      {isOpen && (
        <div className="mt-2 max-h-80 overflow-y-auto rounded-md border border-slate-700 bg-slate-800 shadow-xl">
          {employees.map((employee) => {
            const selected = employee.id === value?.id;

            return (
              <button
                key={employee.id}
                onClick={() => {
                  onChange(employee);
                  setIsOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-white hover:bg-slate-700"
              >
                <span>{employee.name}</span>

                {/* {selected && <Check size={18} className="text-indigo-400" />} */}
                {selected && '[OK]'}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
