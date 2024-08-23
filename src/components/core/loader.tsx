import Lottie from 'react-lottie';
import animationData from '../animation/loader.json';

export default function LoaderAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={110}
        width={110}
        isClickToPauseDisabled
      />
    </div>
  );
}
