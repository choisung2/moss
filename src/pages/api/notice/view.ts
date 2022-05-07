import useSWR from 'swr';

export default function View(id: string | string[] | undefined) {
  const { data } = useSWR(`/api/notice/?id=${id}`);
  return data;
}
