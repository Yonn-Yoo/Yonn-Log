import { PostType } from '@/service/posts';
import moment from 'moment';
import Link from 'next/link';
import LeftArrow from '../svg/left-arrow';

type Props = {
  post: PostType;
  isPrev?: boolean;
};

export default function PostNavigator({
  post: { path, image, title, date },
  isPrev,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="w-full h-full">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-full bg-cover bg-center relative group cursor-pointer"
      >
        <div
          className={`absolute left-0 top-0 w-full h-full flex ${
            isPrev ? 'justify-start flex-row' : 'justify-start flex-row-reverse'
          } sm:justify-between items-center px-5 md:px-10 bg-black/50 group-hover:bg-black/30 transition`}
        >
          <i
            className={`transition ${
              isPrev
                ? 'group-hover:-translate-x-4 max-sm:mr-5'
                : 'rotate-180 group-hover:translate-x-4 max-sm:ml-5'
            }`}
          >
            <LeftArrow />
          </i>
          <div className="flex flex-col space-y-1">
            <span className="font-medium text-text2 text-xs md:text-sm max-sm:hidden">
              {isPrev ? '이전' : '다음'} 글:
            </span>
            <h4 className="font-semibold md:text-lg">{title}</h4>
            <time className="text-text2 text-xs md:text-sm">
              {moment(date).format('YYYY. MM. DD.')}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}
