  'use client';

  import { useLocale } from 'next-intl';
  import { useRouter } from 'next/navigation';
  import { ChangeEvent, useTransition } from 'react';


  export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = e.target.value;
      startTransition(() => {
        router.replace(`/${nextLocale}`);
      });
    };
    return (
      <label className="text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        <p className='sr-only'>change language</p>
        <select
          defaultValue={localActive}
          className='bg-transparent'
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value='en'>English </option>
          <option value='th'>ภาษาไทย</option>
        </select>
      </label>
    );
  }