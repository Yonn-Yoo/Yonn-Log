import MarkdownViewer from '@/components/lib/markdown-viewer';
import CalendarIcon from '@/components/svg/calendar-icon';
import { getPostData } from '@/service/posts';
import moment from 'moment';
import Image from 'next/image';

type Props = {
  params: { path: string };
};

export default async function PostDetailPage({ params: { path } }: Props) {
  const { title, image, date, category, content } = await getPostData(path);

  return (
    <article className="max-w-4xl w-full mx-auto md:mt-14">
      <div className="flex flex-col space-y-5">
        <h1 className="font-bold xl:text-4xl text-text1">{title}</h1>
        <div className="flex items-center space-x-1">
          <CalendarIcon />
          <time className="text-text3">
            {moment(date).format('YYYY년 MM월 DD일')}
          </time>
        </div>
        <span className="px-3 py-1 rounded-full bg-teal-600 w-fit text-sm">
          {category}
        </span>
        <Image
          src={image}
          alt="thumbnail"
          width={600}
          height={200}
          className="w-full h-1/5 max-h-[400px] mx-auto object-cover object-center"
        />
      </div>
      <MarkdownViewer content={content} />
    </article>
  );
}