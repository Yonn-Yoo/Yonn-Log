import { PostType } from '@/service/posts';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: PostType };

export default function PostCard({
  post: { image, title, description, date, category, path },
}: Props) {
  return (
    <Link href={`posts/${path}`}>
      <div className="relative w-full h-36 rounded-t-lg overflow-hidden">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-0 group-hover:opacity-20 duration-300 ease-out" />
        <Image
          className="w-full h-full object-cover object-center group-hover:scale-105 duration-300 ease-out"
          width={100}
          height={100}
          src={image}
          alt={title}
        />
      </div>
      <article className="p-5 flex flex-col justify-between">
        <div>
          <h5 className="mb-2 font-semibold text-text1 line-clamp-1">
            {title}
          </h5>
          <p className="mb-3 text-sm text-text3 line-clamp-2 group-hover:text-text2 transition">
            {description}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="bg-background2 text-xs px-3 py-1 rounded-full text-text3 group-hover:text-text1 group-hover:bg-teal-600 transition">
            {category}
          </span>
          <time className="text-xs text-text3">
            {moment(date).format('YYYY. MM. DD')}
          </time>
        </div>
      </article>
    </Link>
  );
}
