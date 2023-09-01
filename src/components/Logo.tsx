import { type LucideProps } from 'lucide-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logo(props: LucideProps) {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div
      className='flex items-center gap-x-2 cursor-pointer hover:text-primary'
      onClick={handleClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='35'
        zoomAndPan='magnify'
        viewBox='0 0 262.5 374.999991'
        height='50'
        preserveAspectRatio='xMidYMid meet'
        version='1.0'
        {...props}
      >
        <defs>
          <clipPath id='cfa85f044e'>
            <path
              d='M 10.691406 96 L 219 96 L 219 361.855469 L 10.691406 361.855469 Z M 10.691406 96 '
              clipRule='nonzero'
            />
          </clipPath>
          <clipPath id='5cb8f4a760'>
            <path
              d='M 43 29 L 251.441406 29 L 251.441406 295 L 43 295 Z M 43 29 '
              clipRule='nonzero'
            />
          </clipPath>
        </defs>
        <g clipPath='url(#cfa85f044e)'>
          <path
            fill='currentColor'
            d='M 184.464844 295.878906 C 184.464844 262.933594 184.464844 230.488281 184.464844 198.035156 C 184.046875 197.878906 183.628906 197.71875 183.210938 197.554688 C 166.003906 219.214844 148.789062 240.871094 130.957031 263.320312 C 124.613281 255.394531 118.53125 247.804688 111.910156 239.539062 C 79.453125 280.4375 47.25 320.996094 14.785156 361.898438 C 13.304688 360.710938 12.117188 359.757812 10.707031 358.628906 C 79.816406 271.515625 148.667969 184.71875 218.394531 96.820312 C 218.394531 164.007812 218.394531 229.78125 218.394531 295.878906 C 207.253906 295.878906 196.402344 295.878906 184.464844 295.878906 Z M 184.464844 295.878906 '
            fillOpacity='1'
            fillRule='nonzero'
          />
        </g>
        <g clipPath='url(#5cb8f4a760)'>
          <path
            fill='currentColor'
            d='M 43.535156 97.726562 C 68.757812 129.503906 93.1875 160.289062 118.164062 191.757812 C 120.0625 189.476562 121.730469 187.53125 123.316406 185.527344 C 163.375 135.007812 203.417969 84.460938 243.539062 33.984375 C 245.308594 31.765625 246.980469 26.636719 251.402344 32.480469 C 201.050781 95.949219 150.667969 159.46875 99.699219 223.722656 C 92.597656 214.898438 85.835938 206.488281 78.28125 197.113281 C 77.992188 199.578125 77.683594 200.992188 77.683594 202.410156 C 77.65625 217.054688 77.835938 231.707031 77.53125 246.34375 C 77.46875 249.355469 76.339844 252.855469 74.519531 255.226562 C 64.667969 268.136719 54.4375 280.761719 43.527344 294.503906 C 43.535156 228.554688 43.535156 163.855469 43.535156 97.726562 Z M 43.535156 97.726562 '
            fillOpacity='1'
            fillRule='nonzero'
          />
        </g>
      </svg>
      <span className='font-bold'>Minance</span>
    </div>
  );
}
