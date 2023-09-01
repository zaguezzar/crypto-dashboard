import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ErrorAlert({ error }: { error: string }) {
  console.log(error);
  return (
    <Alert
      variant='destructive'
      className='absolute top-28 left-1/2 -translate-x-1/2 w-1/3'
    >
      <AlertDescription className='flex items-center gap-x-2'>
        <AlertCircle className='h-4 w-4' />
        {error}
      </AlertDescription>
    </Alert>
  );
}
